# HomeBinder Login Page

This login page is a code demonstration for [HomeBinder](https://www.homebinder.com/). Users simulate a successful "log in" by entering valid email address and password inputs. 

### Validation
- Any invalidated inputs will generate an **error message** and **prevent login**.
- An email address is valid only if it includes a username, followed by an @ symbol, then followed by a domain. 
- A password is valid only if it is at least 8 characters long. 


### Links
- The login page contains functional links that direct Users to **Signup** and **Reset Password pages**. 

### Other Pages
- The signup form shares an identical functionality to the login form. 

- The reset password form is not currently a functional feature.

***
## Getting Started
View the project either via the [live site](http://jenshaw86.github.io/hb-login) or installation.


## Installation Prerequesites
Install **Node.js** and **npm**.


## Installation
Clone or download this repository onto your local machine.

Enter the directory, and run `npm install` to install dependencies.

And when installation is complete, run `npm start` to start the server. The login page should open on your browser.

*** 

## Tests 
There are two test files located in the `src/__tests__` directory.

- ***validate.js*** tests the validation of email and password inputs in the login form. 
- ***createErrorMessage.js*** tests the creation of an error message object.

## Running Tests
You can run these tests inside the directory using `npm test` or simply `jest`.

*** 

## Built With
- React 16.12.0
- React Router 5.1.2
- React Bootstrap 1.0.0-beta.16

***

## Author
- Jenny Shaw