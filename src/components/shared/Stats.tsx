import { useState, useEffect } from "react"

import { Stat } from "../../core/types"

import STATS from "../../assets/data/stats.json"

const Stats = () => {
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    setStats(() => STATS)
  }, [])

  return (
    <section className="pt-[112px] pb-[99px]">
      <div className="flex flex-col items-center w-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[271px_271px_271px] gap-x-[98px]">
          <div className="col-span-2 relative grid md:grid-cols-2 gap-x-[30px] gap-y-[40px] lg:block lg:h-[500px]">
            <div className="z-[1] lg:absolute top-0 right-[64px] lg:w-[280px] h-[155px] rounded-[4px] bg-white shadow-lg">
              <div className="relative p-[30px]">
                <h4 className="pb-[5px] font-semibold text-[40px] md:text-[55px] lg:text-[72px] leading-[1] text-[#292e3d]">
                  {stats[1]?.count}
                </h4>
                <div className="flex items-center">
                  <div className="w-[7px] h-[28px] ml-[16px] mr-[12px] bg-secondary"></div>
                  <p className="text-[#667299]">{stats[1]?.title}</p>
                </div>
                <img
                  className="absolute top-0 lg:top-[-20px] right-0 lg:right-[-20px] w-[80px]"
                  src={stats[1]?.image}
                  alt="Stat Icon"
                />
              </div>
            </div>
            <div className="lg:absolute top-[99px] left-0 lg:w-[361px] h-[155px] rounded-[4px] bg-white shadow-lg">
              <div className="relative p-[30px]">
                <h4 className="pb-[5px] font-semibold text-[40px] md:text-[55px] lg:text-[72px] leading-[1] text-[#292e3d]">
                  {stats[0]?.count}
                </h4>
                <div className="flex items-center">
                  <div className="w-[7px] h-[28px] ml-[16px] mr-[12px] bg-secondary"></div>
                  <p className="text-[#667299]">{stats[0]?.title}</p>
                </div>
                <img
                  className="absolute top-0 lg:top-[-20px] right-0 lg:right-[unset] lg:left-[-20px] w-[70px]"
                  src={stats[0]?.image}
                  alt="Stat Icon"
                />
              </div>
            </div>
            <div className="z-[1] lg:absolute top-[242px] right-[122px] lg:w-[276px] h-[155px] rounded-[4px] bg-white shadow-lg">
              <div className="relative p-[30px]">
                <h4 className="pb-[5px] font-semibold text-[40px] md:text-[55px] lg:text-[72px] leading-[1] text-[#292e3d]">
                  {stats[2]?.count}
                </h4>
                <div className="flex items-center">
                  <div className="w-[7px] h-[28px] ml-[16px] mr-[12px] bg-secondary"></div>
                  <p className="text-[#667299]">{stats[2]?.title}</p>
                </div>
                <img
                  className="absolute top-0 lg:top-[-20px] right-0 lg:right-[-20px] w-[70px]"
                  src={stats[2]?.image}
                  alt="Stat Icon"
                />
              </div>
            </div>
            <div className="lg:absolute top-[347px] left-[49px] lg:w-[333px] h-[155px] rounded-[4px] bg-white shadow-lg">
              <div className="relative p-[30px]">
                <h4 className="pb-[5px] font-semibold text-[40px] md:text-[55px] lg:text-[72px] leading-[1] text-[#292e3d]">
                  {stats[3]?.count}
                </h4>
                <div className="flex items-center">
                  <div className="w-[7px] h-[28px] ml-[16px] mr-[12px] bg-secondary"></div>
                  <p className="text-[#667299]">{stats[3]?.title}</p>
                </div>
                <img
                  className="absolute top-0 lg:top-[unset] lg:bottom-[-20px] right-0 lg:right-[-20px] w-[70px]"
                  src={stats[3]?.image}
                  alt="Stat Icon"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-[unset] flex flex-col pt-[30px] lg:pt-0">
            <h3 className="pb-[25px] lg:pb-[41px] text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.3] text-primary">
              30 Years Experience
            </h3>
            <p className="pb-[40px] lg:pb-[67px] font-normal text-[14px] md:text-[16px] lg:text-[18px] text-[#525b7a]">
              Our company has been the leading provided construction services to
              clients throughout the USA since 1988.
            </p>
            <button
              className="w-[176px] h-[53px]  rounded-[2px] font-semibold text-white bg-primary hover:bg-opacity-95"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
