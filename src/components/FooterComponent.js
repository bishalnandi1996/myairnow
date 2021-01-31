import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return(
            <div className="container" style={{position: "relative", bottom: "0", marginTop: "10px"}}>
                <div className="row" style={{borderTop: "1px solid #000000"}}>
                    <div className="col-sm-7" style={{marginTop: "10px"}}>
                        &copy; MyAirNow. All Rights Reserved
                    </div>
                    <div className="col-sm-4" style={{cursor: "pointer", marginTop: "10px"}} onClick={() => window.open('https://www.linkedin.com/in/bishalnandi1996/')}>
                        Developed and Maintained by <b>BISHAL</b>
                    </div>
                    <div className="col-sm-12" style={{fontSize: "smaller", marginTop: "10px"}}>
                        Data provided by <span style={{cursor: "pointer"}} onClick={() => window.open('https://data.gov.in/')}><b>Open Government Data (OGD)</b></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;