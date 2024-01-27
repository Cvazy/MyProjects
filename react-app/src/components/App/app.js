import React, {Component} from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostsList";
import PostAddForm from "../PostAddForm";

import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    id: 1,
                    label: 'Going learn to React',
                    important: true,
                    like: false
                },

                {
                    id: 2,
                    label: 'This is so good',
                    important: false,
                    like: false
                },

                {
                    id: 3,
                    label: 'I`m need to timeout...',
                    important: false,
                    like: false
                }
            ],

            term : '',
            filter: 'all'
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)

        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterStatus = this.onFilterStatus.bind(this)
        this.maxId = 4
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id)

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            id: this.maxId++,
            label: body,
            important: false
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id)

            const newItem = {...data[index], important: !data[index].important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id)

            const newItem = {...data[index], like: !data[index].like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

            return {
                data: newArr
            }
        })
    }

    searchPosts(items, term) {
        if (term.length === 0) return items

        return items.filter((el) => {
            return el.label.indexOf(term) > -1
        })
    }

    filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else return items
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterStatus(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state

        const liked = data.filter(item => item.like).length
        const allPost = data.length

        const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter)

        return (
            <div className="app">
                <AppHeader
                    firstName="Pavel"
                    surname="Murakhtanov"
                    liked={liked}
                    allPost={allPost}
                />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterStatus={this.onFilterStatus}
                    />
                </div>

                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}
