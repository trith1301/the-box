import Divider from "./Divider"

const Services = () => {
  return (
    <div className="bg-[#f6f8f7] pt-[44px] pb-[76px]">
      <section className="flex flex-col items-center gap-y-[36px] w-full px-6 lg:w-[80%] lg:max-w-[1440px] mx-auto">
        <h3 className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[36px] text-center font-bold">
          Services
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[271px_271px_271px] gap-x-[98px] gap-y-[48px] w-full md:w-[unset]">
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-white shadow-md">
            <img src="/images/services/constructions.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-primary">
              Construction
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-primary shadow-md">
            <img src="/images/services/renovation.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-white">Renovation</p>
          </div>
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-white shadow-md">
            <img src="/images/services/consultation.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-primary">
              Consultation
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-primary shadow-md">
            <img src="/images/services/repair.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-white">
              Repair Services
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-white shadow-md">
            <img src="/images/services/architecture.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-primary">
              Architecture
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-[20px] w-full md:w-[271px]  py-[38px] rounded-[4px] bg-primary shadow-md">
            <img src="/images/services/electric.svg" alt="Service Icon" />
            <Divider width="60" height="1" fill="E0E3EB" />
            <p className="text-[20px] font-semibold text-white">Electric</p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Services
