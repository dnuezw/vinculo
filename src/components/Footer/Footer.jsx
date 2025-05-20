import spotifyIcon from '../../assets/images/spotifyIcon.png'

export default function Footer() {
    return (
        <footer>
            <a href="https://open.spotify.com/" target="_blank" className="myButton">
                <span>Listen to us on Spotify</span>
                <img src={spotifyIcon} className="icon" />
            </a>
        </footer>
    );
}