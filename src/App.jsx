import { Networks } from "./Layouts/Networks/Networks"
import Header from "./Layouts/Header/Header"
import AboutMe from "./Layouts/About_me/AboutMe"

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Networks />
    </>
  )
}

export default App