import React, { useState, useRef, useEffect } from 'react';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';
import { FaArrowDown } from 'react-icons/fa';
import Music from '../assets/MindPool.mp3';

const Sound = () => {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Activer ou désactiver le son
    }
    setSoundOn(!soundOn);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (soundOn) {
        audioRef.current.play(); // Démarrer la musique si le son est activé
      } else {
        audioRef.current.pause(); // Mettre en pause la musique si le son est désactivé
      }
    }
  }, [soundOn]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Démarrer la musique lorsque le composant est monté
    }
  }, []);

  return (
    <div className="fixed bottom-4 z-20 flex flex-col items-center">
      <div className="transform rotate-90 text-white mb-12">Musique</div>
      <FaArrowDown size={32} className="text-white" />
      <button
        className="p-6 text-codedragi-blue rounded-full z-50"
        onClick={toggleMute}
      >
        <div className="w-12 h-12 flex items-center justify-center border border-codedragi-blue rounded-full">
          {soundOn ? <GiSoundOn size={32} /> : <GiSoundOff size={32} />}
        </div>
      </button>
      <audio ref={audioRef} autoPlay loop>
        <source src={Music} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Sound;
