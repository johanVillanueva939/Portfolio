import { Networks } from "./Layouts/Networks/Networks"
import Header from "./Layouts/Header/Header"
import AboutMe from "./Layouts/About_me/AboutMe"
import Technologies from "./Technologies/Technologies"

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Networks />
      <Technologies />
    </>
  )
}

export default App