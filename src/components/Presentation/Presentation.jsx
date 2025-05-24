import trailer from '../../assets/videos/trailer.mp4';

export default function Presentation() {
    return (
      <video src={trailer} width="90%" autoPlay muted loop />
    );
}