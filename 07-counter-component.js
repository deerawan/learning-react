class Button extends React.Component {
    render() {
        return (
            <button onClick={
            	() => this.props.onClickFunction(this.props.incrementValue)}>
                +{this.props.incrementValue}
            </button>
        )
    }
}

const Result = (props) => {
    return (
        <h2>{props.counter}</h2>
    )
}

class App extends React.Component {
    state = { counter: 0 };

    addCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.addCounter} />
                <Button incrementValue={100} onClickFunction={this.addCounter} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode)
