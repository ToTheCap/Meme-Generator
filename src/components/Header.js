export default function Header() {
    return (
        <header>
            <img className="header--logo" src= {process.env.PUBLIC_URL + '/trollFace.svg'}></img>
            <h2 className="header--title white">Meme Generator</h2>
            <p className="project--info white">Practice React - Project 3</p>
        </header>
    )
}