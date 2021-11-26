import { Box, Button, Center, ChakraProvider, DarkMode, LightMode, Spacer, Text } from '@chakra-ui/react'
import theme from './theme/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box height={"100vh"}>
        <Center height={"100%"}>
          <Spacer />
          <DarkMode>
            <Button size={"lg"} bg={"red"}>Test</Button>
          </DarkMode>
          <Spacer />
          <LightMode>
            <Button size={"lg"} bg={"red"}>Test</Button>
          </LightMode>
          <Spacer />
        </Center>
      </Box>
    </ChakraProvider>
  )
}

export default App
