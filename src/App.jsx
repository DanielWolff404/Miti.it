import React from 'react'
import Navabr from './components/Navabr'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { gsap } from 'gsap'
import { ScrollTrigger ,SplitText} from 'gsap/all'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Feautres from './components/Feautres'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
  <main >
   <Navabr />
   <Hero />
   <ProductViewer />
   <Showcase />
   <Performance />
   <Feautres />
   <Highlights />
   <Footer />
  </main>
  )
}

export default App
