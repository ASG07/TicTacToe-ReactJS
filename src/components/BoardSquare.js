import React from 'react'



const BoardSquare = ({squares, changeBoxState, changeTurn, turn, square, checkWinner, stop}) => {

    

    return (
        <div className='square' 
            key={1} 
            onClick={(e) => {
                if (e.currentTarget.innerHTML === '' && !stop){
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