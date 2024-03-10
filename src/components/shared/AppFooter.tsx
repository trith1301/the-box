import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import useDevLogger from "../../hooks/useDevLogger"
import useNotification from "../../hooks/useNotification"

import FacebookIcon from "./icons/FacebookIcon"
import LinkedInIcon from "./icons/LinkedInIcon"
import TwitterIcon from "./icons/TwitterIcon"
import Spinner from "./icons/Spinner"

import { EMAIL_PATTERN } from "../../core/constants"

import theBoxLogo from "../../assets/images/logo/wide-logo.svg"

type Inputs = {
  email: string
}

const AppFooter = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const devLogger = useDevLogger()
  const notification = useNotification({ type: "success" })

  const pushNotification = () => {
    notification("Successfully subscribed!")
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting((current) => !current)
    setTimeout(() => {
      devLogger("Subscribed Email", data)
      pushNotification()
      reset()
      setIsSubmitting((current) => !current)
    }, 1000)
  }

  return (
    <footer>
      <div className="flex items-center  bg-white">
        <div className="flex flex-col lg:flex-row justify-between gap-y-[45px] pt-[85px] pb-[80px] w-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto">
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
            <p className="text-[14px] sm:text-[16px] md:text-[18px]">
              +84 1102 2703
            </p>
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:flex-row gap-[8px]"
              >
                <div className="relative">
                  <input
                    className={`w-full h-full lg:w-[unset] relative px-[8px] py-[10px] border-[1px] border-[#e0e3eb] rounded-[4px] focus:outline-secondary ${
                      errors?.email
                        ? "border-red-500 border-2"
                        : "border-[#e0e3eb]"
                    }`}
                    placeholder="Your email here"
                    type="text"
                    {...register("email", {
                      required: "This is required",
                      pattern: {
                        value: EMAIL_PATTERN,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <div className="z-[1] lg:absolute top-full">
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <p className="mt-[2px] text-sm text-red-500">
                          {message}
                        </p>
                      )}
                    />
                  </div>
                </div>
                <button
                  className={`flex items-center justify-center w-full lg:w-[136px] h-[53px] px-[23.5px] py-[10px] rounded-[4px] font-semibold bg-secondary text-white ${
                    isSubmitting ? "cursor-not-allowed" : ""
                  }`}
                  type="submit"
                >
                  {isSubmitting ? <Spinner /> : "Subscribe"}
                </button>
              </form>
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
        </div>
      </div>
      <div className="flex items-center h-[70px] bg-primary">
        <div className="w-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto">
          <p className="font-normal text-[16px] text-center lg:text-left text-white">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
