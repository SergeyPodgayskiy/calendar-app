import React from 'react';
import Box from "@material-ui/core/Box";
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    selectedViewButton: {
        border: "1px solid #dadce0",
        textTransform: 'none',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

const MenuListDateViewPicker = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleListKeyDown =(event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Box>
            <Button
                variant="outlined"
                size="small"
                color="inherit"
                className={classes.selectedViewButton}
                ref={anchorRef}
                aria-controls={open ? 'menuListGrow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                endIcon={<ExpandMoreRoundedIcon />}
            >
                Selected Date View
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menuListGrow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Day</MenuItem>
                                    <MenuItem onClick={handleClose}>Week</MenuItem>
                                    <MenuItem onClick={handleClose}>Month</MenuItem>
                                    <MenuItem onClick={handleClose}>Year</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};

export default MenuListDateViewPicker;