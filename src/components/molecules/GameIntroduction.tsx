import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type Props = {
    username: string;
    setUsername: (e: string) => any;
    onClick: () => void;
}

const GameIntroduction: React.FC<Props> = ({ username, setUsername, onClick }): JSX.Element => {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box minHeight="75vh" minWidth="65%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                <Box>
                    <Typography variant="h4" color="inherit" noWrap>
                        Welcome to Egocentric Overview!
                    </Typography>

                    <Typography variant="h6" color="inherit" noWrap align="center" marginY={2}>
                        Please, enter your Github username:
                    </Typography>
                </Box>

                <Box minWidth="50%" marginY={4}>
                    <TextField
                        label="Github Username"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                </Box>

                {username &&
                    <Box minWidth="50%">
                        <Button
                            variant="outlined"
                            size="large"
                            style={{ width: "100%" }}
                            onClick={() => onClick()}
                        >
                            Continue
                        </Button>
                    </Box>
                }
            </Box>
        </Box >
    )
}

export default GameIntroduction