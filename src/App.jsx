import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Academics from './components/sections/Academics'
import AdmissionsCTA from './components/sections/AdmissionsCTA'
import Campus from './components/sections/Campus'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import StudentLife from './components/sections/StudentLife'

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Campus />
        <StudentLife />
        <AdmissionsCTA />
      </main>

      <Footer />
    </>
  )
}

export default App