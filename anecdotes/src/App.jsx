import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState ([0,0,0,0,0,0,0,0])
  const [highest, setHighest] = useState (0)
  const [selected, setSelected] = useState(0)

  const randomFromList = () => {

    const random = Math.floor(Math.random() * 8)
    console.log(random)
    setSelected(random)
  }

  const voteQuote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(Math.max(...copy))
    console.log(copy[selected])
    if(copy[selected]>votes[highest]){
      setHighest(selected)
    }
    console.log(highest)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>votes {votes[selected]}</p>
      <Button handleClick={()=>randomFromList()} text='new quote' />
      <Button handleClick={()=>voteQuote()} text='vote' />
      <p>
        Anecdote with most votes
      </p>
      {anecdotes[highest]}
      <p>
        has {votes[highest]} votes
      </p>
    </div>
    
  )
}

export default App