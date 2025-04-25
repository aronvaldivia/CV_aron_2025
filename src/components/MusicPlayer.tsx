import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://mcusercontent.com/17635adc15e4488859eb5650d/files/f01d2da5-deb2-80bd-a1ba-e5605329ea9a/MUSICALAINDG.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Only toggle play if clicking the icon container
    if (target.closest('.icon-container')) {
      if (!audioRef.current) return;
      
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div 
        className={`
          relative bg-black-700 text-white rounded-full shadow-lg cursor-pointer
          transition-all duration-300 ease-in-out overflow-hidden
          ${isExpanded ? 'w-[160px]' : 'w-[48px]'}
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div 
          className="icon-container absolute left-0 top-0 p-3"
          onClick={togglePlay}
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </div>
        
        <div 
          className={`
            pl-[60px] pr-4 py-3 opacity-0 pointer-events-none
            transition-opacity duration-300 ease-in-out
            ${isExpanded ? 'opacity-100 pointer-events-auto' : ''}
          `}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #ffffff ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;