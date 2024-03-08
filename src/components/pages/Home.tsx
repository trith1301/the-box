import FeatureProjectsCarousel from "../shared/FeatureProjectsCarousel"
import Reputation from "../shared/Reputation"
import AboutUs from "../shared/AboutUs"
import Advertisement from "../shared/Advertisement"

const Home = () => {
  return (
    <main className="overflow-hidden">
      <FeatureProjectsCarousel />
      <Reputation />
      <AboutUs />
      <Advertisement />
    </main>
  )
}

export default Home

// <Container maxW={["95%", "95%", "95%", "95%", "1200px"]} height="1200px"></Container>
