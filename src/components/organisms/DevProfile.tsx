import React from "react";
import { Box, Grid } from "@mui/material";
import Trophies from "../molecules/Trophies";
import TopLanguages from "../molecules/TopLanguages";
import GitStatus from "../molecules/GitStatus";
import GitStreak from "../molecules/GitStreak";
import GitMetrics from "../molecules/GitMetrics";
import GitActivity from "../molecules/GitActivity";

type Props = {
    username: string
}

const DevProfile: React.FC<Props> = ({ username }): JSX.Element => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <GitStatus username={username} />
                    <GitStreak username={username} />
                    <TopLanguages username={username} />
                    <Trophies username={username} />
                </Grid>

                <Grid item xs={6}>
                    <GitMetrics username={username} />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <GitActivity username={username} />
            </Grid>
        </Box>
    )
}

export default DevProfile