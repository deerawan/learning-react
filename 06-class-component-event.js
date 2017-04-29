class Button extends React.Component {
    state = { counter: 1 };

    addCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <button onClick={this.addCounter}>
                {this.state.counter}
            </button>
        )
    }
}

ReactDOM.render(<Button />, mountNode)
