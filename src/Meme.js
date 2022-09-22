import {useState} from 'react'
import memesData from './memeData.js'

export default function Meme() {

    // Create state and init to a obj
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    // Set state to meme data
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    // Get random meme, runs when btn is clicked
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div  className="form">
                <input className="form--input"/>
                <input className="form--input"/>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">Top text</h2>
                <h2 className="meme--text bottom">Bottom Text</h2>
            </div>
        </main>
    )
}