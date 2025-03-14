import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const votes = new Array(anecdotes.length).fill(0)
  const [votation, setVotation] = useState(votes)

  const handleVote = () => {
    const copy = [...votation]
    copy[selected] += 1
    setVotation(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      {anecdotes[selected]}
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        Next anecodote
      </button>
      <button onClick={handleVote}>
        Vote this anecdote
      </button>
      <p>This anecdote has {votation[selected]} votes at the moment</p>
      <h2>Most voted anecdote:</h2>
      <p>{anecdotes[votation.indexOf(Math.max(...votation))]}</p>    
    </div>

  )
}
 
export default App