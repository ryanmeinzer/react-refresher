import React, { Component } from 'react'

export default class Toggle extends Component {

    // constructor(props) {
        // super(props)
        state = {isToggleOn: true}

        // this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br />
                <br />
            </div>
        )
    }
}