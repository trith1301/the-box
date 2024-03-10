import { useState, useRef } from "react"
import { Link } from "react-router-dom"

import BurgerIcon from "./icons/BurgerIcon"
import XIcon from "./icons/XIcon"

import squareLogo from "../../assets/images/logo/square-logo.svg"
import wideLogo from "../../assets/images/logo/wide-logo.svg"

const AppHeader = () => {
  const menuRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    const menu = menuRef.current as HTMLElement

    if (menu) {
      menu.classList.toggle("hidden")
      menu.classList.toggle("flex")

      setIsMenuOpen(!isMenuOpen)
    }
  }

  return (
    <header className="z-50 sticky top-0 left-0 right-0 flex items-center bg-white">
      <section className="relative flex items-center justify-between w-full px-6 lg:w-[80%] lg:max-w-[1440px] h-[56px] lg:h-[80px] mx-auto">
        <Link to="/">
          <img
            className="block w-[28px] lg:hidden"
            src={squareLogo}
            alt="Square Logo"
          />
          <img className="hidden lg:block" src={wideLogo} alt="Wide" />
        </Link>
        <button onClick={toggleMenu} className="block lg:hidden" type="button">
          {isMenuOpen ? <XIcon /> : <BurgerIcon />}
        </button>
        <nav
          ref={menuRef}
          className="hidden absolute top-full left-1/2 translate-x-[-50%] lg:translate-x-[unset] lg:static w-screen lg:w-[unset] lg:flex flex-col lg:flex-row gap-x-[50px] bg-white animate-fade-in lg:animate-none"
        >
          <Link onClick={toggleMenu} className="header-nav-link" to="/">
            Home
          </Link>
          <Link onClick={toggleMenu} className="header-nav-link" to="/">
            About Us
          </Link>
          <Link onClick={toggleMenu} className="header-nav-link" to="/">
            Projects
          </Link>
          <Link onClick={toggleMenu} className="header-nav-link" to="/">
            Services
          </Link>
          <Link onClick={toggleMenu} className="header-nav-link" to="/">
            Contact Us
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default AppHeader
