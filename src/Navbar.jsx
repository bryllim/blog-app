import { useState } from 'react';
import { Navbar, Button, Link, Text } from '@nextui-org/react';

function Navigation() {

  const [activePage, setActivePage] = useState("home");

  return (
    <Navbar shouldHideOnScroll variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          WD29
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link
          to="/"
          isActive={activePage === "home"}
          onClick={() => setActivePage("home")}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          to="/about"
          isActive={activePage === "about"}
          onClick={() => setActivePage("about")}
        >
          About
        </Navbar.Link>
        <Navbar.Link
            href="/members"
          isActive={activePage === "members"}
          onClick={() => setActivePage("members")}
        >
          Members
        </Navbar.Link>
        <Navbar.Link
            href='/contact'
          isActive={activePage === "contact"}
          onClick={() => setActivePage("contact")}
        >
          Contact
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default Navigation;