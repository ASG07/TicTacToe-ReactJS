import Board from './components/Board.js'
import WinningLine from './components/WinningLine.js'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [winner, setWinner] = useState('')
  const [stop, setStop] = useState(false)
  const [turn, setTurn] = useState('firstPlayer')
  const [winningType, setWinningType] = useState('')
  

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
    if(stop === false){
      setSquares(squares.map(s => s.id === id? {...s,state: turn === 'firstPlayer'? 'X' : 'O'} : s))
    }
    
  }

  const changeTurn = () =>{
    if(stop === false){
      setTurn(turn === 'firstPlayer'? 'secondPlayer' : 'firstPlayer')
    }
  }

  const stopGame = () =>{
      setStop(true)
  }

  const checkWinner = () => {
    if(stop === false){
      //    Test if X won

      if(squares[0].state === 'X' && squares[1].state === 'X' && squares[2].state === 'X'){
        console.log("x won!")
        setWinningType("h_line h_top")
        stopGame()
      }
      else if(squares[3].state === 'X' && squares[4].state === 'X' && squares[5].state === 'X'){
        console.log("x won!")
        setWinningType("h_line")
        stopGame()
      }
      else if(squares[6].state === 'X' && squares[7].state === 'X' && squares[8].state === 'X'){
        console.log("x won!")
        setWinningType("h_line h_bottom")
        stopGame()
      }

      else if(squares[0].state === 'X' && squares[3].state === 'X' && squares[6].state === 'X'){
        console.log("x won!")
        setWinningType("v_line v_left")
        stopGame()
      }
      else if(squares[1].state === 'X' && squares[4].state === 'X' && squares[7].state === 'X'){
        console.log("x won!")
        setWinningType("v_line")
        stopGame()
      }
      else if(squares[2].state === 'X' && squares[5].state === 'X' && squares[8].state === 'X'){
        console.log("x won!")
        setWinningType("v_line v_right")
        stopGame()
      }

      else if(squares[0].state === 'X' && squares[4].state === 'X' && squares[8].state === 'X'){
        console.log("x won!")
        setWinningType("slash backward_slash")
        stopGame()
      }
      else if(squares[2].state === 'X' && squares[4].state === 'X' && squares[6].state === 'X'){
        console.log("x won!")
        setWinningType("slash forward_slash")
        stopGame()
      }

      //   Test if O won

      if(squares[0].state === 'O' && squares[1].state === 'O' && squares[2].state === 'O'){
        console.log("O won!")
        setWinningType("h_line h_top")
        stopGame()
      }
      else if(squares[3].state === 'O' && squares[4].state === 'O' && squares[5].state === 'O'){
        console.log("O won!")
        setWinningType("h_line")
        stopGame()
      }
      else if(squares[6].state === 'O' && squares[7].state === 'O' && squares[8].state === 'O'){
        console.log("O won!")
        setWinningType("h_line h_bottom")
        stopGame()
      }

      else if(squares[0].state === 'O' && squares[3].state === 'O' && squares[6].state === 'O'){
        console.log("O won!")
        setWinningType("v_line v_left")
        stopGame()
      }
      else if(squares[1].state === 'O' && squares[4].state === 'O' && squares[7].state === 'O'){
        console.log("O won!")
        setWinningType("v_line")
        stopGame()
      }
      else if(squares[2].state === 'O' && squares[5].state === 'O' && squares[8].state === 'O'){
        console.log("O won!")
        setWinningType("v_line v_right")
        stopGame()
      }

      else if(squares[0].state === 'O' && squares[4].state === 'O' && squares[8].state === 'O'){
        console.log("O won!")
        setWinningType("slash backward_slash")
        stopGame()
      }
      else if(squares[2].state === 'O' && squares[4].state === 'O' && squares[6].state === 'O'){
        console.log("O won!")
        setWinningType("slash forward_slash")
        stopGame()
      }

    }
  }

  return (
    <div className='container'>
      <Board changeBoxState={changeBoxState} turn={turn} checkWinner={checkWinner} changeTurn={changeTurn} stop={stop} squares={squares} />
      <WinningLine winningType={winningType}/>
      {checkWinner()}
      
    </div>
  )
}

export default App
