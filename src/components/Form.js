import memesData from "../memesData.js"
import React from "react"
import './Form.css';

function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
     function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
        <div class="container">
            <form class="needs-validation" novalidate>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <input type="text" className="form-control" name="topText" value={meme.topText} onChange={handleChange} placeholder="Top Text"></input>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" className="form-control" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder="Bottom Text"></input>
                    </div>
                </div>
                <button class="w-100 btn btn-primary btn-lg mt-3" onClick={getMemeImage}>Get Meme</button>
            </form>
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Form;
