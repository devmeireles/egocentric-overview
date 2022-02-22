import React from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown'

type Props = {
    username: string
}

const GitActivity: React.FC<Props> = ({ username }): JSX.Element => {
    const { mode } = useTheme().palette
    const theme = (mode === "dark") ? "&theme=rogue" : ""
    const md = `![GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=${username}${theme})`

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Box >
    )
}

export default GitActivity