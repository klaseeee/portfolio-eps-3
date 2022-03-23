import { Container, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import About from './pages/About'
import MyTheme from './components/MyTheme'
import Work from './pages/Work'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import MyFooter from './pages/MyFooter'

const MainPage = () => {
  return (
    <div>
      <ThemeProvider theme={MyTheme}>
        {/* <div className="main"></div> */}
        <Container maxWidth="lg">
          <Navbar/>
          <About/>
          <Work/>
          <Services/>
          <Portfolio/>
          <Testimonials/>
          <Contact/>
        </Container>
        <MyFooter/>
      </ThemeProvider>
    </div>
  )
}

export default MainPage