import logo from './logo.svg';
import { useState } from 'react'
import './App.css';



const Header = ({ title }) => <h1>{title}</h1>

const FeedbackButton = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = (myval) => {
        if (myval == "good") {
            setGood(good + 1)
        }
        else if (myval == "neutral") {
            setNeutral(neutral + 1)
        }
        else {
            setBad(bad + 1)
        }
    }
    
    return (
        <div>
            <Header title="Give Feedback" />
            <FeedbackButton handleClick={() => handleClick("good")} text="good" />
            <FeedbackButton handleClick={() => handleClick("neutral")} text="neutral" />
            <FeedbackButton handleClick={() => handleClick("bad")} text="bad" />
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {good + neutral + bad}</p>
            <p>Average { (good - bad) / (good + bad + neutral) }</p>
            <p>Positive {good / (good + neutral + bad)* 100 }%</p>
        </div>

    )
}
export default App;

