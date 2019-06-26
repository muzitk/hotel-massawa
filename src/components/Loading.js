import React from 'react'
import loading from '../images/loading.gif'

function Loading() {
    return (
        <div className = "loading">
            <h4>Rooms Data Loading</h4>
            <img src = {loading} />
        </div>
    )
}

export default Loading;