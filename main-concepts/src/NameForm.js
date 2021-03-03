import React, { Component } from 'react'

export default class NameForm extends Component {

    state = {
        textBox: '',
        essayBox: 'Please write an essay about your favorite DOM element.'
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Text:
                    <input type="text" name="textBox" value={this.state.text} onChange={this.handleChange} />
                </label>
                <label>
                    Essay:
                    <textarea name="essayBox" value={this.state.essay} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}