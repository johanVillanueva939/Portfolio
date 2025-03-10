import { Networks } from "./Layouts/Networks/Networks"
import Header from "./Layouts/Header/Header"
import AboutMe from "./Layouts/About_me/AboutMe"
import Technologies from "./Layouts/Technologies/Technologies"
import SocialSkills from "./Layouts/SocialSkills/SocialSkills"

export const App = () => {
  return (
    <>
      <Header />
      <Networks />
      <AboutMe />
      <Technologies />
      <SocialSkills />
    </>
  )
}

export default App