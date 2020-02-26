import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from "@material-ui/core/Box";
import MenuListDateViewPicker from "./header/MenuListDateViewPicker";
import MainMenuButton from "./header/MainMenuButton";
import MainLogo from "./header/MainLogo";
import TodayButton from "./header/TodayButton";
import PrevAndNextDateViewButtons from "./header/PrevAndNextDateViewButtons";
import CurrentDateViewText from "./header/CurrentDateViewText";



const Header = () => {
  return (
    <header>
     <AppBar color="transparent" position="relative">
        <Toolbar style={{paddingTop: '8px', paddingBottom: '8px', justifyContent: 'space-between'}}>
            <Box display="flex" flex="1 0 auto" alignItems="center" style={{paddingRight: '30px'}}>
                <MainMenuButton/>
                <MainLogo/>
            </Box>
            <Box display="flex" flex="1 1 100%">
                <Box display="flex" flex="1 0 auto">
                   <TodayButton/>
                    <PrevAndNextDateViewButtons/>
                    <CurrentDateViewText/>
                </Box>
                <Box display="flex">
                    <MenuListDateViewPicker/>
                </Box>
            </Box>
        </Toolbar>
     </AppBar>
    </header>
  );
};

export default Header;
