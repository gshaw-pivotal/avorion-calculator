import {Box, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {COMPONENT_LIST} from "../data/Component";

export default function ComponentBody() {

    const dangerousText = (status: boolean) => {
        if (status) {
            return (
                <span color="yellow">Yes</span>
            );
        } else {
            return (
                <span>No</span>
            );
        }
    }

    const illegalText = (status: boolean) => {
        if (status) {
            return (
                <span color="red">Yes</span>
            );
        } else {
            return (
                <span>No</span>
            );
        }
    }

    return (
        <div>
            <Box sx={{border: 1}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Component</TableCell>
                                <TableCell>Sold By</TableCell>
                                <TableCell>Bought By</TableCell>
                                <TableCell>Dangerous</TableCell>
                                <TableCell>Illegal</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            COMPONENT_LIST.map((component) => (
                                <TableRow>
                                    <TableCell>{component.name}</TableCell>
                                    <TableCell>{component.soldBy.map((location) => (<p>{location}</p>))}</TableCell>
                                    <TableCell>{component.boughtBy.map((location) => (<p>{location}</p>))}</TableCell>
                                    <TableCell>{dangerousText(component.dangerous)}</TableCell>
                                    <TableCell>{illegalText(component.illegal)}</TableCell>
                                </TableRow>
                            ))
                        }
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}