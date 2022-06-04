/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import sound from '/naruto_jutsu.mp3';

export default function SoundPlay() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <ReactHowler src={sound} playing={play} />
      <button onClick={() => setPlay(!play)}>{play ? 'Play' : 'Play'}</button>
    </div>
  );
}
