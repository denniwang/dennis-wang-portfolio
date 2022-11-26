import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { FaCat, FaGithub } from "react-icons/fa";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  return (
    <Link href={href} _target={_target}>
      <Button
        {...props}
        bgColor={href === "/" ? "transparent" : active ? "#f5cb5c" : "#333533"}
        color={href ==="/"?"#e8eddf": href===path ? "#333533" : "#e8eddf"}
        _hover={{
          bg: '#fff3b0',
          color:"#333533"
        
        }}
        _focus={{color:"none"}}
      >
        {children}
      </Button>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <HStack mt={"40px"} mb={"40px"} w={"70%"}>
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
      <NavButton
        href="https://github.com/hellolol2016/dennis-wang-portfolio"
        path={path}
      >
        Sauce <Box width={"10px"} />
        <FaGithub />
      </NavButton>
    </HStack>
  );
};

export default NavBar;
