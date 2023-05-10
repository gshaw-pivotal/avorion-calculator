import React from "react";

const AppHeader: React.FC = () => {
    return (
        <div className="App-header">
            <span className={"App-header-primarytext"}>Avorion Factory Planner & Turret Calculator</span>
            <div>
                <div className="App-header-subtext">
                    <span>Select an option below to select either Factory chain planner or turret calculator.</span>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;