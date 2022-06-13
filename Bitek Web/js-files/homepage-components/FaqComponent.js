const data = [
    { id:1, question: "Will a 5G phone work where 5G service is limited or unavailable?", answer:"The 5G phones currently on the market are \"backward compatible,\" meaning that they are capable of functioning on earlier-generation networks outside of 5G coverage areas." },
    { id:2, question: "Will 5G work on existing devices built for 3G or 4G?", answer:"No. New devices will be required. This includes mobile phones and other cellular devices, such as tablets and smart watches. Before purchasing a 5G device, check with your mobile provider to see if 5G service is available in your area." },
    { id:3, question: "Where can I learn more about 5G and how it works?", answer:"The Qualcomm® Wireless Academy (QWA) offers a wide array of 5G training courses for advanced wireless engineers, non-engineers new to 5G, and everyone in between. Courses are offered through a flexible eLearning format, so you can learn at your own pace and from anywhere in the world."+" <a href='#'>Learn more.</a>"},
 ];

function Faq(props){
    const answer = props.answer
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading"+props.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="false" aria-controls={"collapse"+props.id}>
                {props.question}
                </button>
            </h2>
            <div id={"collapse"+props.id}  className="accordion-collapse collapse" aria-labelledby={"heading"+props.id} data-bs-parent="#faq-accordion">
                <div dangerouslySetInnerHTML={{ __html: answer }} className="accordion-body m-2">
                    
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