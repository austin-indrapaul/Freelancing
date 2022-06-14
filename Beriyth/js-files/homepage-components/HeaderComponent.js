let header_heading = "Beriyth Info Tech"
let header_description = "Simple creating opportunities and enabling prosperity"

function HeaderComponent(){
    return (   
        <div id="header-content">
            <h1>{header_heading}</h1>
            <p>{header_description}</p>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));