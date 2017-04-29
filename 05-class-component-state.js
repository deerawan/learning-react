class Button extends React.Component {
    state = { counter: 1 };

    render() {
        return (
            <button>{this.state.counter}</button>
        )
    }
}

ReactDOM.render(<Button />, mountNode)
