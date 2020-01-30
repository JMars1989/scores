import React from 'react'

const Player = (props) => {
    const {
        name,
        score,
        index,
        incrementScore,
        decrementScore
    } = props;

    return (
        <div className="list">
            <div className="line">
                <button className="scoreButton" onClick={() => decrementScore(index)}>-</button>
                {name}: {score}
                <button className="scoreButton" onClick={() => incrementScore(index)}>+</button>
            </div>
        </div>
    )
}

export default Player;
