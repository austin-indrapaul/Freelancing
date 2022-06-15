const email_id = "someone@gmail.com";
const contact_no = "+71616711";


function FooterComponent(){
    return (   
        <div id="footer-content p-3">

            <p style={{"textAlign":"center"}}>Thank you for visiting our website</p>

            <div id="contact-section">
                <p id="email" className="mx-3">
                    <a style={{ color: "yellow" }} href={"mailto:"+email_id}>
                        <i className="bi bi-envelope-fill"></i> Email Us
                    </a>
                </p>
                <p id="linkedIn" className="mx-3">
                    <a href={"tel:"+contact_no} style={{ color: "green" }} target="_blank">
                        <i className="bi bi-telephone-fill"></i> Call Us
                    </a>
                </p>
            </div>
        </div>
    );
}

ReactDOM.render(<FooterComponent />, document.getElementById("footer"));