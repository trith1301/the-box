const Reputation = () => {
  return (
    <section className="flex flex-col items-center gap-[50px] pt-32 lg:pt-16 pb-[84px]">
      <h3 className="text-[20px] sm:text-[25px] md:text-[28px] lg:text-[36px] font-bold">
        Our Reputation
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[66px]">
        <div className="flex flex-col gap-[18px] w-5/6 md:w-[292px] h-[197px] mx-auto md:mx-[unset] p-[20px] border-[1.4px] border-[#e0e3eb] rounded-[4px]">
          <img
            className="w-[40px]"
            src="/images/reputation/best-services.svg"
            alt="Reputation Icon"
          />
          <h5 className="font-bold text-[#3d445c]">Best Services</h5>
          <p className="text-[16px] text-[#858ead]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] w-5/6 md:w-[292px] h-[197px] mx-auto md:mx-[unset] p-[20px] border-[1.4px] border-[#e0e3eb] rounded-[4px]">
          <img
            className="w-[40px]"
            src="/images/reputation/best-teams.svg"
            alt="Reputation Icon"
          />
          <h5 className="font-bold text-[#3d445c]">Best Services</h5>
          <p className="text-[16px] text-[#858ead]">
            Cursus semper tellus volutpat aliquet lacus.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] w-5/6 md:w-[292px] h-[197px] mx-auto md:mx-[unset] p-[20px] border-[1.4px] border-[#e0e3eb] rounded-[4px]">
          <img
            className="w-[40px]"
            src="/images/reputation/best-designs.svg"
            alt="Reputation Icon"
          />
          <h5 className="font-bold text-[#3d445c]">Best Services</h5>
          <p className="text-[16px] text-[#858ead]">
            Ultricies at ipsum nunc, tristique nam lectus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reputation
