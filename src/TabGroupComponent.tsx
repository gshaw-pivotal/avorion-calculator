import React, {useState} from 'react';
import {Tab, Tabs} from "@mui/material";
import FactoryHeader from "./factory/FactoryHeader";
import TurretHeader from "./turret/TurretHeader";
import TurretBody from "./turret/TurretBody";

const tabOptions: String[] = ['Factory Planner', 'Turret Calculator'];

function TabGroup() {

    const [tabSelected, setTabSelected] = useState(0);

    const tabChange = (event: React.SyntheticEvent, selectedTabIndex: number) => {
        setTabSelected(selectedTabIndex);
    };

    const renderTabPanel = () => {
        switch (tabSelected) {
            case 0:
                return (<div><FactoryHeader/></div>);
            case 1:
                return (
                    <div>
                        <TurretHeader/>
                        <TurretBody/>
                    </div>
                );
        }
    };

    return (
        <div className="Tab-Group">
            <Tabs
                textColor='inherit'
                onChange={tabChange}
            >
                {tabOptions.map(option => (<Tab label={option}/>))}
            </Tabs>
            {renderTabPanel()}
        </div>
    );
}

export default TabGroup;