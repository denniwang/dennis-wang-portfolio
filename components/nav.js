import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { FaCat, FaGithub } from "react-icons/fa";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  return (
    <Link href={href} _target={_target}>
      <Button
        bgColor={href === '/' ? 'transparent' : active ? '#f5cb5c' : 'transparent'}
        color={href === '/' ? '#e8eddf' : href === path ? '#333533' : '#e8eddf'}
        _hover={{
          bg: href === '/' ? '#e8eddf' : '#fff3b0', // Adjust background color on hover
          color: href === '/' ? '#333533' : '#333533', // Adjust text color on hover
        }}
        _focus={{ boxShadow: 'none' }} // Remove focus box
        fontSize={{ base: "14px" }}
        textAlign={"center"}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
      <HStack
      mt={{ base: '20px', md: '40px' }} // Adjust margin top for different screen sizes
      mb={{ base: '10px', md: '40px' }} // Adjust margin bottom for different screen sizes
      w={{ base: '90%', md: '70%' }} // Adjust width for different screen sizes
    >
      <NavButton href="/" path={path} fontSize={{ base: "16px", md: "23px" }} padding={{ base:"15px",md:"10px"}} >
        Dennis Wang 
      </NavButton>
      <NavButton href="/about" path={path}>
        About
      </NavButton>
      <NavButton href="/works" path={path}>
        Works
      </NavButton>
      <NavButton
        href="https://github.com/denniwang/dennis-wang-portfolio"
        path={path}
      >
        Source <Box width={"10px"} />
        <FaGithub  fontSize={"30px"}/>
      </NavButton>
    </HStack>
  );
};

export default NavBar;
