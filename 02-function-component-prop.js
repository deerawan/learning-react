/**
 * Function component only can receive properties
 * it can't handle state management
 */
const Button = (props) => {
    return (
        <button>{props.label}</button>
    )
}

ReactDOM.render(<Button label="submit" />, mountNode)