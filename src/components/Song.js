import React from 'react';

const Song = ({ song, chartPosition }) => {

    return (
        <>

            <h3>Number:{chartPosition}</h3>

            <h4> Artist:{song['im:artist'].label}</h4>
            <h5>Title:{song['im:name'].label}</h5>

            <hr></hr>



        </>
    );
}

export default Song;