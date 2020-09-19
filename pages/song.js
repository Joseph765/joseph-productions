import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

export default function song({ changeSong, isPlaying }) {
  return (
    <div>
      <button onClick={() => changeSong("/Ocean.mp3")}>
        {isPlaying ?
          <PauseIcon /> :
          <PlayArrowIcon />
        }
      </button>
      <p>Ocean</p>
    </div>
  );
}