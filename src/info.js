import React from 'react';
import "./info.css";

function info({ check, title, text, name, description }) {
    if (check == 'story') {
        return (
            <div>
                <h3>{title}</h3>
                <p1>{text}</p1>
            </div>
        )
    }
}

export default info