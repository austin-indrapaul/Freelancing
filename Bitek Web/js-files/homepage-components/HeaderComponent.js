let header_heading = "Bitek Web Technologies"
let header_description = "We make your life easier"



function HeaderComponent(){
    return(
        <div id="header-content">
            <h1>{header_heading}</h1>
            <p>{header_description}</p>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));