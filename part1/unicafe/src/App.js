import logo from './logo.svg';
import { useState } from 'react'
import './App.css';



const Header = ({ title }) => <h1>{title}</h1>

const FeedbackButton = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticsLine = ({ text, value}) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    if (total === 0) {
        return <p>There are no stats to display</p>
    } else {
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <StatisticsLine text="Good" value={good} />
                    <StatisticsLine text="Neutral" value={neutral} />
                    <StatisticsLine text="Bad" value={bad} />
                    <StatisticsLine text="All" value={total} />
                    <StatisticsLine text="Average" value={(good - bad) / total} />
                     <StatisticsLine text="Positive" value={((good / total * 100)).toString() + "%"} />
                </table>   
            </div>
        )
    }
}

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
            <Statistics good={good} neutral={neutral} bad={ bad } />
        </div>

    )
}
export default App;

