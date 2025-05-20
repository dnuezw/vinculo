import './App.css'
import spotifyIcon from './assets/images/spotifyIcon.png'
import trailer from './assets/videos/trailer.mp4';

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
        <h1>Vinculo the Game</h1>
        <video src={trailer} width="60%" autoPlay muted loop />
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
