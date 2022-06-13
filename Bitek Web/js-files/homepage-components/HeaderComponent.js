let header_heading = "Header Component - Heading"
let header_description = "Header Component - description of the heading"
let header_home = "homepage.html"



function HeaderComponent(){
    return(
        <div id="div1">
            <ul id= "ul1">
            <li id = "il1"><h1>{header_heading}</h1></li>
            <li id = "il1"><p>{header_description}</p></li>
            <li id = "il1"><a href={header_home}>Home</a></li>
            </ul>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));
