import { extendTheme } from "@chakra-ui/react"

import "@fontsource-variable/work-sans"

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans Variable', sans-serif`,
    body: `'Work Sans Variable', sans-serif`,
  },
  components: {
    Divider: {
      defaultProps: { size: "md" },
      sizes: {
        lg: { borderWidth: "4px" },
        md: { borderWidth: "2px" },
        sm: { borderWidth: "1px" },
      },
    },
  },
})

export default theme
