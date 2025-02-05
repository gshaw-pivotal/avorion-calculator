import React from "react";
import {Button, Stack} from "@mui/material";

// @ts-ignore
const TurretButtons = ({resetTurretMaterials, addNewTurretMaterial, removeLastTurretMaterial}) => {
    return (
        <>
            <div className="Turret-Buttons-Row">
                <Stack direction="row" spacing={2}>
                    <Button className="Turret-Buttons"
                        variant="contained"
                        onClick={() => resetTurretMaterials()}
                    >
                        Reset
                    </Button>
                    <Button className="Turret-Buttons"
                        variant="contained"
                        onClick={() => addNewTurretMaterial()}
                    >
                        Add (+)
                    </Button>
                    <Button className="Turret-Buttons"
                        variant="contained"
                        onClick={() => removeLastTurretMaterial()}
                    >
                        Minus (-)
                    </Button>
                </Stack>
            </div>
        </>
    );
}

export default TurretButtons;