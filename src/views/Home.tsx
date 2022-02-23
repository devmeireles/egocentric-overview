import React from "react";
import { Box } from "@mui/material";
import GameIntroduction from "../components/molecules/GameIntroduction";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../routes/routesEnum";


const Home: React.FC = (): JSX.Element => {
    const history = useNavigate()
    const [username, setUsername] = React.useState<string>('')

    const nextStep = () => history(`${RoutesEnum.PROFILE}/${username}`)

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <GameIntroduction
                username={username}
                setUsername={setUsername}
                onClick={() => nextStep()}
            />
        </Box >
    )
}

export default Home