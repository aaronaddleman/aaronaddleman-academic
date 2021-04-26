---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "GoLang"
linktitle: "GoLang"
summary: "The language brought to us by some really smart professors funded by Google."
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  GoLang:
    name: GoLang
    # parent: YourParentID
    weight: 1
---

# Articles

[Rob Pike interview for Evrone: "Go has become the language of cloud infrastructure"](https://evrone.com/rob-pike-interview)

# Tools

[Go Report Card | Go project code quality report cards](https://goreportcard.com/)

# Setup

To get your environment setup, there needs to be some things installed...

```bash
go_install_for_spacemacs() {
    if [ "$(command -v go 2>/dev/null)" ]; then
        go get -u -v github.com/mdempsky/gocode
        go get -u -v github.com/rogpeppe/godef
        go get -u -v golang.org/x/tools/cmd/guru
        go get -u -v golang.org/x/tools/cmd/gorename
        go get -u -v golang.org/x/tools/cmd/goimports
        go get -u -v golang.org/x/tools/cmd/godoc
        go get -u -v github.com/zmb3/gogetdoc
        go get -u -v github.com/cweill/gotests/...
        go get -u github.com/haya14busa/gopkgs/cmd/gopkgs
        go get -u -v github.com/davidrjenni/reftools/cmd/fillstruct
        go get -u github.com/josharian/impl
    fi
}

[ -d $HOME/go ] && export GOPATH="$HOME/go" || __debug "could not find $HOME/go"
[ -d $GOPATH ] && export PATH=$PATH:$GOPATH/bin
[ -d /usr/lib/go ] && export GOROOT="/usr/lib/go" || __debug "unable to find /usr/lib/go"
[ -d /usr/local/go ] && export GOROOT="/usr/local/go" || __debug "unable to find /usr/local/go"
```

# Docs

The docs command pull comments from packages and contribute to the help documentation utility. Below are some examples of the Json.

## about the method of the object

Get documents for the method of Decode on the Deocoder object

```go
➜ go doc json.Decoder.Decode
package json // import "encoding/json"

func (dec *Decoder) Decode(v interface{}) error
    Decode reads the next JSON-encoded value from its input and stores it in the
    value pointed to by v.

    See the documentation for Unmarshal for details about the conversion of JSON
    into a Go value.
```

## about the object

Get documents about the json.Decoder object

```go
➜ go doc json.Decoder       
package json // import "encoding/json"

type Decoder struct {
	// Has unexported fields.
}
    A Decoder reads and decodes JSON values from an input stream.

func NewDecoder(r io.Reader) *Decoder
func (dec *Decoder) Buffered() io.Reader
func (dec *Decoder) Decode(v interface{}) error
func (dec *Decoder) DisallowUnknownFields()
func (dec *Decoder) InputOffset() int64
func (dec *Decoder) More() bool
func (dec *Decoder) Token() (Token, error)
func (dec *Decoder) UseNumber()
```

## about the package

```go
➜ go doc json        
package json // import "encoding/json"

Package json implements encoding and decoding of JSON as defined in RFC
7159. The mapping between JSON and Go values is described in the
documentation for the Marshal and Unmarshal functions.

See "JSON and Go" for an introduction to this package:
https://golang.org/doc/articles/json_and_go.html

func Compact(dst *bytes.Buffer, src []byte) error
func HTMLEscape(dst *bytes.Buffer, src []byte)
func Indent(dst *bytes.Buffer, src []byte, prefix, indent string) error
func Marshal(v interface{}) ([]byte, error)
func MarshalIndent(v interface{}, prefix, indent string) ([]byte, error)
func Unmarshal(data []byte, v interface{}) error
func Valid(data []byte) bool
type Decoder struct{ ... }
    func NewDecoder(r io.Reader) *Decoder
type Delim rune
type Encoder struct{ ... }
    func NewEncoder(w io.Writer) *Encoder
type InvalidUTF8Error struct{ ... }
type InvalidUnmarshalError struct{ ... }
type Marshaler interface{ ... }
type MarshalerError struct{ ... }
type Number string
type RawMessage []byte
type SyntaxError struct{ ... }
type Token interface{}
type UnmarshalFieldError struct{ ... }
type UnmarshalTypeError struct{ ... }
type Unmarshaler interface{ ... }
type UnsupportedTypeError struct{ ... }
type UnsupportedValueError struct{ ... }
```

# Modules

To make a new module

```bash
go mod init github.com/pluralsight/webservice
```

This creates a file called "go.mod" which specifics the location of the module and the required version of Go to be used.

Now with the module loaded, and a main.go file provided, you can do the following

```bash
go run github.com/pluralsight/webservice
```

This also sets us up for running a go program in more standard way.

# Declaration and Primitives

# Pointers

```go
func main() {
	// declaring a variable
	var i int
	i = 42
	fmt.Println(i)

	// another way to declare
	var f float32 = 3.14
	fmt.Println(f)

	// even another way
	// := uses implicit type
	firstName := "Arthur"
	fmt.Println(firstName)

	// this is useful for complex mathematics simulations
	// allowing for doing complex math
	c := complex(3, 4)
	fmt.Println(c)

	// if you want to split them appart
	// you can pull out the real and imaginary
	r, im := real(c), imag(c)
	fmt.Println(r, im)

}
```

When declaring variables, its a pointer to a value. Pointers are variables that hold a location of data in memory in another location.

## create a variable with empty string

This calls a var with no variable. The `*string` is setting the var as a "pointer" by using the `*` in front of `string`.

the output should give "<nil>"
	// this means the pointer contains a empty string
	//

### attempt #1

```go
func main() {
	var firstName *string
	fmt.Println(firstName)
	firstName = "Arthur"
}

```

**output #1**

If you try to set its value, you will get an error because you are trying to set a string to a pointer.

```go
"cannot use "Arthur" (type string) as type *string is assignment"
```

---

### attempt #2

You could try to dereference the data by reaching through the pointer, grabbing the data, and getting it back, but this will results in an error.

```go
func main() {
	var firstName *string
	fmt.Println(firstName)
	*firstName = "Arthur"
}
```

**output #2**

Reason for the error is that we are trying to assign "Arthur" to an uninitialized pointer.

```go
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x56014e8c51ba]

goroutine 1 [running]:
main.main()
	    /home/addlema/src/golang/main.go:18 +0x7a
exit status 2
```

---

### attempt #3 - solution #1

```go
func main() {
	// declare the var being a pointer operator and a type
	var firstName *string = new(string)
	// set the var with a string
	// using * to reference to the pointer
	*firstName = "Author"
	// you can print the reference location
	fmt.Println(firstName)
	// or you can print the data that the pointer
	// is referencing, by dereferincing
	fmt.Println(*firstName)
}
```

**output #3**

```go

```

---

### attempt #4 - solution #2

```go
func main() {
	// solution 2...
	firstNameStr := "Arthur"
	fmt.Println(firstNameStr)
	// create a pointer that is pointing to a variable
	ptr := &firstNameStr
	// print the location and the dereferenced data
	fmt.Println(ptr, *ptr)
	// if you change the name...
	firstNameStr = "Tricia"
	// and print again, you should see the
	// location of data should remain the same
	// and the dereferenced data should now be "Tricia"
	fmt.Println(ptr, *ptr)
}
```

**output #4**

---

### Conclusions

1. You can use pointers, but declare them first with a type
2. If you update the data that the pointer is referencing, the pointer address will not change. Only the data will change.

Go does not support pointer arithmetic

# Constants

Difference between constants and variables is that constants **cannot** change their value over time.

### how to declare

```go
func main() {
	const pi = 3.1415
}
```

### if you assign.. you get an error

```go
func main() {
	const pi = 3.1415
	pi = 1.2
}
```

```go
cannot assign to pi
```

---

### implicit type constant

Following example show how a constant will interpolate the type based on its data.

```go
func main() {
	const c = 3
	fmt.Println(c + 3)
	// ...
	fmt.Println(c + 1.2)
}
```

This could be constrained by declaring the constant as a type of integer.

```go
func main() {
	// note here the addition of "int"
	const c int = 3
	fmt.Println(c + 3)
	// ...
	fmt.Println(c + 1.2)
}
```

Error says you cannot add integer to a floating point. 

```go
constant 1.2 truncated to integer
```

It is possible by converting the constant to a floating 32 point

```go
func main() {
	const c int = 3
	fmt.Println(c + 3)
	// ...
	// note here the addition of "float32(c)"
	fmt.Println(float32(c) + 1.2)
}
```

```go
6
4.2
```

### rules...

- When you declare them, you must initialize them at the time of declaring them. It has to be on the same line. It also has to be determined at the **compile** time. Not at run time.

---

### Conclusions

1. Declare and initiaze them on same line
2. Determined at compile time. Not run time.
3. Its possible convert constants to different data types.

# Iota and Constant Expressions

To work with Iota and constant expressions, the constants must exist at the package level. Note how they are outside of the `func main()`

```go
const (
	first = 1
	second = "second"
)

func main() {
	fmt.Println(first, second)
}
```

```go
1 second
```

Now its possible to replace them with the `iota` constant.

Note the output of `0 1` . This is because every time `iota`is used, its value is incremented by a 1.

```go
const (
	first = iota
	second = iota
)

func main() {
	fmt.Println(first, second)
}
```

```go
0 1
```

---

Another example is the following...

```go
const (
	first  = iota
	second = iota
)

func main() {
	fmt.Println(first, second)
	fmt.Println(first, second, first)
}
```

```go
0 1
0 1 0
```

An example of a constant expression

```go
// this increments by 1 everytime the variable of "second" is used
second = 2 << iota
```

Another example...

```go
const (
	first = iota + 6
	second = 2 << iota
)

funct main() {
	fmt.Println(first, second)
}
```

```go
6 4
```

You also dont have to call iota every time. Below there is an example that reuses the previous iota.

```go
const (
	first = iota + 6
	second
)

func main() {
	fmt.Println(first, second
}
```

```go
6 7
```

Its possible to group constants. This also resets the "iota" count as well...

```go
const (
	first = iota
	second = iota
)

const (
	third = iota
)

func main() {
	fmt.Println(first, second, third)
}
```

```go
0 1 0
```

## Conclusions

Iotas help transform constants.

Remember, constants must be evaluated at compile time.

## Summary

1. Can declare variables being implicite
2. Pointers have lots of power
    1. Operator: addressof
3. Constants
    1. Iota
        1. Allows for dynamic values at compile time
    2. Constant expressions 

# Working with collections

## Overview

1. Array
2. Slices (popular)
3. Maps
4. Structs (similar to a class)

## Arrays

### Creating

```go
package main

import "fmt"

func main() {
	// build an array with 3 elements
	// each element is an integer
	var arr [3]int
	// add some elements to the array
	arr[0] = 1
	arr[1] = 2
	arr[2] = 3
	// print the array
	fmt.Println(arr)
	// print the second element
	fmt.Println(arr[1])
}
```

```go
[1 2 3]
2
```

---

### Another way to use arrays (shorter)

```go
package main

import "fmt"

func main() {
	// build an array with [3] elements
	// each element is an integer
	// add some elements to the array with {1,2,3}
	arr := [3]int{1, 2, 3}
	// print the array
	fmt.Println(arr)
	// print the second element
	fmt.Println(arr[1])
}
```

```go
[1 2 3]
2
```

---

## Slices

They are built on top of arrays. The slice can be thought of as a pointer. Good for working with an API and select what you want.

### method 1

```go
package main

import "fmt"

func main() {
	// build an array with 3 elements
	// each element is an integer
	// add some elements to the array
	arr := [3]int{1, 2, 3}

	// create a slice
	// the : says use start of array to the end of array
	slice := arr[:]

	fmt.Println(arr, slice)
}
```

```go
[1 2 3] [1 2 3]
```

---

### method 2

Below the slice and the array are keeping to the same item in memory

```go
package main

import "fmt"

func main() {
	// build an array with 3 elements
	// each element is an integer
	// add some elements to the array
	arr := [3]int{1, 2, 3}

	// create a slice
	// the : says use start of array to the end of array
	slice := arr[:]

	// you can use either one to set values
	arr[1] = 42
	slice[2] = 27

	fmt.Println(arr, slice)
}
```

```go
[1 42 27] [1 42 27]
```

---

### method 3

Better way to define slices

Its possible as you keep adding items to slices behind the scenes, go is going to manage the array if the memory address runs out of space, but you dont need to really worry about that

```go
package main

import "fmt"

func main() {
	// create an array with no size
	// the var of slice points to an array
	slice := []int{1, 2, 3}

	// print the contents of slice
	fmt.Println(slice)

	// now you can also append items
	slice = append(slice, 4, 42, 27)

	// its possible as you keep adding items to slices
	// behind the scenes, go is going to manage the arrays
	// if the memory address runs out of space, but you dont
	// need to really worry about that
}
```

```go
[1 2 3]
[1 2 3 4 42 27]
```

---

### getting ranges of elements from an array

```go
package main

import "fmt"

func main() {
	// create an array with no size
	// the var of slice points to an array
	slice := []int{1, 2, 3}

	// print the contents of slice
	fmt.Println(slice)

	// now you can also append items
	slice = append(slice, 4, 42, 27)

	// print the contents of slice
	fmt.Println(slice)

	// create an index starting at the second element
	// and going to the end
	s2 := slice[1:]
	// create an index grab the first two elements
	// its grabing up to 2 elements, starting at 
	s3 := slice[:2]
	// create an index between the second and third index
	s4 := slice[1:2]

	fmt.Println(s2, s3, s4)
```

```go
[1 2 3]
[1 2 3 4 42 27]
[2 3 4 42 27] [1 2] [2]
```

---

## maps

Keys to values

Need to specify the type of key and the type of value

```go
package main

import "fmt"

func main() {
	// create a map of type string
	// the int will be the values
	m := map[string]int{"foo": 42}

	// print the map
	fmt.Println(m)

	// print the value of the key
	fmt.Println(m["foo"])

	// change the value
	m["foo"] = 27

	fmt.Println(m)

	// delete an element
	delete(m, "foo")

	// print the empty map
	fmt.Println(m)
}
```

```go
map[foo:42]
42
map[foo:27]
map[]
```

---

## structs

Possible to associate any type of data together. Fields are fixed at compile time.

```go
package main

import "fmt"

func main() {
	// define a type called user
	// that user is a struct
	type user struct {
		ID        int
		FirstName string
		LastName  string
	}

	// create variable of u
	// using the struct of user
	var u user

	// print the variable
	// this will show the zero value for the struct
	// ID is 0
	// FirstName is blank
	// LastName is blank
	fmt.Println(u)
}
```

```go
{0  }
```

---

```go
package main

import "fmt"

func main() {
	// define a type called user
	// that user is a struct
	type user struct {
		ID        int
		FirstName string
		LastName  string
	}

	// create variable of u
	// using the struct of user
	var u user

	// add some data
	u.ID = 1
	u.FirstName = "Arthur"
	u.LastName = "Dent"

	// print out the contents
	fmt.Println(u)
}
```

```go
{1 Arthur Dent}
```

---

```go
package main

import "fmt"

func main() {
	// define a type called user
	// that user is a struct
	type user struct {
		ID        int
		FirstName string
		LastName  string
	}

	// create variable of u
	// using the struct of user
	var u user

	// add some data
	u.ID = 1
	u.FirstName = "Arthur"
	u.LastName = "Dent"

	// print out the contents
	fmt.Println(u)

	// short form
	u2 := user{ID: 1, FirstName: "Arthur", LastName: "Dent"}

	fmt.Println(u2)
}
```

```go
{1 Arthur Dent}
{1 Arthur Dent}
```

```go
	// multiline form
	u2 := user{ID: 1,
		FirstName: "Arthur",
		LastName:  "Dent",
	}
```

---

## additions

1. Possible to move structs outside of main to be at the package level 

---

# Packages

By creating a directory inside your main code location, you are creating a package. To interact with the package, call the package with the import command

```go
package main

import (
	"fmt"

	"github.com/aaronaddleman/golang/models"
)

func main() {
	// create a user
	u := models.User{
		ID:        2,
		FirstName: "Tricia",
		LastName:  "McMillan",
	}

	fmt.Println(u)
}
```

And the file of `golang/models.go` is the following

```go
package models

// User type
type User struct {
	ID        int
	FirstName string
	LastName  string
}

var (
	// create a array as pointers
	// reason for pointers is so that we can
	// change the users instead of copying them
	user []*User
	// usually a database would provide the id,
	// here we are cheating
	// defaulting to int type
	nextID = 1
)
```

---

# Functions and Methods

- Functions
    - Arguments and Parameters
    - Return results
- Methods
- Interfaces

## Functions

```go
func nameofFunc() {
}
```

### invoking functions

Below is invoking the function of `startWebServer`

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// invoke the function
	startWebServer()
}

func startWebServer() {
	fmt.Println("starting server...")
	fmt.Println("server started")
}
```

```go
hello
starting server...
server started
```

---

### parameters

Below shows how to define a function with a parameter an the format.

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	startWebServer(port)
}

// define the function with a defined parameter
// name_of_param type_of_parameter
func startWebServer(port int) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
}
```

```go
hello
starting server...
server started on port 3000
```

---

### multiple parameters

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	startWebServer(port, 2)
}

// define the function with a defined parameter
// name_of_param type_of_parameter
func startWebServer(port int, numberOfRetries int) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
	fmt.Println("Number of retries", numberOfRetries)
}
```

```go
hello
starting server...
server started on port 3000
Number of retries 2
```

---

### multiple parameters with shorter form

```go
// define the function with a defined parameter
// name_of_param type_of_parameter
//
// notice only one "init" is being set
// this is a little bit shorter as all parameters are 
// of type "int"
func startWebServer(port, numberOfRetries int) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
	fmt.Println("Number of retries", numberOfRetries)
}
```

---

## Returning data

Define the type of data after the parameters. Below is an example.

this is not idiomatic... just an example... its better to return some more information

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	isStarted := startWebServer(port, 2)
	fmt.Println(isStarted)
}

// define the function with a defined parameter
// name_of_param type_of_parameter
//
// notice only one "init" is being set
// this is a little bit shorter as all parameters are
// of type "int"
//
// the "bool" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) bool {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
	fmt.Println("Number of retries", numberOfRetries)
	// return true as the bool
	return true
}
```

```go
hello
starting server...
server started on port 3000
Number of retries 2
true
```

---

### returning an error from a function

Hear the calling function can decide what to do with the returned value.

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	err := startWebServer(port, 2)
	fmt.Println(err)
}

// the "error" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) error {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
	fmt.Println("Number of retries", numberOfRetries)
	// return true as the bool
	return nil
}
```

---

### demo of an error

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	err := startWebServer(port, 2)
	fmt.Println(err)
}

// the "error" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) error {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)
	// return true as the bool
	return errors.New("something went wrong")
}
```

```go
hello
starting server...
server started on port 3000
something went wrong
```

---

### returning multiple values of information

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	// here we use a list to catch the port and error value
	port, err := startWebServer(port, 2)
	fmt.Println(port, err)
}

// notice the "int, error" is staying its going to return two types of data
// ... an int,
// ... an error, if it exists
// the "error" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) (int, error) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)

	// return the port and for now, nil for the error
	return port, nil
}
```

```go
hello
starting server...
server started on port 3000
3000 <nil>
```

---

### what if a function returns a value but you dont need it

go provides a write only variable called as `_`

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	// set a var (eg port)
	port := 3000
	// here we use a list to catch the port and error value
	_, err := startWebServer(port, 2)
	fmt.Println(err)
}

// notice the "int, error" is staying its going to return two types of data
// ... an int,
// ... an error, if it exists
// the "error" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) (int, error) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)

	// return the port and for now, nil for the error
	return port, nil
}
```

```go
hello
starting server...
server started on port 3000
<nil>
```

---

```go

```

---

## methods

an example of a method is one of the following

```go
package controllers

import "net/http"

// struct with no fields
// useful for a set of related behaviors to be associated
// this also creates that object oriented behavior
type userController struct{}

// create a function bound to a struct
// with the part of "uc userController"
// this binds uc to the userController struct
//
// the function name is ServerHTTP
//   it takes a w http responseWriter
//   it takes a r http request
func (uc userController) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// usually things in go deal with a slice of bytes...
	// to pass a string to the write object, we have to do a type converstion
	w.Write([]byte("Hello from the User Controller!"))
}
```

---

## binding data with constructors

```go
package controllers

import (
	"net/http"
	"regexp"
)

// struct with no fields
// useful for a set of related behaviors to be associated
// this also creates that object oriented behavior
type userController struct {
	// handle resource collection and resource users
	// match to incomming http requests path
	userIDPattern *regexp.Regexp
}

// create a function bound to a struct
// with the part of "uc userController"
// this binds uc to the userController struct
//
// the function name is ServerHTTP
//   it takes a w http responseWriter
//   it takes a r http request
func (uc userController) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// usually things in go deal with a slice of bytes...
	// to pass a string to the write object, we have to do a type converstion
	w.Write([]byte("Hello from the User Controller!"))
}

// convention used to create a constructor for the UserController
// this returns a pointer to the controller object
// this avoids an unneccesary object copy
func newUserController() *userController {
	// take the immediate address of the operator with "&"
	// yes, there is no named variable.. this is allowed with struct datatypes
	// with int variables... thats not allowed, you have to create a variable
	// also this is a local variable, go will recognize that this var needs to be promoted to a higher level
	return &userController{
		userIDPattern: regexp.MustCompile(`^/users/(\d+)/?`),
	}
}
```

---

## interfaces

These are very powerful. More than other languages.

The handler type offers an interface.

[http - The Go Programming Language](https://golang.org/pkg/net/http/#Handler)

Because the following code is written with the parameters of `w http.ResponseWriter, r * http.Request` it automatically implements the handler interface of the reference above.

```go
func (uc userController) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// usually things in go deal with a slice of bytes...
	// to pass a string to the write object, we have to do a type converstion
	w.Write([]byte("Hello from the User Controller!"))
}
```

Here is an example of how it can be used...

```go
package controllers

import "net/http"

// RegisterControllers to handle rough routing
// when network requests are received, it will go to the correct process
//
func RegisterControllers() {
	// create a new user controller
	uc := newUserController()

	// reach into the http function and use the Handle
	//
	// any object that has the Handle interface, it will implement it
	//

	// this will match requests of /users
	http.Handle("/users", *uc)
	// this will match requests of /users/*
	http.Handle("/users/", *uc)
}
```

---

## implementing the http server

main.go

```go
// main.go

package main

import (
	"fmt"
	"net/http"

	"github.com/aaronaddleman/golang-webservice/controllers"
)

func main() {
	// reach into the "controllers" package and register the controllers
	controllers.RegisterControllers()
	// use http package and call "ListenAndServer"
	// takes two params;
	//	ports
	//	server multiplexer (object that handles all the objects comming in and routing)
	//
	// using nil for the multiplexer to use the default one
	http.ListenAndServe(":3000", nil)

}

// notice the "int, error" is staying its going to return two types of data
// ... an int,
// ... an error, if it exists
// the "error" is the type of data that will be returned
func startWebServer(port, numberOfRetries int) (int, error) {
	fmt.Println("starting server...")
	fmt.Println("server started on port", port)

	// return the port and for now, nil for the error
	return port, nil
}
```

```go
// controllers/user.go

package controllers

import (
	"net/http"
	"regexp"
)

// struct with no fields
// useful for a set of related behaviors to be associated
// this also creates that object oriented behavior
type userController struct {
	// handle resource collection and resource users
	// match to incomming http requests path
	userIDPattern *regexp.Regexp
}

// create a function bound to a struct
// with the part of "uc userController"
// this binds uc to the userController struct
//
// the function name is ServerHTTP
//   it takes a w http responseWriter
//   it takes a r http request
func (uc userController) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// usually things in go deal with a slice of bytes...
	// to pass a string to the write object, we have to do a type converstion
	w.Write([]byte("Hello from the User Controller!"))
}

// convention used to create a constructor for the UserController
// this returns a pointer to the controller object
// this avoids an unneccesary object copy
func newUserController() *userController {
	// take the immediate address of the operator with "&"
	// yes, there is no named variable.. this is allowed with struct datatypes
	// with int variables... thats not allowed, you have to create a variable
	// also this is a local variable, go will recognize that this var needs to be promoted to a higher level
	return &userController{
		userIDPattern: regexp.MustCompile(`^/users/(\d+)/?`),
	}
}
```

```go
// controllers/front.go
 
package controllers

import "net/http"

// RegisterControllers to handle rough routing
// when network requests are received, it will go to the correct process
//
func RegisterControllers() {
	// create a new user controller
	uc := newUserController()

	// reach into the http function and use the Handle
	//
	// any object that has the Handle interface, it will implement it
	//

	// this will match requests of /users
	http.Handle("/users", *uc)
	// this will match requests of /users/*
	http.Handle("/users/", *uc)
}
```

```go
// models/user.go

package models

// User type
type User struct {
	ID        int
	FirstName string
	LastName  string
}

var (
	// create a array as pointers
	// reason for pointers is so that we can
	// change the users instead of copying them
	user []*User
	// usually a database would provide the id,
	// here we are cheating
	// defaulting to int type
	nextID = 1
)

// GetUsers for listing the users
func GetUsers() []*User {
	return users
}

// AddUser for adding a new user
func AddUser(u User) (User, error) {
	u.ID = nextID
	// increment the id
	nextID++
	// append it to the users object
	// take the address provided in and store that
	users = append(users, &u)
	// return the u object and nil for the error
	return u, nil
}
```

![Go%20Fundamentals%2099ffce7be9274dbc87111fb8faf00698/Screen_Shot_2020-04-26_at_10.17.19_AM.png](Go%20Fundamentals%2099ffce7be9274dbc87111fb8faf00698/Screen_Shot_2020-04-26_at_10.17.19_AM.png)

```go

```

# Controlling Program Flow

## Looping

All loops are using the `for` loop

### Loop till condition

```go
package main

func main() {
	var i int
	for i < 5 {
		// built in print function
		println(i)
		i++
	}
}
```

```go
0
1
2
3
4
```

---

```go
package main

func main() {
	var i int
	for i < 5 {
		// built in print function
		println(i)
		i++
		
		if i == 3 {
			// breaks out of the loop
			break
		}
	}
}
```

```go
package main

func main() {
	var i int
	for i < 5 {
		// built in print function
		println(i)
		i++
		
		if i == 3 {
			// continue on with rest of program
			continue
		}
		println("continuing..")
	}
}
```

```go
0
continuing..
1
continuing..
2
3
continuing..
4
continuing..
```

---

### Loop til condition with post clause

```go
package main

func main() {
	// loop til condition with post clause
	//
	// it requires 3 terms in the for loop
	// that will tell the compiler we are 
	// using the loop til condition with post
	// clause
	
	
	// method 1
	var i int
	for ; i < 5; i++ {
		println(i)
	}
	println(i)
	
	// method 2
	// j is only defined inside the for loop
	for j := 0; j < 5; j++ {
		println(i)
	}

}
```

---

### Infinite Loops

```go
package main

func main() {
	var i int
	for ; ; {
		if i == 5 {
			break
		}
		println(i)
		i++
	}
	
}
```

```go
package main

func main() {
	var i int
	for {
		if i == 5 {
			break
		}
		println(i)
		i++
	}
	
}
```

---

### Loop over collections

```go
package main

func main() {
	slice := []int{1, 2, 3}
	
	
	//ugly
	for i := 0; i < len(slice); i++ {
		println(slice[i])
	}
	
	//clean
	// define an indexer and value
	//
	// the range tells the compiler the index, and the value at that index
	for i, v := range slice{
		println(i, v)
	}
	
	//clean works with maps
	wellKnownPorts := map[string]int{"http": 80, "https": 443}
	for k, v := range wellKnownPorts {
		println(k, v)
	}
}
```

```go
1
2
3
0 1
1 2
2 3
http 80
https 443
```

```go
package main

func main() {
	slice := []int{1, 2, 3}
	
	
	//ugly
	for i := 0; i < len(slice); i++ {
		println(slice[i])
	}
	
	//clean
	// define an indexer and value
	//
	// the range tells the compiler the index, and the value at that index
	for i, v := range slice{
		println(i, v)
	}
	
	//clean works with maps
	wellKnownPorts_a := map[string]int{"http": 80, "https": 443}
	for k, v := range wellKnownPorts_a {
		println(k, v)
	}
	
	//clean works with maps
	// with write-only variable
	wellKnownPorts_b := map[string]int{"http": 80, "https": 443}
	for _, v := range wellKnownPorts_b {
		println(v)
	}
}
```

```go
1
2
3
0 1
1 2
2 3
http 80
https 443
80
443
```

## Branching

```go

```

### Panics

Usually error values are helpful. Eventually, you will find a state where you need to state the app cannot run function.

```go
panic("Something bad happend")
```

It is possible to recover from panics.

[Effective Go](https://golang.org/doc/effective_go.html#panic)

[Effective Go](https://golang.org/doc/effective_go.html#recover)

### If Statements

```go
package main

type User struct {
	ID int
	FirstName string
	LastName string
}

func main() {
	u1 := User{
		ID: 1,
		FirstName: "Arthur",
		LastName: "Dent",
	}
	
	u2 := User{
		ID: 2,
		FirstName: "Arthur",
		LastName: "Prefect",
	}
	
	if u1.ID == u2.ID {
		println("Same user!")
	}
	
	if u1.ID != u2.ID {
		println("Not Same user!")
	}
	
	if u1 == u2 {
		println("Same user!")
	} else if u1.FirstName == u2.FirstName {
		println("Similer user.")
	}
	
}
```

### Switches

```go
package main

type HTTPRequest struct {
	Method string
}

func main() {
	r := HTTPRequest{ Method: "HEAD" }
	
	switch r.Method {
	case "GET":
		println("Get Request")
		fallthrough
	case "DELETE":
		println("Delete request")
	default:
		println("Unhandled method")
	}

}
```
------------------------------
- Screen_Shot_2020-04-26_at_10.17.19_AM.png -
------------------------------
PNG

   
IHDR  ~  >   ãØÌ  EiCCPICC Profile  (c``I,(Èaa``ÈÍ+)
rwRR`ÂÀÂ ÄÖºÉÅ>@%0|»ÆÀ¢/ëÌº)ÀöpÝ}ÈÎþpºS=
àJI-NÒ8=¹ ¨1ÈV./) ±;l" £ì9 v:½ÄN°Õ9Ù7läD /l$$ñt$6Ô^àõqWõ		r÷tq%à^AIjE	vÎ/¨,ÊLÏ(QpRªg^²(Ì!ª?ß %£B¬@ÁbPð!B,èírü}15 ¼î+H,J;ñKq±Í½uÚÿÿÃØ5þ^ÿÿÿ÷öÿÿÿ.c``¾ÅÀpà +sb0qGp    VeXIfMM *   i                   D       ~       >    ASCII   ScreenshotºY  ÖiTXtXML:com.adobe.xmp     <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 5.4.0">
   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <rdf:Description rdf:about=""
            xmlns:exif="http://ns.adobe.com/exif/1.0/">
         <exif:PixelXDimension>894</exif:PixelXDimension>
         <exif:UserComment>Screenshot</exif:UserComment>
         <exif:PixelYDimension>574</exif:PixelYDimension>
      </rdf:Description>
   </rdf:RDF>
</x:xmpmeta>
na  @ IDATxì]Uµþ×d&ôNIÞPZè¨ÀltXþ>øÞE±÷B±å©'Ò¤JW@*ÕÐBBzÉÿúí3ß=7wfî4²V²gï½ö*{¯sÎ>û»ûÜsÍ"@D "D"@D "D"@D "D"@D "D"@D "D"@D "D"@D "D"@D "D"@D ß#PÛïßükÚ8ÀóVOª+Ôó6µÃ#©®ÜY&]éår*ãdU
êyÚáÉVn²t¥Ë©þTÄ??âüo?t
ÅõóæQÎüzÑ\Ï#uîH/S9æ_"Õ11ÿ'ÇCçPÌ?1ÿhYÛæÍÅL;&NÖÝ5i8qRqAAÊ)££Nå<×»%ËoX
]'ª'¿Ê½)ügqU,óXQø·§qþµ/t®èzÓµ¦z\1ÿèÐ¼«Ü§=ºVt-å9±ù7î?qÿm¿N¸^¸& ]+º4×¨N.æå¹~^MrdÉ×øçqRY»+^,ÅòZKkðãà+qÀ9Itéâ¯Nmð¤ÇÅ#>eHmâ£Û@H9eäIÏõÕNÉGøøë<ó¯ãµ¡¸èz¢^\íóNÌ?Å9£sóCçK~þ¨]Ò1ÿçPÜâþ£ë$î?Åì ¹AqÑ|¢9$î?«÷ýGs¼êoêüÍ<Ø:?rZè0N.Håâç42¤ü&<ú¹2 gäHÍ dàãQøøÇù·üuÄõ¡ër\1ÿÄü÷¸ÿóæÇX'ß'tnÄú+Ö+jýÍu÷¦ÝË\tM&-ª5Mùä@[.'0²ê*Ê9Á#iòÉÛrYÊÈÿöÉXEüÛÏ)ÎâQV]å8ÿÚcäâúù'æß¸ÿÄý·ýÞ¡¹ûr¬?býëÏþ]êúZ£s&5&<Êª+§­lÐ&®d4aÒ.igWO<êÜ|T÷b*Ë¶øÈpñÉOù
>I2½ñ¯~àS~ÿöØzxìÿ8ÿâúk¿Fbþ)æPæ
Í¡»ÿcþm¿÷)fÊãþÓ~mqÎ%QÜâþ÷ök¤Òý^Wó/ísæåÒ9m"ñ±O9o
d;óOÛG58Jô](¹>ÝààQ×$«©ý\Ï«¥>r"êÈCÒQ9|ÊÀnv EñA^ödK¹lRÏýÃW[y^nOãÿEÜ#þqþÅõ×~3+/|jYnNù'æß¸ÿpe÷ßX¯»T/OcýU¬¹WÔú³|­Lü9Ç6Ýëu\úcýßÕõï.K÷OÊk¨5ò@u°É9Ðyâ$à KFeg:È@ùÉ¢ïçå²ä
éBO'ºØÈá:èGÞ¯¨Ü?u|ÿâxDüóAçFéäi;Wâü+®¸þbþáÈcþûOÜcýë¯Xrhm¯á¹OÀOerîÊ%ç¬¶Éd«¨­ÆàêL
$òC]7{ø:ÒÕAz*+×bA6¨S®âD]ö½Xz¡|dh^¹Ùtþ{èÔrÿÞT:¹°üäþÃÚ¨Ë&eìªòþ#þ:8âüó 8éú§¬k*®¿bþm¿âþSÄù"×\A=î¿íóh¬?býÅõ¡ó@OféáZQ;×î¿ÈsMi]D=$§6rÙOöÉÕÖøìÊ?zuéêWV·?
èêÖ/õ`* ùÁÑPps\9 F²'×iCN¤rgþCG~%Ç¤ØÊ?2¢¾úÇ¦ü`Sýñ#nuÔÕôEáTÖ¸h¯&þá¿8.ÄØÇqýµ_1ÿôýþCcþï8×¸ÿtIÜâþ»&¬?'VòK8ç-_eÉr½SÖ<ØÝõO;6HÕ¬¿Ã¾|T³þEFÞjK'«S°ü@é¯úÎt`(ë £'{âQ×¶àQ9í²Kûç¦ótêõCþ©«Ïáèw5õÇÄù×~-s~p-ª¹þãú+bóOû}!æ_®¢¸ÿÅý·8òµ¸ÿÆý7?'VæúCëc ¨¿ýkýÐÙõ/ÉRF5¼Õ4Õ¡Côà$õ:Uð(KF7blxàÃC.m'F'ÚHmxõrÿ²ON»N6ìRV;m$ù§<ÐS¹gäénü²_îëÿ¿Î8ÿÚ¯+®ÿ¸þbþù7î?qÿí¸þñ©1Ö­cýUÄBçë	bC\(k}AÎ=UëßµþÌ×ù}ñ¯qùª>ÿµP,ÐÍñøåø_|aÄXUpVù%`Z¨GßÔ?N<Õnìü Â§A'ê*Ë¿rôä$YéG{µþe\v(Ë¯òÜ¿Æ+]éÿâDüãüë¯}éjþÓóOÌ¿ºÄý§ýÚûoX'¯ÿbýÅJsÍYÿj^£ÏÇùú¿³û2ºöÑN \éøÃ4wæëì*ùÏÛ%·Rs:½*Iþ	| 'zð¡üaÎ§ÈêåvÉå6ÐÑAÌû¸Ü¿ú.ÿ®^²[îYÉwå¹oÊÕúl¥ñÿ\]ÅüÐÙõO{\cóOåû®'Íÿ1ÿÆýOóJÜÿ;®¿býëÍ}]ÿ2ÏæçSOæ_t«ñ_n:X}(÷=ñAy e(-µ+ù¯ÆJvÜ	 ú¡@äAB°¼MAORÎÀ¶,jÓÏõu ä6õ=H~TÎûÙÙ^¹ùÉÇßÿÜg^îÆ¥q+ÿó¼ño¿î8 ]ÝÿqþÅõ§yGyÌ?1ÿè¾XÌ&í×u'*Çüó/çÎò¸ÿsÈrÿåxéºî¯ù{Õóõ\Wþ%C.9óù${åþáÃCÂñ¯t­
bÀåA#(âÓ'0x9¡OÿS°)kçHÁÙ&Ñ&¤_mñeG:åþáWò/yÙ%¯4þò¾PÉ?müÃ*_c¢=ü·câAì#þ'¦8ÿâúù'æß¸ÿó"ó¡(î¿±þõWÇõ7×F¬?µNÆ^¾þ¦®6]ð'þ§êúùzµu]ã*çþÕMùG.÷¨Òú»h)þûÏÛVx²2Ik0Ïi#È!p
¢Ú²x
rløY¨@ÔÑiÓÁ/ß:pØÈýc@²ÕÚ%
HõüBÈýRE4ü$£¬¾ËVgþóñÿ"²YÄ¿Gùùç_òëó¹!®¿bþ-®Í¥qÿ)îëD9";slÜ=N:gâþ[Ä#î¿×ßET:^C\;]ÝÑá¼tý£SéúÓºùJñG¢¹^òðYÿÃÃ.×9DD;I×¿øèëú§
®ÎÚEÈIW¼ëÆ¶ÂT0LrDbÐy ÅÏì"IW96r¸Ü6<dt p¹=äÈI"ñ¨SdWþÉuâ'{Ô!rxåþá¡+yr$]Õ»òOÇTþÉáÉ9vÂ{\\/äºÞtí¨×Ç©ÒüóOÌ¿qÿû/s¦æXÄúK÷P­µª]ê^Câéü*?×XË§ûyî_mÂÔè«oÚô¡=÷O;¤\ö¤û\nCrÊi#	ÿh|è®0¢+4@0
><õ>AYx
pg²ìãKûy+ù'Y;üã¤6rõ/÷/Ú;óÏF;T>&ù/þ#þqþÅõóOÌ¿qÿi?âþ[Ì±þHK©'¦õWûzyu_j­«óûx­#]Ì®¹Òú]Î|ý\%ÿðµþÖÚ\D;þsýe_¼ÿÈÞ
Ëqº2àà A,ü+äA¦MºØQK|ÚáËm: :dÿüîdÈ¥<¶r½\WþáïÅåüÓåvürÿðÊýW?ròïÅûWÌÃÇãñó/®?fb¾ÒÃ¼ÈµAÒÜ¥6gøá+ÔÑòù/æ".1ÿÆü¯?âþÓ>whýëj®
ó/÷î)Pg÷ü<ÒýÙJ×_%ÿØ.¿ÿÉ§øÈ`¾ÊïðéÄü¯¾PÏ¯úÀ}7·L¿:×¯F3c:B¾4HrñUF^erH'<u5ñ'0!X'+h:Ø'ÃS»;ôCròÙùUÞlÉ®ü3Néª¹ÊüsHW¹ü£ÛÓ8+ùGÊå%rø/â£óxEüãüÓu§<®¿â:aÞÈçxh^å|!&ù|ÇKr1ÿÆý'î¿±þõOeóeWë/dóù4¿ÿÀ¯4ÿ¢Ëå÷tÅ_÷wdå\ûP¹x×ËýË¯rÝ°! ²rìõ;a|E¶ D ¨ç/N!WL#G]ÁR á$O¤Ü?í¡
ÿÔ«ñ/ê#y%¿Ò	|¹xåþáåþ¤C¹rl"YÙÒøá¢PÄ<bçÿâ|ÑyVD®ý¯øqþÅõóOÌ¿qÿ)æÍºÄý·óõ±õOûZMçùuýÁñ&u·þb>AFë/H6`hý¡5¾ò
Àä_vwµåºr|ù×üG$'Óû¯d»ìÃ_®ÊízòÎk`øA³ý,TtÙ@^A¤¬ºtÈÍýcWA¥]úåg|ÑUÿ(ë aC}ÙW?]ùvuÀiÊåþñS­ÿ¼?®(÷O¤ñ«þ¸:mR8Oãüëëênþù§ý>UD¬8w4ÿk¾ù7îqÿo¿çÆú£=±þ(fN­¿µþ`î¤,¢ßo8¨CEèu6ÿ"C{~þ	àè"!§ãCe|µQ|ÞxâcS~¼øjC=ÚÕo/&|H~¿Ñ
1ê½Ã.Ê6dHð'<GWAF6½XÒ£¬AmÊ¹ÉËer¿øÁ¦ü{1õ\rê<ùW<õU>iSYãER½¨sÿè"ÉºÒ/÷LoýË~øo?þÿ8ÿâúcöùGócÌ¿qÿûo1'Äú£ã.Ö_¯?ÙUÓzW×êùý¥Òú¸v6ÿj½+ÔeP~(çþ¼ZªçöÄ°¡óYÉ`_ý/·¼ú£5Þùê²¯>z+èØ º|ó)`j'ÈÈÑG¼evºYê9Oõ<G^v)ã_íØ¥
ßú'eHíò<Rnr'!GR]þs{yårÿÒ!§RÞäHÈA²E9ïwÞðß§<ÿöó.Î?® î¯ÿ¸þbþù7î?qÿ-æËX'_kÃú«»õ/×æG­¯'æÏSI:gÔÎD¾â/d Ù$W~nKzØ ©MþWY~È!å±C?¹¯&^¹øüÉêù8
É~øÑþ$
$eAÁÇ¯PµxÈ¯àhðÞ(·I2eC6±GYã¤_ ý GG}¢®~Á/'ìäþ°ÐÁeä:ó_þøêüË¶ì»HòC;<HåÜ¿l"]vùUO}U¿ÈáCá¿=	9)âÏÒb¢ó?Î¿å¯â£ëN9¼¸þXÅüÓ~/à¼bþmbBNù3¤=Ä$æßâ¼ûÏêsÿá¼ÔºYëkÝÿ¸u¬*ÍÿÞ\"Ù!'A²«y2?ÿ]²ük]î_íò> xôU¾àûÇü¨¹-ÙW.ÿä²ON]~½Ø¿¤ôÕ¼£>$¤ ÃW½| 4Q2âI¶\¹\V~±ÿ¼Í«¥{$ ut!ùÄv!rùÜí:¹ñ\.ÛM)É`K2èAòOYþU¦MþÅËýÃ°ÛÉû¤vÆLø'"EÌÈó¸EüHAÄØt®Âó¯¸4ÿyHâúóä×QÌ?ï?Ä(æ_®ö9%?obþ-bÃßãþÃµAZï¿ù\¯¹µ&ç¯úíÅ'ÞÎç?­¿ÕF®ë_6;?rÕÞ?üií/õ
ü"ÑFxrçWÚEiÏýåúØ®d¤Û/¹ÑÆ4$:)@âKNÁÒ ©Cè!#°¤vÚ$-Dc ¬äÐO=ÏáËv( ùÇìHWudÕ®éÊ³:øU?$G»ÊèÈ>¶°Oí'É®|QrÉJÎYËù¼drðOÄEüãüãÑõ×_Ì?3cþ-®â¡ûIÜÚç
'º0wpÎ+^ÑüB=î¿§Xÿ¬=ë?­³tîW:þº6$£ó:e<¿(Cy»äi£LN}/êáéjý®lÀ?ÙV9ºtÉÇORß(Ë¶øä}&uª/è$¤ÎªóäØÚ²8Á åuäà«L]ö¼X
l*x'Aâ3Éê5­¹Ml!CÿÈ¥O9ÉªLiÒV_àS¤CYþõFOxòEüK:eÉ¨Èþ¥/g-jüË.yøo3±Sl#þíqó/®¿bþûOq¿Ô="î¿íë­;wµþõGû:cm[åëý®Ö\[:Oòõúùõ§õ»æ&Ü¯?°#R¼á!÷zyBN>Ñ<rªË>uø}þ>2P%ÿâ'ÿ^î_ü>åygúb`
^¶åð)çòèÀC~~i]d¤8×ójò1R¼ìªÏù×AFB>÷O{î:_ÎÓøe¹rÿÈküê·ìQ'á[þ5gyé	¯3ÿøÃ9þã¢Füs"Î¿¸þbþù7î?qÿõG±þõWûº±X=km­à±~ªvý©µq
xZ{èþC» <|Q§§u-<­yåóYvÈs~î]då_o,û+¯Ó¦õ7møõEþÕOê²Iï^ôÚ+ª³ÎUêü,kOXààAªçA¢]<tñK]<üCòB]êü«ÿòO]9µc_6uä[¹ú­~¡íòñËrèË?uµaGýxòïÅäGþi£ûÇ^5þÕÿðñó¯ãõK<âúkIÌ?Å¼ì§EÌ¿¸ÿóCÜcýë¯®×ÌÖZÿ¯?ázÊ×¿âéþ£u.1GN×uÙÕú·±MÆ³DàÚ éµ¢o9YõÂò¯õuÊäÚÑÕú?5ø:þe>©oè3.õ6xÔûDrÖ[#tD§¬4¨CøP ¨K>º"
YõYêzd@6¥GNBFúÈj«SÎmyµ$Gó~Ê&c_þ¨çÁMt(Ë¿rú¿Ü?uõÈÈ¯ì`£Ü?öäß¥1ûLgã¯ä_cÿÅqøÇù×_1winù'æ_Ý[âþ÷_Ö
P¬?sAë>]#±þ*Î
î:W(«®5mºÇ¯?½©ÔÖÙý'·§u5¼òõ7þä9@÷xÊ9ÇP}¦
B6jèÉ&vÑ!Ln;÷á"É'rø Mú±#ÿØÈêòïÅÞÑ;íByçàæ¡®ÁH<
)(!û!¸ØUÀ8Ø'C
6H;xÚÞÓ¾võ''Hòò¬ü«/HþrÚÔdÐë"O]ãðbý£þÛÏ'Å8âç_\ísTÌ?1ÿjnä>C9î?qÿõG¬¿ÞÌëOÖîPOïo¸Î½îðôH[*s¨æTr­Ã½X_á£ú¢ë
>ó/$»ÊáÉô$+ÈPdS:·Y,õp¬A«Êe9
|¿|ÐPGNQ¿±­~À§û§~ §ý&L'û6ÛlS·ÑÆ:dèp+ZèwÎ³ÖçQ(u;iõ¦kM,þr5RÅ_êP«ÿkoK¬²?|a'üGüãüëÏçÒì©ùµ4ÛæÚãþnüû/«ö5F±õG¬¿3cý_Å]dÉÅËþõÒK[?þøc[Ì1ãoÎecèæ¢5á	apøB8¯}òñSqÂµà~àç²ªj;>¢®$L$¬CI·¨õà¯ TT(ÖpN=ïÀ<=+g¥Q¨à@viøËíRfØaþÎ¦í²Ë®»M'Ù.¯½öªÍ¸óy[¼x±57ë8H%ò@D "D"@DàÍÚÚZ:tèØ±cÇ2e7;~|ó÷ÝÇ°çxz0?øCßí­ïá	ÀP£Irüþ|D6)ò²WS;öh#VÎ_Ôªü³Þ:"§0A°«HV|:62º$µ!'d-Ù¡]mòá¬Rðt ÐÝwâÄIo¾Åä]§On3g¾nþé¨Ü¢D"@D "¬- 	æÍgóçÏ·M7°acÃÒº¹sç¾à1xÂp¹0ðXD;HäÔarlOvÐÕ½©Ôl`·Ü?<r=&{Cr¨Á¨9o±xLAypÉë'+('¡£:¨OR@àQ&á¢/È 3mÂÄ	õÏ?ÿ¼-X°À«A@D "D"@D  áùçgØfmÎ¦Ñ4Oàá¨CåøÌ!üA;ràtsüA>29þ¡.¼#?ª#O	'Q§Ücê;§$H6	$ tSÿ!ÀÒ¥M,¶HðS'Ú¥CÀ§=zÃ¥K"D"@D "D:D`éÒ9räFÎê	Ü¡Þ [1*á0ð9ò6­¤+ðN®·##ÈÁ¹0ÚªÊÕ¹ª]g8¢3rHRé	Û Uré¨Ã/^L¤`È¬/99éÊî¸¦¦låE"@D "D"ò464øû?ZÆ:_;xÂ'ÂÂ0Ô!ÚEà02`éÓ&]/vÀPðEØ£.û9ÖQ_à·Ë¾ìtçîR°­QÎ¨âÁ©ctV	>Hûy'å;
ið0<x"ì°ÅÁÙÃ¶@çÖx$("D"@D "X>ÍZ<µðGáüîð²%üáeðpð³JøGmòÁ/<|áÉÒF?#¤_ÔºùK{B8Æ:3ÕÀ,ÕÕ! @
]í²C<HW{ÞO
Tr'ÁãG3ÉÕ^è¨æ
A@D "D"@D`¹AXlÞ!S0m¨Ó.$aoJzØ§y}É¢É>i.mêØ¼»¦Pu-Y'b\COÒ.xtÎàG§M~iW§%+è¡C§º;äò¯ÁKzñOD?P]]Õª7^[[[~»°Ì@D àmdÍÍMéiÆkjÒW	za,T"@D "hûMÔ.[) ê`eñõBµGÔ.Yêåø}ðM.£:þ!áÊØQ91ºû£t'§vË:båÕqñ¡ãðáÓäé¼ø
²ê§üKG6]$ÙºmAG$¨/ð¼·ÁôÅDèF"ýÿÑòºº)Õ×¶%Kÿm?zS@D "XÛ"0Ce(?H`~ \g¼¾ðO+eÂRT°+BûÂUê}<HyQëæ¯R7b¥fâÎ10@
2:'QæqLô4
ed ÚÑàè+9¶(Ë[¬Èæ64®øÍ>LhäQ¾¸T8û`(T#!þÁÌ@óÌ[a>ÂpD "DÞÌhÃàa+ìî ,$,ãÅDÂ*ÈM(U'+0°2ðÐQbN;vt õQx¨àvóWºëÐuFè+(tyVÐQÀòRÆÁ!ÔGê'+ ÒÃmõmíyÿhêeøN_¾^/Ô"+9\«\³A@D "ô&@)ÀÂ5`ÕE¨è#ðôhÃXvád¼XÂ8>uÉÁ¨ã_D6øØ­ªrCG¤%Ï@éÁ¼:ì¬Ä/]td<62
äiW¯Ü ;NR)jñ·ºÔù÷øØEDÖpÍò=Ü @D "Dz:ánªIÂäâ	 'üA@|lÿ¡=d$W¼)éK\Ëæ|µwÈå¸³¬¢ÑaÊät$gðåL%Ç>9I²ðéÓËÀ#È«ÊUêÚ%/}#þTúÁ«É@D`µÀ`ÿÎ_PD "D"=@Âfà
8Ê`îð2$( ¤N»ðVû iÃøEF:²]	!#/ÕËsáåÛt(w(9
6Q×à¡'yN¹eH<ÊC2Ô)(£Å«iKU<dzÚ6("XÓ";~kÚþF"ÀêÁ3Àùb¸3ü¡®Ðåø'bÒfÊ±ü·çß	ÌíÐÎ>u6àuIt²!rE9¦3ðH	$9u¶¼I¨ímÈ)Mà@Üò£9ÙVÎ8àCèÁo«£Ö;ÚpP½cô(ÛgÄpÛ~hñØã#ØÚusçÙËjuö7çö¦µiÛ
¶í7å+f<ß`·?ºÔ®ûûb{ùÙ0Þßê·ÇH¸ãP0©ø¿åÙ¥¶ìáÅÖt×|kÅ9Ó;ÅcïâZUñ¨çª>á?"DÖÜ°G-{ Â)ÂDà
xÔ)£'¬"<C62)'äð#ìB;Ø¥ò¥~8«dYñ)Ë2RµÀÊ9Æ!
 ><:OAÐàÊs6
G.¾áuùU? ð çÁî9í:l¨}d½ñvðè®ìîðè'ï¨aÛ[³^e÷/ªîê»n^o=t¤¼³È6[ÉÞ¶m_oÛ²ÞÎ¿f¾ÝÿtCòÓÝº­Ø #ÇÙÀ©Ãßi³Y»ã0«Ûi-Ûf5^ñ5=¹¤;SÛy]|PD "°æE`@¦¿5¯ïÑã@D "¬º¤Å'0H9°¢1O,©sÓEVJ .s>,v!ÊÈ£Ð£,,EY$ûä'CÊÉÁë V³BÐp;'9Å!e%/¦AÉ¶.ÕqÚÑaðù`áC'©/§M¹xØ¥LÊ}xµ:b§¯ }Ã}>OäYùàÑÃ²Ý;}	ôíä ÏGÚÚÔÚ!Á;ØÛA¶;b§ÐW7ÅA_³÷«,Á£
d"@D "D"ª" Láì=À`
pp<¤ö¢æKý¶@U='láa$äÐß\Ve|!OÂ²Â<òë¬Ê;ª,Qpq¢È8RgMréi¹OG!lÊu
Deù¤®m@DÐÐUYÊø&õx¼3íô¥·uKÀk©ì`Íwíx¼3íôùè[t
"AróçedíÒã¾ÓW Rì8t°@`É~kÚ
DvUP?n6fü8[gýõmõÚáÑD"@D "XÍ"Àê^ÉwO?è.måøC[áäÐMráì0à%'á¹¨
x°ÚÕµË¿ôdSõ9ëè,Æ!RW'Èé4vhrÊ'¡CR0°§@x1íÈ+(äÈXÊ|{S"ä$«~ Ó&O±gÄwúÒxò¼x­éûI¦?|§¯ð0¢á@eÏl¶hâ;}mîVzìPnÈ »²i¨?;~üx««õsÔ;ÑÒÜbÍ'<Úé	
4È>òÙàô¶Ñ½öÚÓ¦MÛ'u)/÷¤ý!»ÕV[¦øT²E&MT©)ñ&NÐi|ºÒ0`}øÃ§vj7"Dà3¿RD#"D"oÎ >£¤µçÂ.'ùJ¶D`äPFaU¡C¢NR½ÿ G;9ö°/àä¡Ü2$xè(çý¿CîÃAr:A3u:¬A0¸Ü)<uÊ'ábC¶ñ­ºtUêí$÷¯îÑ\¥¹FÓVPs *¾ç^úÒe½È%É`'¡¶6
Ê­n«­d;1^äì¸*QdÓû/}EÏeôÒBhÅÿÐ
æßôñ,Z¸Ð,Zä]k5Ç¨1cÛ:PSÈxmñÂEUujäÈ	øýéO×ØK/ý«*zê¿ÛÀíöÛï°¼Ü]É~üã³§~Ú®»îbïz×áö¥/}Á[MJ¯¾ú}ô{m¡ÇúÎw¾it`j[ºt©}ð¶G},µ/ºè×S>hµ»îºÛ>ö±O¤¶îtißÿ}íäO'þôçTVA®·¥K+¿·¾¾Þ*·­Ì®N0qeº_@D "X`
Ð¯SÏ°RöP°yÞuG]$9ô!ìá=0ÊÒEF>ÔFNê'-Gr²\CÆÀ Ä¹¢×áË²./Ï(-¨ ÁOåß¤Ü2¶Ñ£½ÍÄ'B#À#Ãû£¥ù9³^wP·0á#FÚÑ£ó=lØðµæ±ÏÃ?Ôw§-1Î:ëL»ùæ[lç§Ú{Þó~[wÝuì?þãÿ¥æC9Ø>ø ûÚ×¾i{î9Í^{m¦ýøÇ?ª]pÁlÑ¢¶ï¾Úþçg\f·qtUºvØaöÄOìEaåF ÐwõÕWØi§µuõà'Ó>Ú A@D "¬ðc§ÀCNãxÔÁ5àQMJ
	]a,øIØ$©MýDÊí
óNWhN,
ÙÂ ¬ ê¹3µ##ðFGÕ1/Êè	¨Á$«¢'È3`=v©ÙAVºÎ£Ø3â'JjiëÌõeS/Évcl(Q²õ	[YµlI©clPJ/ðKv
CGÑSí¨¾Âj£Ç8¸ó'vú8
üÀø.Ú¡þs¥æîk,éä¬*Ë{ï½ÝrËöà·;î¸Å<ò]%MÕTÛ]wÝa~X©í~lÿûÝöÀ÷Ú%\lõõ| ³<
6ÌnºédÿÊ+ÿØáËþô'vß}³ûï¿Ç~ûÛ­®®¸^yõw¿ûß¤sï½wÙ·¾õdøòË/s ·®rÈA¾£xKâ½÷½ïI»lTèÃÏþ?öå/-µMþ-Y²ÔÆêï~÷Qöê«¯ÚþðGxì³=ÓFio¼ïò
K¶¿úÕoØÜ¹sx|öÙg=Gt«üÏÎ;ïd7Üp£M:%ÅF|viãäÉ[$Ö¿|V7±ûýï×!v	q9÷ÜÈD:6¿üåÏ»Å¨¤°Øé»öÚëìÄOè þ }'x|j[vüÖÂCCD"µ39>_c(P>qVÂ%ÂGÔ!áÊÂ?èC²]Ô¿ØÃFÛ¾jüÛX®l¹Æ6F>Øb[4ä,GG>zÑÀÈ5Xtò H¡½]d	.<e ]ó>zôUþ½X=ñ;}Ét	àa¾:ðjÒoú©©³ßé£§5øãRôrJ^ÎÚlgÚøüN_êF²åUÊØI¦àÿ=!»²¨v !oMwÊ'}hn^ °êêtxË[:¯öÝÃsÎù¾Í=ÇÎ8ãL{î¹öÅ/~Á&NàhTj7o¾}îs·g}Î¾ò/¾ï}ï±)Svu@ö]ûÞ÷ÎNæ#ùpEGnú·&Ùõý¥4üä$¹¯ý+¶ÛnSí'?¹À¾ÿý³ïäýä'Åîsn¾ùf¾S÷IûÁÎñ]º,@m®ÿîã>ävNKvxô<%ÓccÆI}(
2Ø~ñ_¦ö6ÚÈ^|ñ¥TæÏã?ÊÛo¿m·Ý¶©|ÿý¤?Ï>;#AÊ]éÒ>nÜXÍ»êª?¥ÇqyÜ5'~Ïc'Í6[ÛG¼ËÎ>û<ûøÇ?åv7'Oúô$J|ëw¾ó=;ï¼Ù>ûì]Ú­ê ¶Oñúö·¿ëºcû\ËÄõÂS}¿þõoü|>omI9"D"«"`VÓÚðlÕøYt±¡²>	¾ðy@è
ÇháÌ=ö^º#9P'%¯SWÇà±rÔ@
$P@A`ÛªÐFÀ§=`î2 äD=ªüå2Uùqv~§lH® ,|X ìÿo» ý{wFùqv~§lpV¼È'QÞû\~È]üÎr~ßéã'Ò\@º]óýÝwÞ\veßOãE.|ÏL'¬qÍõFªtÀV__üÐ<íÕ'Fivï·ß4ã$Ç{¼÷©Ñþüçì{î'w¾óöòË/`åýï?Î¿3µÔÛnN  ò»ß];tìÀtÒñ	ÐTòÄwì¾ño¥¦)Sv±Ýwß-÷ÜsO»ñÆ?Û/ùëT²{'"ãÆ³K/½,ù¿±±ÁfÎ|ÝzèáÄ:î¸Pqº¶ÓþûïçÀèÿ¥ÄéÓ§'`KëðáÃmÎ9í^jnnö¿Sñ^¼¸àÏ=ÛùÅËsºÒÅàQGio¼1»~G¥JqÂ®·ÞºvùåWØ{ìSjÙg}|wôæ'Ûï"2ýè'IæâW×;Þñv?W+Ç¨dp-- þ vþ U	úxË	S?Êÿ\ðó_v`Íñ}ëë_íÀJD "DÖÐhaÊb²ðD±jçixâÁ0$Ù@:2ü?ì+!K;ø2mèh1M®²|å<oNúèóië@yÇ:4Uä(ti#áÁ(«ãÈ1µ#
Ú	ô£+»
ìç<ôá!Ooømà·=£Ò³ß8×wþ|væÈ³2mü;²ÝÑËo4¥g¿ñ!Ô{ZSç@-KðhãÜíZf-+~ý¾¾Ãçý*Kð¼pGveÒÚ~¾aÜøuý{þ]>ÝÂùómÉâE	Í7¯xi/:·í¶Ûú£KèC½¥¥Åæ¹½-·ljôAMM~,/øYzTÝ¸«¯¾<=vxíµW%ðG¿*àIôüó/çdwìñÇT=òÈ£éGèÏ~ö{ê©§Ó#<}ö÷Jz%¶n¿¤)SÞjøÀñ¶é¦ìßüZæNÀ¤_Û3÷Æ<bË¦P«Ât¥ü`÷Þ{¯T;Íüq1ÍõvÜqðÇÜÝdM<1á{7ß|cJìD;¶d±z#é¬]yûùØÉ©¹v#FD"°|AâÆOUÂðsÌD»ð9|²åøY°¢ ²âÃ#ÉK>Õ&|^· AtGÑÀUèNé\9~î}Ù¼dÐÍÛÑ£- :ð£]6È98cQ?ä+5ôæÏýÛ_zÙþ¶pTúÉ½½ïôñ((»Õ>ù¾ÿé;ë·sìî6?Ù ·wò>ïdW°Ð'{MO.±_¼fM/I?Ù ·wò>ïd§oe>v: )?R Á¡þß¡¬-\° 
¹þ=µtT5¨*s¾ÃVþ³ìlØñ£
p øß;ãÿ¶#F¤§P¿îº««ôØ.Æwì&LØ'Ä4i¢-[¶¬>ß÷¾cGQO8á¸ô¾c}¿?ÂwQïl!Ïc¥úÐí_øR²Ã£±]vÙ%é1¦É'|òX%è3§ ¨¼Ð`p_y¥ []éJÇR!Åþy3§Ï~öóþHíWìÐCßá±ü'ñ,;åSÓq½æëJ;¤¹NyÞUÊå×¦zþx'çvþ'¸2cQiO;}9õÙðD" F	o$¦óÚØQ?Ø­þ¬ðp¤Xíð!x'©]ÚrYÚD}0ú$²ê¯ô:ä¹Á
YN0<e9PéLÞaÊ$,eÚÈ±G>e]tÉ%ãÅÔ&yñeOíÔÑk³AÖ;ØýÏÌ7ìÄg·]y2%Êðzúä`÷?×Ï·¾7Óvþø)Q×Ð'{içïª7lÑW_''?åFç­lÐG[:ß­¬õä4Ä_JÂ!jjêùä-·Ü æ9çü ýæÝYg}>=ù¼õÖ¢ïÝ±óÅwÿ~õ«_¤ïþñ¦Lv yäò¨£0Óì)=öØãþ²Cí=é¤ü;Ï%3|ïð+þ`éE, )íÄÍ¿ }×MõÓOÿTêsæÌu0õÎ¤ ¬ AÀÝ3Ýßþöâô]¼SN9Éø Ç3ÙIãQ×_|Ñþë¿N7Ãd\¼ôÇZ¡®tÄ ð{ïý{HBûÜglÃ
7'/}é¬Tç³ÞyçíéñR^DÂ£§<>=òÈcéå:|°xýõJß³LeºQèZUÍAßé+ÿÎßZlD "DV]À!`p9@B</ø9þ(¯"t'	#Qr¾ÑQ¹É°åN	CÝF(CHSÐ.öÔ9rôrY¯&òèB'=µ©Ô¼>:mÚõ§ÕÖ'B4hEF`®G\°Ë·Àwù=ñÝ6ÿäÐ%5TxxQÈ{¾Í¿[v½¿täðôVL?uÀwóvÝuÿ.Þµ	 ~Øù:÷Ü%àtÛm7Ùg~¶ôº*Ý&±O|â'd°\|ñEé-§úÑÔöË_^À×]wÝa×\sUzóW¿º0µýßÿ]bë¬³?
yCªpÀþé%(Tæû#°çÿSÿYCÓÛFyèbßY>ýôÿL²wÞyWzë&/F¹õÖ?ûcãJ/AÉ°ËyÃ
×&0Éïø]sÍµÝêyæÙ$Ç½ã¿¤àQXvGEü~"»uüã¥þ}Ê»RÛW¾òõÔüÉO~Ê^}Vãæm g}®T;ä]Å¨àZTá§øîcùwúþhëìí³kQb¨@D "XÁ(­aÁ"`òJø !,#¼ðÁ^AYáÚ¼ÚigyôÔ&}ù-
 ¥JÔ mê1*êØOç:)Û'3P}©Qv¤C?È £ASop©äPr-%äà_ÿÎCþÈ#x1¨';f\OÄK²¥poãÌ?×ü§	 vØéK Ïø¢Eªþ÷6sËeãÇ·Y³f-ÇÁ@°Øé9sféÑÆòöjê -¾gÇ£åD QúaÞ|vö =^IÞ;îe¥~£Ëc¦O>ùOÄ#~váå_)}¿/¨¤0¾â«Ò7sYvòx«(»åÄÏG ìÊ_6mÄ Ûu£îtßí]ýH; ÝÐì9Åz¢Ól<êÙ]¢="DÖäl¿ýöví5W³°;ÄØD¥Q|Q§Ïicvñµnið6A^:ärÂ5Èàa>ul@èh:òÔi§
nI ©\P!Ê8<êê_]:B»dQbõ· ä¤±lSW?}Úó¾¢OHî	VÐÊÀâ\/­Ø-ª±£F[ëf©§Ðpøý»üàx!Û·uú°Z	<ÁÏ_6B½7T	ÔÉNW}^ø¤|èÐíô¡Ã÷;£JºÕ§GRËuxChþÐ¼ [	ì"Ó?×W¹«IfmÊ»ú¾¾7ÞÞD"7ofh[¬& þÐ'¯ðÁ?Éx1ø,$ð!ü£öÈÁ\
]lÁÃ?þî¿dÈ!d!ú~n~ J¬S\P§ÈÕ	9C°¥Î¢C]Àu(ç#¯~/ÙT_'À!ö%§ù¶>Ã
ZX¼p±¿ð£!ý8;¿Wã?.¨ßä;}<ÞÙê/{	ZµØwßVmÂûJ/|Y£D"@÷ 85È{ lÔC¨H6:¥¶!åØ2úàù@BWI>dS6ÈËåÑGB¿
y)#®UeR ' y^WÇhËÁ1XH-ÉwNíø¡
»â©¿ä'd_ý¿-'²# °Óöû}+ÛwøD"@D "ô,@`þ ¿ ){`Ø	8«] 9F¢
B¾ìuTGY¸GmÂC¹ÙVîjÔGø%h*1¼"Õ¼xóÎÊ:ëÍIV:'ç25 |ª~î_þÇlPh'0èKÖ©ìõ;("D"@D ",pFQÀàx
á/&ü!\B] 9íæ¶À7'	ÐÉ®³JJ~BN»é[gþó~"(x¤¼3¹soJm8S0åT]D¢Ã"ÊÈCÊÑOø*cCòâÑúÂ£ò¬|³Íý{5¨èÅ#ÕÈLD "°úE ®áÕïD"@D` ØÑ[ü¡¯¢¡/Êq
<ááxÈh#G_:¤¾¡GþêÿÈPÒð?TAÔ:9zâQ&$ry ÐOÙ££ðòºWav
HVzî¹6© TMjkóCYFÈD"«Sx»jPD "D"½ àü¡]3®ðËñ6 ìä7fê'Ð}åÂ_Â?]á/ìæzÒ©¸sDt@ÎÔ!å¦!£Áãäz^-
PQ2èÁ£/$êÈªN_¹|RÏJYzäm¦ÔÔÅ¢±'á
ÙÀjøðfµ;$Ñ¡@D "X3" ,k'(ÃkPæÉñ2íÈ
É^gøGí²I]I} !CÈéKî_2êGîßER£êäð0¦$çÔ%/oO£COuä(ÃWÛ¥,Ûò)]éPQï6°ôáy?0Tmø­½úúÁÕ\D "°F`p\Ã«áQ.E"Àp0	ø*ÇðIàadÐc³·ä:òÈ¤ëÅR]íèÈ<ñ¥£:ºrâ©³Ôi§NA/&¢3Ê K!O@YmèBÈ$×)ãK ;òO
¶sÿ²/øòïÅ j#0dðÒW«rÀê¾ã7tÈÐÕ«SÑ@D "¬Ö\Yn#^óõ2að	åÿÐ.BG$¼×)ÃGþ]lçþÁ9²äðIY²¥9/QÞ)Ô¥Dè$'ä$À@¡:Agiít YuD<g%B^ NAÓ Ñ¡L\N(<ì@è8¡TMêêêl°¿ @D`Í ×2×tPD "D"ÕD aðx°
Ê9 þ(Ç/È¡¬0ø'çÉ¾³ð
<|a²tÛ°L	ÿàã/a$ÙU?eC¹«ÆS¡í(£,ð1J©L¬A»Ú°
­@°CvìÊ7uuÚÑe²ú:xE-þv#GìV."5'\ÓñaÎs¼¢§@D "°Ê# ü!¬B?À$02øG$ÊlL	ÛÈ¦prd%CY8>r$ÊäÈHvµ¡§þÁO$0¦:9Ddº`LDAË|^êL¹u!Z|àå¾Ä×@ôÆNÕéCîØä'ÔÐ0ü 
à»|¼ ·ÿÕª
1
VD`Í@MzäsÐÀAÖÐØ`ÍÍÍ¬µ5¦Æ5ÿØÆ"@D`D !\!óÔIÂ,j'oI;çø9°mu(Ç?¹mð)·!üEæ¡¦Â&:¤qÈWb
<¥ÿ¡ABÔ¶äÕy29BvöÔ0>í'°%û^Lþ5@Ú!úJY@zOè* øG6é1ÊÆçÕ @D "°vFG>ã±ÏµóØÇ¨#@D º'=ù~® ³)ØÌgÐFYX\¢_/ðb%§<Vl£Ñ§N=Ú±,_erþÑRV±  @ IDATtÐåøGX
=a¦$¤?8('`\Ô	xF)cPF© ÂS§ä'#Gì(ÃQáÉ?ýÁ²i#Á£®Ý>ä3ÿ4E"@D "D"Êài8§ÿ¨N@+o`ÿ?àà	ÿ '¬ÚE9þ'üB_eÚ°I] ÔáË?<ôJ;I#<QÒ ½øäðqlnÁBèÐ.Ûê$zê(ö'¡
=%ä¥ëÅÔ.yùFV${è2SßÚ¢d"D"@D "D""  Ë9HÂ:ð)=Ä£½3ü#.RÂ?WÐþÁR%üüK}HþÕ^	þWbÐ1F2I|rC0£]AðbI_²Ø,ïº'ÓyùÑÀÔøÒ¥LBûðs(YÚ"@D "D"@§hûú»098B=ÊÂ@Â7Â%.åâtÁ@²OÙoÙßþB§Dê¬8@îD|µ!OY£é6ÉÊ¼X²	[ú*ÃG:eÇ>yOõxgÞ/vûè;¼Ü:A>G`Ù²e¶¬i555YK)N³>5¬0 Æ7'øþáÀº6p ¾1°V#D"«0Å¥?ÀP¾Ð£,¼c
ðØIø$×Ïa?èg3åòÔöÐQ_ÃÊí¸H;?É@^ÖÀÉÕA:E	maRèädG.zú^Üô°I;¹ìz±)kÀ)(ñö:BÔhhXjK.u §S¬?¬ÀÚ>4iiáCeæWÀZ2x°Õ×^{#D"Uá#¼#ª?gÀ/ð¡,üC.Ì"B;IÓÀÉºÒGÂUIÒ¾§'á}¹O¬ÔârCE(¨ÉãÈÌr9däTeué0ºÈ!·{u9ÿÈçþA=ÿ"AÞG×ß/Z¼8-N{o%4#î"À*/òh'aC¦éN'Ú#@D "Ðh{Ô!ð L¦)OÈäXGF;'Å.öË#';^Lòêì	ÿÈ¿p¹xyÏa<'% Cí8¤£$vyÊêuä!éPgøÅ¦ti×c^,éa?È¢Sî}%/¦²®Ê'EzF_.\' Çz¡ô>ì Î?ÏaéIÿÞÛÍ@D "è}Z[ý7`ùB¼ÑæÏ_ä·Z#74Û ú!>Wµ£F¿>¬þ ³@àa
áø`øðàÐyÈá©]vÿèW!mÚ!Ú'Ã(ÿ²,eì¢û'9/`*ÚþHªQÆ	ÎáÑA©@8älÚr¾:}uØò:íø#ñø'¹HA¡=ùGèUôõ*l¡è·ð¡Ëpð×o
C@D X¶x®-Y4ßÖ¶ÚÀzÿN¶/×65ÛKÜÒ m±ÏÕ¯¼úª3Æ6Ø`£zXíÄÁà	!þ¼åø'Ç#Â<äøü~Ã6ìa?Ø'GFv©hÎâSPa1ôá£#¬ºüc2|¡Ôè¼D4b@ÔQêy'/£Ð¼: :zðD±¯ !Gb`ò/]l ùGW¤¶¶m[ñ#Tï¾ªBB®C®Ç @D "XyXæO<-óµ.uÐ¾6Ucuþ=l^Ê5w18syæ+nÛÎ¶Ù³gÙôéOØÒ¥
+¯£ýè©íÛa
LöÈñØB¸2xE²^,áYrü½îðíøÏñuìðMþñb"dÔF9÷_Hø_:òbHe29Î ?ÒÏmÑiHmÈË¾ì°ËyØ'IFúÎ*ÉRn¯ø7ñÙ3|@­ö­o~{
ïôE"ý!C$CKð	qÏëqä=WìL£íÑ<¼Õfï[c
Øà§Zmü
~KÑ]¥3Ý~â9ÒvÞyGÛpÃõm¨±¡¡Á^}=öØöÒKÿê'/«iè7étc®>Ð¼¨¿_ÔV[[kuu¾wÑ/c|aá}äQãææüÕ+ýÓ·Mn±£woµ	ã¯Ù³3kìÒ»kì¾çø1òK¡úCÔ?ZÉV,Y>TZºt17
6<½`jÏ5ý}ÎåÃkØz¢-8h7kÚ`?GçËÙV«i^fµ¯Ì±¾Ïê}>ïuy=÷°»î¼«ÇúMþöò¯¼h£,ÀOµ¾¼®õ®ÎYÜdKZlh}M1]¦ÅÛü©q`Ø¼¬Ù}ö¶Ùf[úºxH¯hôul£Ý'ÚØ-Ö³¡ã'£g-'ÙO½fÿºçY;cVÿ8j¿]'«FÎì	ßPÎ¯p
m$á(Ú©K\rØhmM>ø§tséª\<ìAÈÃS}9à $ÊrHõ«À"m$uÌ¢H ©S5Pr<øè¢}ú¡²>6ò~ªyRòÓßîðáÃíóÎvóf<åÔ¯ì?x®Õn¿ã¯Æ'2+÷ÑÇ¼ÛöÚ{/Û|óÍË§~Úzð!ûõ¯.'& ì[ßüÖ
ëößþCJöWøãíÜø{BÄçýï{¯MÛwMÞb¤:ý©§ìöÛn·ÿûÝ%¥øôÄfÈFÞ,Øi§ÓPî¾ûo½×#×e¿¼í³íî±À»Ô4¢Æ7ôÉ V[²]½:¢Åê_÷Ñìèkú{ÕÝ. =Ûn»µMº«[[Aým¦l²qJÓ§?m÷Üs¯¹ÿçw½ðL÷ÆÑ£Gû"·è¼yóæùüWZ#¨{}Îñ;vìh¹ `­'©777Ü ô.\ä;	siîÚ`õm¯½ö°!CèËÄnÅwÞm/¿üJÇ7C
ÑZcÿy`³}`ÿkiôcÞP,ï6\k{n5À.¸±Ù.úk­/¼Z}Öv ú8vÿlÅÞþóGüR£ï
®?î¾Mäe~-$·ì.-mL×ÁsµZBö±#I·	7Ù[nn{ï½·ç[¦kñ7Þ°{ï½×þú×;ÓÎÕ1ãúÃY­õlÖßãÏms,ø2ðÀ@kÚxsÊÛ­îµÙ6îWZMÚYë`b¥TÎy-b	­ÎI³¯!P_µÈfÎYjC±ÌöNûªi-à@M/_¶×øÖ_Ë²{þùgmòä­û¥¿Û¾w7ÛdÏbí¶î#ÑöâOÛcÜ7÷¶¬Á¡OAr1¨^¾e(×£ÎÄÊÖ§&úübbE»à(ÕáÉòèêñRÙA=êòíÅñhGVzÈ,ü$ÛþÀCQ¦L§TwV"ÕÑÓ`Ð¥®$[Ø Cj÷b2õâjË¯A1#`Êý×ê&W4õí¯@Àç=«FùÍzÚ>{­ð÷öw¼Ýþãã3Æq Ñþ£þØvÚi§ÊVðèSìñõ7øã'zBv¨ö©OÚ#ìöÛïH	} à©§~ÐÞçðìsÎµ?ýéµ¯}õ+vË­·Ù-·ÜÒ#½ÞrÊÉ6Ð?áüéÏ~ÔW¦ïîúË'ãÆóÝ×ßP¬D,àê7ëÙ¯ÁøX'hQE;'o¶Ùfvÿý÷WlfåvØa>û·ZoV¹.ûøù]há¶fó«³a·ûýÜÿ·¶øâeY-XkË6óÛw¤æV«ªÙÆ_ë3õãSK¾·¾u·ÊjãN¼y%7ÜpSr½iÌÎ[ln»ì¼
`±Í°ýÏÓO?ëç÷	a?ï?éðxØÐ¡Cüe=K6ñÇw©,Xx @î3ü£ü"^?vrößoé5ÿ.ÒziÞæ7Y!Ú ¾³gÏ±ý÷f¿ûÝe6£/y£«'v
ªOÇ¦':dkh':è;ljm¹¿Ùù/.²F±mF­ã§{«-X8×¯;ý]í¹-vÓ£Ê}ÙæKùJæzÄûÈÀVÛv½u|¥Vë`³Ám¾ÕúvMþÒkZ'ØË¬Îã¿ðgÿcÍZ
páR{jÌHûoV~ý@|4Êè§>õ);òÈ#ûíÐN8ÁfÌaßøÆ7ì+®ôùMúÁkaÐ÷Ú§OµÖ¡þU­'mñãáK× µ<.ò¦õÆÙÌÏ}ÀÖýêÅV³> êjPçÍ¶êÅÍ6é2kôù±¦¦Å.^fÃ|3¢Å¯Í(<O%?·ø Àgk­­±uF¶9o¼ncÆùqïMùè~6~ë
ºµ ø2vÝwþ­ÝÊV)ÀQJGÊsÂÁdÀJÃöOæ(KFíaÁB¨ê¶29öh³Tjwv²K.@d)£KÊñrj§L¿¨CÔK0+'9Ð@d>òi§­Ä§-·w¶3ØGv:J:
À£L;¶|/H²ò_jèK¡ô}ò§õÅ\tï¸ã/¶Ï>{Ð
þ Wg|ö3©¿×_w]öûË|aðtªú>æèö$Ó§u¡>Åþ\ßyíoðÇ¢¿'¿Óè;ë÷gÚ²ã?Ñ^y¥ã'Äl°}÷;ßN2,n ÕÒqÇA+øtâ	é(à·¢}äÃ²¹sçÙï.¹¤ÓpðxàG¼+çzùåÖãYìyä%7ß|Òø¼T¬Ó!dQäXqÓ/ì\!À¯Þn·lãÆMr§?5½[J\\½þ÷¶»
;}sñÛ/d4øB¸ívÓÊâk	·¶äYãõ¶øéþÊ}'ïd§¯b÷`öÔSÅ|[N52ë¬3ÞÖ_½ôHéV[N¶aÃ&ð.ÀgÒ¤	©MOqTc³'©á >?<ÞºÃ;Ø;ßùÎôH ëÊ+¯'ç{®ÃÛ\%_Îd ØÙ~ûmmì¸±6ÐèàÁCÜï ?§xg/89*ùæ¿Í6[Ù?þñhg&{Äg'sï½÷L@yþtE-ÞWæÀg~Æ®¹öÒÜÔNmîÐ·`Ë»pÛFûÑ5vì.'ÛÛc#ÇLpÕVkZð¬-}ú76÷«í'©¾óú÷Z»yÈÀÒ¬KûÝ4.öRä×pK_ÄÍoÍ3^µ!>×VZÁ.ùÆ×m©?î¸lþ÷[Ähñzã}7PK»nuÑÌ2ÆAäw¿û]ÿðå­éÃ&úãÇ]Ôê;[&L°þô§þèç0»äßÛºë®¯æ>å³N9ÎZý
Æn§Ï7~øIo¿&üãV­"onõ4ßøÄ6þ»»ÂóVÑÒE¾»î}ã]ì spÑ¸!Ãl¨¯¼k½ß£~\ù\¬ÉWä\_i8|.mn'©;ín{ðñ'sX[[	nÈjç9;}Õ>Y@>îü/ :­Ç.À9þ¡½8xEN=Ç<aè	¯p¨Kºd½ØHæ>é>ùF7?[ÐË6d úØÊÂtauÎºRL¤k ÔIÚÇÊØCvÇ,«vxøAA/Ú/&Ourtl÷*¾þ¾)ö¤<Þ¹2Àãf§bWíúë®ïÐM  »{<6³cÛ£\ú©Rú{ `¿e=xÄø°ÓW¾J£½÷»Sy·ÝßàqÇ`¿½è7	üqÿ¿Åc9ð{}æë]¿C=4}÷é²Ë.KÀóAÃþûïg»í¶ýíoÅ#GudÇW^yUëþ4 îK.MÜs ºáûU xÀÞå_}~ýÛ¿eÿû¿wøÐ¦nw:Àñ§ªì±Ç[ý;k/%YÊ½~àúì5ðó;H³?'°Ì?|~/²üvÞZç`À÷dw00-ÆÈ¸óø÷X×M]ï?|§/¼³;£S§îÒ¯À`·ÝvÛú£m[ÜùÐúN*|2ªL°iºØû×¿^Nß?ì®¯Ýµ{xSh%ßg}ìO¶ë®».í²lï ðÌ3Ï'sÎ9ÇÁçc½?Örå,JYÈï'ÓéÑÁ:_Q£F¤XèòÔ óóÁ;noÏ<óÜr zTh5@÷¤Iüuøó;<ÞZÉÇþ.îäéJ:]òü³¿'l/_°Ï1ûõQ?°#&ÔAeÐ¨É6h×¯ÙuvµæÆ³ì3¾Õ=bN]1Æ·xúHìòÍ}ôà»?ÄyéCÚ²Ë.·!¿ùµmò­Þ?yíýÇÚÜ¿Þ Ä M6ò]£Z[òÜ~-jØûNpü-k'~ô£	ôak±ÂÉéLïTØõãC¾W^y=ñ{/¼Ï=>øXjÜg±¤õ,@.Âi÷`èKã¦õÇÚÒí&ØàGgx}ÅÓVp>Òµq#øÓ@µþxç"6¨Îû¹éðA6ÆßîÙà 9]Ôþ¶Ï9Kí%ÿîß¬%¾Sè+ñÚz»îÏ±á£GÚâlÄ(ÿ.ciôñïÄÌ®ëùcN÷¿öXÊó?ìüõö;~
@`	NðHN:9È9)³äÁ1èQÒ	pÃ6uðNqÛý©°rPî:v+ñÐËm"+ÁÈINà©cq1é(×ÀpF;z¹H^ 
yø',¹ÚU.îF=÷~À}¡Õ
ôi,ìè±Ïýü{W|§ñ³ÓWúÔ@Ùª }ø þxô3ßTßz÷ä±÷¿ÿ}é1¡ÿúïbG'+Èð((:½%váî¿ï^{~Æ³öøcØ¾ÿ½¦¶Ýf»íÖ[lÆsÏxL²kþtß¬dØe¢ÿÔô'í;ßùV©­RaÔèQþhÞIþ§§Û§?}z1ôéöè»"ÿïEÞé©?·ÜríºË.©ùñÇµñþèæV[mú	ÈÞòM·U*óçÉ''k®¹ÖfÍz#-F§OòQ£|Omwß}wØ,Ô®½öºtç;P52o¾YZ ð(.;<Rz7E |O?ß?øï6qâD5û¢nôh/¯³Ö_};þøãìÃ÷N8Þvß}÷,Í6ÎÚÛvÛmJí»í65="ýÐNµ.h;ì°½rÊÉÉ&W7Údãý{[¤tw>Y¿ÙW&QÞÿýJíÈözr}ÛeGoö~­¶të¶ØÃ¶h{³ù»;ØÓÝ
,þêýö6ØÛ|Æ÷ ûxKOs.&=Ñ-å÷÷Üó­¨ãEÛm·u:G8à ??èç.çÙÁéuì[o=ÙÏ×)ö¶·íæ»TÅwáÊíõ¥¨¡?Ç{]tÑEváÚ_ï¼ÓÎ?ÿ|»ãöÛýz8>íBè°ÒîN;m>Lâû¢l¸çplÚiðèÓøñãÓu
àZÞu×ûî8Y¨±y~¿~Ù
yíµ^ë&ÍLóZW¯÷¤cK6j±Sô½¶ÐNr\}þóqûÁ9çÙÌ3m¦Ï{ç÷C{ñçlÈ[²úm·×jÚ{6ÛÖ,áúFì-ñ/k7ßÆø½dàØqVãß%]zïöÊ³×ýÒù·ÿÕwü¥!O²M/¿ÜOà8Èwxä³Ä#ìösô1	ØÜwß}ö÷¿ÿ=Ý/8èócÎS#ì:/öJ1ßvÚi^^ÐGï¾^Ù{Ï->¯xjm`{o{ogLÜÖ¶<ÂÖ8ØËÛÙÖhã4¥©M~áASûì¿Zþ¢K/íÞyyâ¸a¶þèaþç@[ê¨îeÿí¾a~­l0|Hy
M5¶á:Ûwã!6Ö·x[¼ïþS¶Þºã¬~PïæÐvúRþgÃáëØ1[åJÔn%Ù
<°'Wçg¨{tJD Q
þA¯ÿèäî+þAD_ðCYþà(ï|dD'GNç!:Qu^²¹#ü(sVÒÃ$=øJ²I.ÿÒ¢DäàÉ¦{N«+èÓHV4øÛ{ï½+ï¬DÚ«ÔÖ<ÙØð'ÓÛîoðÇ¾«¥iþi5n?ÞÉN)'d6m]u½¯í«>°__øô(ÔÑG¿;ñ0Âåø}z1ÄþðG»ë®»|a·]uåÉÇ{ìaûÜgÓMíüó/°}æ}ï}¯yÄöáý÷·¾@¹øâÿKzÿv+¾ôÅ³þó/¼`¿úõéæù¯|ÙØq¾þõ¯úËö²?üñvî¹çÙþxäÏ~vAjûÑsæÌ±øBï¡Nü<ÐöõãèE>úhZ± c¼ß~û¦¶Ç<Éå/`àÑ1vÆù£\Pµ2-þV~~é²² ¼ >þò§Î'ÈÚÑy×»OÝzëmiÇkgÿ.Õ&lÌ­»îº«ýÛßîI;
¼dÇû AãQî±óñÄO&`Éqäq×Ûn»-õeÿý÷K×¤'ÿëÏù9ß±ùî%;©ìsIßsÌ1¥vdÑÑqên=¹>³åÇ¬ie§~#î·>ÒÖ'î(ðA¡â_÷J
ü]§µï¥®p÷ø~[ÐøñãÐÇOcpð¡sÈ.þ×"ç5ßÓ~÷»ß ;«ÓnútöG°ÁµÃc'Oöë¹ÆÍ¾Ù{_XdãïO×\À×Fmvxïë¸øÝÐÞÖ[oÆÊØØ½Çßõ×ßàj}&¥ë¯¿1í2N81=ZÉâ»í¶IÆb£oÔjý-óýÃ¥ùóIó;¤y^'%¾#dø ªüqóÞöaþ6þè¦?Æ7pÈpûèÇú&wÍ5×îøË>÷-Jóß_|·mî¼ïf«_ï$kZ:ÌÿÍvÐ"=aÖ[ï~Yù±nõ£fïÃÐÝ§ÚF¿¿Ôê7Û4-Ò=ð°Í¹ùö'¸²ÙÛÀ?¸©ÿys­Î?ÛWbîàÄ#¾<ÞùÅ/~1Ý8·x¼ Öúw/wÐyñÅ'Þ®»îî¯©Ò?ËÆûn_³/Iü~»ç4Ûgüzöç³swz¿ÃvåË/Ú<M¿Ýù ku9²Më÷³>¸¯ZµÉ¿ãÉÂ 
ðØTkkjÓ÷õÖ6ÈÖó4np=2{¾ÍXÒ`/úwþþ1·Áþ1«ÁåØ&Þµz¼ýA¾ç¦?gcFK¼þáíå4¤®ÞNÝá=%6exåTI·\¦:'D9þðQÂàÂ$ü!\Bçüâòz'Ó¦ÜIF86HzòM.äªK{ètå=úP"%1ò©#rCãYu^^ì³ÎÓI%AAÌ;¯2¶HèÈòÒU hÇlÃ÷9VïÇ7kûDüO×^Ý­!ì¯·}òöÎÑ¾ëR-içï¦n©V¥K9]ßé+æ1Ïý"|Ò|Q^ÞÚÔ×¾~ç×WKìjÜ~ÇËçzæ¼å³·ÀïSüDzÓÞ~ûPzÝ=ng~þiwEåI'â/¹5¹ýì±Úv^pöO|Ê®õGªøDÍLÿçvÐAÚþéf%zñÅí#JMwù®ÚôÃôØäeý!ù£ýï84µï{ß·zÀ>ññÛM7Ýl[m¹Uú.Ç¿øåts½ü+lÊ)Iö'?9?íñ¨ç÷¿ÿë¿üå¯ioN¼ G`Oh_|ñ¥ÔÌ§õ¥ØÍÐ.I52£F¶INØÆSb³3èªXÄÒg;¤þsºÿ6dñ]]vÙ9·ßû*÷á¶O>É¿ï'ci|ø¹ôÒß§GÎ(oã;ºT³úÌ3Ïã¾ÌqÉ`?ý8|ÿgÛ§O?-vPYÄçô³ÏNU !»<âËV*÷äú,×çÑÍoø
i#ßÑó»x%JçùBG=ù¤{ðÿ>Â³76h±_s¶ú£L5Í½¿¨/|0ÁwN{B,Êû8ùà°ðãz\o½õðÒ£Ó;ï¼sú¾ÝÔ©SíÆoL¸ ëKïþèB²ÁB¾pÝò!	e®åôo}ÒNLªôáÏ.»ìÀ-óä&¼%-æöïÏýò¬þÊßP½õÖ[ÚÄ	NðÇl§»Îl¼|]uUÇs¹¤ÔÂ"¿WÍv½Ä% ·ØnNg])Âì@s&r+ª÷y'úùTÖÚàÙÀÞ2bC_Lùû=Ö|ÀMìéÀ0/×Õ²¼uØ[¬nàxÿjÝ+6ÑßÐØWJÇÝp¹5{ê}>Ýø?Ú¿N>ÙîûGZ¸ÕOÙÁ6úõ¯lð&ZÓ¼9¾Øôz?[¼±÷½àMµ|Ø@?xàtîó¨1TëJs©âÿpóàÏt&M'^¨nîO*üñ>÷GVý ¦P¶Ú«nû~àÑÎûfùÏ¸ÌmO,\lO,^hØÂ
°ÛG|Þªé×7Vè\ÎâþËAjë'çb±oõG<ë¬ÙwNùñØvâºöð¯[°Ûm0Âo°ç6ÙL<<Ä÷þ65ÈÖ4Ì}tºMÜªx43wÕ]Y?ÙË}hÇ@O@ð¼.ÊÅJ?÷ÐYU%ÝrüÄ!*Â4^LxC'Q<'-x)Y=rÙÃ>ºÈâ?÷IY<á%ùËí«,yd!ùOå¤NCêêt¢yDF|Ðóèyê$äÐ'¯¦6rø$?ðd[$ü§>ù5¾R©CtWªçÂ/OV×þw¹Å9x¸ÇÑÙbÍ{¬·º+ð½ Øõ`pã~?BÇ¢N o~ëÛþXÝIöS<ôÃóìænô£[ÒM®«Ýþ\¥G(©lá ·l²xÊ_TøæMh'Np)ÿþ?º5p`=ñø£ví5WÛ¾Ó¦±+¢ì
Ó
7Üè¯V¿3=ÄO`!ÑP¾ëF#àªF7íi.)ù'JúìþUû¢
ÌÜ¹s}q½«?Îöÿ¤yÏ'ÓÀ£^;\øàÅ4|D¿s É®H¾èãÈG}'ïÊü[<¢¶ºãþÚ×¿¾#¸;Ñq-'	ô6­ôÛéM½þ_®åo°Lwà&Á"| ðÆ9þzûo`oìµtGñ6ò~ ×_Õ#+]}èÕcPäÚñâÜáC®iævÙdoy/úý|ÄZ§ïõÄ[×²û|ÂcÕ'rJÆ}8Åëû.÷¿~£ô¹¯ÄÅ&Ì| ?}h$ y¾ÛÆ[NyL¼úÊ«ïK? ì®27Ìãiî4Î¹)÷²¹ÞN[Ïé·ã_¬üüö¼V-å|4Yl;Ä9}÷­XLiõØ±sm±oÈã<ÂË­1ÎÖûñù6|¿}lðím]ÿ¨fÔºvXÎùÛ?=Ãw~y½7
Îèª«¯JóN³ÁYºg¹·ÎvÏ¼é{îI÷>¨á­ª}&ré
 :ßÅ[Àã³m;z| 0z[[ú@Àß4ì¯ÍL²­þ(åÊ#
G'ýj_'þAául1CmË1#ìÀ-7²©·	þFØuü{ºüVãêmãQõ6v`­M;Øúo÷Áeuþ¯ßcûÙòí¶Á°åíÔ£ýá#Íw!pàdtÑÀÏÛø¤$Çé®ÑÆVùÿì]EÙÆ'!$$BÇP¤K*¥Y@@z(½7©JPz	½) ]éÒ;¡PÒ{ö{ÿsïs2{sûÝMvÃûþöÜioyöó3?zµðÅç
Æ'Ú"×±²â¢K^}¢¬øÍu fò/2à³F4u `ªÇQ&8"Ð NA #ê8zèSÒ_Êü1mêyÄ¤¶4>»ÍÖ-Ú<Ù$Nº+±Ü°î ¶JÂ}}ììÉl÷û=öØ*TÝÎKÆÎ·R³~rù`gOôx®_£²wþ<öï\j³ZWa«U`6GÏì«&&ºØÔ#L®Ï}ÎNøs»Òñ°ÙÒ·ÜbÛ¥ìâHX6ø_'t8ùh¥í'M±LN6Iwì±6µr`è{î6Þdpl¯åE;t¾òÊ«D±!7Ü3Ã0»Ç	ê#FÄb5:di	¦|ôêmkMtÍâ/OBÙm0ôû%ùÁ*l0³êª«Øeìþ½ãÁ,}ÓIõäj>ùt#Âð¾Úù®µÖqÚzë­ó×\sm<YIû5§ó,Gæñë®»n¸Ùf5Eî8±ç>?.* S«ÄYZýÃì1ßèi3ãí§ß;¡éh÷1u²ÉØ©ËÙÏ]µfAî-
Ýìg,^roà$ÏÃÙµ7©.ýÌ9Pø>(©\¡!}rEmvÏK!Y,¦.
ÓP-(ôï.¸ zÊ)ñÄûÂ/tP¼(rÊI'ÅQtèýmT¸hÃÌß|¹ø²ÜrËÆ{k_{-·||÷¢Ã÷$à{¶!Ï£¶Äïj0~]2b7íù+@Êÿ^üiNÌvê¾þ¼)|úUS°ÇÅÙ{`º-%Ã×úÃ¸§Û2H¦§û(L²­ø{ÏÓ%¼c'ó
¿ Sìå3l3¥)_
M¶Èn¿3Üc«?&6a½g
c³möÄðYëk®iÊVlrÈ!á`[ÂLßûÃÞ½í¾q.ò=Åw5+d¶°ßÌÄßmNUsÈÄÇÅ4ÙwMWt!Å`î4ØÀ7Ç½Ùû"Îøåt°å±³Mèýÿ:r¾4Úgÿ]:¥ïX(1yÃè¯ÆA}ºÞÖåöùìaç¢<æaê¼SÂ>ûÿ"<ûÑ6kúZxsäØÐ×QðpvÑ'¹å­ûÇ?8BU1=ö±+ÔmÂÙ ó} Èsývzµ£ÏRòèIÇ²¢^úèPæ
Ha|ú"ÿö_ìiãH¥ÐglY¢BzÊÔSVõª¬!Ô©³Ò#¥£ÄÆê-í±ÁzíØ"²§,¿èã»c¹ak/+\iùüðàöÙMþÊu°éã¾¿ÞAüxdC¥%|P|¸{K-Kj©1Ôê§cÇNö¥Ççº²°Ìóÿl¶÷×=a¥¬Ðaç¥]^J¥l='!,SÉ@Þæ!TsbÂR¤g}Î6nXßn^_9¼òÊ+±}ë­¶²¯ÍÃþ:êx¢·ÜwW?òu6f©G8áGòûß_;3çälàv²ôQ¬ã^¢OíJù;æ6³a(¸°dfýÐ"ÜkQJ8áa¦ûßØäEÂÅÅì^D¤
a?ªWö«Õá/'¢°Â0KUIiC o\¥çd^Ðvi{óÍ·b]z? ÄÍaÁäà»
ï¡øñ?c¿|(ÚòÂÿ$=9Ïò-~y¸0Ç¢.¸l©ik2ÑîgúÊvHädÇ8 ìè««ïDÏg#b{U~÷ØtÛ¯ëöa' {w
Ý_æ{Ö
>-L^ÔNJû[û±Ì)þç>r¶<Â.þ¼kå¥«òõòË-ÿå=âsÅ-¶Ø2<òÈ¿cKß ~o¾ùF|¯s§¥g:`|ò^æûÞûîÏSÇ¾C~'é¦áA[b7Ê.Æt·{Ït£l Õ¿ÿñsÍ#÷ùvØÁ¶AÔ3öÙË}§2~¾où~aYu.:µ°©DUå>ëÄbì|Öú\ÙRýìýÚ<aò²SÃÄ¯{ïÙ½CèÓw~»}­ø]ÝÚ¶ü·Ítv°ÏÏ/¾*t°>&Ù=Ì[ú»ºT¼ÂúiöYb w3Ò;ÙfUçµßÄ3/>'¸êúpê¨q¡§mêR³>Þ6Ïð¤=+®áQ<}§vÿWHîý÷ßo»@ÛA"|·ßcKÔ7Þxãø=ÿÞ{ïÅ÷iÿþå/&.f;ÙoÉÔ¶6NU9HìôØHVn¼öE$vúÜ¯0¤s×.aíÌÉÓøæ|º}OöèaÏÖ4Ö÷ÚpÛ í«Ã¼v|Pÿá{Ë.>ýb'Í6×l5Ù=oØ.¨~2.L²ï~½ºZZßûgÔ;7#~µ@m=çð
?:óyÊ|é$Qÿ-êõ+~¸üÒÊøÓ6|`#ÎdÙ§OéâÅÂøäÀ|Y6ãGò-_'EÁa*i@
\Ñ#:ê8å=Úêè:JXjW½üñ®@_`X6tñ¯¸¤Ìði°è(>©ú¿Ì­\·'Uò×Ú¤Àn½å¶°ýÛÇçô½øâ%wöä¾º-¶Ì}y^uåUucÝ9a÷¯jän;ÛÎüãYaÈÝËð,?ÞKØÔ#×^;4îÂyÏÝwK.ù«í'·A`³Gy4ºã^°|ßtã
¶ÄóÌÐ×f³GM@Vfø /r°|¿7Ô
u¾°Ìs³Í6µm×Ï³D±'L¯:4zzÝµ¶!Â"á0Ûàc½V\!È°5<2ÂNW':v*½ë®»ã22û0Ô¡ ¡åq2ÓÅ®s,weæM>¨6lX¼BO;c<xh«
`ªÑaÙ³M6ÙÄN~3
ÌÔA&µd<úÏ3¾¹Ïó«¯¾åu"Ì½,ßÄ÷3Ï<7`cÑ¶YÂ-ìØùãoi÷ü/Þo²îºëÄû ÿ¿G3*&/ô{°¸ Ã	3'­KÇÚ¢°1ÍÇÃ?Ë=ùCØºÅ¬­áóÙ¨tûÐv»Ú6ÚXjzÆª!{ÞT¯çíÇgR½¶«òv9¥[êimvrÓÑPÕ÷÷©ß.TùcY¨Þë²m$HèÐ½üòËñâ3»îºkæÏË?Ñá3	f(2­Æ2"=Üc¹ùÒÆÊÅï­ú½H<8p`
0ñYCAË/¼h¹Íã,"ßKÜ¿Å&7?ÿùVVQ@>øàÃx~þ÷¿<Ì>;¥h M¶±ËÐÅÆ;Õ. q¢RN8¹édM^r§:å'+·uÿ¬cèýTÇ0~Éáê¾
+-;-üxåÂJ+,stn&å«koí{¸_·áÏ=m[Î×¨0Ó7ÆþãmöjY{äî]Ã=Fúë!}ô¢¸Æj_¥â¯|w²ùüóÎñ]Îæ.z÷yfÓ#.8\qÅ6>þ^Oý;ÚÊ>g|ìãMxÚR;uµòñ/½aß5Ôs*ÂfÙïzl#i
=6ÝÙ$]ºÍ&Mp!e£vèìÔ±sxûó¯Ãt[º9Þn=¾),j³Óí;²[¯Îá/G©ÖýE¾7(tÙ}áë1p¥,¶Øaæ¼j+§#y¿äã*YcÛðñäàé"O·êAº|l9hCÇ:²Å<í¼¹DìRès #[¥øC·Pßª²zÙb/}ÚcÀÉ¿H!!"f*ã¡ÍÇÚ\Y¤OìH±%U,RÕa§x²UùA_ýS]ü2·ú¤­¿ÙAú qÿùãNqòðjÈ '³;ÀAøÒ
U>û¬±çèx¾°ôiRÈmìQ©às®ýxð ÷ë®»&}ô¯#YHwôd¦bÈ2OéM=ÂÎ!{ØýQ\p~|_3'ç/÷îFØÕë_ýß¾ñ>vÿD¸b½ãN»Äü'd^Í¶¦Î-}Ï'8ù«[Q§_ýß>áÛoµ]A·
ÛÚ³ô j,9¼öÚë¢:8\kÏfb¦¡>0S\ò×¿Ú{ëOá÷§wXc|±-NPy:÷ÀA0%¼ûìdAÂ,"BnÊ×Ìutu¯=£¶å[bWáaæ~½óÎÛ±¬6±aFU°³²|ÑOf^ÙYÕ
ff=÷ÜíäbµxB'ù?þ8Y}ýæJ¼BYdÑl¬ôÌ ¶5/3~ÚäbiCHµ'ÚþóùlXì×ÁOzÚ¹VàÈxøúC÷ç§ù'Ç=,cy×î:å§¥å÷èý÷?ïEæ9}ºï(Î£¶µ}K
'±úlñü<fé	C>úhxxýõ×bN±é?!
-ôÂûmú]c3
.Xï3
³¬xÿýÊ8ÛEaÃÞ³ûÌ¾1ëÉ÷X ô÷$Ëêa÷]f{g¸5Ò62Ù6WùäÓ5»i{Ìì}ßçÅn¡ó¸aFïÃÑv
Ï¿=)l¿Qï0`a»UÀNß&½ùvl?½å®0¼ç"á®ÃsÝZæî<¥k/Û%Ôî¯ðÜÓaRßliûgúRðj%ä¢Ñ¨Q_N8Á~«®	K/û^æ=Ç=ôØ=aiþwþÃ.,¤æºÓîï¾:Ù=­Óì±?¹Ób¾ãs¯ùÆ½@­[>ÿ2t{#wÎUwð»õèÆú"öÏ§Õ¶"8¼g³yó5uý;w«Û#¾4røõ'ÉáÃÑcí$|ZoDüÉOÇNS>óõ°[?fñ6sÈ¾6³\|óÁaøïÎBþ-íLýcm=b__ú/\M_@ÐàªWºäISá>³	ú!Iu°Q,ËF]Êª#Å!UYñzùR6ÄGöLR*)«S2 LQPô @¢M: Bu'åêhÃ'ue³åÒ¡]T>ìðÁYÊ©õè\¿óÎCº¾þzòënõ
K±'Ó'ä§¥vï¬µ?ÚíS÷ôµäòÎb}ÙÀNª;þØl9H¡ÛMCK=ë¯P¿²îñÛø5«V¯¬|ã76+3£5õÌTa÷3a ÀòNÈÞÉ§Ûò!J8f?XÅ«Ø¼»7åMvÏK
[BXâÉÃR÷@0×ÓÄ'P°¥=±ÒiªAàÑ,»ä¸0Þ¨Q¥g¿ªÑ¡?Ætu.p¬±ÆêáòË¯(:8¢_êÿÁe¹v%ÿ¯RöAÁ
bÿßBÝ9Uæ"Ñ~ûîïå»ù[ìý[zË}U<ÎÙËsÏ=¿¦¹sâÜÇv`m)á¹~vôüd/ûA±	Ùo·ûÕ¹½Î¬l*¾rRèñ?K­#½{÷¶ÿgðl¸÷ÞZt¶Ç|ö7ÝtHhx¯é³Æ,ï)zÚ>ü0$uê}!Æb-l3¶d,PÎ²}þvß.;Ô°M¨^µÙpf÷_~ùð]¹ÿì½^ß³'¯÷1n»íVÐ±ÉãeÜô>ÿcÆµõ%mWÝÛã'ÔO{Î³ù[\¾Üç!,wZ=êÓ`ÏçÎßÙNîlöæãBÏÃÂôÅ×|vygÔcöO²÷~òY©wü«M:Ûìí<óØãò}<g'¿Iûühã°È¡ûéöÿþð¸SÂäÇp¾è³ÅÂ×Þ}¢=æÓÌì»ë²«þ¿#G~f¶gÚþ÷ýÿU¾ë®»lÍ!6ÝÝ.ÎÌ½gÕ^OÚdÄ|º÷¯Cý^ÅSXpe»ágæqf¹Ãä	aá?_:ä/Ös½õ×O>ñdM¦c¾¶ßÚ±£ÃÃ¹[×Îvå»@;=hg§w
Ý¦uô'ûmC¬&»ÿ³GaØWÂÝo'%ÚvJnèÆOÿÏýû/l,«)~¡òlú}wÂê¢å/ßø4ü÷âm«¦û|o¸á:®Pïj<Çþ!èQðæ³õ!ð#Bt§Ø¡:RNXøñô¨miã >-GÄ¹Èã/mB}«Bþ¤^9LËªÃ òD§H)ÓÆ§¡ÂE¾R¥)m²WüÉÖ²ÔâWmø"Oò²éjuäÕvµ¿n-EüÌo<¹ü!Ú$fãÄa#Ö&}¤ºoh$ûþ8}×nÿßÿþgëÉÿR©]©öÂúJ±P¿X9ÞaW³jðááì<Û9äí·ß{`ygkáSK]·>ØA÷;Ïûr©­Bf.&CúSO=]¬¹hÝ¼vòÕµëÌµ¢J
T~i½íáîó¾8#Líg¿¬+v	Ý±íïï³1ýÊ5à¿éÞ{ïgÄ·g©}ðÁGÔknx-·Ü2qC]d NÊ«Y?Âo(4"óØ¬JøÍzß ï(³-s±Íî¾ûöÙ«ï~Ðb}ÕøÖZk
»WxQ»Çm¾¸'TDøí'Ñ£G1üÈfèm
ð\&MF~Ø¸¨©ÿ¶¡ã¿'e|¶rXtìÞ;Ì°
OÂ®Þù¼¯5EÄ¯óÂýÃj¯=>:ñÐ}Aaþm_rå°øqþ¿Ü5?íì°èFþÞÞu¬Kµ?ø_CþV\qù°ß~ûÙ½êßØm	:w!ß~ëípÅWÚã;þaõæ³2=[ô©Ã¿ÛïgÏæ³YÄðÍÌsQÆîë52,xíU¡ÃD8FýRñ#Ú¨Ï±ö»7ÅºO°Í®ztíÖZ¢WX~î¶IÑô0-7uJørÒ'° ÝúÂÈIaÄWSíÄÞnèl±]J{Úwü ¸
¦þþËrÅ×eæOmJé{í&»Y»É¿æb; r)_.~8T/9CÔFORôàBøRT¿2jìÑF=B©ôÑ!MÛ(Ë·es1¼È+Thç  $D©òØÑ.Ò'éCÒðÉs «6åEê¬)Cê]ÉÝi§]»±¡KûDàôßÖ·­ð«ûî½¿â&4ÕøAgÌØ1v¢ÃgÔåÛ YR³ßv|fÇø;ÙäÞ½z·j¨éÆ)Gol;/.e³Pl»Wâ½³ô1°Á7@ZSÒYjâh÷àjt+éÌ?=¹iô! ,±'óòxÏë{ï}	tZ2 ²Ñ%ùÙ¾wÊ]ú á!lÉØmÃ§WFþæ]Á¦û~jë®X	ØT÷?l{Ï·­=§ÓRýå!Ì7fb`O7 Eüº-½TXù?ÿÏX%tø°Ò#wç^.Ì»Ú*a­PüÑÇa©ÎÝ
¯o¾]æ¦Vâ!ÿÿqãÆÑû*Î3ÃÌçâÃ?3í:ÙL¿Íó½ÓZïK­Æn°yjqìfNë>{B'{_ïÿ<º½Ó2ç­õ?îa÷Ýañ"Á#Ý»ÏVíß#tµ®öïÑ5|3eRøt'=#©+õë>1=Ã6m&ZK<
Z.^XÉþY
fúX0,öý³ëìÞÉF.#fË;k{\N±î$Äowkç$òß!@q¤³'©v<ÞðØÉÖ²Y4òÉ¼E1,åñC=©|b`Ð.¡½Ü«y[ú)ú(Ê
É«CÔ!*§)ù'=üAÆµÑòê8y©êñ%²GvDuÒOSüÙ<sìõ×'ôùtù À	ÈèxSý·`°>DG #0_ïùZd6>Lï#ð­C@Ä¯üÔ¡ÇòËÚY`ðéÿ>:áôGßnýí¼ÐÑ¾²þaâïd8ÕCü2cÏE{ò?±%ÞS&MàèÑÍvò¯Íö5³zØã)·ÍîÛ-\ûÖ×á£¯§ÚÒP»³s·°Èb®ÉRÚ²ÚPcø1Íº»89ÍîÄÑÙRJCú"|p'ÎÙ
:Ê«:88mòMªT¶Ê£ÅLòB )âHÎhCTV;õ/êÔ!RÕÉ=òJi'/!_,>¾¤=RRØ,>Wî\Z`¯óÖ³U­\ßpÊ!Àç°%vÕ+ÃÛG`Î"°Ð>{..^\eðæ6»÷ß+éÕ7÷>^^{Ó0úáÇÂ²7\6g;ú-Îº-úö[ t²¥ßLm
o~mûØ²ïÞFú³G<t·ô_N£'ÛNµFØûöµ»Zº]¾ä_+×à(äbâ2pqÖà?ÄKùOÚ?êÓø'Ñ/Ù¨lU9ÑLÊ¤"k0T"8J2ö
 6=õvêù #©_ê)cGÊ¬:­ò¤läzâ	 ìóåÔÄj]*`;ó¶	ñ¸ñc«'p5GÀhI }|]G`îFûú&øq\Ò9eÄ§¡iê'ÐeÃ§ÿ6}âéðùe×ÏÿvuXúæn Úàèú/ÔßÄ.WA}óÍØðî	á£1Ma¾îÓì°°1  @ IDAT&·vt½ú.XªO\*ÝPu¥½ð	Íøa	øxm)ÿ0;=";lÈsÀk8¨Cà=äI±!E_òcÙ¨K|ìÑAWe|¦q¢~jHcDDõ8Uç©W'©ÇmtZÁ-ù` ,¿Dð+=±'®._Cà`W?ÚpÂÅ¨N:çg>»yßóW/nçÔ ÷ÖÌkÏö¾suG "ðÉyÅ¥«¿÷BÇ>ûß~/{þÅðå
·eþ-,vÌ¡¡Óü}ÃðÏj§#lßÝæÑ+<¡ÞG3'Ñç9CÊàpbüCõðñ¡?GÄUÈc#EJYÇ²ÑOa|qÚÕÅ¡=iê×Ñwd)fò/t@Bà:§R§6RêÕòÔÑìDøÔa4u2ÕOìÐc@©Ú­ºh|ê¡ëâÔ 'l,Ánmç¹ZõPW@7r¾¥ðÈîv_HkîÞù-Öí'IÆÙn¯<oÊ'ç¿c»|gø8iùGó|óÀ¿Âs-z|w0ñ÷âL ­#Ð
À?àð	x
Ü78ec=êI¥gÙ¬zqµÃkRØÓP¯Cñ)+:ÒÕ]êIõ	[âËm³?êdH`(¸:DV¢)Rb+Ëf@RÏú¢²üÎâ;I=­	¢L|RG EàdÝ§Úìô8c¿ÍZ`wò­C cÇ¶£=$Ý¶Ñçáììçâ8ßn¿gØnÔ¸ìAîzv_3ì9^«Y¤[G à<ñqêtÀ?à$¤ÔÁ?¸ì¨§BÁNdßèÐÊÔÉ/íö©^ê;ÅBwâ'Ç8@(«Ót2!x ~©ÓÁÐ.¡£êÄ¼|Ñ`«:ÊÄçÐ KùBÊÔkÀ}¤ÇÕ¸8- '§~Ú¢º3GÀpo!Oöê8\¶@þ¿Àà4ºßÞ¡<<iPOJ)\:ìÅ{¸÷OuÒAºB>/âãC~°Q=)¶yÅ'¯X'eBBQ'åH  Såå² ut
{ÆíèGG³l¬#EÐÔO\GÀpGÀpGÀ(@þ¿büC¤ª-òM¶Á­è_Ê¿Ä·²?ÈÔà1®.²`C'¤/°£N>År­*#òI¾lÑ¿âûæ.@çâ8#à8#à8ghV
Uøª&þaúâ0ØÍþ£þ/¥ñ­9Q£Ê(aÈ iã ¯+¼qÈ)õ)	¤MvJ¥ÏÂÎaK»Æ=êe¯~ÖßÔ]GÀpGÀpGÀ(@þö0ø&°à õòñ9ÅÎ	KE¤A"¤tXOÉ£Oyt9 :ìT';ÊÙP¦_é)Ë>oæ.#à8#à8#àG y¥QþüGeÅøW6àBâGUGÂ¤)ua#;fíD-éÒ.?¡ÅJãk)hj½bkø¡¾hüäa¦ââ8#à8#à8@Qàpjøôp4'øOî%>EÄÄ½¨ËÈR,Ø2ÂDä2íà@(#¤Jo4¤.%y2ÕÁFD}<ËF©vdø~_uGÀpGÀpâäzÂI$ø¼äëêá?âGø­6>zð+õ]|.¿¢Ä/6Øq¤É:8§MBeKÔgêOòØh(e|Jø"ÕÄüyê8#à8#à8@)
ùzõðzø8T!ÿ*_üL¶¤<¶Lp©Kó,9ÓcÔÎ ROÚRB©£L§Iñ'tUV«ÊÚÉ§ñÓ'ÓV.>v.#à8#à8#àTB@ü=ñòµò8Íìä?¼Bþ%.Fÿ£P
F$mbb*Hú©éÐN6ô9Èsà»\òè:NbWK|S~c|;p¸8#à8#à8@)ò»ÀSææ£^þ?ª'>6âfäÓøVÌ	© Q'R& HqOËÔ©6ÂT?ÕcpD¤O^zZÆKý¡H|?Ù¡zGÀpGÀpGÀp! >Ñÿ0Çõòñ¯ZãÓïB>%¾§©\aLà8 1óÈ6Êê¤¦Ue"[MªS(@ôCÊRµ¥ñiÇG½'>¾üFvõ|¼³B°ÁTÜPm]TË^.¼ðOa
ÖeT\ò·À17Ë·yìµü_§òh9>³âãÌIKÔ8®¥Qtlcã¸ÇÅk¿upÂWÀ?Ø2ÜBüCåBþ!.bªÑvr>¥qËÃ{üG)&ñÕ.Ey6ÓxØ¥ýA]ÙYv&{I¤uªÃäq®Ceé§e#[uF1ð:D>­WÞªãà4@ôä/FµãcßÕ[F }GyLxøáe÷ÛoÀÌÍä¯½ý»ß].¬¿þúáòË¯Èþw­iï8µ&©ÏÖÆ§K.a¯½öW]uM4iRºÍæ[ørË-6ÜppÙe­û9j>·6®íñ½&\[Å)î°Ã/Â/ü/¼ûî{Å+Ö-µÔRaíµ×7ÞxsEÝZæ$.µöµ~£óímß*àp	¸`áð)ù<züöÈ?,¥;ÕY6æIñA¶cÙØN=¢zÊâ7)ÿ!/ÿjW|ÊåLä\r.'q*g+PZuÖ1ôhçÀ_Ê<U.v"ÔÔÑÚ5T6ÅA²lÑ£îwÒíõ×ß°líRíì^1½Z¢=ôÐýaÞy{u×Ý°³Ù®ûâÿ
ßûÞ³ÄMÉß,ùG},zè¥Û|}{û)§ü.üøÇ[5×\§U±nË8|ðv²õn¸÷Þû[rÎ[~ýúº/üô§[?Q®+m¦­µ1iÉþîw¿
[mõÓ°Æß¯Ûí[n^zéðç?ÿ¥nÕ¶6®íñ½&ÜZÅ)>õÔÂµ×
]tI±æu{ï½WØg_ï½ºµ*ÌI\jík9ýF1.çÛÛænVXaùpÃ
×M'Qîf|ò&ÅÕTÈN@:ÚDDlDÑ£^>à@²'ÐÆPR8qÉÓN2>tPNëTÏHL'Ñ)RQ²ZUÔ1mráBð1Cð'í4Å£vÙÌ¢Æ§:lIñCZ·\·÷~3móK«­iX>÷ï,úõ[ .I]{íµÂ³Ï>WÞ 
¶V³Ô¹QÚËØO<ñäpÒI§Î±A[Àég?û]iq¿Rÿ¶O©¾Í©ú¶ÉÉ'N=õô Ùh£Âê«¯Õ_©N¶E\Kõuv×;6Åw\ãâµsù
!áHÊr5¹W¸m)/ÿ{PÇïAHñ-UØ£Kz;òÔÓ¤q(£[¬;êñO!Õ8bY,4ªc¤
¢¢/g'¶SfPèCÄÄX-
H.m¥<¶:ü× È§ññK±Moä?¾ì
¥ÚºB»Rå_ýj¯ðÕW£Â¸qãâ-?sÜtÓÐpçÿÛm·M1c]ÉÿW8öØã£«+¯¼,L<9,»ì2¡oß¾aÔ¨¯ÃÁÝìÖ­-õº<°,iêÔ©á_ÿz$³+Õjë½&¬¸â
ÕªG½×^{½*}ù'mô0eÊT;É:-qÄaaþùç£G	»ì2$ñIèÔ©]5½*lxàÁ0xð&au6KO·Þúg¡Caá²®­Â'|RUÊ)µ±ßtÓõñÿÌI(òÇ?\pÁ°ç{ÛLÂ ð×¿^lxõï©K.¹4z}|oí¼óaÓM·6ta¹SèÞ½»½ÿ¾²+ÈaÃÅ¶F_fN<òhøá'+®¸*[ÂÊ2¼O>1~&ÆÎ=÷üøºã[CÿþýÃæoj3ëëØûk°]pé®¼òÒ°øâÇe]veæg«­~?þ×¡k×®á/¾K_yåÕF¡ö­OaùÇ|óÍ¾þúëpôÑÇç!ªñØyçBÝcÛ¯~µ_|ðÝÂûR,ßeÝãwQ)ÌcÖSnMLô½Rê»ô±ÇþÝ­²ÊÊá7Þ»í¶§}.²Y½Õãø©ã³5mÚ'Y>GÌ"ó9â;÷£]wÝ=~îÀàKþb3ìk;7ß|+üò{Û÷ð¯ã{\þ°í¶ÛÎ;ýÌÖc¡MkâZ«Ü{íç?ßÊÞ{GÅ-ÌDO29<óÌsá¬³þØìsÈwþ=÷ü3rÊiÑ}{þò¹ûÉO~ÿÿï½7,²»ýf3!0S6ÝôGá×¿>:,°Àüñ÷üôÓÏwÝuwT`Ù%+5ø}8qb8ã?dmòÀçú;n	|ð¡½7ÿOÕ
¥­ù©ôY|úéÇ
ã+{ï½ËÆ|O-ö9-öÆ«®ºJ`æïpÖî³Ïþñ<jÑE
_|aXbÅcùÿ¼7pa)õ?+÷[
ýenC ."òñ¥;å"cØÄñ¡ÇmèÂchTt«0>¶â_ä}Ô¿³vù¦.Bâ5ä3rFDä2ùÂNROç$ØËôiK
";|r()G_Ø(üXS}Ò'÷ÀÌ°ÃåïÇü×Û<Õõ½c³ÿ×þã²ºÁ÷ÌòÕdÞ$Î@|öÙgaß}g~qwéÒ9°<ÁVZ)üâÛ_~9\ý¡W¯^aµÕ¾|ð¡ø%yÔQGÆ
7ÜÄà tÐ¡ñËíc
·ß~GÌ&>þøáo»¬¡e:LWC5æÆ/â£>"vÚ)Ï}áÅ_Çsd<y8ì°#ÂÙgIßþôç8[zØaÄ4öìÙ3,²È"fóRøË_._~ùeÖF2meì½{÷ÿ¥W¯Þ¡wïÞ±ø?¦OvßývR¿c8ì°Ã­·Þj'\óÆ%î¿ÿðÄO±>4\zé%V{?Ëo½éìÀi¥V¿ùÍoÃ{ìößHØúôéÎ?ÿðþûØ	åÙñ¥y/½ôr8î¸ßØøEØ\pÁqh×\sö¾:.l²ÉFö¹9ÀNF	¯¾ú½ÿ~|ò©H*O<ñû¶ÙæõBÒÌ®5ñIqRxÎ9\xá?¾.ºèÂ¸Dl±Å5"²G¸åÛÂ	'Î<ó'°Ã»Ä÷n»íöðÈ#}.aÆk$ß¨ÿ¥¾Ky@úXzÇ·ÓO?Åî¡Z+ÎÈq$.ºèÏñÄ1ým²ÉÆaï½ïµÃßþö7vïß_ÃN;íj¬N2×^xq$r ½'ÏøÃ9PsÌ{X7ß|}ÑÏ¬N`Û*®i¿Ê½×¸àÂg{Ú.¿üJ#Ñ»åÿ®]¼z3º¸îº«â{îw¿;%ð[±ÓN;DÝë¯¿¡Ý~ÇÖ[oeåÎ5RöA¼8wäGßÿþÌ¶HìÞyç]ûû}8àýâx!~àÉwÙðáí9vAa¨+B.6Ü~û-öûÌöàf~)ÌÉÏ"$qIø¼ñ{~NK}Æ;ìÈ¨ÏEsÎ9/^Xà¾gH8ØòÙ«WÏx\¸êªk-n×ÿ³r¿1¿ÌmW¨	CàP<ø&¸ÐMùÜ:>| èW;et¥£v«¢2¾Ð#®ü*>i|ôRÙRL:c)R§<õ!%:K#-G EQG?$ebJ_~ÑW^EzâRV_H;µåÍ]V^y¥x2~åWo¾<p»¼Y<!·¾GôqÎÕêµÖZ3l¹åøÑøå_Å//ò\Eeoá¦IÐ,`'·¶èMàõÜ/Y«ÍáOÐYféxò~Üq'Ä1qo
'¬Wãï»ïþpõÕ×ÆòK,q,Ø3\¥oI©uÄ®Õ¦±W.0#züñ¿G¡þ6Ûü<a®¬"'ò¾j)©uÌÄ­Õ+³pwßýw»÷tÕ0pàxu}×]wWÖ¹(òÌ3OÄ{¹ À,ÃÈ_Ä]»v	\ù^x!ÈCð@$?ûìó8++Zè¥Ö±¶Á7x°!SSÓpÔQ¿¶Åíäzó÷z¼OÙ(fÓyæÙøýB,ÑSOý}Ì³1Rs.®'Ô3¾ZmÊ}r1cMXA 2ß©;î¸ClK_¶ÛnÛøþ¸ôÒËbõÐ¡7D2MaÃ
7+4.¿üØöÎ;ïÄPVð\|ñÅl6âéØÆK¥Ïl¦Xc¦Vp_ÍàÁ¥ßk«¬²Rü=2dûN+{î)BÙlLø¥MÃþñ»âw;Ë²!~Hûür*ÂBõ·¹;Ãzëý _t_?îïI'1<xã0Ï<óØÅ»!q5Â>/ÖA~0¶37Ç2?ùÉÖ-ºS=ÿÿZmÊ}ã K¼¤Ó/¼ ègL¦|ÑG8wøÉO¶Ä÷!ÁäoÚØ,çå_õÿ³j~+¢¡¿Ì%@%2nç CüCÆª"ßk |èá&Òÿ°£'í¹/mVqlÅBnÆÄÚÅÐ£>õ¯<¶øoÅ·ª1üF"ÂPeL}õmjWzª¾:§zÅ/
2yâ³üi[W+£CõøCgF[~ûÞ{ïe]6vILy2dfÄOK?iãÊá+®H6ÊÇ¬¬}i½ó,o`FbÄ2Númä¤¥JíA',sÂ	Íú<~üø¸l1p%S	'²!l«bþfNgC¦±ëÆi§aËÏ¶%Å,fz
7XrÉÅmüñáµ»Yµ#60éÙ³gülL'%Q)a	ðèÑ£ãÌp!fúuVÜ¨}ÀïÄìùç_`lî¶2ßØçèTýzTjí"e;6{Ie¥V°¥oÆ÷ÈÊ+¯uhgi¬e¡RóB¶\.÷]Ê	3ê¢»ï>$ÃIz|XJþðÃ3WÐÆ	eÎÇÌ%îÌj>³¥lÛJ}¹÷ðø\Bú>cÇæVÉès¨åÇ'ó;ÇEN¤½~ù=b¥
¿ç¼wÞzëíxáeøðáq\zaE$uº-[ÀÌ'3/¿Ýém&\(à"(¿ûcÆ»vû,Ä¬ÓÒ±áÃgq\3Ûn»-Ý?,C9|Oú-¸`¿Ø¥R¿åúëmíd²(åD'Ðâ4áð¾ÜR}òp'é¢H[øz³âA¤mÒ£L^Ü2¾äXòE|QGLRE*åTJr¦2@tR2ÈÀ
¨vuòHÚüR/{|zêÑG'æø\«Wöï¼iÐ!Ç-tkÐ¡º:TWMÊ½FÃ½o²{IV'ûçø,¿üwWF¹KÒ¿ÿÊÄ<d]m¼ñâ¯7ÞÈìéÎ
îd9dUVQv®OgÌh²û>údãìÓg¾,Ï½oüÃ¸,ñÙgÿwÓ,°>ýô³x%ZeHôj¶l¸½÷(êÇ]crÿDß"1Ì
³S­-ºîºëíäs][~}@<;ýôSå¢Ý¤|·L>=ÆÈ*]ì¾4H;íRÏLËÜ.å¾KÓ±sI ¨_j©q%Ï?¸h"\r²ì$|Y>[LªùÌ³kKuåÞkîÕgÒÂR;äí·ß)÷ªKÀê/rËóÛóç*Üs~òÉ§ÆßgîK¥ÓÛl³uY^{íõ·fH/ïh¾«Þ,#eòÞ{ï%vú,BÄqè=£rÖòKí;îø¾û¡ÝÚ°ÚjkE,Õ^ìVé·B¶ÎU'ÿ0DøÑ¨ÿ f½üâWÄ'ÉÌo\Ê
&¥'ãs¤ VªÇIgåéÑ>8¨ «ÅFõÔÁ°QJñÑG§£}Ô-\aÓ!'*§WßÕI¿TÊÚr~øv¯Ç	ñàæc¾è¹OÂ¬,ð±ÜrËÖßKXª¶×^{Æ%kçwv¼¢ÊÉ/÷Üyçm±Ì}:üHè0Ù¶÷ôÉ'?úÑã}KlRÁf.ßaV{>9`ybzÒtß}÷ÄûI¸ÏMhyð¹ÿþã=0ðºöÚ+í^ÈÔÜnS61âjÝùçÕxâ	ñä%È1cã®szêIQw½õÖl¿ývñÄãg9@¾úêëv¿íÌ1í f(ù>9ãÓâ	#]a\X
0 U\@Ù|óÍÛË°êîg¹ïÒÔ)÷D2³úê«El¸'íý÷ßOUbþáÿ¿Aà=ÅF|þ^z%.æ>?ð½Ã6àà>J{Y^Ë÷:RÍg6*¶árï5pâ7M©¸ïÆÆex|O±{hYþÊ}X"~çx¶×Ï!KxâÑ¸q0^ø=FXNæ^|É¿ÿû.ãÞRîdfUÜûL:-nÚõÐCÿ2Â¸¿½ÇjÛpMqæTZê³È,'ßÁÜºqÈ!Å%Ð¥úXî3VÊzÐ²ºaÒ¤ÉqëRÿ³r¿åâx[ûD ÏZõòWÿAÿaôRx6*ià¤¢O""nR0Á7uØà2±(#ªÇvEô
	|ÒF>?ù¦-=n\OZÛÜåÙcy¼GNÖ>³{Ì«N©åÜ×Çc	?,]ãÞÝ;3jÔ¨ð÷¿ßUXr>ûîäe4Ü'\qÅÕ¶ÑË_lsÇbW^yuÌ··® ã?!Îz
²«-j÷ä<wË+¦Û^ëJýì³Ï;r"À	ÕÈ#³!^wÝÐ¸ÏÀÒÃÅTØèçûß_ËÞ;ûÅ
Mxïè~¿T¯=å+ËÎ:ëö98<.od¶ëÒK/KõË
7ÜdX±¥y÷ÇÙ<.'\~ù¥ÙRÈ×_Ãî¹#búÔSOÅ-N¸ðÃ¦íM¸@pöÙçÙÅ¥Câ=`tÓM·fª.»ìøya·Sê?úhxÜ	¶1b×¤Üwi:C9Ü6Dâ¿Kc5ß³ÿ÷û§*1Ï'×Yçû¶©ËñqS©S§¹û]l;â£ìþêâ[T°s3!7ÞxÝ3¸}ü^ßvÛB5ÙhØ_Ê½×èö±Çþ&nÎÅg@ðüêWûFRÃ½º¼§XöÉ¦]H{ýÞ}÷=¶ñÔxO-ã?~}/M6fzñd#©~cù·³6>£l|àF\®³UàÊ1Çk·Ü7çb§b¶)õYä^ì£>Ò.ZÞWZ[))÷+eC=+¸ 1§|nrÿ³R¿ÑÐ_æFÄ'à*â)úpPk è×ðÃù¥ÊÓlUO
Á:©?õÙ*n¡¾©FÔ£-ô-küKe	áCµÉyªGQGD6ÑMb£ËA>mË]y>8Ð4"èPu¤×ÙÇn,¡¬GZøUê*pe¥"ìtÅ:K$·ÞzSüÒÚo¿ãÁtí»túõë¯¨ê>Õ×B&vÙe·ºÌ¯¿þÚ¸$ª.ã"F|q³Xäì³ÿ6Ø`½Wõ«ÚÒØ5fëø¿Cþ
¥\t¹ÒÉ{$%j«7m+81.NØ	ËÒÏ[©;.»I6àÃÕöb-éÔÎ)|X>Wlà4vìì¾ÈZÇÓú­I¥ïÒRcà}Âì@ú½ËìéZk­e«
fÎû1ËÃÒ}f
e{©ïj>³>Ê[×R±ßk}úô±KGÅ{ÏYÀìè£>WÓüõ¯9r/ôÀ©ðû¬=ù3³Ç_)áw÷·hf>!³CZû=SÍgÿ7ï¡B[jüå>c¥løð~+öÛWîVê·¢T¯o°B#y;WàlÒß¡Ì	D
ÞÃÁý}'Q»K©ã@GveRIéPàC>áDø ÔÊ7yFËÆv¸ôÈËíQDÂT&Å P&¸\:Ú¡CêeòØI_øøât4ø4¾ú_,~'OnÔ4íSJý 0~$ÐÑVêÄ¶zå7¸z$]¢Z}¡
³0z?Üç¦>u[¢ÜÆ®ñûa,×&ûÂÙBÕ7¶Ê½÷SÒÇXÓÙtìå>[©^-ù9Ïìú¨éÎNLÊ}ª?Jß'Ç{LØbÍ³Ý>¥WîsÄU¥$%}èTó-å«XýìÄ5_ø^cs$È2Ï¬ãD{¡
&L³Ï©zÅ¤=ùþÇÈJr2»H}ïREþßµ|Ê}ÆJáÊ*b¤ýrÿ³R¿¥âx}»E PàÃ'1@ø¼®Â +â="ÊØÁ©ÄyR'SÆþ(§KyÚñC>¢:üc+?Íb&ÿB#±:¦©]¡¬ Ô¥K6Õqê!hiJ|WçI)S/2HJ6|g¯Ð¦k¾}«vÞyH7pÕ#Ü#Ñ=}ÕÖÉ®Þ«^l ý01}ú''­úsc«m¶i\Ã=&,uqG E Òwiª[.ÏÌËèÑcÍÓ÷¶ð?àÞõAÅ-ôï¹ç^#¥IñLKÏÍM'ÔgqnÂÄÇÒ¶Hfüö'1Ó@ú Q½ÓÐ®:x!¼=?êi§By)aÁ£MväñÅìáMäÅÔFY¾-3äEÆ8À±IvxÑ®Dv"jêõ¥>
i<uØ«
;òèü)¯8'Ó&»¡,õ4?.#à8#à8#0#¿Ým¨5È|Åá§¨Mí¤'c'AG¶Ô¡'LÂUÈSÇQËfybQOª¸Ø"âh'K¨CÔ_l'H*rN(ÅyGr¨N+¨tÔ) ?N"ÔÑ®AÓ.}ÕW_Å>Æz2GÀpGÀpGÀhUêát;dNðâ*¾¸Q},¨1ò/ÔA t ÊÒ§.m§ÁR	DG:Ù G^)6ä%äå[vò%=ùR;õÌöQÅogÏY×]GÀpGÀpG`  ×¨'&ÿ¡?øâÉFåF9Ê*,#²Fí90æ \R§)OÙSÆ^$
ò~å_ê4HÊ ÅW[©øÔDþâ8#à8#à8@@ò¢jù¶%øGñLJf
ùúMY1'(¤BYF¤3Dz
¬N0X7@±NÙÈº"~Ô¥¢>öt¼lEKÅ7Õ6ïK=ÆÅpGÀpGÀpJ!çµðxI£üÞR/ÿ!>öp*|PN¹3.E>*ÅLþ¢%r%r&ÔãC¢<)Ä8iW~ð¡eø!O;ü*¾òøl4¾¹pqGÀpGÀpG ,³ÿ¯Qþ#{&þC©L[óB¬É8R2'ÇçÌè ¡¬mKEî¨ã Où²lfGßè(>~e+Zâ¹#à8#à8#à8eh)þoimþC,8âmCü¶(RTz©×Ìq!#/6)[éjê]ô¤+{ôhC'T>T?ÙWß7wøú#à8#à8#à@ 8HCüÃB`ñkmþ£Ñ;)¾¸UÔ£±PÔIRè8ÑS^N)óL=:HX.e|Ð:u&í:Ì¶P|0.#à8#à8#à ¿Ç¯ÿL'UþÃÄßC¥ü:úIJ¸¨¤QÄAjð'IWG7uÙC°Ñ=|é>äS³|'Ê')ú²E§®ø¾¹Ð¹8#à8#à8@àpR$åE)OÉµætÉÏiþCéø8ÆA³ÆX°PÐ,KYõ¤CN%mÔ¥tñ'säiÐØ¡G½|Ôß\¸8#à8#à8#PüíaðM`ÁAêåâ/sÿ(>,MªÁJA¥¬zµ¡O^ÄA¡ÈgZ';uRAòi=Ë>»äëÓÑå£Ä/ìTGü¦ÇñãG[ÖÅpGÀpGÀpY4i*áð¥m)/oÿÀ=4E=~ñòâ,ªÇq° ¸QªO;eêl°G:ÒB?V5SDÒT39Hó"u¤ê Îu²££Ô«S¤Ò#E°EäXôE)møða#;Rüé Å·lTÛm·ivqGÀpGÀpG 8vü#å(«À=Ä?HEøhgIù:ìTFX"pEø¨/Rò²½mø<(¯§x«"G¤
@Ô!â PFH	$B)Ø+¨ê`#ÂìÔaËV/ß³ÄwÒ|.#à8#à8#P
ü®µðÖà?âGt³ZþüJ}/Æ¿ð×ÜQ¹#9ÒÀävDt!²%EDêÈ3uÈ'ylhzù.í"ÕÄ¾\GÀpGÀpGÀ(@!ÿ@·þQÿ_ÇTâ?âg²%E°oÆ­p©Kó,9ÓcÔÎ Ô1ìðI[J!u²AWeÅ°ª¬|åH5ñ±sqGÀpGÀpG â'è¯ÀSf'ÿà3å_Ê[uN¨H#
61H±\E$
ýÔth'Oúä9ð]
.yôI§±¬%¾©G¿1~~Ú:GÀpGÀpGÀpfA ÿ8xJÃüÃ|ÔËàGõÄÇFÜ|ß9¡24êDÊ )òi:µÒ@Øðê§z¡ôÉKOK@Óx©?téÏâûsüÃÅpGÀpGÀp*  >Ñÿ°õòñ¯ZãÓïB>%¾
YI*cLàä5;G§äUFÁN)cË¬$mèaGÊ E©Kã+¯xUÇ1GÀpGÀpGÀpÊ" ÎÓü§Ñø³ È[aÄ²Å!²-d2y:µ0ÙRN+F;½Ú¨'/¡Ó)áÿªâû®ÑSGÀpGÀpGÀ¨¸8Ìâ?Æg)§«pì"x"[3Aô$'ÕCÌÒ<º"y'!'sàÁ!Ä-yb6ß\¸8#à8#à8#Pqàâ;³ÿh@âPáQÍDR¥E¾ \¼úè¨NõÔ±ë'iÊRñ+mm_@<:²M£ñÍ¥#à8#à8#à8ÅÈo	ÿ@åðqüµ6ÿI9±ãÓØ¡É¿hÉãÁ	¥r±£;òØJÁRÏ>õ'*Ú­©êøèâ³h|¿Çx\GÀpGÀpG pñrü7%ùµÁZÿ[ñÅ±àBÄ¥L
ß×²lneÌxÁPNP! ÁeÀ)¬SG¬)
Á9éY£
DÄ'br¤±ðÅRéÉ5µL6-\qÅaêÔ©¡sçÎa}öi¬R{3å
ï¼óNxê©§ÂØ±cÃfmYf¼µ¾é7Þ¾ùæßÙúx·T¿ÿýïáã?îvØa°à6s]©½rÉ'ÇÏ¿oêÐÍGÀpG ââ â*ÃNµþ¡Ù<tSþ!~£	/| èW;eñËfíäé§üK~½4~ÚwÚ22ù²Hq¤*(mt#í0y@Ûµlµâi¿ (¦ÚiKãS_,>u*>ùäa×]wÇ=÷Ü.ºè¢ß}÷ÝÃ#ÌEyaFqØ°aá^ûî»o(|n`¥öòÞ«k}ýõ×Ã²Ë.®¿þúððÃÆÑäóÏ?;î¸cÑ®¼ýöÛaÿý÷&M*ÚÞHåW^ýßzë­pß}÷eÿãÿüç?¸n[ÞùË_ÂøÃ°êª«_þòñhçæä¡
øÃZÊ]3?|&øßwÜq
R©½P¿òzë­:è zLÝÆpGÀp¢äÏá«åsÿ¤ñ¸¼1[Ñ	Ä,""e*Câ¨Ã¡HðÀ¢MíªCOuÒWçT¯8òE,t('>÷â3mëjeth£èÌàXîY~.ºhxõÕWÃrË-ÉS¯^½ÂUW]\rÉ@>fï:ujY.]Âg 9ÌüJ¥öBýzÊ×\sMØn»íÂ­·ÞZÑ¼ÅL>=Ì3Ï<Ai1bu£F
÷Þ{o±¦pØaßýîw±­Rá^Ôi¾rùå{íµW8æcB¿~ýb-ÿHþb-ÖÌVîâ@µ±+!
zàÛo¿=üíoô,ý¬GÅ}ÿý÷ÃÿûßªÝóQÊøMébR©]6à:räÈðõ×_Ë§#à8#à4@r>rüÂ?qMjA
¦ØêtI~¢-Ü=YCñ R6éQ&/nC_òG,ù¢M¾¨#G&©"r*%9Sé0:Ôk ¬pjWÇ"	3=$í~Ñ=¾A=õè£CZsür¤ÏüVX!l'ÑFqyä~ð°â+u×]7ôîÝ8ÆÌK9©°°'³%äË/¿ËZh¡HPzþùç«r=nÜ¸°óÎ;¡CÿýïaÛm·
¿øÅ/Âo¾í/¾øâHh©ôÑGãxS|òÉ±oHë AblÆÈLY(È0u]fçúöí}|úé§Q§ÜËÝwßÏÒÓÓO?=ç{î,3¢Gyd$^l°Axúé§3ÌsÎ9',±Äwú¨¾eJ%2ë¬³Nèß¿Øj«­Â,Çñãÿ8þZj©huÉ%µ×^;Z|ó¥¯H¥ØpNJ¼ð"ö
7Ü¶Þzë°å[«¯¾ºöwÞÖXcø?aü§rJ`y#rÖYgÅñ@yÏp"½àÀLâ]wÝ^zé¥÷ôÀ{îíÔ8æo¾løå_[l±E
&èWóÿn6J¸VêÜÎ?ÿü¡O>*zê8#à8@K!Ð"üÃ:w©ÿ0zùxøñÉgJDä¼:N' f8Ð@(«NA(3óP'â&=êñElü ê±Èc>Bel4 C«j_@ÉwÇjg3 FÌj!¯½öZXi¥bþg	?ýéOãÒ¼vÚ)°¬î'uy9þøã£Ï[n¹%,²È"á.k®¹føàÂw¾ó²®{ôè	'Ô@ÈÄnñÅv,WeÆ{±ÓÿøÇ8Ã¤YËnº)wÞyáÂ/,ûÇ?þd·nÝ¢.÷oA*É.³w§vZ$`QNIS3ÂìV¡?>@6 !¿ÿýïcÐùÓþ	*3c îäBè\è¦¦2÷¨Ad_|ñÅ°Ê*«ä"T]	×ryüñÇãLòn©ATéÂlÝ6Ûlÿ/»>8ÎBé÷Í7ßyä	Ë-éÿÞ®X	w½¯iLCýë_Í7ß<\zé¥ñÿ»ôÒKÇñ{M6	o¼ñF`Æö·¿ým|ÿó9Ðÿ?õH%\Ëõ-QÕE'Þó#à8#àÔ Á$åð	ÝD#D®òêÐ§=:²)B>Ò:êiçgRþ89/S|ìXò¾Ê1¬)×ÁÉ¿¤1@ä<FGWGiC6z«£éÚUì`è3 Rzù¤|¿ppÒ'%ºqæ'°ÔîO>j	'Ù,ùüì³ÏÂùç« M?âqâÍ}gÌx!g}vbÆYrÂ	>¹<ñÄqéÛÏ~ö³fêóÎ;o1£ÿ=öX!J ZzhØ~ûíc5¤âÁ,ýùÏë6Þxã¸³RÌ=ðÀEïíJýg¶
f.»ì²¸ä²°]efYn»ß~ûÅÙEÕé7Â8ÀeðàÁR«+%Þê«¯	3Üûï¿?Îhâ°RìJ¸ëÔW_}	¾Ht!ýÄñ±üÄCT¹@À{ÂÓ½{÷pøá#ÇQGýZk­ß3lº
3 wÓM73i?î¸ãx¿*³={ö¦Ä+.U#R	×r}Kã2Û§þ¥õwGÀpG AÄ'à*â)¹<2\A]¸
GäI6tÄa¤C»ÔúlâÝB}«ÊêÑÅCúøIAÊè!"f*«c'ÑfÎ©4¡aÀè0H[zuR1ä;Å+LãÊw¨tùÂ²;-f¸$l>Â²RÏI÷À¥Rw:zôèhÞKÈ¬
3'N¬Ûo¡!ËYX(X©@,¸*ËêDB¿"ªÍcÇòÉrÿ-ÙL¥Â&KnSÜYÆÈlh5ß1cÆdªÌ¥÷÷±Ì³Ï>gØØ å»,eykµ±Ká-ùîw¿7G!&±
ìÿ'`_#$IB{ú?÷	&¨¹h
¶)éCeÇ¼ÓY½7[bjq-Ö·tl¢¤Yí'Þó#à8#àÔ çO&ð¸üC|þA=)¤zµ¥Æª3ÿ Ï½aè ø`¯XÔ)êH©CÔFbñÑW,Qê3)Ë*,£'ÉA(§ 0p
Èu
½X2í©múj+^ÝñµìÍ|IzÏK'9fÔØµsáCË<Y
Þ6eÊì,îÅ¢J©vfÄØÒÁÒN
3,Ìð°¯oúÏÉ¾îÃ1ÐÎFRTØÍå ìYÊÉ¬ËýD$Ab^ÕãÄÙBâ!òQ*DY&Þ{ìgD!Ê,A¬FvÛm·8ÊÙxå,ÙE xÌ°2ÅýÌJ²Ça bWÂ5:)ñÂL(dMPéwØro'äY[fÞè/}g·Xèî²Ë.ÙRKâëÿÁÿ	=	q|î¹çâRMîÏã~BÌ"è;òÁÇÿÓgra¥,ÍöÉ½×õ?¤®\{%\Ëõ
ßÈ»ï¾9äxþ»8#à8#ÐÀGà
ñ³ÝütNßsDf&£}A1%h"f¤jÉcv%U×ÕòÜÈÕÝ¦pH»ÙÁº1ÊL/±cJ;æ·-yÓQÚ±KÚ1Àv,?V'îXk¶Lû¬gÇvüÀMìø¡?¶õÛÚ±£íÄ¸¬ØRNHe<ì^·&Û`"+A¶¶1«C×Ô5Ùtl³%ÍÚäË­PU»ÍD5­¿þú# MvÒ_¶Ïj'å©â~øáQ%õ«v»PæMFÆl÷Ëf>l#&;o2ëmÆ§É6ùÓN;­Éîy»'-óS.cË
3ÿFxl¹lT·{ëb=)Búhä#é·Ì6#M¶1¶Wz±Ç
4ÙÖèß{ï½w-áfö8Ì¯¨c÷A6ñª*v%\+õ­ØÿÜ×ffFþ³þ1n#}Mv¿]l·Ç(dmv Ùÿ÷vvá Ó³å M¶·ÉvÂÌêô~ Å÷3¨÷ºízéêÓÔ]YU{¹ÿi5}#]}àjb\qGÀpG %°óLí`ÇÖùcKK7³çØÀõí¬füde;ÏËYºKØ§¿éoy8G_;àBâEð$q%x6À§ÈÂ·Ä¹Ä¿DP­)r7x|vò:ÍD
i%J:Á£|*'sÀ$	 J­*Öa§¤þè"}¿'L:ìÕyô5(åvÚd7Ôfº¥[X[]Âl÷ùµÖýEÌf1ãSlIf]®Á¸Ü{FìF7ð(îdWÐZYL6aF.]X­/¾ø"nzR¸Ç0#Él Ë&»våEsi4vso³ËYZøeV¾÷ôÕ#øfÆ[¾Ôâ%§à­¥¸µØVÒmWÆEßêy?Tê·;#à8À·[î9ÑF¿»,bÖ¾C:#°Í:<Emj'EgæRªl­)ú±d	®B;8bX6ËzRÅÅÁ¡]Bzè¤þb;
©Põ*Wd£rOÛ±Ã_!Ù£3è©ãä!q¤ª§'#"0`Dv¤èS/}¦Q`Ë.#à8#à8#àDÀ»xînNd¢F^$N¤+RéÒ§Q6¼HuØ #mFæÐÓ¤¶ÒoRTT¶Ê£ÅLòB )âHÎhCTV;õ/êÒ¨N6èW*rgUQ¨/'!òURØ,¾¿hà/#à8#à8#àA@®ÁQ
ÿ×i
þC*ñÅGWI|r&rUXNã ¡2°lA'äPìWö±W,éâKl<B!-¯6é¢Æ§¾h|'~@åâ8#à8#à8¥H6«ÿ©Ä?pUX}Kñ8N)þC|úÈý&Oì4¾sB*eD
C¤§Àê)	ë| K'êÒQF{:M^¶"¥âjFBÅ¯fWO]GÀpGÀpGàÛ@3ÔÂ?à%òxK½üøØÃ©ðA9åZVÌ¸ù¨3ùÈÈRSò¤ã¤]møÁaâ<íòKªøÊã³ÑøæÂÅpGÀpGÀp²ÌnþC¼Fùìø\
¥2mÍ±&Gà \8JÉ23£G 275ÜWòeÙÌ<¾±Q|üÊV6µÄ7sGÀpGÀpGÀpÊ"ÐRü.#ÞÒÚüGä8âmCü)°UB½ÊÔkæ
8­t5õ.zÒ=z'!Z*MªËì«ï÷øE|ýÅpGÀpGÀpJ ¿ÇO¤!þa!°øµ6ÿÑhÄ¿Ä_Ü*êÑX(ê$)Ftè)/§õ¸ê eb¹ñA;zê~Ô'èh{TË6ßº8#à8#à8@)ò÷øã?"Umÿ01À·è_Ê¿¨oe.*5{"Ôài®nê²`£{ø($ìð!åmòI¾lÑ©+¾oît.#à8#à8#Pø¥<%6ÚK[á?ôþ/Ci±¿j{A	H«+¼qÈ)õÐF]zHÃvzÔËúEZK|SwqGÀpGÀpG 8ùUðM`ÁAêåâ/sÿ(>)HDHé°G6òèr¤÷â©Nv%²¡L=¾ z²±lÌ³ì³øøqqGÀpGÀpG (:@7¢ÀQåðÙÉ4YoRü8(^

ª#/ÒÇ:DÈ°³v"ÍtiuQ¬4>~ÐOí(+¶éY6Îfñ1Òæâ8#à8#à8@1àâ5â-¥øôð3'øOî#>EÄ4ê2²öB£p&¹¢L;8Ê)Ò
©Ñ³lFäRlDôÐÀè#âÓÌßïñËã¯#à8#à8#PüRO8¤ÿw ³ð|]=üGü¿ÕÆGÞ¦¾É&g  @ IDATÏ¥ññWøÅ{2409Bçb¤

-)"RG©SD>Éc£%¢%ò)]âlV_vòç©#à8#à8#à8¥(äèÕÃ?êá?âPü«\|ñ3Ù"ð Ú2Ái*R¤.ÍC²äLmP;J	VJÔ§Ó¤ø
~TV«ÊÚÉ§ñ»PaRM|ì\GÀpGÀpGÀ¨ø	zâäkåðÙÉ xÄg)oU9¡"4HÚÄ Å2U4ôS?Ò¡<mèsçÀv)¸äÑ$u2Ä²ø¦ýÆøþ?àpqGÀpGÀpRä7w§4Ì?ÌG½ü~TO|lÄÍÈ§ñ­*SA£N¤L â!©S)m
?©~ªÇà:H¼ô'4úC>ù,~²Cõ.#à8#à8#àC@|¢!þaëå?â_µÆ§ß|J|)§*TÆ<ÁÉkv2N9È«SÆY;IÚÑÃRÆW^ñªï»z.#à8#à8#P	q¸Èæ?Æ75È[aÄ²Å!²-d2y:µ0ÙRN+F;½Ú¨'/I	fÍñ}WOÁè©#à8#à8#àT üC¦fþØß(%4¼§þÓh|b¥*¦2Ç¡Ù5:&#doP=Jó4k'!'sàÁ!Ä-yb6ß\¸8#à8#à8#Pqàâ;³ÿh@âPáQÍDR¥E¾ \¼úè¨NõÔ±ë'iÊRñ+mm_@<:²M£ñÍ¥#à8#à8#à8ÅÈo	ÿ@åðqüµ6ÿI9±ãÓØ¡É¿hÉãÁ	¥r±£;òØJÁRÏ>õ'*Ú­©êøèâ³h|¿Çx\GÀpGÀpG pñrü7%ùµÁZÿ[ñÅ±àBÄ¥L
ß×²ìLE^0Ä@ÎI©#Å"¤ä4rqh§^z'¬§
Q5Å£CåZâã×ÅpGÀpGÀpRTË?'T¼F<E<ÿ¯9Éè}È¤YÁj)«ã¤ÊDí.Õ Ú©£LPÄv-Em¤øã#U?R1¥O[zÅLãS×É7w1\GÀpGÀpG $ù¥Õò9ÍÒøI\^ÄÄ­hËRHÚE¬(Câ¦m<l¨ãRêZ1Ö%Ì¡nz Æ \KüèÓàl.#à8#à8#P
d²¨þ1§ùâÂÇàZP

&)ÁÑA°¡C=$
A2)B½ÚEä"	­3ýáCúèà;%ý¨9¾?ÀÝPsqGÀpGÀpJÀMææîRÿ¡õÆï¿">ùL
HXZvcÔØ$õtagOtðÃéY6êÑÎA½=fõ°Q=u>|Wýßgü	GÀpGÀpGÀ(@3'ÿ° õòõ¯þ."þÃ?6èÊTÒ2F2p!"vb¢Ô+tI©®!¾!cyÕk`ËÅÇ¯|Vßgü5GÀpGÀpGÀ¨ |CnRÿ·!ò³ÿ¨ÏürÊ­ò)CNâqSª@'IT4`È³y'§:øP,êñMª:ìj/ýàs0ô\GÀpGÀpG $ùÉ¢FøGê{NðÂøôñdBE¡hÀ'@AÄ(§$L${È|'Q½6d¡=Õ¡Mj+^Ýñ5Í#à8#à8#à8EÀ=âf?»ùÉ£ïp6|&"[Ye¨ãHÉX:xtiÓ:RòSí@°ÐÑa¼)¥;$íGkÅÏEòWGÀpGÀpGÀpfE n"^Òø&}-Å¿²Qj`ªQS*bk¤²êDÔR¢ ½H°QLüP¦£Vñ
ãkv±æøÓ§ÂÅpGÀpGÀpÔÍ?,Âìâ?½7ÂËf05@À4X2¥8& CYDvÚY1[Æ)(?)@úú
õÕÄgàê#úaybBÖÅpGÀpGÀpR{VË?ðÕXyvò4¾¸ úN6ûù P: e9£.m§E=ä
RÕÉ=òJi'/!/ß¤èÊôäKíÔshÖ1ïs0T\GÀpGÀpG â µðqXÕ³ÀSÈ+­ÿÐlù*ä?¥zÙ¨³¶W9Ê*,#²Fí90æ¢EÀ,5óG(kp².eéªM3¤Ø#¯6éÒÆ§¾h|'~@åâ8#à8#à8¥HP-ÿÀUQþaõðñFø>äÇ²Íøe8:ô<ñÒøVÌ	
©P)«V¤P$P¬S6ò®N]Ú!Êès`O§ÉËVD°T|SÍHh³ø¾«'Ð¸8#à8#à8@)ò¡þ/iÿÀ[êå?ÄÇNÊ)×²bÆ¥ÈG¥É¿@'D®DÎäzrH'%'íjÃ>'?äiç_RÅWÆ7.#à8#à8#àE`vóâ5ÊdÏÀÄ¿àRp(ik^59áâÀQJæä¸á= ¹©Tä¼Êø/ËfväñâãW¶²©%¾»8#à8#à8#PâpñÖæ?"wÄocâOÙ¥¨
êuP¦^3o8Ä¼Ø¤l¥«©OtÑ®ìÑ£
Ñ2PùPlRu\þd_U|¿Ç/âë/#à8#à8#Pü=~â 
ñ=Ä¯µùF#þ%î¤øâVQÆBQ'It0¢ãDOy9¥¬çUP)Ë¥ÚÑSð£Î¤ý@ÙÂïÄÏtqGÀpGÀpäïñ+Æ?DªÚ"ÿaboÑ¿QßÊ$%\TjöE©ÁÓ&]
ÝÔdÁF÷ðQHØáC>5Ë'Úä}Ù¢SW|ßÜè\GÀpGÀpG ð8
)ÿ/JyJl'¶Âè/ý_Ò8bÕö
6
VV
yãSê	&¡ºô.>;-í;ô¨õ'ø¦îâ8#à8#à8@qò«áÀÔË?Ä_æÿQ|8S&.2Òa
<5&>mäÑåHïÅSì(KdCz|AôdcÙgÙg#ññãâ8#à8#à8@Q:tnD£4Ê?à3³ÿh²Þ&.¥øqP¼?TG^¤)ua#;fíD-éÒ.?ê)¢Xi|ü ÚQVl
Ò³l5Ìâ'c¤ÍÅpGÀpGÀpbÀ?ÄkÄ[JñéágNð4>ÜG|þ/iÔed-ìFáL"rEvp R¥7R'¢gÙÈ¥:Øè¡/ÑG*Å§%¾ßãÆ_GÀpGÀpG 8ù¥pI%þï@fáùºzøø~«¼M}Kãã¯(ñ
ö"ei`rÎÅ4I2([RD¤<S§|ÇFKD)KäSºÄÙ¬&¾ìäÏSGÀpGÀpGÀpJ!PÈ?Ð«ÔÃÄ¡
ùW¹øâg²%EàA'eÓT¤H]dÉÛ v¬*©#O§Iñ'ü¨¬VµOãw¡Â¤øØ¹8#à8#à8#P	ñôÄ?È×Ê?à)³ÿ@ð	ÏÿRÞªrBE*i'Aeª("iè§~¤C;yÚÐç Ï?ìRpÉ£Hê8ee-ñM=úñý9~Àáòÿìé#9².»o5æýßwPEy*©-ÀtúBZýúJU"D @"pDàüã.èõÇªñ¬þA=ÓµóÙ-Os
¢L ÄÏ5>÷ÙÃlÔñ3Ëa3¹q~töõÅg¾÷¿Ð?@"D @"pzâ%ý±
?«Ô_öçÜzJ½'ßS¤Ã5ÉÌiÎÜ·s¬)ÊÃÜ51<y6fM.oí'¹Ð#*ñÍþÎíwwÿ~ÕsÌ"D @"[ÔhÖ?¯öG7½1.7MñvéC!¶xkä"ÖX3WÐ¹/0sYÏg-·<.E¾{økS`>Ü¿_õcc"D @"pôæaý1rÕ7'F÷Ü£^íO¯©©¶Æ8§q9ß®q0zÚ;yÞÐÏ¥æm/ÉÆ>õ¹FosÓóÕþ«DD @"DàÚå3ôzç;ôRC±FG½1¤Ó`ÅK Ì`Ä£O?>~õqªTêãORÄ2'Ç<s^í¿Jf@"D @®8ÿ $ú{U oÔ2Ôûjý35½/ûsí@Ûäüá%Y2§F2(£ÅvìÇ\ã¹,~âñ³¯'ûkëîþÄRójÿþÆ<Y"D @"p ZD]òþ¡Ì¡þX{è¤¯Ô?ô¶¿-D_Öè-µÖþqÛâÊ$X#Å0ÜäAN§>ìã7=Åsö0è%ìÇ>ëGúS7@"D @"pDà^ýáWAÕ5êuõ_?©8gØíÍbyY{pFÌ5qÑ¥_@ìãcÍ(ªÝ5ÝÌ=Fêñ¨H]SGö4½Ù¿=g|ÿôã.BD @"8Õó^ýñÓúgöçNj!twP[±·¢jIû
+Ö8sG>#¾»O¬#Øù;{°~¤ÿV³ÿÀlY"D @"pD`¼,zEü'þ±?#z­µÎi B-£@C°ÏÃï¾BnaÛîzÔä1jOQhb8ÇÃýûÜµ,@"D ¸E mò²þX5Ð.ÏèÎ÷luúþÌw»~°é'gRMâç ¿ìIux¨aÜnqìóà×ã­9úñ!ø¨}oâ·þ½ñ[$²D @"DàÀY3|þXMÕ?ïýC,¦þáöß6üÀ9m®I2Á)ìT¢ømf,#>cÔFaÌõ{1Öõ§®5ïîß¿E-@"D @n@o¨iÐ&èµ
=þñÌúõÔVoçC*ÊæÐÄn6bÏ8r¦yaÄoóØ1Ô°~j3ê#ïÑþÆÿÕç°èe@"D À!óË¢WôÇ¬ýúç²?gà>»á¸4/Ì
!Æz0Eù5k)Úðï²°?cØS@ÒÓ½ËþÄ=Ýü¡æ*E @"D ¸J =öxI¬üïÖ?\FÇÙÑlóÝ[»cMðñL16/O,{~9Ï× cÁ¦)ÞñÍs|UÿS§>#D @"¼'6Qü/è&g=Ò_û-½£ÂÕµÂMBm
=âüÐF=©Ã
Ö~ý}»øpÿß¿iE @"D ¸I@=ò'þX¾Kÿ ö¦nR¢ËÞ"Ì
U9R9Fkêjæ­åþ5N u¦³óÌ:æà¿§?÷Äÿõë×60Í"D @"P{0Þ«?¨õF¬õwêÙ_m§ ô\Äìoß¶Åù X[ßÜÇÏÊÂx#Q9Ä1wd¹ÆÜÚÄZË8k¹Ç·{ÿþ;E%@"D @nP<¢?Ô:»þXMô©YÐ)ÌïÕ?ÌZúÇ^úÍq}Ê^Úk¢XÃÇ>ky4#'1¥oþ8 k/g±¬uÏ7äcöwÏXöfüWû'ü@E @"D GÆÿp¯þ ÔUý±üèuË+úÖYÓ7ú5ÎÍ~³ÿZi¬MbDðaÆÙØCpYE¡"PÕi5õâøæXÏC>fn®Bð¨ÿ
ÝEèþýª'h²D @"DàÀY3<¢?Ð%¯êtË³úþä£©¨Ázj­µÜµó-h?Z+ÅñSGsÎH#'ûîQ~
:ÌÙç±.£ýSóÕþ«DD @"DàCß­è÷ªþ1©¿ÐRh(×ì½]lCpñPh9_
2óFkþ¨QqÇÜ55­µ¦{sjcêkÎ#ýWzD @"DàC¥?Ð2ê¯Ö?;ú¨Û¸úi¿°:Àðû°Æï7
RAÆ\5i®±¾ú$8cÍ'=Ì¯ZÃÞÜzæßÕ¿¿ñÛøöD @"8ÿä%ý±ZðûjýãmÔ_j'û«­¶86/ÍC2bÄÄÁ1s²öÿ«À(Så²¦ûÄy êxybx[ø)ý~dD @"8ÿß5ý¡¨ú7ê^aè-Î7õ>ôÖnSpáôí\ÒË³g¬'vCìaäø7|¬D5¬é[>cØ³&#ñæóTÿ~ÜtY"D @"p úÂ¡?ÔES§lëãß¢8/çS/©¡¼Çv^7·Åú  .ÈõÂ7â§Æ¾ùKÍËÃË¾ É#¿5<ã#ýWxD @"Dà:ó·Ñ¾ÀB<«?Ô/?¥ìfÚËMSqI{ñÌxöË3ÿOy¬5sXã§BÏ5Ýæ|íóþÔÉ"D @"\%ð÷ßÈÍÐ(¯êôÌwê_¡ÛÔRöß.ÅÇ¥ð#@s	ÌÂ>
2rÌã­bqM÷Xö­ã1{ÍþÔ!~æ±¶·¤qkº½5Üûÿ½,@"D À5èuºåHGÐ?³?ÚG=ÅyÔKÞß.Ö¶Åú`Ó$i+ÖìóÐc1Òhþ¡!>ÞîBnÆ£Ð#^ÀÄc·ú³½ëßßøÀôD @"\'pþª'D»¥?ÐØ;ýqö=£ÔGÔ½·?qè6Ï®ý©wUømëÃ`
y1Cq&£Mæ2b:æ¼:Å¬É¿"ÊZ³¦±ôWlÞÓß<ë5F @"D 8"p©?{F<£ÔPúë£þê3s1t{»Qtøæe1ÿÛ÷¹ÔXS:GÔ1çÐÔ3:®í±\û>óÙÿ?8ÝÓ¼,@"D À-êâÔÌÕèïÔ?<z¢³Ô_Îëd8¦ä%ÙSAª2]EFü¬cûÌÙ#9õÈp$ÎaùHÿ¾ÕÝú÷ÿø#@"D @Üò²þX5Õ?è£gú£6c>û¯åÉpNS áS	ó¹Æç#{:3~Æq9bÆ37Î¯Î~³±ñÌ÷þãzðg@"D @®PO¼¤?VágõúëÑþûRO©ö{*t¸&9Íûv5Ey»&#ÏÆ¬Éå­6÷zä1rA ¾Ùß¹ýîîß¯z.Y"D @"p-òÓúçÕþè¦7Æå¦)Þ.}3Äb\Äkæ
:÷f.ëù¬åÇ¥Èw?sm
Ìû÷«bl@"D @î þPÃ<¬?F®úÆÖè{ôÏ«ýé55ÕÖç4.ÇãÛ5fBO{§"Ïú¹Ô³í%ÙÃØç¡>Ãèm.sz¾ÚÈ"D @"P»|þPï|þñBj(Öè¨7æt¬øBp	¹xbôéÇÇ¯~2NJ]cüiSêXæÄðgÎ«ýWÉ,@"D ÀuçD`¯êôZz_­¦¦¢÷eÎ°h?¼$KæÁHÆeq'8Â}òk<ÅÏC<~ööqmÝÝXj^íßßø'@"D @n@¨K>Ò?9ÔkôúÞöWc¡èË½¥ÖZÓ?"n[\ù 3âc¤¦<È)âÔ}üÆ±§XcÎæ½ýØçqýHêf@"D @Ü«?ü*¨ºF¢¡>âë'õgâ»½Y,/kÎ¹æ"î#ºô}|¬ó Eµ»¦¹ÇH=©kêÒÆ³7ûã·çìï~ÜeQÈ"D @"Cç¯zÞ«?~ZÿÌþÜI-.âj+övCTM3c_aÅQpî!ðÈÁÇ cÄ7c×ró©sÄ;bgÖôßjö¸-@"D @E¯èÖ?ögD¡µvÃ9 A¨Ebh6bð#Ò0âY3bøÝWÈm"lÛýS<ÆCí)
íOçx¸ÿû¢E @"D · M^Ö«ÚåýÃùí¯îR_ÑùnÂO6ýóà$óÌBªIüã=¡5[Ó-}üq¼Õ#G?>µïíOüÖ¿7~DD @"8kOÑ«É³úÇó=¢ÅÔ?ÜÁþÛ8§Í5I&"¸0J¿ÍeÄg¬Ú1¹~/Æú£þÔµæÝý{ã·¨e@"D À-è
5
Úäý¡¶¡óïÐ?ùR±Úêíâ|HEÁÂÍÑFìGÎ4/Xãmû3öÂOmF}ä=Úßø¿úï½,@"D 8$p~YôþµBÿ\öçÜg7æÙS@!ÄXO¦#±f-E~òýAög{
HzºwÙ¸§û?Ô\e²D @"D W	 GÐ/éÿÝúË(ò8;
c¾bkw¬	>)ÆæåeÏï2çùïz0rtì#Ø4Å#~ò°y¯êêÔg"D @"÷Ð&êÿý£Àä¬Gúk¿¥Ó¡PsT¡ñ±V¸éS¨M¡GBzÑÈ±'uXsPÁÚï²¿oîÿû7-²D @"D 7	¨GÖ«ÃwéÄÞÔM
AtÙ;S¹ ó²
2G
3Ça­C]Í¼µÜ¿Æ© 'ÎTbÖP rYÇü÷ôçâø¿~ýÚ¦Y"D @"#jÆ{õµÞèµþNý3û«íýíÛ¶8ò káûøyPYøoÄ0ê38æì3×[Xkg-÷ñóøÖqïßç°¨d@"D À-jGôZg×«>5:¹ã½úóYëRÿØK¿9®OÙëÓB»cMkøØgÍC2Fs#²ôÍ`íåÌ3µ±îù&|ÌþîËÞìÿjÿ¨²D @"DàÀø îÕºª?¢nyEÿPÃ:kúFÿ°F#ñÃ¹Óoö_Ë0µI>Ì8{.«(Tª:Í±±^ß<kâyÈçÐÌÍUõ_¡»}Ó¿_õMD @"8kGôºäUýnyVÿÐ|45XO­µ»b¾móBKq¥8³ ~òhÎi¤âdß=êPÃ¯aR9û<Öe'¿sj¾ÚÈ"D @"|Hà»õý^Õ?æs1õZ

å½·Ísp.
M1gáKAFqÞèÑ cÍ52*î»¦¦µÖtÏcNmrìO]sÍy¤ÿJÏ"D @"|Hà³ôZFÝòÕúGqGu÷P?í6P~Öø}óFA!È«&Í5ÖWÄg¬ùÄ±ù5PkØÑ[Ïü»ú÷7~ß>"D @"ç¿ñS¼¤?Vò~_­¼úKídµÕÇæ¥yHF88ÐsnQÖþøeª\ÖÔ`8D3ÏAo?¥ÂoÌ"D @"Cç¿ñ»¦?UÿFýÃ1½Åù¦þÂÞÚm
.¾½#KzyöõòÄÎb=ÿµÈ£5}Ëg{Öd$Þ\bêß».@"D @n@ Q1ôºhêms}ü[ôçå|ê%5÷ØÎëæ¶XÀÙó²^ØñÆcQü4ÓØÃ7c©yy8rÙ4yÄá·çb|¤ÿ
Ï"D @"\'pþ úÃXhgõúå§ôýÑL»q¹i2.1r`/>Ïsbyæßâé3µfküÔBè³¦Û¯}¾Ò:Y"D @"«þþ¹±åUýùNýãË2tZÊþÛ¥ø¸~èc.9RØGAFy¼µS,®éË¾u<#f¯Ù:ÄÏ<ÖööÔ0nM··{ÿñ1²E @"D ¸F ý¡®Q·éã¨óúgöGû¨§8zÉ;àÛÅÚ¶XlD1MqÅ}ð`¬1FÍ?4Ä§Ð[Ó]ÈÍrzÄxìVö±wýû¿>#D @"ëÎ_õDh·ôº{§?Î¾gôúº÷ö'ÝæÙÕs³?õ®
¿mc}L!/f!b(®Òd')bÐ\FLQÇW§5ãWDYkÖ4þÍ{úg½ÆD @"D G.õqÏègôêR}Ô_}f.#bo7N3ß#²,æÛà>k@ç:æzæPÇµ=kßg>ûÿÇ²{úE @"D ¸E@}Búù£úòúGOtúËùrÇ4¼${*HU¦k (Òua9{Äó0ç¡y.sâäÁY#,é¿Â·º[ÿþ?pd@"D Àó» S^Ö«Æ³ú}ôLrÔfÌgÿµ<Îi
4|20Rc>×øÜcdC°QgÆÏ8.q@ÌxæÆùÐÙoÖ#3ùÞüBþ,@"D À5êôÇ*ü¬þQ=Ús_ê)õÒ~O×$3§9sßÎ±¦(s×Äð`äÙ5¹¼µÓæB<F.¨Ä7û;·ßÝýûUÏE2@"D @nPs E~Zÿ¼ÚÝôÆ¸Ü4ÅÛ¥aØâQ¬XcÍ\Aç¾ÀÌe=µÜò¸ùîág®Mùpÿ~ÕS@"D ÀÐjõÇÈUß8ÒÝsþyµ?½¦¦ÚãÆåx|»ÆÁLBèiïTäyC?s¶½${û<Ôçr½ÍeNÏWû¯Y"D @"CjÏÐêïÐ?^H
ÅõÆ<N.0WO>ýøøÕOÆ©R©k?mJ]@ËóÌyµÿ*E @"D ¸NàüèìUý¾QËPï«õÏÔTô¾ìÏ¶módÉ"É¢L GØ±Osrç²øyÇÏ¾bÐ>î¯­»ûKÍ«ýû?ðd@"D À
huÉGú2úcí¡¾RÿÐÛþj,'}Y3¢·ÔZkúGÄm+$`qF|Ãp9Eú°ß8ökÌÙÃ< °û<®éOÝ,@"D À{õ_U×¨SÔ1ÔG|ý¤þáLa·7åeíÁ1×\Ä}D~±5s ¨v×t3÷©Ç£"uMAÚÓxöfüöýñýÓ»,
Y"D @"pHàüUÏ{õÇOëÙ;©ÐEÜAmÅÞnªi&1bì+¬X#â0
Î=9øx`øfìZn>U²bbçCììÁúþ[Íþw°e@"D Àñ²èýñÓúÇþè1'Ön8§`2µH
ÁF~DF<kF¿û
¹Mm»êQÇxb¨=E¡ýá÷ï?p_Ô²D @"Dà'ÉËúcÕ@»<£8ß³ýÕ]ê+ú3ßíRø)Â¦dYH5bü²'1Ôá¡qkºÅ±Ï_#·zäèÇà£ö½ýßú÷ÆoÈ"D @"CgÍð)úc5yVÿx¾Gô±ú;ØÛðç'¹&ÉD¦°Sâ·±øUR11×ïÅXÔºÖ¼»oüµ,@"D ¸E ½¡¦A<¢?Ô6ôpþúÇ3_ê/ÖS[½]©(#C3RS¸9Ú=ãÈæk¼ÍcÆPÃ^ø©Í¨¼GûÿWÿÃ¢E @"D Î/^Ñ³öOèËþûìãÒ¼0{
(ë)Âqä#Ö¬¥hÃO¾?ÈÂþaOIO÷.û÷tÿñ«LD @"Dà*ôÚã%ý±ò¿[ÿpEgG³aÌwSlí5ÁÇ3ÅØ¼<±ìù=Ræ<ÿ]F.}¦xsÄO6ÏñUýOú@"D @"ð ÚD]ò¿ õHí·ôb:j
3T#>Ö
7}
µ)ôSòC/9ö¤k*Xû]ö÷íâÃýÿ¦ED @"Dà&õÈÓúcuø.ýØºI!.{g07`^VAæHaæ1¬b¨«·û×8ÖJÌ
@Î3ëÿþ\Ü3ÿ×¯_ÛÀ4@"D @"pD@íÁx¯þ Öý±Öß©fµÐs³¿}ÛçP>`m1|s?*?âF}æÇÜ}æsk3k-ã¬å>~ß:îýûï,@"D ¸E@
òþPëìúc5Ñ§fA§0w¼Wÿpr0k]ê{é7Çõ){}Zhw¬b
û¬yHæÑhÐbÄP¾ùã ¬½yÆ²6Ö=ß2Ùß=cÙýñ_íðUD @"ÿÀ½úRWõÇò£SÔ-¯èjXgMßèÖh$b87súÍþky2¦±6ÁgcÁe@U§9Ö ÖãbM<ù¹¹
Á£þ+t¡oú÷« É"D @"#gÍðþ@¼ªÐ-Ïêú¦¢ë©µÖr×RÌ· mrþ@h)®gÄOQÍ9#Tì»Gjø5Lê0gÇºöwNÍWû¯Y"D @"	|·þ¡ß«úÇ|.¦þBK¡¡\³÷v±yNÁÅC¡)æ,|)È(Î=`¬ù£FFÅs×Ô'ÖîyÌ©Mý©k®9ô_éY"D @"	|þ@Ë¨[¾Zÿ(îè£nãê§ýÂê  ÃïÃ¿oÞ(H1sÕ¤¹ÆúêXâ58ö0¿j
{3zpëWÿþÆoãÛG"D @"p@àü7~jôÇjA>Âï«õ·Q©ì¯¶ÚâØ¼4ÉCÇzÎ-ÊÚÿ¯¢LËìç¨ãaæ9ámá§ôOø-Y"D @"pHàü7~×ô¢êß¨x1¡·8ßÔ_øÐ[»MÁÓ·wrI/Ï±^ØY±ãßð±yÔ°¦oùaÏÄKÌSýûqÐe@"D À
è4
#þPM²m®þá¼O½¤òÛyÝÜë ¸ {^Ö;"Þx,f{øæc,5/G.û&8üÖð\ô_áY"D @"ëÎßDø
ò¬þP¿üþ±?i7.7MQÆ%1FìÅg2sâÙcN,Ïü[<}æ±ÖÌaZ=sÖtóµÏWúS'@"D @"pÀß#76C£¼ª?Ð3ß©|YnSKÙ»Â }Ì%0G
û(ÈÈ1·vÅ5ÝcÙ·bÄì5ûSøÇÚÞ^Æ­éöÖpï?þ3Fö²D @"D × ?Ô5ê#ýau~BÿÌþhõçQ/y|»XÛëM(¦)®X³ÏC5ÆH£ùøzkº¹CBxÝêÏ>ö®ãwÓg"D @"pÀù«híþ@w`ïôÇÙ÷þQQ÷ÞþÄ¡Û<»znö§ÞUá·m¬)äÅ,DÅU6EË)êóê³&srü(kÍÆÒ_±yOó¬×D @"DàÀ¥þ îýñþQC]ê¯ú«ÏÌeÄÐAìíFÑiâsDÅüoÜçRS`MèQÇC3RÏê¸¶ÇríûÌgÿÿàXvOò²D @"D ·¨OS0T S¾Sÿ ðèÎR9_®áFdO©Êt
Eñ³1ì3gxæ<Ô#oÂeN<<8kå#ýWøVwëßÿã,@"D 8"pþqtÊËúcÕxVÿ éOÚùì¿'Ã9MOQ& F
bÌç{ìa6êÌøÇå0ÏÜ8¿:ûÍzÄbÆ3ßû_èÁE @"D ¸F@=ñþXÕ?ê¯GûsîK=¥^Úï©@Òádæ4gîÛ9Öåaî<³&·vÚÜCèÇÈøfçö»»¿ê¹Hf@"D À-j'ÈOëWû£Þ¦x»ô!Ì[<5rk¬+èÜ¹¬ç³["ß=üÌµ)0îß¯z±1@"D ¸ úC
ó°þ¹êGZ£{îÑ?¯ö§×ÔT[cÓ¸o×8I=í<oèçRsÎ¶dcú\£·¹ÌéùjÿU"@"D @"pH@íòúC½óúÇ©¡X££ÞÒi°âÁ% æ
0âÑ§¿úÉ8U*uñ§M©bÃc9¯ö_%³D @"D ×	ý½ª?Ð7jê}µþÞý9Ãv mrþð,S#C	ÄÑâ;öÉcN®ñ\?ñøÙWÚÇýµuwb©yµã,@"D ¸A -¢.ùHÿPæP¬=tÒWêzÛ_¢/kFôZkMÿ¸mqåD,ÎbnBò §SöñÇb9{ôöcÇõ#ý©E @"D 8"p¯þð« êu:ú¯Ô?3ìöf±¼¬=8#æ¸èÒ/ öñ±fÎÕînæ#õxT¤®©#H{ÏÞìß³?¾úqE!@"D @	¿êy¯þøiý3ûs'µº;¨­ØÛ
Q5Í$F}kDFÁ¹À#ß]ËÍ§JVÌCì|=X?Ò«Ùà¶,@"D 8"0^½¢?~ZÿØ=ÖÚ
ç4L¡Q !ØÁHÃgÍáw_!·°m÷O=jòOµ§('?1ãáþýîZD @"Ü"6yY¬hgôç{¶¿ºK}Eæ»]
?EØôÏÌ3©&ñsP_ö$:<Ô0nM·8öyðkÄñVýø|Ô¾·?ñ[ÿÞø-Y"D @"pHà¬>E¬&ÏêÏ÷þ!Sÿpûo~à6×$àÂv*Qü63±
Bj#Æ0æú½ëúS×w÷ïß¢E @"D · 7Ô4hGôÚÎ¿CÿxæKýÅzj«·ó!eshF
b
7G±g9Ó¼0b·yìÏjØ?µõ÷hãÿê¿sXô²D @"DàÀùeÑ+úcÖþ	ýsÙ3pÝp\fOc=E"|ÄµmøÉ÷YØ1ì) ééÞeâî?þPsÉ"D @"\%A{¼¤?Vþwë.£Èãìh6ùn­Ý±&øx¦'=¿GÊç¿ëÁÈEÐ±`ÓoøÉÃæ9¾ªÿ©S@"D @Þ@¨Kþô³é¯ý^LBÍQajÄÇZá¦O¡6q
A~èE#ÇÔaÍAk¿Ëþ¾]|¸ÿïß'È"D @"Ü$ yZ¬ß¥{S7)ÑeïLæÌË*È)Ì#µBu5óÖrÿ§Ð:SYCÈyfsðßÓ{Fâÿúõkf@"D @¨=ïÕÔz£?Öú;õÏì¯¶S z.bö·oÛâüAÊG ¬-oîãçAeáG¼Ã¨Ïâ;²Ï\cnmFb­eµÜÇÏã[Ç½ÿÃ¢E @"D ·¨AÑj]¬&úÔ,èæ÷êÎCf­Kýc/ýæ¸>e¯Oí5Q¬ác5É<ÍZÊÒ7µ3ÏXÖÆºç@Fò1û»g,{³?þ«ý~ Ê"D @"#ã¸WPêªþX~tºåýC
ë¬éýÃÄCçfN¿Ù-OFÀ4Ö&1"ø0ãlì!¸¬¢P¨ê4ÇÄzq|ó@¬ç!C37W!xÔî"ôMÿ~Õ4Y"D @"pDà¬ÑèWõºåYýCòÑTÔ`=µÖZîZù'MÎ-ÅâÌø)Ê£9g¤}÷¨C
¿IæìóXÑþÎ©ùjÿU"@"D @"ð!ïÖ?ô{UÿÏÅÔ_h)4köÞ.6ÏIÀ!¸x(4Å/Åy£G5ÔÈ¨¸cîÖZÓ=9µÉ±?uÍ5çþ+=@"D @"ð!ÏÒhuËWëÅ}ÔmÜCý'_Ø@`ø}Xã÷Í) c®4×X_}K±æÇæ×@­aoFn=óïêßßøm|û@"D @ÿÆO
òþX-ÈGø}µþñ6ê/µýÕV[æ!1bHâàBÏ¹EYûÿUàC©rYS}â<u<Ì<1¼-üþ	¿E2@"D @	ÿÆïþPTýõ/Æ0ôçúzk·)¸púö@.éåÙ3ÖË;!ö0rü>ÖB"Öô-1ìYxsyª?îº,@"D ¸A ýFaÄÐê¢©S¶ÍõñoÑ?ó©ÔPÞc;¯Ûb}D dÏËzaGÄEñÓLcß|¥æåáÈe_Ðäßñþ+<@"D @"pÀù[è_`¡AÕêÒ?öG3íÆå¦)Ê¸$ÆÈ½øLfN<{Ìå§Ï<Ö9¬ñS¡gÎns¾öùJêd@"D @®øûoäÆfhWõzæ;õ/ËÐmj)ûoâãRø ¹æHa9æñÖN±¸¦{,ûÖñ@½fê?óXÛÛRÃ¸5ÝÞîýÇÆÈ^D @"DàôºFÝr¤?£ÎOèÙí£â<ê%ïokÛb}°iÅ4ÅköyhÀ±Æi4ÿÐBoMw!7cÈQè/`â±[ýÙÇÞõïoüN`ú@"D @®8ÕM¢ÝÒèìþ8ûÑ?ê#êÞÛ8tgWÏÍþÔ»*ü¶õa0¼¡¸JÑ¦As1Es^bÖdN_e­YÓXú+6ïéoõ#D @"¸ÔÄ=£?Ñ?j¨KýõQõ¹:½Ý(:Í@|sÈ²ÿmû\j
¬)#êshFêC×öX®}ùìÿËîéO^D @"Dàõ	qêæêtÊwê=ÑYê/çËu2ÓHòì© U®¢H#~Ö1}æìÏÃzäM¸Ìg°|¤ÿ
ßênýûüÀE @"D GÎ?îNyY¬ÏêôÑ3ýÉQ1ý×òd8§)Ðð)ÊÀHAù\ãs=ÁF?ã¸Æ1ãçW@g¿YXÌxæ{ÿñ=ø³D @"D ×¨'^Ò«ð³úGýõhÎ}©§ÔKû=H:\ÌæÌ};Ç¢<Ì]ÃgcÖäòÖN{=ò¹ BßìïÜ~w÷ïW=É,@"D ¸E@ÍùiýójtÓãrÓo>bG±F.b5sû3õ|ÖrËãRä»¹6æÃýûUO16F @"D w@¨aÖ#W}ãHktÏ=úçÕþôjksãñí3	¡§½Sç
ý\jÎÙöìaìóPËaô69=_í¿Jd@"D @	¨]>C¨w¾Cÿx!5ktÔó@:
V|!¸À\F<1úôããW?§J¥®1þ')uA,sbxÌ3çÕþ«dD @"Dà:óB¢?°WõúF-C½¯Ö?SSÑû²?gØ'MÎ^%s`$c28ZaÇ>yÌÉ5Ëâç!?ûAû¸¿¶îîO,5¯öïoüÀE @"D 7 EÔ%éÊêµNúJýCoû«±ÐBôeÍÞRk­é·-®|HÅñ1RSÀMHäqêÃ>~ãØS¬1gó^Â~ìó¸~¤?u³D @"D GîÕ~T]£NQÇPñõú3qÝÞ,µgÄ\s÷]úÄ>>ÖÌy¢Ú]ÓÍÜc¤Ô5uiOãÙýñÛsöÇ÷O?î²(d@"D À!óW=ïÕ?­fî¤Bqµ{»!ª¦Ä±¯°bÃ(8÷xäàãA1â±k¹ùTÉ9b±³ëGúo5ûÜÁE @"D GÆË¢WôÇOëû3¢ÇÐZ»áF É Ô"1
41øiñ¬1üî+ä6¶íþ©GMã¡öö's<Ü¿ÿÀ}QË"D @"[Ð&/ëUíòþá|ÏöWw©¯èÏ|·Ká§þypyf!Õ$~ñËÄPÆ­éÇ>~8Þê£Ú÷ö'~ëß¿E"@"D @	5Ã§èÕäYýãùÑ?Äbêî`ÿmÃÓæ$\ÂN%ßfÆ2â3VAHmÄÆ\¿cýQêZóîþ½ñ[Ô²D @"DàômòþPÛÐÃùwèÏ|©¿XOmõvq>¤¢`ÍHALáæh#ö#gF¬ñ6ýC
{á§6£>òíoü_ýw^D @"8¿,zEÌÚ?¡.ûsî³KóÂì) b¬§SÄX³¢
?ùþ û3=$=Ý»ìOÜÓýÇj®2Y"D @"«Ð#hôÇÊÿnýÃeyÍ1ßM±µ;ÖÏcóòÄ²ç÷Hóüw=¹:ölâÍ?yØ<ÇWõ?uê3@"D À{huÉÿþQ`rÖ#ýµßÒéP¨9*ÌPøX+Üô)Ô¦Ð#N!È½häØ:¬9¨`íwÙß·÷ÿýY"D @"Ô#OëÕá»ôboê& ºì)ÂÜ@yY#cCa  @ IDATÄ°V¡®fÞZî_ãT Zg*1k( 9Ï¬cþ{úsqÏHü_¿~mÓ,@"D Àµã½úZoôÇZ§þýÕv
@ÏEÌþöm[?H@@ùµÅðÍ}ü<¨,ü7bõCsGökÌ­ÍH¬µ³ûøy|ë¸÷ï¿sXT²D @"Dà5È#úC­³ëÕDÂÜñ^ýÃyÈÁ¬u©ì¥ß×§ìõi¡Ý±&5|ì³æ!G£9BCYúæ°öræËÚX÷|ÈH>f÷eoöÇµÂTY"D @"pD`üO ÷êJ]ÕËNQ·¼¢¨a5}£X£xáÜÌé7û¯åÉÆÚ$Ff=U*UæXX/o5ñ<äshææ*ú¯Ð]¾éß¯z&@"D @5Ã#ú]òªþA·<«èO>¬§ÖZË]K1ß¶Éù¡¥¸RY?Ey4ç4Rq²ïu¨á×0©Ã}ë2Úß95_í¿Jd@"D @>$ðÝú~¯êó¹ú-rÍÞÛÅæ9	8¦³ð¥ £8oôh±æwÌ]SÓZkºç1§69ö§®¹æ<Ò¥g@"D @>$ðYú-£nùjý£¸£º{¨ö¨ ¿kü¾y£ ÅdÌUæë«Ob3Ö|âØÃü¨5ìÍèÁ­gþ]ýû¿o@"D Àóßø©A^Ò«ù¿¯Ö?ÞFý¥v²¿ÚjcóÒ<$#FICè9·(kÿ¿
|2U.kj°O¢ç ·Ò?á·Hf@"D À!óßø]Óª£þáÅÞâ|SáCoí6NßÞÈ%½<{Æzybg1ÄFÃÇZHäQÃ¾å3=k2o.1OõïÇ]@E @"D 7 ?Ð(úC]4uÊ¶¹>þ-úór>õÊ{lçus[¬àìyY/ìxã±(~iìá±Ô¼<¹ì<âð[Ãs1>Òg@"D @®8Kýá,4È³úCýòSúÇþh¦Ý¸Ü4EÄ9°ÉÌg9±<óoñôÇZ35~j!ôÌYÓmÎ×>_éO,@"D ÀUÿÜØòªþ@Ï|§þñeºM-eÿíR|\
?ô1À)ì£ #Ç<ÞÚ)×teß:³×ìOâgk{{Aj·¦Û[Ã½ÿøÏÙË"D @"\#þP×¨[ôqÔù	ý3û£}ÔSG½äðíbm[¬6M¢¦¸bÍ>
x0Ö#æâSè­é.äf9
=âL<v«?ûØ»þýß	L@"D Àuç¯z¢I'[úÝ½Ógß3úG}DÝ{ûnóìê¹ÙzWß¶±>¦³1Wi2Ú1h.#¦¨cÎ«SÌÌÉñ+¢¬5kKÅæ=ýÍ³^c"D @"#ú¸gôÇ3úG
u©¿>ê¯>3C±·E§oÎYó¿mpKM5E sDsÍH=s¨ãÚËµï3ýÿcÙ=ýÉË"D @"Ü" >!NýÁüQýNùNýÀ£':Kýå|¹NcI^=¤*Ó5PiÄÏ:Æ°Ï=âyóP¼	9ñ@òà¬ô_á[Ý­ÿ8²D @"DàÀùÇ]Ð)/ëUãYý>z¦?9j3æ³ÿZç4>E )1k|î1²!Ø¨3ãgÃ8 f<sãü
èì7ëÏ|ï?~¡D @"DàõÄKúc~Vÿ¨¿íÏ¹/õzi¿§IkÓ¹oçXS¹kbx0òlÌ\ÞÚis¡G#TâýÛïîþýªç"E @"D ·¨9Ð"?­^ínzc\nâíÒ0Clñ(ÖÈE¬±f® s_`æ²ÏZny\|÷ð3×¦À|¸¿ê)ÆÆD @"Dàè5ÌÃúcäªoiî¹Gÿ¼Ú^SSmqNãr<¾]ã`&!ô'w*ò¼¡KÍ9Û^=}ês9Þæ2§ç«ýW,@"D À!µËgèõÎwè/¤bzcH§Á/ +À'F~|üê'ãT©Ô5Æ6¥. eNyæ¼ÚÌ"D @"\'pþAHôöªþ@ß¨e¨÷Õúgj*z_öçÛ¶ÉùÃK²dNdQ&G#ìØ'9¹ÆsYü<Äãg_1h÷×ÖÝý¥æÕþýx²D @"Dà'ºä#ýCCý±öÐI_©èm5Z¾¬Ñ[j­5ý#â¶ÅI°8#>Fa
¸	É"N}ØÇo{5æìaÐKØ}×ô§nD @"DàÀ½úÃ¯ªkÔ)êê#¾~Rÿp&Î°ÛÅò²öàk.â>¢K¿ØÇÇ9PT»kº{ÔãQº¦ íi<{³?~{ÎþøþéÇ],@"D 8$pþªç½úã§õÏìÏÔBè"î ¶bo7DÕ41öV¬qç|<0F|3v-7*Y1G±ó!vö`ýHÿ­fÿ;Ø²D @"DàÀxYôþøiýcFôZk7Ó@0Z$F`#?"
#5#ß}Ü&Â¶Ý?õ¨Éc<1Ô¢ÐþÄpû÷¸/jY"D @"p Úäeý±j ]Ñ?ïÙþê.õýïv)üaÓ?N2Ï,¤ÄÏA1~ÙêðPÃ¸5ÝâØçÁ¯Ç[=rôãCðQûÞþÄoý{ã·Hd@"D À!³føý±<«<ß#úXLýÃì¿møsÚ\d"SØ©DñÛÌXF|Æ*©Ãë÷b¬?êO]kÞÝ¿7~ZD @"Ü"ÞPÓ MÑjz8ÿýã/õë©­Þ.ÎTÌ¡))ÜmÄqäLóÂ5Þæ±?c¨a/üÔfÔGÞ£ýÿ«ÿÎaÑË"D @"CçE¯èYû'ôÏeÎÀ}vÃqi^=Bõa8òkÖR'á'ßdaÆ°§¤§{ý{ºÿøCÍU&@"D @"p zíñþXùß­¸"³£Ù0æ»)¶vÇàãbl^Xöü)sÿ®#AÇ>MS¼9â'çøªþ§N}F @"D xO m¢.ù_Ð?
LÎz¤¿ö[z1
5Gªk>ÚzÄ)ù¡{R5¬ý.ûûvñáþ¿Ó"@"D @"pzäiý±:|þAìMÝ¤D½3E0/« s¤0sÖ
1ÔÕÌ[Ëýk
@ëL%f
 çuÌÁO.îÿë×¯m`E @"D 8" ö`¼WPëþXëïÔ?³¿ÚNè¹Ùß¾mó	(°¶¾¹ñF£>scîÈ>s¹µµqÖr?o÷þýwJD @"Ü" yD¨uvý±èS³ S;Þ«89µ.õ½ôãú½>-';ÖD±}Ö<$óh4Gh1b(Kßüq Ö^Î<cYëoÉÇìï±ìÍþø¯öOø*@"D @ÿ	à^ýA©«úcùÑ)êWô5¬³¦oôk419ýfÿµ<ÓXÄàÃ³±à²BE ªÓkëÅñÍ±&|ÍÜ\àQÿºÐ7ýûUOÐd@"D À³fxD K^Õ?ègõýÉGSQõÔZk¹k)æ[Ð69 'W3â§(æF*NöÝ£5ü&u³Ïc]Fû;§æ«ýW,@"D À¾[ÿÐïUýc>S¡¥ÐP®Ù{»Ø<'àâ¡Ðs¾dç
0ÖüQ#£â¹kjZkM÷<æÔ&ÇþÔ5×Gú¯ô,@"D À>K eÔ-_­wôQ·qõÓ~auá÷aß7o¤¹jÒ\c}õI,qÆO{_µ½=¸õÌ¿«ã·ñí#@"D 8 pþ?5ÈKúcµ á÷ÕúÇÛ¨¿ÔNöW[mql^dÄ!c=çeíÿWQ¦ÊeM
öó@Ôñ0óÄð¶ðSú'üÉ,@"D 8$pþ¿kúCQõoÔ?¼ÃÐ[oê/|è­Ý¦àÂéÛ;¹¤gÏX/Oì,ØÃÈñoøX<jXÓ·|Æ°gMFâÍ%æ©þý¸è²D @"DàôC¨¦NÙ6×Ç¿Eÿp^Î§^RCyí¼nnõA\=/ëo<ÅO3=|ó1#}AG~kx.ÆGú¯ð,@"D Àuço	¢?|yV¨_~JÿØÍ'¦(ã#öâ39ñì1'gþ->óXkæ°ÆO-9kºÍùÚç+ý©E @"D ¸Jàï¿¡Q^ÕèïÔ?¾,C·©¥ì¿]KáG>æ#}däÇ[;Åâî±ì[Ç1böý©CüÌcmo/H
ãÖt{k¸÷ÿ#{Y"D @"kÐêuËþ0:?¡f'zó¨¼¾]¬mõÁ¦IÓW¬Ùç¡Æc¤ÑüCC|
½5ÝÜ!G¡G¼Çnõg{×¿¿ñ;é3@"D ¸NàüUO4vK ;°wúãì{Fÿ¨¨{oâÐm]=7ûSïªðÛ6ÖÁòb"â*MF"ÍeÄuÌyuY99~EµfMcé¯Ø¼§¿yÖk@"D @"pDàR÷þxFÿ¨¡.õ×GýÕgæ2bè öv£è4ñÍ9"Ëbþ·
îs©)°¦t¨cÎ¡©gu\Ûc¹ö}æ³ÿp,»§?yY"D @"[Ô'Ä©??ª?Ð)ß©xôDg©¿/×ÉpL#ÉK²§Teº"øYÇö³G<sê7á2'H5Âòþ+|«»õïÿñGD @"8ÿ¸:åeý±j<«ÐGÏô'GmÆ|ö_Ëá¦@Ã§( #1æsÏ=Fö0ufüãrÄgn_ýf=b1ãïýÇ/ôàÏ"D @"\# xI¬ÂÏêõ×£ý9÷¥R/í÷T épM2s3÷íkò0wMFYË[;mî!ôÈcä
A|³¿sûÝÝ¿_õ\$³D @"Dà5Zä§õÏ«ýÑMoËMS¼]úf-Å¹5ÖÌtîÌ\ÖóYË-Kï~æÚ÷ïW=ÅØD @"ÜA ý¡yX\õ#­Ñ=÷èWûÓkjª­1Îi\Ç·kÌ$öNE7ôs©9gÛK²±ÏC}.ÑÛ\æô|µÿ*E @"D 8$ vùý¡ÞùýãÔP¬ÑQoÌé4Xñà sñÄèÓ_ýd*ºÆøÓ¦Ô±Ìá1ÏWû¯Y"D @"ëÎ?þÀ^Õèµõ¾ZÿLMEïËþa;Ð69xIÌ)!Êâhqûä1'×x.xüì+íãþÚº»?±Ô¼Ú¿¿ñOD @"Ü Q|¤(s¨?Ö:é+õ½í¯ÆBÑ5#zK­µ¦DÜ¶¸òA"	gÄÇH1L7!ySÄ©ûøcO±Æ=Ìz	û±ÏãúþÔÍ"D @"¸WøUPu:EC}Ä×OêÎÄv{³X^ÖsÍEÜGtéûøX3çjwM7sz<*R×Ô¤=goöÇoÏÙß?ý¸Ë¢E @"D Î_õ¼Wü'þý¹Z]ÄÔVìí¨f#Æ¾Â5"£àÜCàÆoÆ®åæS%+æ!v>ÄÎ¬é¿Õì?p[D @"/^Ñ?­ìÏCkís&PÄ(ÐlÄàG¤aÄ³fÄð»¯ÛDØ¶û§5y'ÚSÚÎñpÿþ÷E-@"D @n@¼¬?V
'Ë3úó=Û_Ý¥¾¢?óÝ."lúçÁIæTø9(Æ/{Cj·¦[û<ø5âx«G~|>jßÛø­oü,@"D 8$pÖ¢?Vgõç{Dÿ©¸ý·
?pNkLDpa
;(~ËÏX!µcsý^õGý©kÍ»û÷ÆoQË"D @"[Ðj'É#úCmCçß¡<ó¥þb=µÕÛÅù294#1£Ø3i^±ÆÛ<ög5ìÚúÈ{'¿ñõß9,zY"D @"pHàü²èý1kÿþ¹ìÏ¸Ïn8.Í³§B±"LG>bÍZ6üäû,ìÏöôtï²?qO÷¨¹Êd@"D @®@ =^Ò+ÿ»õQäqv4Æ|7ÅÖîX|<SÍËËß#eÎóßõ`ä"èØG°i7Güäaó_ÕÿÔ©ÏD @"D ï	 MÔ%ÿúGÉYô×~K/¦C¡æ¨0C5âc­pÓ§PB8 ?ô¢cOê°æ µßeß.>Üÿ÷oZd@"D @nP<­?VïÒ?½©è²w¦sæedfÃZ!ºyk¹Sh©Ä¬¡ ä<³9øïéÏÅ=#ñýúµ
L³D @"D GÔ÷êj½ÑkýúgöWÛ) =1ûÛ·mqþ å# ÖÃ7÷ñó ²ð#ÞaÔgqÌÙg®1·6#±Ö2ÎZîãçñ­ãÞ¿ÿÎaQÉ"D @"[Ô èµÎ®?V}jt
sÇ{õç!³Ö¥þ±~s\²×§vÇ(Öð±Ïdæ-Feé?ÀÚËg,kcÝóM #ùýÝ3½ÙÿÕþ	?Pe@"D Àñ?Ü«?(uU,?:EÝòþ¡uÖôþaFâ!s3§ßì¿'#`k|q6ö\VQ¨Tuc
b½8¾y ÖÄóÏ¡«<ê¿Bwú¦¿ê	,@"D 8"pÖètÉ«úÝò¬þ¡?ùh*j°Zk-w-Å|Ú&çâJqfAüåÑ3ÒHÅÉ¾{Ô¡_Ã¤söy¬ËhçÔ|µÿ*E @"D øÀwëú½ªÌçbê/'Ê5{oç$à\<bÎÂâ¼Ñ£Æ?jdTÜ1wMMk­éÇÚäØºæóHÿE @"D øÀgé'ºå«õâ>ê6î¡~Ú/l 0ü>¬ñûæC1WMk¬¯>%ÎXócók Ö°7£·ùwõïoü6¾}D @"D Îã§yI¬ä#ü¾ZÿxõÚÉþj«-ÍKó1$qp¡çÜ¢¬ýÿ*ð!ÊT¹¬©Á>q:fÞ~Jÿß"E @"D ÎãwM(ªþúczóMý½µÛ\8}{G ôòìëåÅ{9þ
k!G
kúÏö¬ÉH¼¹Ä<Õ¿w]D @"Ü þ@£0bèuÑÔ)Ûæúø·èÎËùÔKj(ï±×Ím±>"²çe½°#âÇ¢øi¦±o>ÆRóòpä²/hòÃo
ÏÅøHÿE @"D ¸Nàü-Aô/°Ð ÏêõËOéû£vãrÓe\cäÀ^|&3'=æÄòÌ¿ÅÓgkÍÖø©Ð3gM·9_û|¥?u²D @"D W	üý7rc34Ê«ú=óúÇeè6µý·Kñq)üÐÇ\s¤°óxk§X\Ó=}ëx FÌ^³?uy¬íí©aÜno
÷þã?cd/@"D @"p úC]£n9ÒÆQç'ôÏìöQOqõwÀ·µm±>Ø4bâ5û<4àÁXc4hO¡·¦»1ä(ô0ñØ­þìcïú÷7~'0}F @"D ×	¿ê&ÑnétöN}ÏèõuïíOºÍ³«çfê]~ÛÆú0B^ÌBÄP\¥ÉhSÄ ¹¢9¯N1k2'Ç¯²Ö¬i,ý÷ô7Ïz@"D @\êâÑÏè5Ô¥þú¨¿úÌ\FÄÞnf ¾9GdYÌÿ¶Á}.5ÖÎuÌ94#õÌ¡k{,×¾Ï|öÿe÷ô'/@"D @"pú8õóGõ:å;õè,õóå:i$yIöTªL×@Q¤?ëÃ>söçaÎC=ò&\æÄÉ³FX>Òou·þý?~àÈ"D @"#çwA§¼¬?Vgõúèþä¨ÍÏþky2Óhøe`¤ Æ|®ñ¹ÇÈ`£Îq\ãñÌó+ ³ß¬G,f<ó½ÿøüY"D @"kÔ/éUøYý£þz'?ç¾ÔSê¥ý
$®IfNsæ¾cMQæ®áÁÈ³1kryk§Í=y\P!oöwn¿»û÷«dD @"Ü" æ@ü'þyµ?ºéq¹i·KÂ±Å£X#±Æ¹Î}Ëz>k¹åq)òÝÃÏ\óáþýª§#D @"; ?Ô0ë«¾q¤5ºçýójzMMµ5Æ9ËñøvÐÓÞ©Èó~.5çl{Iö0öy¨Ïå0zË¯ö_%²D @"D Ô.¡?Ô;ß¡¼5:êy +¾\`® #}úññ«S¥R×Úº 91<æójÿU2@"D @"pÀù!ÑØ«ú}£¡ÞWë©©è}Ù3lÚ&ç/É9E01D@-°c<æäÏeñó}Å }Ü_[w÷'Wû÷7~àÉ"D @"Ð"êôeõÇÚC'}¥þ¡·ýÕXh!ú²fDo©µÖôÛW>H$Áâø))à&$r8õa¿qì)Ö³y@/a?öy\?ÒºY"D @"#÷ê¿
ª®Q§¨c¨øúIýÃ8ÃnoËËÚ3b®¹û.ýbkæ<@Qí®éfî1RGEê:'§ñìÍþøí9ûãû§wY²D @"DàÀù«÷êÖ?³?wR¡¸Ú½ÝUÓLbÄØWX±FÄa{<rðñ ÀñÍØµÜ|ªdÅ1ÄÎØÙõ#ý·ýî`Ë"D @"#ãeÑ+úã§õýÑch­ÝpN# Ádjü4xÖ~÷rÛvÿÔ£&ñÄP{BûÃ9îßà¾¨e@"D À-hõÇªvyFÿp¾gû«»ÔWôg¾Û¥ðSMÿ<8É<³j?ÅøeOb¨ÃC
ãÖtc¿FoõÈÑÁGí{û¿õïß"E @"D ÎáSôÇjò¬þñ|èb1õw°ÿ¶áÎisM.La§Åo3cñ« ¤6bc®ß±þ¨?u­ywÿÞø-jY"D @"p zCM6yD¨mèáü;ôg¾Ô_¬§¶z»8RQF0f¤ ¦ps'{Æ3Í#ÖxÇþ¡½ðSQyö7þ¯þ;E/@"D @	_½¢?fíÐ?ý9÷Ù
Ç¥yaöP1ÖS)âÈG¬YKÑ|ýÃî]ö'îéþã5W,@"D ÀUè'ÇKúcå·þá2<ÎfÃï¦ØÚkg±yybÙó{¤Ìyþ»\û6Mñæ<lã«ú:õD @"Dà='ºäAÿ(09ëþÚoéÅt(Ôf¨F|¬nújSè§ä^4rìIÖT°ö»ìïÛÅûÿþM,@"D ÀMê§õÇêð]ú±7uB]öÎan À¼¬ÌÂÌ1bX+ÄPW3o-÷¯q* ­35gÖ1ÿ=ý¹¸g$þ¯_¿¶iD @"DàÚñ^ýA­7úc­¿SÿÌþj; ç"fû¶-Î$  |ÀÚbøæ>~T~Ä1úÌ!¹#ûÌ5æÖf$ÖZÆYË}ü<¾uÜû÷ß9,*Y"D @"päý¡ÖÙõÇj¢OÍNaîx¯þá<ä`ÖºÔ?öÒoëSöú'ÐîXÅ>öYóÌ£Ñ¡Å¡,}óÇX{9óem¬{¾	d$³¿{Æ²7ûã¿Ú?áª,@"D 8"0þ'{õ¥®êåG§¨[^Ñ?Ô°Î¾Ñ?¬ÑH<Äpnæôý×òdLcm#3ÎÆË*
ªNs¬A¬Ç7Äxò94ssGýWè.BßôïW=AE @"D GÎáý.yUÿ [Õ?ô'ME
ÖSk­å®¥oAÛäüÐR\)Î,¢<sF©8Ùw:ÔðkÔaÎ>uíï¯ö_%²D @"D ønýC¿Wõù\LýBC¹fïíbóBSÌYøRQ7z4ÀXóG;æ®©i­5ÝóSûS×\sé¿Ò³D @"D ø,ýQ·|µþQÜÑGÝÆ=ÔOû
ÔA ß5~ß¼Qb2æªIsõÕ'±Äk>qìa~
ÔöfôàÖ3ÿ®þýßÆ·D @"DàÀùoüÔ /éÕ|ßWëo£þR;Ù_mµÅ±yi#$!ô[µÿ_>D*55Ø'ÎQÇÃÌsÃÛB{¼Ô?á·Hf@"D À!óßø]Ó?*µÉ-ýCgõÏµþùHñb£çúy»MÁM'9{Æzybg1ÄFÃÇZHäQÃ¾å3=k2o.1OõïÇ]@E @"D 7 ?Ð(úÅzêµÜìß¢<zI
å=¶Ãºy>û&'P¥zY/ìxã±(þ)ÙÃ7c©yy8rÙ4yÄá·çb'·59ê¿¶²D @"D ×	¿%þðúâR A{éõZå³ôKÜÓøÝ8Ä4Å%1FìÅg2sâÙcN,Ïü[<}æ±ÖÌaZ7sÖtóµÏWúS'@"D @"pÀß#76C£¼ª?Ð3ß©|YnSKÙ»Â }Ì%0G
û(ÈÈ1¬X\Ó=}ë\È^³?uy¬íí©eÜn*\uý×øÏÙË"D @"\#ðþxFÿ uÐ.Ø«úgöGûXÚê%µ¾]¬mõÁ¦IÓW¬Ùç¡5ÆH£ùøzkº¹C WàÝêo}r9÷^»¿ñ_D @"8ÕM¢©IÐÌy¾Zÿ¨a8Ã-ýÃy0âÐ?]=§>"f³)îpLUh01¶±gÏÇ¦ 1SÔ1çÕ)fMæäpÑÙ¿5e_±i|ÁØÙß¼µE @"D øbêõúã«ô½/û_Ó?³?ûÕ\F{»4Í@|sÎ%-æÛà>¢n"Ì9¢9Ð©gu\Ûc¹ö}æö'ç?8ÝÓ¼,@"D À-êâÔÌôzDÍÃèü³ô=ús6GÜìïýÍpL#ÉK²§ô-k PøYÇö³G<sê7á2'H5Âòþ+|«»õïÿñGD @"8ÿ¸:åeý±j<«ÐGÏô'ísM-÷É8Ô4>E )1k|î1²!Ø¨3ã­KÃ8,f<sëùÐÙø¹ñÌ÷zãzðg@"D @®P(À¦ÞzÆ8Gj±©gâÕ?§è?ñ¬ÕI×ôÏ¬g®ýwýs®c¼±ûux`Ó9dÎCQ¹&#ÏÆ¬Éå­6÷ C#¾Ù¹¯õ÷æí=úUÏE.@"D @nú]¢þ }qMÿ¼Ó+î3ô5f¿£þ+ìªþ"÷q¹iüÒðqis/XcMöeä{ú1òatoM·9#&pû#"5wö7}.û«_õID @"ÜA@ÆP0ÇÏZýãÞrízÏÐ?èzbô±?úÇþÌÙÃÜýñ³ÞKó4dÎáM¢öNE7ôS{ÎÙVäÙ}êÏËKzZçþÖ±ÆJÏ"D @"|H`jçèMkÇkúC½ó¬þyDy©îmoÍöÅL szAæ`M7Q¨O?yüê'# g­µÜÿkê
9ýxÌ»Õnçg¸ìOLD @"DàÀù!ÑØGú=õ±ú5ZÿìMýÃþ3ú<{Oý¦²&#Ïì¿'Ç69xI9É¢"£ÅiÎ>yÌÙ7Ëâç!?ôÀÖrmm±ú?êO
ögêPÿwã·(d@"D À-jõñê|jüúÃ}ã§þ!þRÿÌ`júÛCõ¨1÷ìOý­A¾ÝLÞPØsa
8oÜlDöÙ3nMw±Æ#Ç<úøXñ²¿_õÆE @"D ¸ ú£Þ mÏúÍ¢®Q¨cAÿ¨µÃO:<Ì<úúXÑó§î±®±Ö¡&>û³~»8¯MdÄ\SdÖ^¹cß5s üw=Ä°ÆÜcõ\Só öd='óËþÖ"þ~ÜeQÈ"D @"Cç¯z*¤Ô!SLýÃ\
&QëO
ô1~KýC¾ýfüGýíÍ>vÙ_=tÚ=ÚD§Iûtí÷S9ÔÜó­>/@Þ]Ë­¾yyÖÄÎg-ßô þÖ4þþc¼éßà¾Èd@"D À!ñ²hjâqúC1¦ÆaT÷8ºgrñù-Cì=úgí¨þ!ßzôy£ÆØÝæ!BLyhFL~a5#ß}æ<^lM÷zôðàæS[(Äâ§/5.û³á75±D|ÿ×à¾(d@"D À-h¿Y¦P0âÇGÌOéúc×ú³çùá¬»!¦¤ØÒo¢¼¬ ÁG1Æ/{Òú<ä·¦»P#¿FPç¹uö!ß³³÷ïß¢E @"D ®üª'zCmÖ¸ÔêcxyEÌgèúQÏÚô:êO,f'úkÛðc
,|sM4Ãh1ßfÆ2â3ã90f.~/FÜeÿK]D!¦8$×þøÉ'º[ÿÞø-Y"D @"p :Âm2õÚµÚfM7S IÔ*Æ°÷¨þ¡yöß4ÍZ3êWÿxVF|ÆËøÝÞ, YÐ$aÜÑfìQ59Ó¨G<ûóñ úeN=Fòf|Æè_®-}lûïN0ú@"D @®8¿,Bð¨?Ô$MÝ¤æù.ýCÿGõçå|»Íè$K²§°r-bqÌ9µM»¬Gm/@¼ùÌyØ÷¡&ó£þ³6¹Äa?Ô<yú@"D @"ðÀ¥¦`í[<¢Õ5ÌÕ?èKýãÂÏ©g¦þAß`h÷§þ!÷HÿØ|
©oN><Èî8ûðì>8köü)syAÂ>9ùøÉÃ¬Ïe~Öy  ¾ç'¿9ôç1wM³D @"D ÐhQmÁ¹-ÂZýC,ºdêtõ.ë¬­]W9W×0bÔúúKQJìþZ['³°k#
0U(k <ó¢ì	ZÑðÛ:¬1/f¿÷¹êxb¨¡\úcÖÝúÿþmÓf@"D @¨wÐè
Ö<è©EXÏMÄ|¤¨¥NQ¿Xmm{öWë¸FÿÐæ<ýê¢òÇHÆ!(y G
3ÇaíA8
Ëö1XÇ±g
rÙç<³ÿZî~ö¬m/osÉÛîöëÇÀE @"D ¸J@­¡nZ	¡VQÀácnñúGDSõ<k²g_ýSÈ¨ìIMæØeõþ-ÈÃmó>.àãXoîãçápø919Ä1w$¹ÆÜ5çÚ}êñøÖQ¸ÿ×ç ®ÆD @"DàjBÐê5ÇÜZ8ô9j"Öäëx¤å!oæ®å¾vZ<öÒÏßõç¥)Öð³ÏdÌB-¡,U5ùzM÷XáX=r©k>û³Í3P>³¿g ¥ýÿ~BD @"ÿ Úí®ÚÃ\õºåþ!V£V!ÞXö05#ºúç²?µæ×8Éã!<æÄðà{cLcm£2ÎìÄK	AÕi5õâø»Ç!ç!ÿÿ·w/»eËA ÷nÑ6ïâ×ð+¹ç-¹ãðp$KFÓqs7ó³þµbÏZ¹sgª:YÒØ#î#æ¸ÖÎÌª|ÖC=Eï¿ÿªçQ­ÀV`+°Ø
l¶[­ÀVàøîÍàýÐûÝgb¿\òFÁëÖ[e¾uñùV³{¿Üß?ÅïmÃÀøtÐtÄ,×{ü|*ß=Nêú=4ãrÎ©DÃt+y2~øÐJ¸G"òpñéñÕ@ò'Õ×4ÝøÅwê|v·[­ÀV`+°Ø
l¶[­À¬·èmãM1éútzxô¡KGßÛÇG_Ó¾ÐôæûE_º½sèiA4L§ØäÉf<üÖ9¨ÍdÈrL>âÜoßð×(n<XÌY £{ÚÁÁÏ/;±O¯Áæûü£?Ý:èÿõÿðÿû»ÿ!#­ÀV`+°Ø
l¶[­ÀV`+ð¨¿öÛßþöÿs4ï~«6ßB½Øõ&ñNé=å
2ß?óA÷¹÷Ooo~.>Üûç¿SçP¿ Dësðkúø=ô8äL 4>ÝlÓí·ztéiô²§GøB(6^ü~.¬ÑMO>ðäõ÷ùùßöáwTba+°Ø
l¶[­ÀV`+°xY?ÿó?ÿïà?Í»xSxO oàa×û§÷~º½±ÃûÔûmo¨Þ?½mð{OeÏ_ñétÅÉ¶øù>õ¦AçtáGç¬ÿ_¤Ø³Ó×ÈéÕç§x%F§¢ä©OVÁÙ¡§¾~¿J=ÈýoþìÏþï¶ÜS¶[­ÀV`+°Ø
l¶[Y¿$ú¿øïÿp'Þ/ú½i¼îïÞ?é{¿°Ñ¼?Øxÿ°ëýÓ»ê`<ÐÉ^?=1À§Þ_ýbºb»p:"#ÆAºøôjú^§ú%LªøtÈ>³Ù§§)Ì?ÆðÛ¿ù¿ù»?þã?þ['á3|È¶[­ÀV`+°Ø
l¶[_aübH;Þ
ÿñ7¿ùÍ:Jð_ÖÌ»Â{ôþè­B¦ÑÞóýã7ËçÞ?ó]Õê0;ß;ðO7HW¬r#ï¯tOGç íd?z¥§':]×a}.q]"K~·9Dl¦n¾a>ÿ7ùßýÝßýÁ_ýÕ_ý¿üÇüôGôÏÿðÿð<þ'óÎa:>úÙäÇ$ÎG-º~8úÁM:y8bnü­s¡y6gÐõÃ÷¹ÞÝOzóÒÝù·ó¯¹Ðü
'èúa| LÙ¤³)æÎ¿ÍæMØA×ßçRzw?éMÌHwçßÎ¿æBó+l ëñ~0eNÎ¦;ÿ>>ÿü; ú§úÛ?ù?ùý×ýþæh[mì]Ò--ê>\zÞ Ïùüm_zÞ-ö@ë6ß1Ó:ÿlÑxÚôwtýät9ñt&qmòÓÇï×îáWÓOqÒ©=ÿètõýMütñé¾Ðxäôõµ{'s''w'}'ÆrwödÆÆ÷Â}Pl:l Ìî®_<: >f|'Fö©ødÿ(Â[ÿ»þ®µ°ûÏî¿Î=®õÐO5iÀ«=¯:7{ÿØû××rÿ'~?rÿ3¯?µþýC.'¿9Ú9ßøÑ÷[<M-`qða>|4<ÈÂxúñèäø 9º± ;÷üôè ¸ñÐéÜçî÷@âwÈ0ÇóM939~ÓóhÒÏÏA>MñþåAóG<æõ°c.\¶úôÐ|¤[øWG#¼Wñé³åfã£µr8ÈÓ^4Ì¨\ª1]<¹ ù&+æA>âÐK­r»çE·V|¾güüÞø[ÿ»þvÿyîÙöPõ°?îþ{GIöüó¢óÖ|÷ü=pÀÞ?¾½ûWsÝÝ±=2^ýî¨¾¿»¦Ç¾Ö½¯ß®ä¹ø øh¾Ñõòôã[s0ßõÑþ bÁé ÅõúÅö=ð²»Ç;6tàúÕO|¾Ä,ßj×øék/PNto> ½lÎ`'wü ädÎâ¡ØdîvúÉè¼9@<:xÓ]ÿ  +|ð«5<íêÓ/&¾&÷|Å£ÇDëk³ÈÆyäç uª^x¿Ç;È¯¸Ñâ£A¹tåìéóU|}qÙÞã].xëßÜÚùw­§]»ÿìþûöliwìùó<?öüÝûÇ×|ÿ*÷Î?óÙ û¢5oýw»kî¿ì6ùÉ6XÉØòñédS>úé°=ú?u'/±ÐdÙÌñ'1·w[WîxúöGÀ^? ×ò¿öÓÎüÀ |v¥Ã)À¼$¦=A_qJ,µì¦Ovb/_øxùe«ß<?òâ_Ò+&¹ßxìçø£ÉéÖÈ³Kg'& ÛÏ&ï±Z}¢3f}ºÅ%Éò'¾fÌI
:¢ñÝX¦9øµÆºñ·þ;ÿ®²ëï¹OîþsÍÝgÆ?{þîýãÛºÍûcçïÕþïÑåþ;m¢Ý3çý3{üîpúîúl¢³Áä¹ù|ý|ÁZ¾òy¤ÑýOlz gîäb?È¦xù'CóÏ¦O`üI?ôö¤kKÝå Ï~*Ña¦ëGäéèÙ¦îä)«PéÒÉO|:'|õé0>ÝÆK6ûr/æA>&=¶ Ö×'}t|ÖèOy¾ðË-ZÏò8»&Ê¡ö'Óÿ')>ÝòËO1«#þÆßúïüÛõ7÷{~ûÆî?×ù¡.Ö
Øý÷y¾Ì¹³çÏuþ#{þªÂsÙûÇ/÷þçÛ¹¿dÿ·ö}óæXhwwtg=5Ý{üCtêº³ºåÍ¶ý¯öêâãó/~4½÷è>úhºl@kº1àñÑûÍ|Âù£çûKÿ|Àlè)Ã?!¥úaüd
¬FþÊ9^¥/pÁ³9XÁÐÑÄév§ÿYäüêç3;<²tÊ	¿Æ- Oye[<tý<sù6Þäsüäüzê¤¯¡ËmÖMO¯qï`= úg¿lòYür3:}ÓÙø×7ÝúïüÛõ·ûO{)lO°ûïóll¿Tj¶çÏóÌwF«Ks½çïQï`ï_çýÏ¼¾ß?}Òæwsð(rÿ¾yàaE×>î×þ¶väéKÊù×ïwF[9¾ÒAç¯>úù-~úõéÆ/&@WòÆ*êN~zå>qúÅ¥BAëßq@dS LÙÅ¹xóAÁ'=­
K¯ÇOt9ä#y¶=îôéN\ù #O'_°1°Gã¤ãM|¨>Æ FÐ àÆ8etØ4	²/º³þôAþèWÿS0~Ä§CNjù.>Þ=>ÞÆÖJ=ÀÖÿÏ;ÿvýµÏ\+ãù3þî?»ÿîù³çïÞ?®} ò[¾Ùûïûw\ã'kü0^÷îÊù{Àóg^%ÓÁO>èðÓ!ó£`¾:?wüJÏrH¿q6Fò}r¹áÝÇ°ïté}úð+Hï{2 ÷ Cz:Ä#'+°$?È<}rP1Â=².é¥G¬üdCN~r4Ð,ì³Ck³ Ñôé£Õ$(.y~|Tü¬uêÐ£ºéá¡ëÃÅcG®¯ÉÏ¤ÎßA>t7þU«êXm¶þÏù²óïZC»þûÍî?»ÿîùó\{þ>ï{ÿØû×GîîX÷ûgvÖHo~e[ÖØòxôÿ/æù#×zâ»'ÏøÝé¡é^}v36Ýü°õ^pÿN/ùÁ:íàôÈ {úø1ÒÃCÓ#K=;@öI(Ð'¾¤3Î'O®°ÍÄó!qvùËÖoétÈÙhù 'ËWý|õwótói?ÅIßxÉ ßGÿtñéN¨Npõ¤:û|&Óå»I]nÙ×?Tþ_Åò¿õoþìü{®÷ÖÈ®¿k/iÏ±'E·ß4êW;x÷«^ê vjÚãwÿÝý·õ³ûïî¿÷=ô÷yþ?Xçvü;ÐÃ
Æïî¿öÃöA «Ågçq_4Èo¶òb;1½wüMyýxtùÒÏ7ºøÑüá}ò|ä)¿`ä=Ègý{ûé0þÐÉ¹NtØH'FGCÅOú¸ëÕ1ÑÙ$?X§_Ä+0Wñ½hz?`Oz ýô`ÍGm|tä	ùN7"b6Ðô@òûäé$y ñóväù¿ÇÏ&yþáÿ¶jT}¶þG1¾»þ¬öôî?­ç9³ûïsÌZìùsÍÎxÏß·ûÈ¿?Ïý£óü¾Wr- §%G÷(KÝ÷N'óAéàhvÎòçO<zîëtñ>ºÿtÿ/·Ãôø:|ÏÜèÞåúóý1i¶äåx~ÌIpô%0å|V|J,¦P?O¶Z°@^¼_æ<yÙ×?i åg_4 ~9òSa:ñ'>m. üb'^üúäxÅÊÏÝ¿80¹ÙáóÍ¾Öð7þ³j²õ¿æEóhçß1)hìúÛýg÷ßëÛógÏ_gæÞ?Î#âüÑ¹©._ÓýK¾ ûoãpþ[ç÷óoÞûþíüÏ<¿âtÿgü£{Î1üþÚSç0^ñée_ü0y4ù¼ÿêÆÏgû;Ædtõãë7¦<!pP\ý| '_ÿ
Lo£NJ¦Óc/ßÒ5h°/ß  ..IDAT<þ'©¯XýfÏ·äÉèÁ½|àÓË¿?â)ÏxøÓO}öøù·?î¡óO¯|'¸d}Xö XslhüxlÅÐa~§Î+>_âo2â£ó/ÿÓø}ãäÙ5¾©ÍÿÆßúïüÛõ·ûÏî¿{þ8÷üí®¡Ý#âu¿èÑýgïªõõÝÿä|?ÿñßÝ·÷ý}o<Øáè§}å®G;¬Ç^<X|ó©¯âµgM~>¦Î.÷Ãåù,þß½r§ì>~ºsÝÏü|$õpÊ¡¾ ú%Ò#ÁëÓÃ×ÏÍÁz|p¼)ýâ÷è*¾8È¯øùâ§Üèå×¥ó¥?åG÷Á£Ó$À§.[0}èÓ7±f.ÅÅ§ßäKÿ./ÇéÝã#½CåôUÎÙÔ/~ñÈÏ6yþ&Î×ÿÆ~ÿjGW³úÕW¿Úmýõª>sÞÍZíü»ÿ4ª5¬^Í·W½ªGókÎ©]ÏùR}O7vÿîÝ»þöü³.Z'ßÒþk/0.Ü×¿} 4þôîçÏì·¿¤ËVûsûK{tºýé¦ÆÏ×§l<Ó9Èó>=ûåÌøóoö[ÿÞ	ñáh6ükÕ2l@>âÃ½{z×ÐMÍK ð9 Ó£¦ $ïÖ 
WñÑ`úBþÈKÅ²ôÃüí}|<9ÓoÙÍx3×ü§S~ùÙjb×A¾?;qéÏñ³¬ñÊ/ðùIN¹ë'cSãhb/9N{ýò¬ÇX7þ³Æ[ÿïÏ×Úµfvý]µØýg÷ß=ì×Ù±çïµ7îýãûçç·vÿòïûwÚyBkÎL5hnÀÖoqÇÀGã±Í?xpùÇKÿ OÝü±íW0]
ð#GütØdOÿ|ää·ôäË=}Pý|Trº
}:õaÿê½øIá#0¡ZÒ>pÁï>ëÅú>&`ßã~ýâ¬Ç/;¼dìèÖòO^ú|KÑa6õÙüå®æúèüÑÑèpþ}|~#{ýêpgm±7ë^qñi­>àGÌâó7ãã8¿3>ë¿óïöÖÉ®¿£ß=c÷k5ÙýwÏ=¯ûÅÞ?¾þûýì½óÏ=!èþé!åÛkäÝ?ós°Î³Ct×h¾àií§|8út&ÏÔoôëëszÅº¤?º­czÝâÇ7âdºx ®Ï{¼Výù
]ÿ
.Àæ­ÓéÏä©â	Ò#©ù='Fù1 ý|ÒAßãÑá<[9Gd³rà=üëW,üÿè}zå[>dh= 3Ç¯øDkårg_mqîµÒþù¢ÇÎ/lêßò1¡È³Ç×ñÙlü«¾Õtë¿óo×ÝâÚ/Ú?vÿÙýwÏ=÷þ±÷/gCóà~ÿÄwróüÀóñáyßÂKÎH&»÷ÿò;ÈßÞô§_ /2<} ?íg|òìÅïÉ=ÇW¿|øsÏÐç£°íþqoêÇæ³ÀÙç@2ô8lðÖ%D§Gz&xtÏ>½Zwü6Húâó×`Ë§"Íø
:ßìÉélø£ÜØå'Y6å£ø@_ÎÅB³tØºäøÙôaÖÉödåLLNÆbc¹¿q%ç§vgtª}ñár+_vÅ?ÈÇøéæã«Ìóûoý¯z4?{00_vþíúÛýçíþ¿ûï?{þ>÷ÅÎ½<jòK»ÿu7
ßï?öµ¾¥;Asü ÷_|z|4>6xúùÖp÷þÐtØ
è~*~1Ò+·ôÙòðËïd?²IÇýùiÙò©M~1Ë?ò`ÝA>h2öÀû'údÜPþDîÁ(¤ úÙâ÷ÐJ§Øp¶Ùé'ïÅ¯¢zæö[=Àdå@Í&hyëO=|þ@¾gÎdlØæû½ñÓ§O¾²õ#yy×GÓÉÎÇA¾é§_Ìâ§¯{|6ÿ#³f[ÿ»þ®=Â^aÏØýçªzìþ{W{þ\ghçnx%{þ¾½ÿìýÃòõÝ¿z¨»9Þú·ó_kþã±wÞlðéê§tèMÚ,øj|öhëáIF ÉëÃå!ø°>È_¹¿øh
øº?»toòYC¼üñù= ð( vè-©©Ç¶AäY 8t'­D÷¨r¹|²Ñ0Y±Òc¦WÞõéé~üüÓé	9@+2¬õ!MF?YºëÁË/å\³MF?º\`ýr*~}²W¾âoü£@ßÕhëÿc¯æÌÎ¿kíúÛýg÷ßk-ìù³çïÞ?öþå¾i/¸ß?»[# ý¢3TÀî_Rdó^N²CüS<<zýÆ°>?øáôõÑZ'1ôKmtÅôå}ãaO^ÿ cÆçÔGãwÿ$ÏG²üÁÑÕÎKèQòR8w§DdiàÎWdpÉ]|ôÑ}ôÑ÷øú}ìâÃ/
G¯¸S';ºr.Çÿôu¨<bâûØ Xü¡ûÀñõA}þÕ¾n,tôËÖ²zâ§w'ègÍ=Ïb?ýhXní ßä¹ñ·þæÉ9vþ]ÙõwÕ¡ù Ïý¯9³ûÏî¿ÍxÏçÙÛÚÙóÿ9/öþñË¼£Ö¯æùg·Æ­omÞÑÝ_ò¼{¾ò÷©ï/þôAOÜÙÈ¾ZWåw¡{¾âçÄç»XxùNæÓ{CC×Ïî`=Þ#h~4¾{§4dñ§Cý50úxU 6%*X	Øã
?=º^¬á/ÑCtêÖÏ¿iw×.½pÜ]¼<ýÓg_ÑàrO}þØÑËoñÜo&á|sãñáâæó`=|üð>9ò@Wÿü¬7²øáòe+FP?¼ñ¯ºoýwþíú»ö{ýa÷·{¬º'¿¢çÞ?¼ûï5:gÔÔïù³ç}wÏß¯ÿüµÞ÷?k~Þ?ëw¾±óý³O?+üxâÐÇë¨=Ø6ôéjÑ0\z¸¥{°NÈÓo¾²3~ùá9N±ëÃå"_vù=È ðØfÿ{¸¿'xÁ¦$> sÅ°Ö@èðA:ý}ºúYAþÙóòÉ¼é7t{éÓË?=><ñ5qä#&º¼ÅÏmö0àâèü }4òl«]-þ¤ÙkM|@10ø¢'G'ðÒ+>>ÞGãËkã¿Õ[ÿ»þvÿÙýwÏ=÷þñ-ß¿ºO?wÿ©Ý?Ùuÿì~JÇ=Î/< ì­Ùf_oÀZ#|j|/bfx@f;åéðÍ×Ï6ÿr¡ãþ?sî¼(×dÚ©ÇòBOÈoÒSç¤9ø¤Ó ô9Õ7È0¾¦O	²M¿ç|±CWd}ô0>:yÿWå4õñéÆ'/>:¿ñgcéôqÉ³9ÈÐË¦Ü}2çcÇÓç+0Àg¾ós¯ÍøùÊÇ!ÞøG
¶þÏyµóo×ßî?»ÿ:#{þ<÷É=÷þñk¿u'µ?tÿì>:ïîWÚ[ðÐ=¦Úo`p·wgCnqõÉu%ï·ú ]yMHÓé®T|±>¸é'?ÈSãñÓÓÕxÉãûòs !ÎÀã%{<h6õñ©7NÜe÷ú)Îô­ ÅoüÄÏçÁz¿ôÐZp/2Y"1Møh<¶ BþU-Y>ãÁñ²kÌñ?¿qçp{ú-> þÆßú7Ïvþ]kc×ßµ&»ÿ|~ÿßý÷yÆµ?3VÖ?{þîýã:cZ¿Äû½Ì¯¡=`¹¾aëNßúÏ®±ò¦7yÙ}$~ºùbOý{|ºxS7}2@6ÏôýücC¯v§
ÌxúAt:øâ x¾¿Næ§~äèSòÉ¿ëêÇ«û {
U2ÑëvA²h-}~`@VLXÿ|±ïÙ¿J'0È&:þ}8Ý??Å7Æ·>ßô¢Å¸9¾qÒoÜÙÀäô&iÏâç`P.ñÙ£7þsþVÇ­ÿÎ?kcÂ®¿çþ¿ûÏî¿{þ<ÏïÎ
{ÖYÜk&Gïù»÷sá[¾[ÐüïþÜü·Væû¡³¥uÂþnKg>²èêþ{Á¶õ¦O§ÓZÍ7ó,þÁ>mgüiÏFË¾øÙñÓ7¹¿¸í#dôvùÆËo9¦÷ILñK!çw,É ÄêÃëïÛ5`ÁOüuÂt4»©§Oxöé_ÞÙ÷¸Ó×Àô«?ùÅålÆboM¿8&?SW\K<ýÐ	èMÐ§«ÆÑôñÄyÆôÆ¿j¸õßù·ëï¹7íþsl¤ßÁî¿UâÂ9{þìùÛ\ØûÇ¯ãþå{÷Íïë¿{'l>t·t®F³Ù§UÜúÅbÅõÈ|$GÏÙáÙ/Ç7:Æm¼ìÝ¿{ää?>y¹Gë¸xa:åEç]`ô%À9M[4ÀÀ$¢ÍßÑ}<rÈØj|4¯xÉ³¥£UÈlùÔÄôPÌ|À¯bM|èÿ Ï~:}°|Ñ¿	ü rº,:~~É§ïäø6ëÏ6ã3ãÝ¾$þ«ï¿ñ·þ;ÿ®=ÄÚõ·ûÏî¿{þìù»÷oýþå¼ûÒûû¦µ ù ñ»ÿÒíÎYSñøAðû£¥ÝeÙhêÏ§¦Ïo>a,ù¸ÛÔGô£ÓÁ§û*>YñÉvhzAyë'OF·xñÞÅzWé&,iÉ°áUXRèeWlØi0s°l@¬GË\LåÏ'!+ÇâÀÅGÇ/?6S}ñ
ï Ï>>?puãÇküM}|0mf}ðóSýár#/¯9ür-Ìnã_ß¢º%ÙúWócçßÛµ¼ëïÚcvÿ¹æÅî¿{þìùû<3÷þqÝµöþå&uA÷ÏîúÝ?{'é;|ÚàuíN/¸{6ûølòÏ?(»þá|r6äy½òÃ£//}ºÀç³øù¥ñä©gÓXéjüà+ÞÁú0þ(@.É<|M$é7o
ÈÈè<t(Wºd|j[ÅÀ/>$cG·½böâákúµ
Mo~¢òáwòò.h @w'ÄÅ$§+·|6Îø÷øêCWü&x±O/lü«&[ÿ»þvÿÙýwÏÎÙ=?vÿq¨V{ÿøuß¿¡ºv×4_æÝÛ«Íó9¥Sl{8¹ÿ²øàKç_ölùÐÄó/¼Äb°+Wút³ç«8ñèà±Mv'4ÎraÆ§þ0ÜÎ¾&Á  @
Ç~.úÉó,úZþòìÃâüd¯Ï_vw?úè³ËGñå<ûéÃ5º ñëgW
úàúì@ö}P<vøÙáeK?Ûò%ãÎîSñ³7þsñmýÍ¤vþíúk1#vÿ¹öÝÝ÷üéüÜó÷yvîýãyïkßüµÞ¿z½¿5Óú»{;cÔ
°õ¯ÞUßæ?Ý×òÓzÂìgð!L;<6ô³yõÝËû>}ºì`m?ûÝ÷Wþé½%ð®Ò¦G,µßc,Ý©ßGÅe8_éÒA×O÷`=Yý>²©Sña<zl¢òtÈÃt4ñá9þüs¹eû8ôàÆÀGãg3[>éÞý¬G|²ü_P|ô{ñÉgì|ò³ñ·þ;ÿ¬·ë©õßZ±¾vý]ke÷sºìþûÝQ=çôýüW=ßÖ`ï?×ï[¸Ûï­ÿûÜw~ôýÝawÍ®G);ºçG®p>³Í~®éâÑ@v×-çôÙrÊgß@§<à|+t>ÿaÈøÃC±DòihÐ@ýtÂøh
L'¦ñò¤ëÃq,ÿ.d`êóGâÓwÿdÉ£Ã&B>òIV^>y¹àéèßiúég|>¾¼ß}»jyë{55Ýúïük®wý=÷¿¹VvÿÙýwÏ=÷þáVqÝ»Â¿ûW÷¦Æ|5ªß9|¶õaçÞôytOþ¼gãÑ¡`¾ñ _YýèüÓIîa9}ã³ë-A¿8ÅÌ/	ÅÉ¦ZàÇ£?sö/é¿~Y%ÏdòrQÉîýi×`è¢ùî¿ o¸
~K~ðÒçsöÓÅKÆúsñù/¾Æ`ø	ø§,~1ôË]9²á[WþÙ¤:ÔÞä­Üã×ÁÄ§Ïnã«ÄsQ£û¦ó{áWo4¨¿õ¿ê±óïªÃGÖóg×ßU³ÝÿgËî?×Þºûïµ6úÙysïïùsUdÏ«?äüé±ÃÃî?­ÓY~ôÍÍîÖé5_ç|.>Þ';º§ü)}~õñ2¾Ý¿ñ³7ÖÏÅ?LÏû{ú÷>¿Ø5~¶>x%»$øÙÅáâO²ÙI'"Ã
JRRS·ÁÙopÙ)fùÁüÒ¿û_|v¯âìG¼rÄ]`1Ø÷1òä±åWîÙL;<0óhÌ0_å 1§Æw°N(V:|ÄcS¾Å/ö{ñÉúË²ìøÎ'zÂä³ÛøÏZ©ÇÖÿ-;ÿ®:55Ñ¬!ëªõO¾ëï¹îþóÜSvÿ=Ç=®bö=kE=öü½æÇÏyþª»ù(æ©?»ÎBts{ú;Ø''þuÿ0úh@GËsÆDãÿ O¾ø©mïõb³+þ|ãP>òE~1Ù10þ!PÂl£%dÐ%5¢c aLËö >Ðüð¤2'¿£ÇG)>}:ù¦âãÑ~v'ã;zÚÒñ_Lâåóm^ã/<uõ'°%OgÆ~ýWñÉÀÆ;O¶þÏ¹Õ¹fÊõsçß®?{G{Ëî?Ïý¿'^êïþû/jÑ¢N{þìùÓ9ëfï?í&níT£¯mÿ-oÌõ7ï_õOÅïdÆòãÞÝc
?Ð¼õ"Ë.lÓ§ËOMþõ^ütÚÿÙ¢ó?zbé6øõ³ÿ!ÜçCÊ7¥1¤"!ÉÜ?Lz8½2ÿAº¯=m~òìWLöÅG=ÿ<?@µ·§ú/ñ|Ô²!ülô£ãÉI|tu51òyüñÌNéf×Ñ÷øÉïñó¹ñ5­Vj²õW»þvÿi¯'vÿUëìê,Ûóçy^ìù{ÕÂÜèÎòêþÓÚûÇsO±®ZK¿ôû}°oÜ÷MÿÉ H6¦îüí}òöTt¾æøï¾²ÉW5ã=È?Ì÷_}ü£óï²ºÆu·o||ßXéå¾?ðO×8ðâÃøõòËáï%ÅÇ>ß¤K²àWÒ3Ðô!»l¼ÿ²áCeð2v_'Ýý¿¢ÓLÿ½øÉèæÝC=ýÆOW.øL\`<SrOFàçCTGý¿ÉH,Û¿õo5ogp²æÍÎ?Øõ·ûÏs5¬°ûïuÎ©Ç?×¼°VöüÝûÏÞÿ®=ÓÞðêþ_÷èC|ÞÙvþäÐ­ÎÖpÿ÷ å;`§Ñ¿¯O:ÅäM}>ñóq(>Ý­Å//ÊlÁ¼7vXnåÍÁú2àäwK­@W êàõÑdö Ï>ß
<p.^>êÓ)nM_<ÍÇã)þä*'Ä+¿øúÉÊ66ÐAÏ¼ðÏ>ÛüÅ£ôµâOßø pzøëoNìü{îÖÅ®¿ç¾ÒÞ±ûÏÛ'`÷ß=öü}Þ+ì ýÝïýCE.øµÝ¿zÞí?2~6îòÍ'k­9ÖÞKgÎ«úä yç3õä×ýüiÎ]ü<õò×änqg¶tðzÿÜméó£ýNÀùï
%óÊO	X
VÌF&?i¼iÎÁ>aÊ&ÏbÀnúÉð{óO·xå1ûéÀAzü³ã§3}Îñå;:Ý,t_AüÄoVÍuUY÷ú[ÿçf'óïûØõwÕd÷Ïïÿ»ÿ>ç
jÏ=æ]dÏßïßC¾ÆûÇµÊ¯}Sßù¾ÿ56ó¾
ìÎÌ¼³ö 4 yÔoú$÷x¿í.~qØÇÌò¥à±½?Ûò.×Ñ?æÃæ:\7ÍH²S>½dõûÕ(úåLG,½|#×çÓ¤ÙÈdküÅ§ßDÉY~Äl\é¬é×¤bÇ¦äìf¼dé%/>~ñÉ4ýôòÿòýHü{]åßÍ¡­ÿÎ¿]×µûÏî¿{þìù»÷ç=iï_ïß?íÝqï÷ß÷îÝE»gÛ}¬{*>]@v¿ÿôØÄ¿Ço^Ó#£?<6Å/~÷4ÐgËGúy_ïYvåÉ6]|ÀæCEúÁ¾3P¸'ÜÀÓaN§AÄ§ÿ|ä£N×.>=:Z¹çþøS÷0=óÉWV9ËG_? ò	Ïñ%ç_tò©O§øÅÄN7ûúÙÂÿª×Öçß®¿çµûÝñyv wÿÝóç~îù{Ý9öþ±÷¯æµbÏüÈýÓcçÕù{°öùêl}±¦tk3\>|²ôä«¯µ¾ÅÐÊý cùhü|±³_|¾f^Å+F¹~Èû1à^ÍéÇÃGO96àI'g,>ÿâ;ÿ>0à#;}òl øN^n°Ægqèà>ÈGìðüóUâG'ÏøÅy/~1§]±áünügÍ·þÏZ4?Âsíü{î!êÒ¯.Ö×®¿k.Íy£.Aój÷çÛýçYæGxÎ£ÖÙ®¿Ývÿ½vÕÖÞ/áüi}ËåõL¾sÏô¼ÓË~ß;ÞÁ:aL3~:dhçOzâG·¯¤§ê³O¾' _úÓN?ÿÅäãþ§éý àôÇ98>
¤AÂÁéÂìâÑCÃÓ&[ºè OÉôÙLú Î®_»³ø0=rt±òÇ¿¾øøùÉøÅ)?¹°Õ²;ÈÓ7»Z<à?ÿ|¢óæ7½¿õßù÷\ÇÒ8÷]»ÿìþû<7¬gó£ø+h°çÏ¿æÂÞ?®ýT-öþõÜ'>uÿ'ohþZzûþï®'ÿ'÷wÿîAÆo¾f|º ]öÉñï{[¼òã»Ødøb|Î¿¸ä08Ù¢ùÐ¾îKþç?6ä69ã\Å ûPl|òìÂéÃÑüß+¹MÌøüüçCîó¼¸á©Í¹[|¼â£³ÇÀÆ]í`<;lêÍøüþÐøù.ÃÕÆW¶þ×\hìü{®×]×ú°NvÿÙýwÏvþ··îù{Ýoì'{ÿQ¯óþqÿSæ8^Ýçü·Wß¬3·»0[À¯{ÿ¼ãälÃùç§øa²äé½ÿïþ°¯¸¯Öö¿æøÇIW¾õA¸ÁèdÎ¦+*^Ë<!}ðÍÔÅO¯øÅÍ74ÈFÆÏ6äúùË
o~þÔ9ºz' <ø ùÄùÓÅ¾§Î'!ÏÿÆW¡gM·þW=;ÿ®z'vý=×ÊìþóÜKwÿ}Þ	Z/Í=w=kfï×ùÒúøïFbÝÖÿ«ûï<3úþxÙ²×÷ûGþÒm-Õ'ÅGÏxúÙÐÍñ«?ÌGße¾gÒ=Ä·Ä=~ï1f¼òc]¼âãýÎ Jæ¿Î¥£(ø
W¤øëäWòå3>^¶ùfK¿	â£µrÌà+>*^ù¡³'+>\|4Ýäé§þ=þaò2>ýWùäÝ§âÑÿªÃÖÿªÃÎ¿«­½¹ÎÔÇºÚõ÷¶.»ÿ\õØý÷óç5µç*ìùÛ>»çï5¾õó×ºïüüÒùo|êüí<û¯X¯îßâÞ÷ú¯êOß<Í_ùÓOÖ\Î½~Ûï<}ÑÏ.H'G'¹þ=¤~gÃIEð<q+ÚàêÖ=v}üüÓÅWà»,ñéä=ñÉQ|6Ùi3þÑ=¡ø¿øôçøgübÀòª_åÀ0þòxù(~~×oü­¿¹1çàk;ÿvý»ÿìþktä	{þ<k²çïuÙûÇs¿ìe±tÎÍ>|­ç¯Üûþ0÷_ýøÉîã7ölèÏû÷ÜÈß»«q¾ªmñÍ>{|ò{üù}ò¨ÀoúÉñAMV|ý
zýh¿s$ù ¨T'|#'9nüpùêÓÇÇ#K^ìúhbÄ?È&+þ,6?ù5@¿ñ%gWühØøýæ±	ì`½¯Ï_ù¿.øH|¹mü­ÿÎ¿kìú{î1jÑþ×~²ûJ\5j5 ^Aò÷öÿÝ÷üÙówÏß=?vþ¶¿Âí¯¯ö_gWòÏí¿ùìþß7Ï?2þÈÐa¶ü#_ëM|}6¿è¡ÿ)#×7yqáä§2ZAç$Ç
væ§¯ØéÌ3étþÅwº:màr(>lùá~ñÛ¸õÓåK+.|h|P<4ÛôïñÓûø|æ/w?ÇÞÆûý·þ×:Øù÷ñõ¿ëo÷öÓðî¿{þìù{íí{ÿxÞ'Û'öþõúþåýÑûwóëÕý¨wóïd?èªþ½²­çûýðÏ¦ï7×cÁg>¾&ÿþ?þçsÉ£Á§«@ ütØ±Éþ Ï>èõ1ô»ÌÎñ¦ûPéÓI_¿S|²ò<ÈS +>}?¸±ð]|:àSñùÚøWÕpëo¶\ ;ÿÞÖÂüØõ·ûµàöÏÝçÎ?×{NãÇ¿Ï3¶¹Ñ}¦õ³çïÞ?~û5×ûÈú3ïj÷øù!o¾¾Ò!wÿ»ÓCÖ?:ùc`gH>ðÒæsÆ?mÉóÿd0B?YÃ±)DipbVØd§>»ZafÞ},¾ç3¾ÅøHüòÙÙ~*~¹ÜãÇñ7<øl¼á½øt|ëG¿?ýê°ñ·þ;ÿ¬ç²ëïZí{aód÷sª?Úsu¢wÿ}»ªÇ?oïæË¿¯ïê²ûï¯sÿmïü1¿¿µvßÄ	Ì7
t×ñïï÷Î¿¹¦ÅH7b¤n¼÷ød?ÌÌOäpÜ@g±D#Ó*Ðì§k>^zèøÓøéá¥_<r4j1ãìä~õò	çw:@<2-IãéO`;Çÿølú5__¶þ;ÿvýíþ³ûï<s&½çÏ¿{ÿ¸î
ýÜû×Ïsÿwçhßà½úwÑsGÎ®û/9Z#ûÜýçPù¢û÷ÏwPÎ0£³¦ÊýêýD?{ìüDî¿çV<Q ­AÖ?Xgôû8N/Åò¡A":µ Ï~Æ?ºoâ×¿Ç(~yÓ»Ç§ãÅ?{¸XåÍFw?ë'Óåcê¿²ã¿.¾>³ÉçôÇ?ÀõÓÝø[ÿ9_KÍ²»þÌÝ®}{÷ß=¬ ·gv¦Îýtî£ôë§»çï¿s¾4'¿ó×Ã0~8xoüjÄNëlzµâñÖXèÞ}¹6Éºÿ¥ÇvÊîé>½â5¦{ÿPùiAÀß×À ëGÓCèùaòSÐ¨Ø|N"ÐïÅ¤]Lýèâów_®è1f|ü÷âçó#ñ||¿Jlý_ÍÕÙù÷ÜSîë×ßµ§íþsÍö|õnÿßýwÏ¿=ÿç-jïÏzìù{Ý5~êûïs~Uò÷î?íéô'öüè|â§{È#÷ÆOG>üþ¬pß¸~Îà7«  %ÇC÷Á²© ä³pSNæå»>Ï>(ÞÝWzâÛýïùG-ÉéÒÑÒ)~¶Éa ßã¿vló?¹XùÝø×wÛú_óÅ¼hÏ¹Þù÷¬íú{îísÎìþsLvÿ}EæÇ?{þ`ï{ÿ°tÿ2':KÐÍ¸¹~ºazZ÷sxÞ¿ÉèÂ ~þ²kÝÎýü§ÈAçß=^þèäý³ä 8h¬"Ê
?Ù½PôØãÃ}>¤C·1f;õñ#>ßãã÷ÁÁÅ!¿Ç·øÓ¶øI?Hßâ¤,><ãW¼ø÷øøôjùfüÅ W¯Jÿþ[ÿk.íüÛõ·ûÏµvÿ}ûöüy½«{þ_çë<c÷þñë»ÍõÐÝÓÀO';gòÔ±ð'W÷oüüå³õ7ûôþÁz>i×û¿\àôÂläÏ=~þÈWD¨ËKò²xþ¬x0]Ì®¸¸îãÎ>ºÃ­~¹äèÊ&÷_@ñû;äxpP¾0Å¡ó*>{>®ü þÆ?K±õ?Ê`^îü»ÖÇ®¿ÝvÿÝógÏßë|ôÓ}Áè>ïýcï__ÛýsÞ¿Í_`^»¿wÿIÏ¼o_ó¿ÿ½CïûùÁÃÙð³ôÁ>!Ýú?;6°_
(Pìã)ÀúZ^EÌNN>¦Ï>J<X-ò?Û|Ö7ÙôM¹¥ÛºÕ{ú§ÿ¹øÙñ5Ç?ãÓÙø[ÿ¯×¿µÒ:Úõ÷\'»ÿìþ»çÏûçûÆ¿{ÿØû×óNýû¸ÇøãNOÖ÷Á§îßäö=¸»³0~÷¨õæÞ Oö@?[öíÉÂÓ'Þï
ÚÐ~o	ÀUA±+fí²VñXé4ðv=ÊQÿ=>½ä0à7ßßoÝ²-¾\xõééÍøÑøââ§°¶ñUãuÛú_ó¦ù¦;ÿvý5¬ÝvÿíLiØóç¹.öüµKìýcï_oïÂæÄïãþÙ½®;¯<ðôÝÿË)=ß­ó®ý­þ!:
Y_ü¾~_Å§¤ÇxÅNþ{Åú¥BCÁî'Ë½Ô!ÃÓÏvÚû } ä|áÍytO^)øôîñû¯äüf'ÀÓ>¿<èW9ÕAÀÖÿíØùw­Ó]×úØýg÷ß=öüÝûÇçï{ÿzÞ¹¿û§}­û_ç>è¾ÿ#óÿ²¼æ	;>²Ïßýþ­N÷»F~Øþ¢ äQId²¢«>¾ÆïÃã¢Sæ£¤Ë.¿}Ä&7<r8ùA>Z}`~ÐÅÊÇä±ãcæÚ=.lã}Iü~{9Ç%'>@ñÅ ;õßÆ¿ê'õ¿ê°óïªCëÃ:²¦µ¢>­ÿ]Ï=F]¬¡ÝvÿÝóçXìùûv¯ÜûÇµ7t×0G~í÷/sÂ:©&èÎ^<àLA7:ñév.Ówõÿ©ûï=þ¼ÿÌøüéwþÏXèÆPülÙý¢ âþ¢z'ùöSÅVèZr¡IÑÎÏìÓ¶}||öàn8Ù·É??[lü«Þj±õW»þ®9Ð¾ÕØýg÷ß=öüí±÷çÝaï_»ÿ6w¾õûgg¦»Dç(ºñîèûý³~zlÛ§ü	ýÁ£¨ÖDûÆß8ãÁss¤ÓCàÅãG±a2À>ÜoòÏâÒ3é`ÀFÎút4¶ùÜøÏZeÙúìü3#ke×ßî?»ÿ>ÏûÃ?çqÖ¡3uÏßçº÷½}k÷O+¾;ôµú{b÷ðöEzsüÙ¶wÂÝÕÉÐ52 G_òý¡"Ã>Ö©øõÛÜúÐùæÃÑ%Ï6pñôÓÃCÅËGý|tÐèr>Ì>þAt¹èO}º`ã_u¨Õsëÿv>©¶óo×y°ûÏÛýt÷ß·û]UMöüy±{þ>ï+·{ÿ°R®µïýãªÁïrÿjÏQKk®>:ó¼~õo­N}:éæ<p6úÅÆñÓù*°|+ÐXú¯>J:ÆÜA²&~ÏWþ\Ùð³ñ¯º½ªW5V§­ÿs®¨Gµi.íüÛõ·ûÏsxµìþkçx>XÑ{þìùcßxµ^:cÌ=kE=ªÍ¿ÏÏ?Ïuòj=7_%|­¿ñ{¯ØMÖr¿ÂeÎ6A·ËD¼Ùç­ÃóÀw°úhz|B16þÖçßµ2Z[?»þ®5¢úÀ»ÿ\µ°V|Ì':ò	Í±ÝwÿÝý÷Z­­ÝwÿµFÌÍü¿åóÇ¿)°¿uðÑúpMPc6ö&-¾C¿ÜÄ>X4È_xÚtqh$ËNlügmÕeë¿ó¯õ²ëïöö(4hß	Ïíþsí¯»ÿ>çyG{þ\õØó÷9'öüÝûÇÞ¿÷¯k¸ÖGô7
¿ùÁº,áÍ]-: ;([]²à.§¤ë»ý'¹o°âmü×õÛúïüÛõwís/ÙýçªÉî¿×¾ÙÏ=Þ^àæé¬§fñöü½fÐ}þìù»çï·vþéÝïáèkü
~¶Ùý
úÙ!Î	0'Â¤9ñ/ÆÅëÐÀGp3ºè6P:|'ôÉò©Ï>¬ÝmÓ%ã A
zãoýÍûÚù÷v­'¦R=Öõ£Ýk.Ù®¿£¨ïþóG»þ¾¿vÿy»VÚSZCúÖ¶ûÏsÝû×ó®hnìùsá µh
OÁøñ)þPYr+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶[­ÀV`+°Ø
l¶?°ÿ²XÔÃ÷    IEND®B`