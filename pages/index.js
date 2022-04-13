import BusinessIcon from '@mui/icons-material/Business';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import Advantages from '../components/advantages';
import Home from '../components/home';
import Profile from '../components/profile';
import Sustainability from '../components/sustainability';

export default function Index() {
    const [tab, setTab] = useState('home');
    const displayButtonText = useMediaQuery('(min-width:900px)');
    const mapping = {
        home: <Home />,
        sustainability: <Sustainability />,
        profile: <Profile />,
        advantages: <Advantages />,
    };

    return (
        <>
            <Head>
                <title>BetterworkGmbH</title>
                <meta
                    name="description"
                    content="BetterWorkGmbH landing page"
                />
            </Head>

            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {displayButtonText ? 'BetterWorkGmbH' : 'BW'}
                    </Typography>
                    <Button
                        sx={{ mx: '.25em' }}
                        variant="outlined"
                        color={tab === 'home' ? 'primary' : 'inherit'}
                        onClick={() => setTab('home')}
                    >
                        {displayButtonText ? <>Home&nbsp;</> : ''}
                        <HomeIcon />
                    </Button>
                    <Button
                        sx={{ mx: '.25em' }}
                        variant="outlined"
                        color={tab === 'profile' ? 'primary' : 'inherit'}
                        onClick={() => setTab('profile')}
                    >
                        {displayButtonText ? <>Firmenprofil&nbsp;</> : ''}
                        <BusinessIcon />
                    </Button>
                    <Button
                        sx={{ mx: '.25em' }}
                        variant="outlined"
                        color={tab === 'sustainability' ? 'primary' : 'inherit'}
                        onClick={() => setTab('sustainability')}
                    >
                        {displayButtonText ? <>Nachhaltigkeit&nbsp;</> : ''}
                        <SpaIcon />
                    </Button>
                    <Button
                        sx={{ mx: '.25em' }}
                        variant="outlined"
                        color={tab === 'advantages' ? 'primary' : 'inherit'}
                        onClick={() => setTab('advantages')}
                    >
                        {displayButtonText ? <>Benefits&nbsp;</> : ''}
                        <CurrencyExchangeIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ marginY: '1em' }}>{mapping[tab]}</Container>
        </>
    );
}
