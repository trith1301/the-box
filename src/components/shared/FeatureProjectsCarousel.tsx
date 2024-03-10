import { useState, useEffect, useRef } from "react"
import { nanoid } from "nanoid"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import LeftArrow from "./icons/LeftArrow"
import RightArrow from "./icons/RightArrow"

import { FeatureProject } from "../../core/types"

import FEATURE_PROJECTS from "../../assets/data/feature-projects.json"

const FeatureProjectsCarousel = () => {
  const carouselRef = useRef(null)
  const [carouselOptions, setCarouselOptions] = useState({})
  const [featureProjects, setFeatureProjects] = useState<FeatureProject[]>([])
  const [pinnedProject, setPinnedProject] = useState<FeatureProject>()

  const afterChangeHandler = (index: number) => {
    setPinnedProject(featureProjects[index])
  }

  const prevSlide = () => {
    const carousel = carouselRef.current
    const slickInstance = carousel as any

    if (carousel) {
      slickInstance.slickPrev()
    }
  }

  const nextSlide = () => {
    const carousel = carouselRef.current
    const slickInstance = carousel as any

    if (carousel) {
      slickInstance.slickNext()
    }
  }

  useEffect(() => {
    setFeatureProjects(FEATURE_PROJECTS)
    setPinnedProject(FEATURE_PROJECTS[0])

    setCarouselOptions({
      speed: 1000,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    })
  }, [])

  return (
    <section id="home" className="relative w-full">
      <Slider
        afterChange={afterChangeHandler}
        className="w-full"
        {...carouselOptions}
        ref={carouselRef}
      >
        {Boolean(featureProjects?.length) &&
          featureProjects?.map((project) => (
            <div key={nanoid()}>
              <div
                className="z-[1] relative h-[250px] md:h-[350px] lg:h-[500px] xl:h-[650px] bg-cover bg-no-repeat object-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <section className=" flex items-center w-full h-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto ">
                  <h3 className="w-1/2 font-semibold leading-[1.4] text-[18px] sm:text-[36px] md:text-[45px] lg:text-[60px] xl:text-[72px]">
                    {project.slogan}
                  </h3>
                </section>
                <div className="z-[-1] absolute top-0 left-0 w-10/12 h-full bg-gradient-to-r from-white"></div>
              </div>
            </div>
          ))}
      </Slider>
      <div className="z-[2] absolute translate-y-[-7px] lg:translate-y-0 lg:bottom-0 right-0 w-full lg:w-[420px]">
        <div className="flex flex-col items-center justify-center gap-3 lg:gap-[20px] w-full lg:h-[150px] py-4 lg:py-0 bg-[#3559C7]">
          <p className="lg:text-[20px] text-center font-bold text-white">
            Feature Projects
          </p>
          <h4 className="lg:text-[20px] xl:text-[24px] text-center font-normal text-white">
            {pinnedProject?.name}
          </h4>
        </div>
        <div className="hidden lg:grid grid-cols-2">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center gap-[10px] h-[40px] bg-[#292e3d] hover:bg-secondary"
            type="button"
          >
            <LeftArrow />
            <p className="text-white">Back</p>
          </button>
          <button
            onClick={nextSlide}
            className="flex flex-row-reverse items-center justify-center gap-[10px] h-[40px] bg-[#292e3d] hover:bg-secondary"
            type="button"
          >
            <RightArrow />
            <p className="text-white">Next</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeatureProjectsCarousel
