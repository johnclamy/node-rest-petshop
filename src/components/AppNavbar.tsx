import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../components/Logo";
import Path from "../routes/Path";
import UserAuth from "../services/auth/UserAuth";

const AppNavbar = () => {
  const navigate = useNavigate();
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(Path.LANDING);
      console.log("user is logged out");
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.name);
      }
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={Path.LANDING}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={Path.HOME}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={Path.ADD_PET}>
              Add Pet
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-lg-3">
            <Button
              className="btn-sm"
              variant="outline-primary"
              onClick={() => navigate(Path.SIGN_UP)}
            >
              Sign Up
            </Button>
            <Button
              className="btn-sm"
              variant="outline-secondary"
              onClick={() => navigate(Path.SIGN_IN)}
            >
              Sign In
            </Button>
            <Button
              className="btn-sm"
              variant="outline-secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
