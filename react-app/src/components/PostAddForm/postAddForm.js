import React, {Component} from "react";

import './postAddForm.css'

export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this)
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    onChangeValue(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmitForm(event) {
        event.preventDefault()
        this.props.onAdd(this.state.text)

        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                className="d-flex bottom-panel"
                onSubmit={this.onSubmitForm}
            >
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    onChange={this.onChangeValue}
                    value={this.state.text}
                />

                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Добавить
                </button>
            </form>
        )
    }
}
