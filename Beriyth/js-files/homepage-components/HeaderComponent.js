let header_heading = "Beriyth InfoTech"
let header_description = "Simple creating opportunities and enabling prosperity"

function HeaderComponent(){
    return (   
        <div id="header-content">
            <h1 className="mx-2">{header_heading}</h1>
            <p className="mx-2 mt-2">{header_description}</p>
        </div>   
    );
}

ReactDOM.render(<HeaderComponent />, document.getElementById("header"));