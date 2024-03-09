import { useState, useEffect, useCallback, useRef } from "react"
import { nanoid } from "nanoid"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import LeftArrow from "../icons/LeftArrow"
import RightArrow from "../icons/RightArrow"

const PAGES = 5

const DesktopProjectCarousel = () => {
  const carouselRef = useRef(null)
  const [carouselOptions, setCarouselOptions] = useState({})
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const prevSlide = useCallback(() => {
    const carousel: any = carouselRef.current
    if (carousel) {
      carousel.slickPrev()
    }
  }, [])

  const nextSlide = useCallback(() => {
    const carousel: any = carouselRef.current

    if (carousel) {
      carousel.slickNext()
    }
  }, [])

  const goToSlide = useCallback((index: number) => {
    const carousel: any = carouselRef.current

    if (carousel) {
      carousel.slickGoTo(index)
    }
  }, [])

  const afterChangeHandler = useCallback((index: number) => {
    setCurrentSlideIndex(index)
  }, [])

  const renderDots = (pages: number) => {
    const dots = []

    for (let index = 0; index < pages; index++) {
      dots.push(
        <button
          onClick={() => goToSlide(index)}
          key={nanoid()}
          className={`w-[16px] h-[16px] rounded-full cursor-pointer ${
            currentSlideIndex === index
              ? "bg-primary"
              : "bg-[#f6f8f7] hover:bg-primary"
          }`}
          type="button"
        ></button>
      )
    }

    return (
      <div className="flex gap-x-[16px]">
        <>{dots}</>
      </div>
    )
  }

  useEffect(() => {
    setCarouselOptions({
      speed: 500,
      dots: false,
      arrows: false,
      infinite: true,
      autoplaySpeed: 4000,
    })
  }, [])

  return (
    <>
      <Slider
        afterChange={afterChangeHandler}
        {...carouselOptions}
        className="w-full"
        ref={carouselRef}
      >
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wildstone-infra-hotel.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wildstone Infra Hotel
                </p>
                <p className="text-[18px] font-normal text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wish-stone-building.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wish Stone Building
                </p>
                <p className="text-[18px] font-normal text-white">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/mr-parkinston-house.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Mr. Parkinston`s House
                </p>
                <p className="text-[18px] font-normal text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/projects/oregano-height.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Oregano Height
                </p>
                <p className="text-[18px] font-normal text-white">
                  2464 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wildstone-infra-hotel.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wildstone Infra Hotel
                </p>
                <p className="text-[18px] font-normal text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wish-stone-building.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wish Stone Building
                </p>
                <p className="text-[18px] font-normal text-white">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/mr-parkinston-house.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Mr. Parkinston`s House
                </p>
                <p className="text-[18px] font-normal text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/projects/oregano-height.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Oregano Height
                </p>
                <p className="text-[18px] font-normal text-white">
                  2464 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wildstone-infra-hotel.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wildstone Infra Hotel
                </p>
                <p className="text-[18px] font-normal text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wish-stone-building.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wish Stone Building
                </p>
                <p className="text-[18px] font-normal text-white">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/mr-parkinston-house.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Mr. Parkinston`s House
                </p>
                <p className="text-[18px] font-normal text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/projects/oregano-height.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Oregano Height
                </p>
                <p className="text-[18px] font-normal text-white">
                  2464 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wildstone-infra-hotel.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wildstone Infra Hotel
                </p>
                <p className="text-[18px] font-normal text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wish-stone-building.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wish Stone Building
                </p>
                <p className="text-[18px] font-normal text-white">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/mr-parkinston-house.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Mr. Parkinston`s House
                </p>
                <p className="text-[18px] font-normal text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/projects/oregano-height.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Oregano Height
                </p>
                <p className="text-[18px] font-normal text-white">
                  2464 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wildstone-infra-hotel.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wildstone Infra Hotel
                </p>
                <p className="text-[18px] font-normal text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/wish-stone-building.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Wish Stone Building
                </p>
                <p className="text-[18px] font-normal text-white">
                  2972 Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/projects/mr-parkinston-house.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Mr. Parkinston`s House
                </p>
                <p className="text-[18px] font-normal text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-[384px] h-[247px] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/projects/oregano-height.png)",
                }}
              ></div>
              <div className="min-h-[84px] pt-[12px] pb-[16px] px-[12px] bg-primary">
                <p className="pb-[12px] text-[20px] font-bold text-white">
                  Oregano Height
                </p>
                <p className="text-[18px] font-normal text-white">
                  2464 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="pt-[32px]">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center gap-[10px] w-[295px] h-[64px] bg-[#292e3d] hover:bg-secondary"
            type="button"
          >
            <LeftArrow />
            <p className="text-white">Back</p>
          </button>
          {renderDots(PAGES)}
          <button
            onClick={nextSlide}
            className="flex flex-row-reverse items-center justify-center gap-[10px] w-[295px] h-[64px] bg-[#292e3d] hover:bg-secondary"
            type="button"
          >
            <RightArrow />
            <p className="text-white">Next</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default DesktopProjectCarousel
