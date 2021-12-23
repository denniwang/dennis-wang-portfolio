import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import Link from "next/link";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  console.log(href, path)
  return (
    <Link href={href}>
      <Button color={active ? "success" : ""}>
        <NavItem>
          <NavLink href={href}>{children}</NavLink>
        </NavItem>
      </Button>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <Link href="/">
          <NavbarBrand>DW</NavbarBrand>
        </Link>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavButton href="/about" path={path}>
              About
            </NavButton>

            <NavButton href="https://github.com/dwang" path={path}>
              Github
            </NavButton>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
