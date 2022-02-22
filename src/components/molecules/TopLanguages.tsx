import React from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from 'react-markdown'

type Props = {
    username: string
}

const TopLanguages: React.FC<Props> = ({ username }): JSX.Element => {
    const { mode } = useTheme().palette
    const theme = (mode === "dark") ? "&theme=radical" : ""
    const md = `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}${theme}&layout=compact)`

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Box>
    )
}

export default TopLanguages