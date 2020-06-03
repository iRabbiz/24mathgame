import Link from "next/link";

import { Button } from "@material-ui/core";
import { Row } from "react-bootstrap";

const Header = () => (
  <Row>
    <Link href="/">
      <Button variant="contained" color="secondary">
        <a>Home</a>
      </Button>
    </Link>
    <Link href="/calculate">
      <Button variant="contained" color="secondary">
        <a>Calculate</a>
      </Button>
    </Link>
    <Link href="/result">
      <Button variant="contained" color="secondary">
        <a>Result</a>
      </Button>
    </Link>
  </Row>
);
export default Header;
