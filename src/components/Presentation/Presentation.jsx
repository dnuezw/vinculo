import trailer from '../../assets/videos/trailer.mp4';

export default function Presentation() {
    return (
        <>
            <h1>Vinculo the Game</h1>
            <video src={trailer} width="60%" autoPlay muted loop />
        </>
    );
}