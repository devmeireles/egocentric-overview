import React from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown'

type Props = {
    username: string
}

const GitStatus: React.FC<Props> = ({ username }): JSX.Element => {
    const { mode } = useTheme().palette
    const theme = (mode === "dark") ? "&theme=radical" : ""
    const md = `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${username}${theme}&show_icons=true&count_private=true)`

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Box >
    )
}

export default GitStatus