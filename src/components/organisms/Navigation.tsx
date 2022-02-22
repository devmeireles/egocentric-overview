import React, { Dispatch } from "react";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { Brightness7TwoTone, Brightness4TwoTone } from "@mui/icons-material"
import SearchBar from "./SearchBar";

type Props = {
    onClick: () => void;
}

const Navigation: React.FC<Props> = ({ onClick }): JSX.Element => {
    const theme = useTheme();

    return (
        <AppBar position="relative">
            <Toolbar>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    <Box>
                        <Typography variant="h6" color="inherit" noWrap>
                            Egocentric Overview
                        </Typography>
                    </Box>

                    <Box>
                        <SearchBar />
                    </Box>

                    <Box>
                        <IconButton sx={{ ml: 1 }} onClick={() => onClick()} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7TwoTone /> : <Brightness4TwoTone />}
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation