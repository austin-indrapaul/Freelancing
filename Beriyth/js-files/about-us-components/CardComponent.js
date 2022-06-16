const data = [
    { id:1, img_src: "./resources/images/sample.jpg", title:"Crypto firm Celsius pauses all cash flows", desc:"Bitcoin extended earlier declines after Celsius's announcement, falling more than 6 percent to as low as $24,888, an 18-month low. Ether, the world's second-largest cryptocurrency, dropped more" },
    { id:2, img_src: "./resources/images/sample (1).jpg", title:"OmniCard launches e-wallet", desc:"OmniCard users can withdraw cash from any ATM at their convenience with full security from frauds like card theft, and card cloning, as the withdrawal facility comes with high safety and dozens of predefined classes." },
    { id:3, img_src: "./resources/images/sample (3).jpg", title:"IT help !!", desc:"Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes." },
    { id:4, img_src: "./resources/images/sample (4).jpg", title:"security attack on the M1 chip", desc:"Apple’s M series chipsets have been gaining praise ever since their inception. In 2020, the Cupertino giant began transitioning to in-house chips for its Mac products and introduced the M1 chip." },
    { id:5, img_src: "./resources/images/sample (5).jpg", title:"Israeli university launches research institute for AI medicine", desc:"It aims to improve human healthcare on all levels, including hospitals, clinics, drug development, home treatment, and medical wearables, added the public research university in <strong>Haifa as quoted.</strong>" }
  ];

function Card(props){
    const desc = props.desc;
    return(
        <div className="col-12 col-lg-4 col-xl-4 col-xxl-3 card m-5 py-5">
            <img src={props.img_src} className="card-img-top w-50 mb-3" alt="image"/>
            <div className="card-body">
                <h5 className="card-title fw-bolder text-center text-lg-start">{props.title}</h5>
                <p  dangerouslySetInnerHTML={{ __html: desc }} className="card-text"></p>
             </div>
        </div>
    );
}

function CardComponent(){
    return(
        <div className="row" style={{"justifyContent":"space-around"}}>
            {data.map(item => (
                <Card key={item.id} img_src={item.img_src} title={item.title} desc={item.desc} />
            ))}
        </div>   
    );
}


ReactDOM.render(<CardComponent />, document.getElementById("cards"));
  