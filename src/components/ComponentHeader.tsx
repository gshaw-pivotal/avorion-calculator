import React from "react";

const ComponentHeader: React.FC = () => {
    return (
        <div className="App-Header">
            <div>
                <div className="App-Header-Sub-Text">
                    <span>Listing of components and goods and where they can be sourced from.</span>
                </div>
                <div className="App-Header-Sub-Text">
                    <span>It is important to know that while a given component 'can' be bought at particular type of station, not all instances of said station type will actually stock the given component.</span><br/>
                </div>
                <div className="App-Header-Sub-Text">
                    <span>Thus while Steel Tubes can be bought from a Turret Factory, not all Turret Factories will actually stock said Steel Tube.</span><br/>
                </div>
            </div>
            <hr className="Header-Line"/>
        </div>
    );
}

export default ComponentHeader;