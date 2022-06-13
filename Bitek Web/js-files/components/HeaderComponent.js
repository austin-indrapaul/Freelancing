let header_heading = "Header Component - Heading"
let header_description = "Header Component - description of the heading"



function HeaderComponent(){
    return(
        <div id = "div1">
            <h1>{header_heading}</h1>
            <p>{header_description}</p>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));
