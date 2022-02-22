import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from 'react-markdown'
import Loading from "../atoms/Loading";

type Props = {
    username: string
}


const GitMetrics: React.FC<Props> = ({ username }): JSX.Element => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const md = `![Metrics](https://metrics.lecoq.io/${username}?template=classic&languages=1&achievements=1&repositories=1&repositories=100&repositories.batch=100&repositories.forks=false&repositories.affiliations=owner&languages.limit=20&languages.threshold=0%25&languages.colors=github&languages.sections=most-used&languages.indepth=false&languages.analysis.timeout=15&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming&languages.recent.load=300&languages.recent.days=14&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0)`

    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000);
    }, [username]);

    if (loading) return <Loading />

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <ReactMarkdown>
                    {md}
                </ReactMarkdown>
            </Box>
        </Box >
    )
}

export default GitMetrics