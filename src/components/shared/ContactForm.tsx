import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useToast, Container, Button } from "@chakra-ui/react"

type Inputs = {
  fullName: string
  email: string
  reason: string
  phone: string
  message: string
}

const ContactForm = () => {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const pushNotification = () => {
    toast({
      title: "Message Delivered 🚀",
      description: "We will contact you soon.",
      status: "success",
      position: "top-right",
      duration: 4000,
      isClosable: true,
    })
  }

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsSubmitting((current) => !current)
    setTimeout(() => {
      reset()
      pushNotification()
      setIsSubmitting((current) => !current)
    }, 1000)
  }

  return (
    <section className="py-[60px] bg-[#f6f8f7]">
      <Container maxW={["100%", "100%", "100%", "592px"]}>
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
          <input
            className="px-[8px] py-[10px] rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            type="text"
            placeholder="Your name*"
            {...register("fullName", {
              required: true,
            })}
          />
          <input
            className="px-[8px] py-[10px] rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            type="text"
            placeholder="Email*"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          <input
            className="px-[8px] py-[10px] rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            type="text"
            placeholder="Reason for Contacting*"
            {...register("reason", {
              required: true,
            })}
          />
          <input
            className="px-[8px] py-[10px] rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            type="text"
            placeholder="Phone"
            {...register("phone", {
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            })}
          />
          <textarea
            className="lg:col-span-2 px-[8px] py-[10px] resize-none rounded-[4px] border-[1px] border-[#e0e3eb] focus:outline-primary"
            rows={6}
            placeholder="Message"
            {...register("message")}
          ></textarea>
          <span className="lg:col-span-2 text-[16px] font-normal text-[#667299]">
            <span className="text-[#c40303]">*</span> indicates a required field
          </span>
          <Button
            isLoading={isSubmitting}
            className="lg:col-span-2 mx-auto"
            width="271px"
            height="53px"
            color="#ffffff"
            bgColor="#2947a9"
            borderRadius="2px"
            type="submit"
            _hover={{opacity: 0.95}}
          >
            Submit
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
