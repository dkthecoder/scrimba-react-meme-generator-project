import memesData from "../memesData.js"
import React from "react"

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

    return (
        <main>
        <div class="container">
            <form class="needs-validation" novalidate>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">Top Text</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
                        <div class="invalid-feedback">Field is required.</div>
                    </div>
                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Bottom Text</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
                        <div class="invalid-feedback">Field is required.</div>
                    </div>
                </div>
                <button class="w-100 btn btn-primary btn-lg mt-3" onClick={getMemeImage}>Get Meme</button>
            </form>
        </div>
        <img src={meme.randomImage} alt="" class="center"/>
        </main>
    );
}

export default Form;
