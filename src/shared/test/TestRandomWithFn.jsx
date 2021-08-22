import * as React from 'react';
import {starWars, uniqueNamesGenerator} from "unique-names-generator";



const TestRandomWithFn = () => {
    const getWords = () => {
        return uniqueNamesGenerator({
            dictionaries: [starWars],
            length: 1
        })
    }

    const [state, setState] = React.useState({
        newWords: getWords(),
        count: 0
    });


    const handleClick = () => {
        setState((props) => {
            return {
                newWords: getWords(),
                count: props.count + 1
            }
        })
    }
    // const handleClick = () => {
    //     setNewWords(getWords)
    //     setCount((count) => {
    //         return count + 1
    //     })
    // }
    // const [newWords, setNewWords] = React.useState(getWords)
    // const [count, setCount] = React.useState(0)



    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                {state.newWords} {state.count}
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}


export default TestRandomWithFn;