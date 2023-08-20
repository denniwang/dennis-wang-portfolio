import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { FaCat, FaGithub } from "react-icons/fa";

const NavButton = ({ href, path, _target, children, ...props }) => {
  let active = href === path;
  return (
    <Link href={href} _target={_target}>
      <Button
        {...props}
              bgColor={href === '/' ? 'transparent' : active ? '#f5cb5c' : 'transparent'}
        color={href === '/' ? '#e8eddf' : href === path ? '#333533' : '#e8eddf'}
        _hover={{
          bg: href === '/' ? '#e8eddf' : '#fff3b0', // Adjust background color on hover
          color: href === '/' ? '#333533' : '#333533', // Adjust text color on hover
        }}
        _focus={{ boxShadow: 'none' }} // Remove focus box
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
      mb={{ base: '20px', md: '40px' }} // Adjust margin bottom for different screen sizes
      w={{ base: '100%', md: '70%' }} // Adjust width for different screen sizes
    >
      <NavButton href="/" path={path} fontSize={"23px"}padding="10px" >
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
