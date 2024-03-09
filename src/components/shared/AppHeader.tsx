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
    <header className="z-50 sticky top-0 left-0 right-0 flex items-center bg-white">
      <Container maxW={["95%", "95%", "95%", "95%", "1200px"]}>
        <HStack
          className="h-[56px] lg:h-[80px]"
          position="relative"
          justify="space-between"
        >
          <Link to="/">
            <Image className="w-[28px] lg:w-auto" src={logo} />
          </Link>
          <Box
            onClick={toggleMenu}
            cursor="pointer"
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
            py={["30px", "30px", "30px", "unset"]}
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
              className=" hover:text-secondary hover:font-semibold"
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              className=" hover:text-secondary hover:font-semibold"
              to="/"
            >
              About Us
            </Link>
            <Link
              onClick={toggleMenu}
              className=" hover:text-secondary hover:font-semibold"
              to="/"
            >
              Projects
            </Link>
            <Link
              onClick={toggleMenu}
              className=" hover:text-secondary hover:font-semibold"
              to="/"
            >
              Services
            </Link>
            <Link
              onClick={toggleMenu}
              className=" hover:text-secondary hover:font-semibold"
              to="/"
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
