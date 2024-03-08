import FeatureProjectsCarousel from "../shared/FeatureProjectsCarousel"
import Reputation from "../shared/Reputation"

const Home = () => {
  return (
    <main className="overflow-hidden h-[2000px]">
      <FeatureProjectsCarousel />
      <Reputation />
    </main>
  )
}

export default Home

// <Container maxW={["95%", "95%", "95%", "95%", "1200px"]} height="1200px"></Container>
