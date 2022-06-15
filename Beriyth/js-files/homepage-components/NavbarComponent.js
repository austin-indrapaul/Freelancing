
const data = [
    { id:1, link_name:"Home", link:"#", active:true },
    { id:2, link_name:"About Us", link:"#", active:false }
];

function Link(props){
    const class_list = props.active ?"nav-link active":"nav-link";
    return(
        <li className="nav-item">
            <a className={class_list} href={props.link}>{props.link_name}</a>
        </li>
    );
}

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
                    {data.map(item => (
                        <Link key={item.id} link_name={item.link_name} link={item.link} active={item.active} />
                    ))}
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