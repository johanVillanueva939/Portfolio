import Networks  from "./Layouts/Networks/Networks"
import Header from "./Layouts/Header/Header"
import AboutMe from "./Layouts/About_me/AboutMe"
import Technologies from "./Layouts/Technologies/Technologies"
import SocialSkills from "./Layouts/SocialSkills/SocialSkills"
import Experience from "./Layouts/Experience/Experience"
import Certificatess from "./Layouts/Certificates/Certificatess"

export const App = () => {
  return (
    <>
      <Header />
      <Networks />
      <AboutMe />
      <Technologies />
      <SocialSkills />
      <Experience />
      <Certificatess />
    </>
  )
}

export default App