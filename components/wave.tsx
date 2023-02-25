// import WaveSurfer from 'wavesurfer.js';
import dynamic from 'next/dynamic';
const WaveSurfer = dynamic(async() => await import('wavesurfer.js').default, { ssr: false });

import { useRef, useEffect, useState } from "react";

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#0178FF",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 4,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true
});

export default async function App() {
  const waveformRef = useRef(null);
  const ws = useRef(null);
  const [playing, setPlaying] = useState(false);
  const url = "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";


  useEffect(() => {
    ws.current = WaveSurfer.create(formWaveSurferOptions(waveformRef.current));
    ws.current.load(url);
    return () => {
      if (ws.current)
        ws.current.destroy();
    };
  }, []);

  const handlePlayPause = () => {
    waveformRef.current?.playPause();
  }

  const handleChangeFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      waveformRef.current?.load(fileUrl);
    }
  }

  return (
    <div>
      <div ref={waveformRef}></div>
      <input type="file" accept="audio/*" onChange={(e) => handleChangeFile(e)} />
      <button onClick={handlePlayPause}>Play/Pause</button>
    </div>
  );

}

