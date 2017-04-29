class Button extends React.Component {
    render() {
        return (
            <button>{this.props.label}</button>
        )
    }
}

ReactDOM.render(<Button label="submit" />, mountNode)
