import React from "react";
import ReactDOM from "react-dom/client";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    
    changeState() {
        this.setState({ hello: "Geek!"});
    }

    render() {
        return (
            <div>
                <h1>
                    GeeksForGeeks.org, Hello
                    {this.state.hello}
                </h1>
                <h2>
                    <a onClick={this.changeState.bind(
                        this
                    )}>Press Here!</a>
                </h2>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Test />);