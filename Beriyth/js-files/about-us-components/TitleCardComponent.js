
const data = [
    { id:1, img_src: "./resources/images/sample (2).jpg", title:"IT Services & Technology Consulting", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.", link_name:"To know More >", link:"#" },
    { id:2, img_src: "./resources/images/sample (3).jpg", title:"Business Continuity and Disaster Recovery", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and <em>sizes thanks to a twelve column system,</em> six default responsive tiers, Sass variables and mixins, and dozens of predefined classes. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.", link_name:"", link:"" }
];

function TitleCard(props){

    let need_Link = true;
    
    if(props.link_name=="" || props.link==""){
        need_Link = false;    
    }

    const desc = props.desc

    return(
        <div className="title-card row m-5 py-5">     
            <div className="content-section col-lg-6" style={{"display":"flex", "flexDirection":"column"}}>
                <h2 className="text-center text-lg-start h1 mb-3">{props.title}</h2>
                <p  dangerouslySetInnerHTML={{ __html: desc }} ></p>
                {need_Link?( 
                <a className="btn btn-lg btn-primary" href={props.link}>{props.link_name}</a>)
                :""} 
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
  