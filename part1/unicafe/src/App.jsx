import { useState } from "react";

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total === 0 ? 0 : (props.good - props.bad) / total
  const positivePercentage = total === 0 ? 0 : (props.good / total) * 100
  
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text="Good" value={props.good}></StatisticLine>
        <StatisticLine text="Neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="Bad" value={props.bad}></StatisticLine>
        <StatisticLine text="All" value={total}></StatisticLine>
        <StatisticLine text="Average" value={average}></StatisticLine>
        <StatisticLine text="Positive" value={`${positivePercentage} %`}></StatisticLine>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good'/>      
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral'/>      
      <Button onClick={() => setBad(bad + 1)} text='Bad'/>      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App