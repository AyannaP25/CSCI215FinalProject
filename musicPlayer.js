import React, {useState, useRef} from 'react' // Helps component remeber information and display it later.
// References a value that’s not needed for rendering.

import "./musicplayerstylesheet.css"

    const MusicPlayer = ({songs}) => { //Takes song prop
        const [curentSongIndex, SetCurrentSongIndex] = useState(0); // State Variable
        const [isPlaying, setIsPlaying] = useState(false); // State Variable
        const audioRef = useRef(new Audio(songs[curentSongIndex].source)); // Reference

        // Function that plays song
        const playSong = () => {
            setIsPlaying(true);
            audioRef.current.play();
        };

        // Function that pauses song    
        const pauseSong = () => {
            setIsPlaying(false);
            audioRef.current.pause();
        };
 
         // Function that skips to the next song
        const skipSong = () => {
            const newIndex = curentSongIndex + 1;

            if (newIndex < songs.length) {
                SetCurrentSongIndex(newIndex);
            }
            else {
                SetCurrentSongIndex(0);
            }
            audioRef.current.pause();
            audioRef.current.src = songs[newIndex].source;
            if (isPlaying) {
                audioRef.current.play();
            }
            
        };

        // Function that skips to the previous song
        const previousSong = () => {
            const newIndex = curentSongIndex - 1;

            if (newIndex >= 0) {
                SetCurrentSongIndex(newIndex);
                audioRef.current.pause();
            audioRef.current.src = songs[newIndex].source;
            if (isPlaying) {
                audioRef.current.play();
            }
            }
            
        };

       
        // JSX Markup
        return (
            <div className="music-player" >
                <img src="CD.gif"></img>
                <h2>Now Playing: {songs[curentSongIndex].title} </h2>
                <div className="controls">
                <img src="Previous.png" alt="Previous" onClick={previousSong} />
                {isPlaying ? (
                <img src="Pause.png" alt="Pause" onClick={pauseSong} />
            ) : (
                <img src="Play.png" alt="Play" onClick={playSong} />
            )}
            <img src="Skip.png" alt="Skip" onClick={skipSong} />   
                </div>
            </div >




        );

    };

    export default MusicPlayer;