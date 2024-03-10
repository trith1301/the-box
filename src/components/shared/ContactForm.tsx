import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import { useNotification } from "../../hooks/useNotification"

import Spinner from "./icons/Spinner"

import { EMAIL_PATTERN, VN_PHONE_PATTERN } from "../../core/constants"

type Inputs = {
  fullName: string
  email: string
  reason: string
  phone: string
  message: string
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const notification = useNotification({ type: "success" })

  const pushNotification = (message: string) => {
    notification(message)
  }

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsSubmitting((current) => !current)
    setTimeout(() => {
      reset()
      pushNotification("Successfully done! We'll contact you soon.")
      setIsSubmitting((current) => !current)
    }, 1000)
  }

  return (
    <section className="py-[60px] bg-[#f6f8f7]">
      <div className="lg:w-[592px] px-6 mx-auto">
        <h3 className="pb-[20px] text-[20px] sm:text-[25px] md:text-[28px] lg:text-[36px] text-center font-bold">
          What can us do for you?
        </h3>
        <p className="pb-[38px] text-[16px] md:text-[18px] lg:text-[20px] font-normal text-center text-[#292e3d]">
          We are ready to work on a project of any complexity, whether it`s
          commercial or residential.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[32px] gap-y-[20px]"
        >
          <div className="full-name-input">
            <input
              className={`w-full px-[8px] py-[10px] rounded-[4px] border-[1px]  focus:outline-primary ${
                errors?.fullName
                  ? "border-red-500 border-2"
                  : "border-[#e0e3eb]"
              }`}
              type="text"
              placeholder="Your name*"
              {...register("fullName", {
                required: "This is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="fullName"
              render={({ message }) => (
                <p className="mt-[2px] text-sm text-red-500">{message}</p>
              )}
            />
          </div>
          <div className="email-input">
            <input
              className={`w-full px-[8px] py-[10px] rounded-[4px] border-[1px]  focus:outline-primary ${
                errors?.email ? "border-red-500 border-2" : "border-[#e0e3eb]"
              }`}
              type="text"
              placeholder="Email*"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Invalid email address",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="mt-[2px] text-sm text-red-500">{message}</p>
              )}
            />
          </div>
          <div className="reason">
            <input
              className={`w-full px-[8px] py-[10px] rounded-[4px] border-[1px]  focus:outline-primary ${
                errors?.reason ? "border-red-500 border-2" : "border-[#e0e3eb]"
              }`}
              type="text"
              placeholder="Reason for Contacting*"
              {...register("reason", {
                required: "This is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="reason"
              render={({ message }) => (
                <p className="mt-[2px] text-sm text-red-500">{message}</p>
              )}
            />
          </div>
          <div className="phone">
            <input
              className={`w-full px-[8px] py-[10px] rounded-[4px] border-[1px]  focus:outline-primary ${
                errors?.phone ? "border-red-500 border-2" : "border-[#e0e3eb]"
              }`}
              type="text"
              placeholder="Phone"
              {...register("phone", {
                pattern: {
                  value: VN_PHONE_PATTERN,
                  message: "Invalid phone number (+84 only)",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={({ message }) => (
                <p className="mt-[2px] text-sm text-red-500">{message}</p>
              )}
            />
          </div>
          <textarea
            className="lg:col-span-2 px-[8px] py-[10px] resize-none rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            rows={6}
            placeholder="Message"
            {...register("message")}
          ></textarea>
          <span className="lg:col-span-2 text-[16px] font-normal text-[#667299]">
            <span className="text-[#c40303]">*</span> indicates a required field
          </span>
          <button
            className={`flex items-center justify-center lg:col-span-2 w-full md:w-[271px] h-[53px] mx-auto rounded-[2px] font-semibold text-white bg-primary hover:bg-opacity-95 ${
              isSubmitting ? "cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <Spinner /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
