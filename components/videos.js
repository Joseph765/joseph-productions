import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles/videos.module.css';

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=${process.env.YouTube_API_KEY_V3}`,
    })
    .then((res) => {
      console.log(res.data.items);
      setVideos(res.data.items);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <div className={styles.videos}>
      {videos.map( item => {
        return (
          <div>
            <h2>{item.snippet.title}</h2>
            <iframe width="800" height="450" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} frameBorder="0" allowFullScreen>

            </iframe>
          </div>
        )
      })}
    </div>
  );
}