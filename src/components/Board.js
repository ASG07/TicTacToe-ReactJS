import BoardSquare from "./BoardSquare"

const Board = ({squares, changeBoxState, changeTurn, turn, checkWinner}) => {

    return (
        <div className='grid-container'>

            {squares.map(square => <BoardSquare className='square' checkWinner={checkWinner} key={square.id} square={square} changeBoxState={changeBoxState} changeTurn={changeTurn} turn={turn}/>)}

            {/* <div className='square' 
            key={1} 
            onClick={(e) => {
                
                if (e.currentTarget.innerHTML === ''){
                    changeBoxState(squares[0].id);
                    changeTurn();
                    e.currentTarget.innerHTML = turn === 'firstPlayer'? 'X' : 'O'
                }
                
            }}>
            </div> */}
            


            
        </div>
    )
}

export default Board
