import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Presentation />
      </main>
      <Footer />
    </div>
  )
}
