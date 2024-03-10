const Advertisement = () => {
  return (
    <section className="relative h-[300px] bg-center bg-cover bg-[url('/images/advertisement/thumbnail.png')]">
      <div className="z-[2] absolute top-0 left-0 right-0 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto">
          <div className="flex flex-col gap-[10px] lg:gap-[30px] pb-[50px] lg:pb-unset">
            <h3 className="md:text-[24px] lg:text-[36px] text-center lg:text-left font-bold text-white">
              Free consultation with exceptional quality
            </h3>
            <p className="lg:text-[24px] text-center lg:text-left text-white">
              Just one call away:{" "}
              <span className="underline">+84 1102 2703</span>
            </p>
          </div>
          <button
            className="p-[5px] md:px-[12px] md:py-[6px] lg:px-[20px] lg:py-[16px] border-2 border-[#fffff] rounded-[2px] md:text-[14px] lg:text-[18px] text-white hover:text-black hover:bg-white"
            type="button"
          >
            Get your consultation
          </button>
        </div>
      </div>
      <div className="z-[1] absolute top-0 left-0 right-0 w-full h-full bg-black opacity-70"></div>
    </section>
  )
}

export default Advertisement
