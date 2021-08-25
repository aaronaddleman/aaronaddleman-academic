---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Docs"
linktitle: "GoLang Docs"
summary: "Information on GoLang"
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

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
