import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown'

type Props = {
    username: string
}

const Trophies: React.FC<Props> = ({ username }): JSX.Element => {
    const { mode } = useTheme().palette
    const theme = (mode === "dark") ? "&theme=onedark" : ""

    const md = `![trophy](https://github-profile-trophy.vercel.app/?username=${username}${theme}&row=2&column=3)`

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Box >
    )
}

export default Trophies