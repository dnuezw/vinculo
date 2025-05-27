import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Footer from './components/Footer/Footer'
import Wiki from './components/Wiki/Wiki'
import { ROUTES_TO_PAGES } from './components/Header/constants'
import { useState } from 'react'

export default function App() {
  const [location, setLocation] = useState('/');

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
        {location === '/' ? <Presentation /> : <Wiki />}
      </main>
      <Footer />
    </div>
  )
}
