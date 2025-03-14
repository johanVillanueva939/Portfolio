import { Routes, Route } from 'react-router-dom'
import { Networks } from "./Layouts/Networks/Networks"
import { Header } from "./Layouts/Header/Header"
import { AboutMe } from "./Layouts/About_me/AboutMe"
import { Technologies } from "./Layouts/Technologies/Technologies"
import { SocialSkills } from "./Layouts/SocialSkills/SocialSkills"
import { Experience } from "./Layouts/Experience/Experience"
import { Certificatess } from "./Layouts/Certificates/Certificatess"

export const App = () => {
  return (
    <>
      <Header />
      <Networks />
      <Routes>
        <Route path="/Portfolio" element={<AboutMe />} />
        <Route path="/Portfolio/Technologies" element={<Technologies />} />
        <Route path="/Portfolio/SocialSkills" element={<SocialSkills />} />
        <Route path="/Portfolio/Experience" element={<Experience />} />
        <Route path="/Portfolio/Certificates" element={<Certificatess />} />
      </Routes>
    </>
  )
}

export default App