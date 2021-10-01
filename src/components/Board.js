import BoardSquare from "./BoardSquare"

const Board = ({squares, changeBoxState, changeTurn, turn, checkWinner, stop}) => {

    return (
        <div className='grid-container'>

            {squares.map(square => <BoardSquare className='square' checkWinner={checkWinner} stop={stop} key={square.id} square={square} changeBoxState={changeBoxState} changeTurn={changeTurn} turn={turn}/>)}
            
        </div>
    )
}

export default Board
