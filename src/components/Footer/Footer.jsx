import spotifyIcon from '../../assets/icons/spotify.svg'

export default function Footer() {
    return (
        <footer>
            <a href="https://open.spotify.com/" target="_blank" className="myButton">
                <span>Listen to us on Spotify</span>
                <img src={spotifyIcon} width={24} height={24} />
            </a>
        </footer>
    );
}