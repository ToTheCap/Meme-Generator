import React from 'react';

export default function Meme(props) {
    const [meme, setMeme] = React.useState({topText: "", bottomText: "", randomImg: "http://i.imgflip.com/1bij.jpg"});
    const [allMemeData, setAllMemeData] = React.useState([]);
    
    // gets meme templates from API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemeData(data.data.memes));
    }, [])

    // function gets random image from allMemeData
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeData.length);
        const url = allMemeData[randomNumber].url;
        setMeme(oldMeme => ({...oldMeme, randomImg: url}));
    }
    
    // thsi function handles top or bottom text changes and update it after every character change
    function handleChange(event) {
        setMeme(oldMeme => ({...oldMeme, [event.target.name]: event.target.value}))
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" placeholder="Top text" type="text" value={meme.topText} name="topText" onChange={handleChange}/>
                <input className="form--input" placeholder="bottom text" type="text" value={meme.bottomText} name="bottomText" onChange={handleChange}/>
                <button onClick={getMemeImage} className="form--button white">
                    <span className="button--span">
                        Get a new meme image <img className="frame" src={process.env.PUBLIC_URL + '/frame.png'}/>
                    </span>
                </button>
            </div>
            <div className="meme">
                <img className="meme--img" src={meme.randomImg} alt="generated meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}   