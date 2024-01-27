import React, {Component} from "react";

import './postStatusFilter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)

        this.buttons = [
            {
                name: 'all',
                label: 'Все'
            },

            {
                name: 'like',
                label: 'Понравилось'
            }
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterStatus} = this.props

            const active = filter === name
            const itemClass = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${itemClass}`}
                    onClick={() => onFilterStatus(name)}
                >
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
