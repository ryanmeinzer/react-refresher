function Warning(props) {
    const warning = 'on'
    if (warning === 'on') {
        return null
    }

    return (
        <div>Warning!</div>
    )
}

export default Warning