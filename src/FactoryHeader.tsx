import React from "react";

const FactoryHeader: React.FC = () => {
    return (
        <div className="App-header">
            <span className={"App-header-primarytext"}>Avorion Factory Chain Planner / Mapper</span>
            <div>
                <div className="App-header-subtext">
                    <span>From the 'Start Here' dropdown select the factory that will be the end of the production chain.</span>
                </div>
                <div className="App-header-subtext">
                    <span>Eg. its output is the product you want to end up with for sale or use elsewhere outside of this factory chain.</span>
                </div>
            </div>
            {/*<div className="normal-font">*/}
            {/*    <span>Start Here</span>*/}
            {/*    <label>Select final output factory</label>*/}
            {/*</div>*/}
        </div>
    );
}

export default FactoryHeader;