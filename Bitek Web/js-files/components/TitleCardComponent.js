
const data = [
    { id:1, img_src: "./resources/images/sample.jpg", title:"IT Services & Technology Consulting 1", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.", link_name:"Get Quote", link:"#" },
    { id:2, img_src: "./resources/images/sample.jpg", title:"IT Services & Technology Consulting 2", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.", link_name:"Ask expert", link:"#" }
];

function TitleCard(props){
    return(
        <div className="title-card row m-5 py-5">     
            <div className="content-section col-lg-6" style={{"display":"flex", "flex-direction":"column"}}>
                <h2 className="card-title text-center text-lg-start h1">{props.title}</h2>
                <p className="card-text">{props.desc}</p>
                <a className="btn btn-lg btn-primary" href={props.link}>{props.link_name}</a>
             </div>
             <div className="image-section col-lg-6">
                <img src={props.img_src} alt="image"/>
             </div>
        </div>
    );
}

function TitleCardComponent(){
    return(
        <div>
            {data.map(item => (
                <TitleCard key={item.id} img_src={item.img_src} title={item.title} desc={item.desc} link_name={item.link_name} link={item.link} />
            ))}
        </div>   
    );
}

ReactDOM.render(<TitleCardComponent />, document.getElementById("title-cards"));
  