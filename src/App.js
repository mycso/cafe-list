import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import GoogleMap from "./Components/GoogleMap";
import CafeList from './Pages/CafeList';
import ApplicationBar from "./Components/ApplicationBar";
import Footer from './Components/Footer';
import './App.css';

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Big Shoulders Text"',
            'Roboto',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h2: {
            fontWeight: 'bold',
            fontSize: '48px',
        }
    },
    palette: {
        primary: {
            main: '#502E2D',
        },
        secondary: {
            main: '#389C5B',
        },
    }
});

theme = responsiveFontSizes(theme);

export default function ButtonAppBar() {
    const [mapAddress, setMapAddress] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
            <div className="root">
                {/*Map Drawer*/}
                <SwipeableDrawer anchor="bottom" open={!!mapAddress} onClose={() => setMapAddress(null)} transitionDuration={400} onOpen={()=>{}}>
                    <GoogleMap address={mapAddress}/>
                </SwipeableDrawer>

                {/*Top Menu bar*/}
                <ApplicationBar />

                {/*Main content with cafe cards*/}
                <div className="grid">
                    <CafeList onOpenMap={(address) => setMapAddress(address)} />
                </div>

                {/*Footer content with contact and social buttons, etc */}
                <Footer />
            </div>
        </ThemeProvider>
    );
}
