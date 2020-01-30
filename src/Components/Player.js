import React from 'react'
import PropTypes from 'prop-types';

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

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    incrementScore: PropTypes.func.isRequired,
    decrementScore: PropTypes.func.isRequired
}