import { Nav, NavLink, NavItem, Navbar } from "reactstrap";
import Link from "next/link";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  return (
    <Link href={href} color={active ? "#ef233c" : "#edf2f4"}>
      <NavItem>{children}</NavItem>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <Nav>
      <NavButton href="/" path={path}>
        Home
      </NavButton>

      <NavButton href="/about" path={path}>
        About
      </NavButton>

      <NavButton href="/works" path={path}>
        Works
      </NavButton>

      <NavButton href="/sauce" path={path}>
        Sauce
      </NavButton>
    </Nav>
  );
};

export default NavBar;
