import React from 'react';

const Song = ({ song, chartPosition }) => {

    return (
        <>

            {/* <h3>Number:{chartPosition}</h3> */}

            <li>Artist:{song['im:artist'].label}</li>
            <h5>Title:{song['im:name'].label}</h5>

            <hr></hr>



        </>
    );
}

export default Song;