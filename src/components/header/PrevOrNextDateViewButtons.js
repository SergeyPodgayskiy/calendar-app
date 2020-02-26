import React from 'react';
import Box from "@material-ui/core/Box";
import PreviousDateViewButton from "./prevOrNextDateViewButtons/PreviousDateViewButton";
import NextDateViewButton from "./prevOrNextDateViewButtons/NextDateViewButton";

const PrevOrNextDateViewButtons = () => {
    return (
        <Box>
            <PreviousDateViewButton/>
            <NextDateViewButton/>
        </Box>
    );
};

export default PrevOrNextDateViewButtons;