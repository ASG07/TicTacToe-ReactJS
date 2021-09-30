import Board from './components/Board.js'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [winner, setWinner] = useState('')

  const [stop, setStop] = useState(false)

  const [turn, setTurn] = useState('firstPlayer')

  const [squares, setSquares] = useState([
    {id : 1, state: ''},
    {id : 2, state: ''},
    {id : 3, state: ''},
    {id : 4, state: ''},
    {id : 5, state: ''},
    {id : 6, state: ''},
    {id : 7, state: ''},
    {id : 8, state: ''},
    {id : 9, state: ''},
  ])

  const changeBoxState = (id) =>{
    setSquares(squares.map(s => s.id === id? {...s,state: turn === 'firstPlayer'? 'X' : 'O'} : s))
  }

  const changeTurn = () =>{
    setTurn(turn === 'firstPlayer'? 'secondPlayer' : 'firstPlayer')
  }

  const stopGame = () =>{
    setStop(true)
  }

  const checkWinner = () => {
    if(squares[0].state === 'X' && squares[1].state === 'X' && squares[2].state === 'X'){
      console.log("x won!")
    }
    else if(squares[3].state === 'X' && squares[4].state === 'X' && squares[5].state === 'X'){
      console.log("x won!")
    }
    else if(squares[6].state === 'X' && squares[7].state === 'X' && squares[8].state === 'X'){
      console.log("x won!")
    }

    else if(squares[0].state === 'X' && squares[3].state === 'X' && squares[6].state === 'X'){
      console.log("x won!")
    }
    else if(squares[1].state === 'X' && squares[4].state === 'X' && squares[7].state === 'X'){
      console.log("x won!")
    }
    else if(squares[2].state === 'X' && squares[5].state === 'X' && squares[8].state === 'X'){
      console.log("x won!")
    }

    else if(squares[0].state === 'X' && squares[4].state === 'X' && squares[8].state === 'X'){
      console.log("x won!")
    }
    else if(squares[2].state === 'X' && squares[4].state === 'X' && squares[6].state === 'X'){
      console.log("x won!")
    }
    
  }

  return (
    <div className='container'>
      <Board changeBoxState={changeBoxState} turn={turn} checkWinner={checkWinner} changeTurn={changeTurn} squares={squares} />
      {checkWinner()}
      
    </div>
  )
}

export default App
