import React, { Component } from 'react'

export default class NameForm extends Component {

    state = {
        textBox: '',
        essayBox: 'Please write an essay about your favorite DOM element.', 
        selectionBox: 'coconut'
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
        alert('Some text was submitted: ' + this.state.textBox + this.state.essayBox + this.state.selectionBox)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Text:
                    <input type="text" name="textBox" value={this.state.textBox} onChange={this.handleChange} />
                </label>
                <label>
                    Essay:
                    <textarea name="essayBox" value={this.state.essayBox} onChange={this.handleChange} />
                </label>
                <label>
                    Pick your favorite flavor:
                    <select name="selectionBox" value={this.state.selectionBox} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}