import FeatureProjectsCarousel from "../shared/FeatureProjectsCarousel"
import Reputation from "../shared/Reputation"
import AboutUs from "../shared/AboutUs"
import Services from "../shared/Services"
import Advertisement from "../shared/Advertisement"

const Home = () => {
  return (
    <main className="overflow-hidden">
      <FeatureProjectsCarousel />
      <Reputation />
      <AboutUs />
      <Services />
      <Advertisement />
    </main>
  )
}

export default Home
