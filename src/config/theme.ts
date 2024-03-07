import { extendTheme } from "@chakra-ui/react"

import "@fontsource-variable/work-sans"

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans Variable', sans-serif`,
    body: `'Work Sans Variable', sans-serif`,
  },
})

export default theme
