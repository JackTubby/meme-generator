export default function Meme() {
    return(
        <main>
            <div  className="form">
                <input className="form--input"/>
                <input className="form--input"/>
                <button
                className="form--button">
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img/>
                <h2 className="meme--text top">Top text</h2>
                <h2 className="meme--text bottom">Bottom Text</h2>
            </div>
        </main>
    )
}