import React, {Component} from "react";

import './postsListItem.css'

export default class PostsListItem extends Component {
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props

        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}
                >
                    {label}
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-sm btn-star"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-sm btn-trash"
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash-can"></i>
                    </button>

                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}