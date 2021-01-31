import React from 'react';

class HeaderComponent extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row" style={{borderBottom: "1px solid #000000", marginBottom: "10px"}}>
                    <div className="col-sm-12 text-center h1" style={{fontWeight: "bold", color: "#716ab3", textShadow: "-4px 4px 5px #606061"}}>
                        MyAirNow
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;