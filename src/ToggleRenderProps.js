import React, { Component } from 'react';

class Toggle extends Component {
    state = { 
        on: false
     }

     toggle = () => {
         this.setState({
             on: !this.state.on
         })
     }
    render() {
        const { render } = this.props
        return (
            <div>{render({
                on: this.state.on,
                toggle: this.toggle
            })}</div>
        );
    }
}

export default Toggle;