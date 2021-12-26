import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaCat } from "react-icons/fa";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  return (
    <Link href={href} _target={_target}>
      <Button {...props} bgColor={href==="/"?"transparent":active ? "#f5cb5c" : "#333533"}>
        {children}
      </Button>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <HStack mt={"40px"} mb={"40px" }w={"70%"}>
      <NavButton href="/" path={path} fontSize={"30px"}>
        Dennis Wang &#160;
        <FaCat />
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
    </HStack>
  );
};

export default NavBar;