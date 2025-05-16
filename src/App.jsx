import './App.css'
import spotifyIcon from './assets/images/spotifyIcon.png'

export default function App() {
  const linksToPages = [
    {name: 'Home', link: './index.html'}, 
    {name: 'Wiki/Lore', link: './Wiki/Lore.html'}, 
    {name: 'Música', link: './Música.html'}, 
    {name: 'Quiénes somos', link: './Quiénes somos.html'}, 
    {name: 'Contacto', link: './Contacto.html'}
  ];

  return (
    <>
      <header>
        {linksToPages.map(({link, name}) => 
           <a href={link}>{name}</a>
        )}
      </header>
      <main>
        <h1>Vinculo the Game</h1>
        <video src="../assets/videos/Son of Sun.mp4" width="60%" autoPlay muted loop />
      </main>
      <footer>
        <a href="https://open.spotify.com/" target="_blank" className="myButton">
          <span>Listen to us on Spotify</span>
          <img src={spotifyIcon} className="icon" />
        </a>
      </footer>
    </>
  )
}
