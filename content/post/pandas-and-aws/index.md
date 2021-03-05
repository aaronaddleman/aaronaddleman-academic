---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Pandas, Aws, and Json"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-02-26T10:42:49-08:00
lastmod: 2021-02-26T10:42:49-08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## summary

Getting data from AWS s3 and organized has been sort of fun for me to take a stab of time. Fetching
files from s3 by date and creating a frame, then doing some parsing is what this is all about.

## Finding files and making a dataframe

The following code finds s3 files between a begin and end date modified and makes a huge dataframe
of all the results. Below I am using the `read_json` feature as all my lines are in json and separated
by a new line (which requires `lines=True`).

```python
# define your times
begin = datetime.strptime("20-01-19 01:58", "%y-%m-%d %H:%M")
end = datetime.strptime("20-01-19 02:05", "%y-%m-%d %H:%M")
# define your timezone
timezone = pytz.timezone("America/Los_Angeles")
# optional locally
begin_Los_Angeles = timezone.localize(begin)
end_Los_Angeles = timezone.localize(end)
# or utc
begin_utc = pytz.utc.localize(begin)
end_utc = pytz.utc.localize(end)
# create a session
bSession = boto3.session.Session(aws_access_key_id=access_key, aws_secret_access_key=secret_key, aws_session_token=security_token)
# create a datawranger s3 to find files between two dates
df = wr.s3.read_json(f"s3://bucket/sub/path/", lines=True, last_modified_begin=begin_utc, last_modified_end=end_utc, boto3_session=bSession)
# show the results
df
```

## Nested Records

Json allows for nested records. I had to pull these out of each row to be used for reporting. Best way to pull nested data out of `nested_data_field` is to create a new dataframe from the values of the column and send them `tolist()`:

```python
newdf = pd.DataFrame(index=df['index-field'], data=df.nested_data_field.values.tolist())
```

## Filtering

When you have a large dataset and are looking for a specific string in a column, I found the following to be most helpful:

```python
df['column_holding_value'].value_counts().to_frame().filter(like = 'string-to-look-for', axis=0)
```

This was super helpful for summarizing a specific pattern across thousands of rows for that quick answer to
the question: Is that even in here?

## Duplicates

What? There are duplicates? Lets count them just to be sure they exist or not by using `col1` and then `col2` as the criteria for determining a duplicate:

```python
df_duplicates = df[df.duplicated(subset=['col1','col2'])]
```

## Unique values

I really like `.nunique()` to give a quick summary of the columns over all rows of the dataframe to answer
questions like "How many different values do we have in each column?" or "What columns contains large ranges of data?"

```python
df.nunique()
```

## Custom Functions

Now comes the best of all things with Pandas. Running each row through a function and making a new column or updating an existing column with data based on a set of actions you have determined.

```python
df['new-column'] = df.apply(lambda row: myFunction(row), axis=1)
```

The above code takes the dataframe of `df` and applies the `myFuction()` with a parameter of `row`. Now the
function has full access to `row` and all of the columns. After `myFunction()` has done its set of actions with
 the `row` it must **return the `row`** and then the changes are applied! The above example uses the current
row to do some logic and makes a new column for that dataframe.

## Grouping

Grouping a dataframe by some columns really starts to reduce the data into a summary of greatness. The following
code shows how to set the priority of `col1` and then `col2` to be collected by unique values and grouped together by shared values of `to-group`. Then its formed into a new dataframe which has the column `ending-group-col` which contains the list of all values. While this might not seem useful at first, readon to the next section where we summarized this column even more.

```python
df1 = df.groupby(['col1','col2'])['to-group'].apply(lambda group_series: group_series.tolist()).reset_index(name='ending-group-col')
```

## Counting lists

Grouping values into a new column as a list is great, but now we want to count each of the values. Here is a
repeat of the custom functions method but using some python iterators and zip:

```python
def split_status_codes(row):
    codes_list = row['status_codes']
    return dict(zip(list(codes_list),[list(codes_list).count(i) for i in list(codes_list)]))
```

## Conclusion

This is my first real dive into Pandas and its just absolutly a joy to work with. I hope you found something
useful in this article and if your new to Pandas, perhaps you are inspiried to use it on your next project.
