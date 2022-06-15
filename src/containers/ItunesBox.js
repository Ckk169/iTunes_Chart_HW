import React, { useState, useEffect } from 'react';
import ChartSong from '../components/SongList';

const ItunesBox = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getMusic();
    }, [])

    const getMusic = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
    }


    return (
        <>
            <ChartSong songs={songs} />
        </>
    )

};

export default ItunesBox;