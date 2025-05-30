import trailer from '../../assets/videos/trailer.mp4';
import './presentation.css';

export default function Presentation() {
    return (
      <div className='presentation'>
        <video src={trailer} width="60%" autoPlay muted loop />
        <button className='wishlist'>
          Add to wishlist
        </button>
      </div>
    );
}