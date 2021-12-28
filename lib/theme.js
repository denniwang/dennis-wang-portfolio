import { extendTheme, ThemeConfig, useClipboard, useColorModeValue } from "@chakra-ui/react";
 
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      bg:  '#333533'

    },
    a: {
      _hover: {
        color:"white"
      }
    },
    ".miniheader":{
      fontSize: "24px",
      fontWeight: '500',
textUnderlineOffset:'10px'
    },
    ".works": {
      backgroundColor:"#f5cb5c"
    }
})
}

const config= {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


const theme = extendTheme({ styles, config }) 
export default theme 