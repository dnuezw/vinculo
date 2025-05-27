import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Footer from './components/Footer/Footer'
import Wiki from './components/Wiki/Wiki'
import { ROUTES_TO_PAGES } from './components/Header/constants'
import { useState } from 'react'
import Music from './components/Music/Music'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'

export default function App() {
  const [location, setLocation] = useState('/');

  function loadPage() {
    if(location === '/') {
      return <Presentation />
    }
    if(location === '/wiki') {
      return <Wiki />
    }
    if(location === '/music') {
      return <Music />
    }
    if(location === '/about-us') {
      return <AboutUs />
    }
    if(location === '/contact') {
      return <Contact />
    }
  }

  return (
    <div className="page">
      { /* <Header /> */ }
      <header>
        <p className="gameTitle">Vinculo The Game</p>
        <div className="links">
          {ROUTES_TO_PAGES.map((page) =>
            <a onClick={() => setLocation(page.route)}>{page.name}</a>
          )}
        </div>
      </header>
      <main>
        {loadPage()}
      </main>
      <Footer />
    </div>
  )
}
