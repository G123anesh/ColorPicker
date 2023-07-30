import { Container, Navbar } from "react-bootstrap";

const AppHeader = () => {
  let cod = { marginBottom: "20px" };
  return (
    <header style={cod}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Color Picker</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};
export default AppHeader;