import React from "react";

import './appHeader.css'

const AppHeader = ({firstName, surname, allPost, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>
                {firstName} {surname}
            </h1>

            <h2>
                {allPost} записей, из них понравилось {liked}
            </h2>
        </div>
    )
}

export default AppHeader