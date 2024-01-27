import React from "react";

import './postsList.css'

import PostsListItem from '../PostsListItem'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((el) => {
        const {id, ...elProps} = el

        return (
            <li key={id} className="list-group-item">
                <PostsListItem
                    {...elProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList