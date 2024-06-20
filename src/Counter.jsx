import {useState} from "react"; //we can't directly use useState

export default function Counter() {
    // let count = 0;
    // function incCount() {
    //     count += 1;
    //     console.log(count);
    //let [stateVariable,setStateVaribale] = useState(0); //since this useState returns an array
    let [count,setCount] = useState(0); // here 0 means, initial value


    // let incCount = () => {
    //     setCount(count+1)
    //     console.log(count)
    // }
    
    let incCount = () => {
        setCount((currCount) => {
            return currCount +1;
        })
        setCount((currCount) => {
            return currCount +1;
        })
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}