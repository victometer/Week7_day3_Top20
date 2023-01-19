import React, {useEffect, useState} from 'react'
import SongList from '../components/SongList'

const MusicChart = () => {

    // is this destructuring? What is this a destructuring of? When will we want to have an object as useState?

    const [songs, setSongs] = useState([])
    const getSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then (result => result.json())
        .then (chartData => setSongs(chartData.feed.entry)) 
        
        //ChartData is what gets brought back by json. It's a whole object, We need an array, in order to update the setSongs function that takes in an array, not an object, as seen in the useState   
    
    }
    useEffect(() => {
        getSongs()
    }, [])

    return (
        <div className="main-container">
            <SongList songAsAProp={songs}/>
            
        </div>
    )
}




export default MusicChart;
