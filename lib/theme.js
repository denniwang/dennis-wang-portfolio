import { extendTheme, ThemeConfig, useClipboard, useColorModeValue } from "@chakra-ui/react";
 
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      bg: useColorModeValue('#e8eddf', '#333533')

    },
    a: {
      _hover: {
        color:"white"
      }
    }
})
}

const config= {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


const theme = extendTheme({ styles, config }) 
export default theme 