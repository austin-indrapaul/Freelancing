const data = [
    { id:1, question: "what we do?", answer:"We build good websites" },
    { id:2, question: "what products we have?", answer:"You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change." },
    { id:3, question: "Summarize your work?", answer:"While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below" },
 ];

function Faq(props){
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading"+props.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="false" aria-controls={"collapse"+props.id}>
                {props.question}
                </button>
            </h2>
            <div id={"collapse"+props.id}  className="accordion-collapse collapse" aria-labelledby={"heading"+props.id} data-bs-parent="#faq-accordion">
                <div className="accordion-body m-2">
                    {props.answer}
                </div>
            </div>
        </div>
    );
}

function FaqComponent(){
    return(
        <div>
            <h1 className="mb-4 text-center text-lg-start ">Frequently Asked Questions</h1>
            <div className="accordion" id="faq-accordion">
                {data.map(item => (
                    <Faq key={item.id} id={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
}


ReactDOM.render(<FaqComponent />, document.getElementById("faq-section"));

{/* <div className="row" style={{"justify-content":"space-around"}}>
            {data.map(item => (
                <Faq key={item.id} quesion={item.quesion} answer={item.answer} />
    ))}
</div>   */}