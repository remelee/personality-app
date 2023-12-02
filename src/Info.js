import './Info.css';
function Info(){
    return(
        <div className="more-info"> <h1>Not sure what you are? Find out!</h1>
        <div className="links">
        <br/>
        <br/>
            <a className="horoscope-info"
            href='/horoscope'>Zodiac dates</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <a className="mbti-info"
            href="https://www.16personalities.com/free-personality-test">MBTI test</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <a className="enneagram-info"
            href="https://enneagram-personality.com/en">Enneagram test</a></div>
            
        </div>
    )
}
export default Info