const companies = [
    { id:1,  Content:"Infosys"},
    { id:2,  Content:"Cognizant"},
    { id:3,  Content:"Amazon"},
    { id:4,  Content:"Google"},
    { id:5,  Content:"Oracle"},
    { id:7,  Content:"Tesla"},
    { id:8,  Content:"Adobe"}
  ];

function Partner(props){
    return(
        <div className="partner mx-3 px-4 py-2">
            {props.content}
        </div>
    );
}

function PartnersComponent(){
    return (   
        <div>
            <h1 className="mb-3 text-center">Our Partners</h1>
            <div id="marquee">
                <div id="partner-list" className="p-3">
                    {companies.map(item => (
                        <Partner key={item.id} content={item.Content}/>
                    ))} 
                </div>  
            </div>
        </div>   
    );
}

ReactDOM.render(<PartnersComponent />, document.getElementById("partners"));