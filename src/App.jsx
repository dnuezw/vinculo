import './App.css'
import Presentation from './components/Presentation/Presentation'
import Footer from './components/Footer/Footer'

export default function App() {
  const linksToPages = [
    {name: 'Home', link: './index.html'}, 
    {name: 'Wiki/Lore', link: './Wiki/Lore.html'}, 
    {name: 'Música', link: './Música.html'}, 
    {name: 'Quiénes somos', link: './Quiénes somos.html'}, 
    {name: 'Contacto', link: './Contacto.html'}
  ];

  return (
    <div className="content">
      <header>
        {linksToPages.map(({link, name}) => 
           <a href={link}>{name}</a>
        )}
      </header>
      <main>
        <Presentation />
      </main>
      <Footer />
    </div>
  )
}
