import React from "react";
import {Button, Stack} from "@mui/material";

// @ts-ignore
const TurretButtons = ({resetTurretMaterials, addNewTurretMaterial, removeLastTurretMaterial}) => {
    return (
        <>
            <div className="Turret-Buttons">
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        onClick={() => resetTurretMaterials()}
                    >
                        Reset
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => addNewTurretMaterial()}
                    >
                        Add (+)
                    </Button>
                    <Button
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