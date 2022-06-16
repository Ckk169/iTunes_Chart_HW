import React from 'react';
import Song from './Song';

const ChartSong = ({ songs, key }) => {

    const songNodes = songs.map((song, index) => {
        // index += 1 // start chart position index from 1 and not 0. 
        return (< Song
            // chartPosition={index}
            song={song}
            key={index}
        />
        );
    })

    return (

        <ol>
            {songNodes}
        </ol>


    )

}

export default ChartSong;