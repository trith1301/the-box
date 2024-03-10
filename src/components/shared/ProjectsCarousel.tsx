import { useState, useEffect, useCallback } from "react"
import { nanoid } from "nanoid"

import { ProjectCategory } from "../../core/types"

import PROJECT_CATEGORIES from "../../assets/data/project-categories.json"

import DesktopProjectCarousel from "./product-carousels/DesktopProjectCarousel"
import MobileProjectCarousel from "./product-carousels/MobileProjectCarousel"

const ProjectsCarousel = () => {
  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>(
    []
  )
  const [category, setCategory] = useState<string>("all")

  const changeCategory = useCallback((category: string) => {
    setCategory(() => category)
  }, [])

  useEffect(() => {
    setProjectCategories([
      {
        id: 0,
        title: "All",
        slug: "all",
        description: "All Projects",
      },
      ...PROJECT_CATEGORIES,
    ])
  }, [])

  return (
    <section className=" w-full px-6 lg:w-[80%] lg:max-w-[1216px] mx-auto pt-[88px] pb-[138px]">
      <h3 className="pb-[40px] text-[20px] sm:text-[25px] md:text-[28px] lg:text-[36px] text-left font-bold">
        Projects
      </h3>
      <div className="flex flex-col lg:flex-row justify-between gap-y-[40px] lg:gap-y-0">
        <div className="flex flex-wrap gap-x-[30px] lg:flex-col gap-y-[35px] lg:gap-y-[20px]">
          {Boolean(projectCategories.length) &&
            projectCategories.map((projectCategory) => (
              <button
                key={nanoid()}
                onClick={() => changeCategory(projectCategory.slug)}
                className={`flex px-2 py-1 lg:p-0 rounded-[4px] lg:rounded-0 lg:before:block lg:before:content-[''] lg:before:mr-[18px] ${
                  category === projectCategory.slug
                    ? "font-bold text-white lg:text-primary bg-primary lg:bg-transparent lg:before:w-[4px] before:h-full before:bg-primary"
                    : "font-normal text-[#c2c7d6]"
                } `}
                type="button"
              >
                {projectCategory.title}
              </button>
            ))}
        </div>
        <div className="hidden lg:block w-[600px] xl:w-[800px]">
          <DesktopProjectCarousel />
        </div>
        <div className="block lg:hidden">
          <MobileProjectCarousel />
        </div>
      </div>
    </section>
  )
}

export default ProjectsCarousel
