import {useState, useEffect} from 'react'

export default function Meme() {

    // Create state and init to a obj
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    // Set state to meme data (pulled from API) | Init as an empty array
    const [allMemes, setAllMemes] = useState([])

    // Create API call for meme data
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            // setAllMemes state to meme data
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    // Get random meme, runs when btn is clicked
    function getMemeImage() {
        // Get's random number (max number however long all memes array length is (api data))
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        // Uses the random number and get's a url from the allMemes array
        const url = allMemes[randomNumber].url
        // Spread in previous meme data and add new random image then set to the meme state
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    // Updates text on meme image
    function handleChange(event) {
        // Get name and value (need name to know whether it is top or btm txt)
        const {name, value} = event.target
        setMeme(prevMeme => ({
            // Spread in the prev meme data but change the value to whatever is added to input
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div  className="form">
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}