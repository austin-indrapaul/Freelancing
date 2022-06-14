let header_heading = "Beriyth Info Tech"
let header_description = "Simple creating opportunities and enabling prosperity"

function navComponent(){
    return (
        <div id = "nav">
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
}


function HeaderComponent(){
    return (   
        <div id="header-content">
            <h1>{header_heading}</h1>
            <p>{header_description}</p>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));