---
## Documentation: https://wowchemy.com/docs/managing-content/

title: "Testing"
linktitle: "GoLang Testing"
summary: "GoLang Testing"
date: 2021-10-12T09:14:27-08:00
lastmod: 2021-10-12T09:14:27-08:00
draft: false  ## Is this a draft? true/false
toc: true  ## Show table of contents? true/false
type: book  ## Do not modify.
---

Testing in GoLang is quite awesome.

## main_test.go

```go
package main

import (
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path"
	"reflect"
	"strings"
	"testing"
)

var binaryName = "tempconverterTestBinary"

func TestMain(m *testing.M) {
	build := exec.Command("go", "build", "-o", binaryName)
	err := build.Run()
	if err != nil {
		fmt.Printf("could not make binary %v", err)
		os.Exit(1)
	}
	exitCode := m.Run()

	cleanUp := exec.Command("rm", "-f", binaryName)
	cleanUperr := cleanUp.Run()
	if cleanUperr != nil {
		fmt.Println("could not clean up", err)
	}

	os.Exit(exitCode)
}
```

## Single test

```shell
go test -v -run M1
```

in the main.go file, we have the follwing code:

```go
package main

import (
	"strings"
	"errors"
	"fmt"
	"os"
)

// things
var originUnit string
var originValue float64

var shouldConvertAgain string

var err error

var errInvalidArguments = errors.New("Invalid arguments")
var errReadingInput = errors.New("Error reading input")

func main() {

	if len(os.Args) != 2 {
		printError(errInvalidArguments)
	}

	originUnit := strings.ToUpper(os.Args[1])

	for {
		fmt.Print("What is the current temperature in " + originUnit + " ? ")

		_, err := fmt.Scanln(&originValue)

		if err != nil {
			printError(errReadingInput)
		}

		fmt.Print("Would you like to convert another temperature ? (y/n) ")

		if shouldConvertAgain != "Y" {
			fmt.Println("Good bye!")
			break
		}
	}
}

func printError(err error) {
	fmt.Fprintf(os.Stderr, "error: %v\n", err)
	os.Exit(1)
}

func convertToCelsius(value float64) {
	convertedValue := (value - 32) * 5 / 9
	fmt.Printf("%v F = %.0f C\n", value, convertedValue)
}

func convertToFahrenheit(value float64) {
	convertedValue := (value * 9 / 5) + 32
	fmt.Printf("%v C = %.0f F\n", value, convertedValue)
}
```

test example in the file `main_test.go`:

```go
package main

import (
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path"
	"reflect"
	"strings"
	"testing"
)

var binaryName = "tempconverterTestBinary"

func TestMain(m *testing.M) {
	build := exec.Command("go", "build", "-o", binaryName)
	err := build.Run()
	if err != nil {
		fmt.Printf("could not make binary %v", err)
		os.Exit(1)
	}
	exitCode := m.Run()

	cleanUp := exec.Command("rm", "-f", binaryName)
	cleanUperr := cleanUp.Run()
	if cleanUperr != nil {
		fmt.Println("could not clean up", err)
	}

	os.Exit(exitCode)
}

func TestCheckForArgumentsM1(t *testing.T) {
	t.Run("invalid args", func(t *testing.T) {
		dir, err := os.Getwd()
		if err != nil {
			t.Fatal(err)
		}
		// Runs the program with not enough arguments.
		cmd := exec.Command(path.Join(dir, binaryName), []string{}...)
		output, err := cmd.CombinedOutput()
		if err == nil || !strings.Contains(string(output), errInvalidArguments.Error()) {
			t.Fatal("Did not validate command line arguments properly")
		}

		// Runs the program with more than enough
		cmd2 := exec.Command(path.Join(dir, binaryName), []string{"one", "two"}...)
		output2, err2 := cmd2.CombinedOutput()
		if err2 == nil || !strings.Contains(string(output2), errInvalidArguments.Error()) {
			t.Fatal("Did not validate command line arguments properly")
		}
	})
}
```

expected output

```
=== RUN   TestCheckForArgumentsM1
=== RUN   TestCheckForArgumentsM1/invalid_args
--- PASS: TestCheckForArgumentsM1 (0.14s)
--- PASS: TestCheckForArgumentsM1/invalid_args (0.14s)
=== RUN   TestAssignsToOriginUnitM1
--- PASS: TestAssignsToOriginUnitM1 (0.00s)
PASS
ok      golang-temperature-converter-cli        0.499s
```
