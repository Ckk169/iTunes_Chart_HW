import React from 'react';
import Song from './Song';

const ChartSong = ({ songs, key }) => {

    const songNodes = songs.map((song, index) => {
        index += 1
        return (< Song
            chartPosition={index}
            song={song}
            key={index}
        />
        );
    })

    return (
        <>

            {songNodes}

        </>
    )

}

export default ChartSong;