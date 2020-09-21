import { useState, useEffect, useRef } from 'react';

export default function footer() {

  const audioRef = useRef(null);

  return (
    <audio ref={audioRef} controls>
      <source src="" type="audio/mp3" />
    </audio>
  );
}