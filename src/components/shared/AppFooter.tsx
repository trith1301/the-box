import { Link } from "react-router-dom"
import { Container } from "@chakra-ui/react"

import FacebookIcon from "./icons/FacebookIcon"
import LinkedInIcon from "./icons/LinkedInIcon"
import TwitterIcon from "./icons/TwitterIcon"

import theBoxLogo from "../../assets/images/logo/wide-logo.svg"

const AppFooter = () => {
  return (
    <footer>
      <div className="flex items-center  bg-white">
        <Container
          className="flex flex-col lg:flex-row justify-between gap-y-[45px] pt-[85px] pb-[80px]"
          maxW={["95%", "95%", "95%", "95%", "1200px"]}
        >
          <div className="grid grid-cols-[25%_75%] gap-x-[13px] gap-y-[16px] md:gap-y-[18px] lg:gap-y-[32px]">
            <p className="font-medium  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase text-primary">
              Address:
            </p>
            <p className=" text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              6391 Elgin St. Celina, Delaware 10299
            </p>
            <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase text-primary">
              Phone:
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px]">+84 1102 2703</p>
            <p className="font-medium  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase text-primary">
              Email:
            </p>
            <p className=" text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              hello@thebox.com
            </p>
            <div className="w-[163px]">
              <img className="w-100" src={theBoxLogo} alt="TheBox Logo" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[42px]">
            <div>
              <p className="pb-[20px] font-medium text-[20px] uppercase text-primary">
                Newsletter:
              </p>
              <div className="flex flex-col lg:flex-row gap-[8px]">
                <input
                  className="px-[8px] py-[10px] border-[1px] border-[#e0e3eb] rounded-[4px] focus:outline-secondary"
                  placeholder="Your email here"
                  type="email"
                />
                <button
                  className="px-[23.5px] py-[10px] rounded-[4px] font-semibold text-[18px] text-white bg-secondary hover:opacity-95"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="pb-[20px] font-medium text-[20px] uppercase text-primary">
                Social:
              </p>
              <div className="flex gap-x-[20px]">
                <Link to="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex items-center h-[70px] bg-primary">
        <Container maxW={["95%", "95%", "95%", "95%", "1200px"]}>
          <p className="font-normal text-[16px] text-center lg:text-left text-white">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default AppFooter
