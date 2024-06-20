function handleFormSubmission(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form(){
    return(
        <form>
            <input placeholder="Write something here"></input>
            <button onClick={handleFormSubmission}>Submit</button>
        </form>
    )
}