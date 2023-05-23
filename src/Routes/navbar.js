import { Navbar, Nav } from "react-bootstrap";

//This function sets status of all links in navbar to inactive
const resetNavigation = (e) => {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
};

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={resetNavigation} href="#/">
          <img  src="../imgs/bank-logo-small.png" alt="logo" width="50px" heigh="50px"></img> BadBank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav variant="pills" >
          <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
          <Nav.Link href="#/deposit/">Deposit</Nav.Link>
          <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
          <Nav.Link href="#/alldata/">AllData</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
