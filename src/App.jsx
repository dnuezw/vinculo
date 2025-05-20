import './App.css'
import spotifyIcon from './assets/images/spotifyIcon.png'
import Presentation from './components/Presentation/Presentation';

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
      <footer>
        <a href="https://open.spotify.com/" target="_blank" className="myButton">
          <span>Listen to us on Spotify</span>
          <img src={spotifyIcon} className="icon" />
        </a>
      </footer>
    </div>
  )
}
