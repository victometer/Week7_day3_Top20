import React from "react";

const SongItem = ({songName, songArtist, chartPosition}) => {
    // console.log(songName, songArtist, chartPosition)
    return (
        <>
            <h3>Name: {songName} </h3>
            <h3>Artist: {songArtist} </h3>
            <h3>Chart position: {chartPosition} </h3>
        </>
    )

}

export default SongItem