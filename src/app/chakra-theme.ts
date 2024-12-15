import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Modal: {
      sizes: {
        "2xl": {
          dialog: {
            maxWidth: "800px", // Set your custom width here
            height: "auto", // Adjust height if needed
          },
        },
        "3xl": {
          dialog: {
            maxWidth: "1000px", // Set your custom width here
            height: "auto", // Adjust height if needed
          },
        },
        "4xl": {
          dialog: {
            maxWidth: "1200px", // Set your custom width here
            height: "auto", // Adjust height if needed
          },
        },
      },
    },
  },
})

export default theme
