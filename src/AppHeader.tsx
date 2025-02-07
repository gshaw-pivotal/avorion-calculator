import React from "react";

const AppHeader: React.FC = () => {
    return (
        <div className="App-Header">
            <span className={"App-Header-Primary-Text"}>Avorion Factory Planner & Turret Calculator</span>
            <div>
                <div className="App-Header-Sub-Text">
                    <span>Select an option below to select either Factory chain planner or turret calculator.</span>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;