import React from 'react';

import Aux from '../../hoc/Wrapaux'
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
    return(
        <div>
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography variant="title" color="black">
                Zyppys
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;