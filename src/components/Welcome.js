import React from 'react'
import {useState} from 'react'
import Output from './Output'
const Welcome = () => {
    const [textChanged,setTextChanged]= useState(false);
    const onChangeHandler=()=>{
        setTextChanged(true)
    }
    return (
        <div>
            <h1>Hello World</h1>
            {!textChanged && <Output>good to see you</Output>}
            {textChanged && <Output>welcome shabnam</Output>}
            <button  onClick={onChangeHandler}>submit</button>
        </div>
    )
}

export default Welcome
