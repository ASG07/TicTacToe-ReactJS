import React from 'react'



const BoardSquare = ({squares, changeBoxState, changeTurn, turn, square, checkWinner}) => {

    

    return (
        <div className='square' 
            key={1} 
            onClick={(e) => {
                if (e.currentTarget.innerHTML === ''){
                    changeBoxState(square.id);
                    
                    changeTurn()
                    e.currentTarget.innerHTML = (turn === 'firstPlayer'? 'X' : 'O');
                }
            }}> 
        </div>
        
    )
}

export default BoardSquare
{/* <IoIosClose size="130px" display='false' /> 
<FiCircle size="" />*/}