import React from 'react'

function Die(props) {
    return (
        <div className="die-face">
            <h1 className="die-num">{props.value}</h1>
        </div>
    )
}

export default Die
