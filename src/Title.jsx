function printHello(){
    console.log("Hello");
}

export default function Title(){
    return (
        <div>
            <button onClick={printHello}>Click Me!</button>
        </div>
    )
}
