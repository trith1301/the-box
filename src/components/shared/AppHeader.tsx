import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  useBreakpointValue,
  Container,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react"

import BurgerIcon from "./icons/BurgerIcon"
import XIcon from "./icons/XIcon"

import squareLogo from "../../assets/images/logo/square-logo.svg"
import wideLogo from "../../assets/images/logo/wide-logo.svg"

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logo = useBreakpointValue({
    lg: wideLogo,
    base: squareLogo,
  })

  useEffect(() => {
    setIsMenuOpen(logo === wideLogo)
  }, [logo])

  const toggleMenu = () => {
    if (logo === wideLogo) return
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="z-50 sticky top-0 left-0 right-0 flex items-center">
      <Container maxW={["95%", "95%", "95%", "95%", "1200px"]}>
        <HStack
          position="relative"
          justify="space-between"
          height="80px"
          bg="white"
        >
          <Link to="/">
            <Image src={logo} />
          </Link>
          <Box
            onClick={toggleMenu}
            display={["block", "block", "block", "none"]}
            borderColor="#2947a9"
            backgroundColor="none"
          >
            {isMenuOpen ? <XIcon /> : <BurgerIcon />}
          </Box>
          <HStack
            position={["absolute", "absolute", "absolute", "unset"]}
            top={["100%"]}
            left={"50%"}
            flexDir={["column", "column", "column", "row"]}
            spacing={["20px", "20px", "20px", "50px"]}
            width={["100vw", "100vw", "100vw", "unset"]}
            transform={[
              "translateX(-50%)",
              "translateX(-50%)",
              "translateX(-50%)",
              "unset",
            ]}
            backgroundColor={["white", "white", "white", "unset"]}
            display={isMenuOpen ? "flex" : "none"}
          >
            <Link
              onClick={toggleMenu}
              className="hover:text-secondary"
              to="#home"
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              className="hover:text-secondary"
              to="#about-us"
            >
              About Us
            </Link>
            <Link
              onClick={toggleMenu}
              className="hover:text-secondary"
              to="#projects"
            >
              Projects
            </Link>
            <Link
              onClick={toggleMenu}
              className="hover:text-secondary"
              to="#services"
            >
              Services
            </Link>
            <Link
              onClick={toggleMenu}
              className="hover:text-secondary"
              to="#contact-us"
            >
              Contact Us
            </Link>
          </HStack>
        </HStack>
      </Container>
    </header>
  )
}

export default AppHeader
