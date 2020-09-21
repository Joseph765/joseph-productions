import '../styles/globals.css';
import { useState, useEffect, useRef } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {

  const [currentSong, setCurrentSong] = useState("");
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
