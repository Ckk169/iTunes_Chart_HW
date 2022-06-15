import React from 'react';

const Song = ({ song, chartPosition }) => {

    return (
        <>

            <h1>Number:{chartPosition}</h1>
            <p>Artist:{song['im:artist'].label}</p>
            <p>Title:{song['im:name'].label}</p>
            <hr></hr>


        </>
    );
}

export default Song;