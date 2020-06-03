import Header from "./Header";
import { Container } from 'react-bootstrap';
import "../styles.scss";

const Layout = (props) => (
  <Container fluid>
    {/* <Header /> */}
    {props.children}
  </Container>
);
export default Layout;
