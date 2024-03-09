import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MobileProjectCarousel = () => {
  const carouselRef = useRef(null)
  const [carouselOptions, setCarouselOptions] = useState({})

  useEffect(() => {
    setCarouselOptions({
      speed: 800,
      dots: false,
      arrows: false,
      infinite: true,
      autoplaySpeed: 4000,
    })
  }, [])

  return (
    <>
      <Slider {...carouselOptions} className="w-full" ref={carouselRef}>
        <div>
          <div>
            <div
              className="w-full h-[247px] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/images/projects/wildstone-infra-hotel.png)",
              }}
            ></div>
            <div className="min-h-[130px] pt-[12px] pb-[16px] px-[12px] bg-primary">
              <p className="pb-[12px] text-[20px] font-bold text-white">
                Wildstone Infra Hotel
              </p>
              <p className="text-[18px] font-normal text-white">
                2715 Ash Dr. San Jose, South Dakota
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="w-full h-[247px] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/images/projects/wish-stone-building.png)",
              }}
            ></div>
            <div className="min-h-[130px] pt-[12px] pb-[16px] px-[12px] bg-primary">
              <p className="pb-[12px] text-[20px] font-bold text-white">
                Wish Stone Building
              </p>
              <p className="text-[18px] font-normal text-white">
                2972 Westheimer Rd. Santa Ana, Illinois
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="w-full h-[247px] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/images/projects/mr-parkinston-house.png)",
              }}
            ></div>
            <div className="min-h-[130px] pt-[12px] pb-[16px] px-[12px] bg-primary">
              <p className="pb-[12px] text-[20px] font-bold text-white">
                Mr. Parkinston`s House
              </p>
              <p className="text-[18px] font-normal text-white">
                3517 W. Gray St. Utica, Pennsylvania
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="w-full h-[247px] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/projects/oregano-height.png)",
              }}
            ></div>
            <div className="min-h-[130px] pt-[12px] pb-[16px] px-[12px] bg-primary">
              <p className="pb-[12px] text-[20px] font-bold text-white">
                Oregano Height
              </p>
              <p className="text-[18px] font-normal text-white">
                2464 Royal Ln. Mesa, New Jersey
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default MobileProjectCarousel
