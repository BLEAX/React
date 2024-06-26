import React, {Component} from 'react';

class Lifecycle4 extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        const setStateHandler = (e) => {
            console.log('* call setState()');
            this.setState({r: Math.random()})
        }
        return (
            <div>
                <button onClick={setStateHandler}>setState</button>
            </div>
        )
    }
}

export default Lifecycle4;