import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type propType = {
    status: string;
};

export default function MuiLoading({ status }: propType) {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    let progressProps = {};
    let sxStyles = {};

    if (status === 'Completed') {
        progressProps = { value: 100, variant: 'determinate', color: 'success' };
        sxStyles = { '& .MuiLinearProgress-bar': { backgroundColor: '#92d145' } };
    } else if (status === 'Pending') {
        progressProps = { value: progress, valueBuffer: buffer, variant: 'buffer', color: 'primary' };
        sxStyles = { '& .MuiLinearProgress-bar': { backgroundColor: '#2793db' } };
    } else {
        progressProps = { value: 100, variant: 'determinate', color: 'error' };
    }

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress {...progressProps} sx={sxStyles} />
        </Box>
    );
}
