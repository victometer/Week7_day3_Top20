import React from "react";
import SongItem from "./SongItem";

const SongList = ({songAsAProp}) => {
    
    //setSongs i.e. songAsAProp is a huge array with a lot of useless informaion. We only want it to have 3 things: name. artist and chart position. Hence we need to map it.

    const arrayOfIndividualSongs = songAsAProp.map((song) => {
        
        console.log(song)
        return (

            <SongItem songName={song['im:name']['label']} songArtist={song['im:artist']['label']} chartPosition={song.category.attributes['im:id']}/> 
        )
    })
    return (
        <>
            {arrayOfIndividualSongs}
        </>
    )

}

export default SongList