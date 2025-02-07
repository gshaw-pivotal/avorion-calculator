import React from "react";

const TurretHeader: React.FC = () => {
    return (
        <div className="App-Header">
            <div>
                <div className="App-Header-Sub-Text">
                    <span>Calculate the cost of producing a turret (or multiples of the same turret) from a turret factory.</span>
                </div>
                <div className="App-Header-Sub-Text">
                    <span>On the first row, enter the fabrication cost (what you have to pay at the turret factory to make the turret.</span><br/>
                </div>
                <div className="App-Header-Sub-Text">
                    <span>On the following rows, enter the name of the material, number of units required for a single turret and the expected purchase cost of one unit of that material.</span><br/>
                </div>
                <div className="App-Header-Sub-Text">
                    <span>The final row gives the complete cost to fabricate accounting for the fabrication fee and material costs.</span>
                </div>
            </div>
            <hr className="Header-Line"/>
        </div>
    );
}

export default TurretHeader;