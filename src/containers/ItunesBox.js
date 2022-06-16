import React, { useState, useEffect } from 'react';
import ChartSong from '../components/SongList';
import Header from '../components/Header';

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
            <Header title='TOP 20 Song' />
            <ChartSong songs={songs} />
        </>
    )

};

export default ItunesBox;