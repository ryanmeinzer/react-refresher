function Time(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.time.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Time