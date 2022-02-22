import React from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown'

type Props = {
    username: string
}

const GitStreak: React.FC<Props> = ({ username }): JSX.Element => {
    const { mode } = useTheme().palette
    const theme = (mode === "dark") ? "&theme=radical" : ""
    const md = `![GitHub streak stats](https://github-readme-streak-stats.herokuapp.com/?user=${username}${theme})`

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Box >
    )
}

export default GitStreak