const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Matías'
  const age = '22'

  return ( 
    <div>
      <h1>Greeting</h1>
      <Hello name='Maya' age={26 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App