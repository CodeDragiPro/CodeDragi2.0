import React, { useState } from 'react';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';

const Sound = () => {
  const [soundOn, setSoundOn] = useState(true);

  const toggleSound = () => {
    setSoundOn(!soundOn);
    // Ici, vous pouvez ajouter la logique pour activer ou désactiver le son de votre musique de fond.
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
      onClick={toggleSound}
    >
      <div className="w-12 h-12 flex items-center justify-center border border-white rounded-full">
        {soundOn ? <GiSoundOn size={32} /> : <GiSoundOff size={32} />}
      </div>
    </button>
  );
};

export default Sound;
