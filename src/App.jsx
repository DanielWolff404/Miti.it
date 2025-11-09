import React from 'react'
import Navabr from './components/Navabr'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { gsap } from 'gsap'
import { ScrollTrigger ,SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
  <main >
   <Navabr />
   <Hero />
   <ProductViewer />
  </main>
  )
}

export default App
