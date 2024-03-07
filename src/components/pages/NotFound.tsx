import { Link } from "react-router-dom"
import { VStack, Heading } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <VStack pt="100px">
      <Heading as="h3" fontSize="xx-large">
        404
      </Heading>
      <p>Sorry, we couldn't find this page.</p>
      <Link to="/">Back to Home</Link>
    </VStack>
  )
}
export default NotFound
