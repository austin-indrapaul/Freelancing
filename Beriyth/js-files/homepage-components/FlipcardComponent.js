const data = [
    { id:1, img_src:"./resources/images/java-logo.png", technology:"Java", avg_salary:"$50,000 (US)"},
    { id:2, img_src:"./resources/images/javascript-logo.png", technology:"Javascript", avg_salary:"$70,000 (US)"},
    { id:3, img_src:"./resources/images/python-logo.png", technology:"Python", avg_salary:"$40,000 (US)"},
    { id:4, img_src:"./resources/images/datascience-logo.png", technology:"Datascience", avg_salary:"$90,000 (US)"},
    { id:5, img_src:"./resources/images/cloud-logo.png", technology:"Cloud", avg_salary:"$100,000 (US)"},
    { id:6, img_src:"./resources/images/ai-logo.png", technology:"A.I / M.L", avg_salary:"$100,000 (US)"},
    { id:7, img_src:"./resources/images/blockchain-logo.png", technology:"Blockchain", avg_salary:"$90,000 (US)"},
];

function Card(props){
    const desc = props.desc;
    return(
        <div className="flip-card m-3">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.img_src} alt="image"/>
                    <h2 className="h1">{props.technology}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>Average Salary</h2>
                    <p className="text-success">{props.avg_salary}</p>
                </div>
            </div>
        </div> 
    );
}

function FlipCardComponent(){
    return(
        <div className="mb-5">
            <h2 className="text-center text-lg-start">Technologies around you</h2>
            <hr/>
            <div className="row" style={{"justifyContent":"space-around"}}>
                {data.map(item => (
                    <Card key={item.id} img_src={item.img_src} technology={item.technology} avg_salary={item.avg_salary} />
                ))}
            </div>  
        </div> 
    );
}


ReactDOM.render(<FlipCardComponent />, document.getElementById("flip-cards"));
  