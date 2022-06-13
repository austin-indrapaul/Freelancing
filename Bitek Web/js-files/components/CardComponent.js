const data = [
    { id:1, img_src: "./resources/images/sample.jpg", title:"IT help 1", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." },
    { id:2, img_src: "./resources/images/sample.jpg", title:"IT help 2", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." },
    { id:3, img_src: "./resources/images/sample.jpg", title:"IT help 3", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." },
    { id:4, img_src: "./resources/images/sample.jpg", title:"IT help 4", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." },
    { id:5, img_src: "./resources/images/sample.jpg", title:"IT help 5", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." }
  ];

function Card(props){
    return(
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-3 card m-5 py-5">
            <img src={props.img_src} className="card-img-top w-50" alt="image"/>
            <div className="card-body">
                <h5 className="card-title text-center text-lg-start">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
             </div>
        </div>
    );
}

function CardComponent(){
    return(
        <div className="row" style={{"justify-content":"space-around"}}>
            {data.map(item => (
                <Card key={item.id} img_src={item.img_src} title={item.title} desc={item.desc} />
            ))}
        </div>   
    );
}


ReactDOM.render(<CardComponent />, document.getElementById("cards"));
  