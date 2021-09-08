import * as React from 'react';
import {starWars, uniqueNamesGenerator} from "unique-names-generator";



class TestRandomWithClass extends React.PureComponent {
    state = {
        name: this.randomName(),
        counter: 0
    }


    render() {
        return (
            <div className="asd">
                <div>{this.state.name}</div>
                <div>{this.state.counter}</div>
                <button onClick={this.addNewName}>Click</button>
            </div>
        );
    }

    addNewName = () => {
        this.setState({name: this.randomName()})
        this.setState((state, props) => {
            return {counter: state.counter + 1}
        })
    }

    randomName() {
        return uniqueNamesGenerator({
            dictionaries: [starWars], // colors can be omitted here as not used
            length: 1
        });
    }
}

export default TestRandomWithClass;