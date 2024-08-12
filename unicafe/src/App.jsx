import { useState } from 'react'
const StatisticsLine = (props) => {
  return <tr>
    <td>{props.text}</td><td> {props.value}</td>
  </tr>
}
const Header = (props) => {
  return <h1>
    {props.text}
  </h1>
}
const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  if (props.total === 0){
    return <div>
      no statistics
    </div>
  }
  return (<div>
      <Header text='statistics' />
      <table>
        <tbody>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='total' value={props.total} />
          <StatisticsLine text='average' value={props.average} />
        </tbody>
      </table>
  </div>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const giveGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const newTotal = updatedGood + bad + neutral
    setTotal(newTotal)
    const updatedAverage = (updatedGood - bad)/newTotal
    setAverage(updatedAverage)
  }
  const giveNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const newTotal = good + bad + updatedNeutral
    setTotal(newTotal)
    const updatedAverage = (good - bad)/newTotal
    setAverage(updatedAverage)

  }
  const giveBad = () => {
    const updatedBad = bad + 1 
    setBad(updatedBad)
    const newTotal = good + updatedBad + neutral
    setTotal(newTotal)
    const updatedAverage = (good - updatedBad)/newTotal
    setAverage(updatedAverage)
  }

  return (
    <div>
      <Header text='Give feedback' />
      <Button handleClick={giveGood} text='good' />
      <Button handleClick={giveNeutral} text='neutral' />
      <Button handleClick={giveBad} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} />
    </div>
  )
}

export default App