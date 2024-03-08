import { Container } from "@chakra-ui/layout"

const AboutUs = () => {
  return (
    <Container maxW={["95%", "95%", "95%", "95%", "1200px"]}>
      <section className="relative flex items-center pt-[74px] pb-[200px]">
        <img
          className="hidden lg:block w-[902px] object-cover shadow-lg"
          src="/images/about-us/thumbnail.png"
          alt="Thumbnail"
        />
        <div className="z-[1] lg:absolute right-0 w-full lg:w-[488px] lg:h-[523px] pt-[50px] pb-[50px] lg:pb-0 px-[40px] rounded-[2px] bg-[#2947a9]">
          <h3 className="pb-[37px] font-bold text-[36px] text-white">
            About us
          </h3>
          <p className="pb-[74px] font-normal text-[16px] text-white">
            For more than 30 years we have been delivering world-class
            construction and we`ve built many lasting relationships along the
            way.
            <br />
            <br />
            We`ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button
            className="w-[219px] h-[53px]  rounded-[6px] font-semibold text-[#2947a9] bg-white hover:bg-opacity-95"
            type="button"
          >
            More on Our History
          </button>
        </div>
      </section>
    </Container>
  )
}

export default AboutUs
