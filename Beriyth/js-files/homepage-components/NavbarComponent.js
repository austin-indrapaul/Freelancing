

function NavbarComponent(){
    return (   
        <div className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="./homepage.html">
                    <img src="./resources/images/beriythinfotech.jpg"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<NavbarComponent />, document.getElementById("navbar"));

$("a[class^=\"nav-link\"]").click(function () {
    
    let target = $("button.navbar-toggler")
    let value =  $("button.navbar-toggler").attr("aria-expanded");
    if(value){
      target.addClass("collapsed");
      target.attr("aria-expanded","false");
      $("#navbarSupportedContent").removeClass("show");
    }
  });