import Navbar from './Sections/navbar/Navbar';
import Header from './Sections/header/Header';
import About  from './Sections/about/About';
import Services from './Sections/services/Services';
import Portfolio from './Sections/portfolio/Portfolio';
import Testimonials from './Sections/testimonials/Testimonials';
import FAQs from './Sections/FAQs/FAQs';
import Contact from './Sections/contact/Contact';
import Footer from './Sections/footer/Footer';
import FloatingNav from './Sections/Floating-nav/FloatingNav';



const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App