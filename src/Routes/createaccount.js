import React from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import { AllUsersContext } from "../userContext";
import { currentUserContext } from "../userContext";

function CreateAccount() {
  const [first, setFrist] = React.useState(true); //First attempt to fill the form
  const [show, setShow] = React.useState(true); //Show form fields
  const [name, setName] = React.useState(""); //Input name value
  const [email, setEmail] = React.useState(""); // Input email value
  const [balance, setBalance] = React.useState(100); // Input email value
  const [password, setPassword] = React.useState(""); //Input password value 
  const allUsers = React.useContext(AllUsersContext); //All users context
  const currentUser = React.useContext(currentUserContext); //Current user context

  var errorMessage = "";

  //error messgaes per field
  const error = {
    name: "** Name cannot be empty",
    email: "** Email cannot be empty",
    email2: "** Invalid email",
    password: "** Password cannot be empty",
    password2: "** Password cannot be less than 8 characters",
    balance: "** Balance cannot be empty",
    balance1: "** Initial balance cannot be less than $100",
    balance2: "** Balance has to be a number",
  };

  //Checks if all fields are empty to disable the Create Account button
  function emptyFields() {
    if (name || email || password) return false;
    return true;
  }

  //Function clearForm called by the "Create another account button to clear the previous form and allow the user to create a new account"
  function clearForm() {
    setName("");
    setEmail("");
    setBalance(100);
    setPassword("");
    setFrist(true);
    setShow(true);
  }

  //Function addAccount adds to account to the list of allUsers and set the current user to the new created account
  function addAccount(name, email, password, balance) {
    allUsers.users.push({ name, email, password, balance: 100 });
    currentUser.name = name;
    currentUser.email = email;
    currentUser.password = password;
    currentUser.balance = balance;
  }

  //Function capitalizeName turns a text into proper noun capitalized form
  function capitalizeName(nameValue) {
    return nameValue
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  //Function isValidEmail is called to check if email value is in proper email format

  function isValidName() {
    if (!name) {
      errorMessage = error["name"];
      return false;
    }
    return true;
  }

  function isValidEmail() {
    if (!email) {
      errorMessage = error["email"];
      return false;
    }
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      errorMessage = error["email2"];
      return false;
    }
  }

  function isValidBalance() {
    if (!balance) {
      errorMessage = error["balance"];
      return false;
    }
    if (isNaN(balance)) {
      errorMessage = error["balance2"];
      return false;
    }
    if (balance <100) {
      errorMessage = error["balance1"];
      return false;
    }

    return true;
  }

  function isValidPassword() {
    if (!password) {
      errorMessage = error["password"];
      return false;
    }
    if (password.length >= 8) {
      return true;
    } else {
      errorMessage = error["password2"];
      return false;
    }
  }

  //Function validate is called to validate the value of an input field
  
  //Function handleCreate called when the "Create account button is clicked"
  function handleCreate() {
    //Set the first to false indicating that it is no longer the user's first attempt to submit the form
    setFrist(false);

    //validate name field
    if (!isValidName()) {
      alert(errorMessage);
      return;
    }

    //validate email field
    if (!isValidEmail()) {
      alert(errorMessage);
      return;
    }

    //validate balance field
    if (!isValidBalance()) {
      alert(errorMessage);
      return;
    }

    //validate password field
    if (!isValidPassword()) {
      alert(errorMessage);
      return;
    }

    //Format name in proper nound capitalized form
    const capName = capitalizeName(name);

    //Hide form fields and display success message
    setShow(false);

    //Add new account
    addAccount(capName, email, password, balance);
  }

  return (
    <Card className="primary">
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        {show ? (
          <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              defaultValue={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            ></Form.Control>
            {!first && !isValidName() && (
              <Form.Text>
                {errorMessage}
                <br />
              </Form.Text>
            )}
            <br />

            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            ></Form.Control>
            {!first && !isValidEmail() && (
              <Form.Text>
                {errorMessage}
                <br />
              </Form.Text>
            )}
            <br />

            <Form.Label>Balance</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="Number"
                placeholder="Enter starting balance"
                defaultValue={balance}
                min="100"
                onChange={(e) => {
                  setBalance(e.currentTarget.value);
                }}
              ></Form.Control>
            </InputGroup>
            {!first && !isValidBalance() && (
              <Form.Text>
                {errorMessage}
                <br />
              </Form.Text>
            )}
            <br />

            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              defaultValue={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            ></Form.Control>
            {!first && !isValidPassword() && (
              <Form.Text>{errorMessage}</Form.Text>
            )}
            <br />

            <br />
            <Button
              type="submit"
              variant="light"
              disabled={emptyFields()}
              onClick={(e) => {
                e.preventDefault();
                handleCreate();
              }}
            >
              Create Account
            </Button>
          </Form>
        ) : (
          <Form>
            <Card.Text>Success</Card.Text>
            <Button type="submit" variant="light" onClick={clearForm}>
              Create another account
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
