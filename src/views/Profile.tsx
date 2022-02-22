import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import DevProfile from "../components/organisms/DevProfile";

type Props = {
}

const Profile: React.FC<Props> = ({ }): JSX.Element => {
    const { username } = useParams()

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            {username &&
                <DevProfile
                    username={username}
                />
            }
        </Box >
    )
}

export default Profile