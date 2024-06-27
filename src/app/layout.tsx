import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Grid from "@mui/material/Grid";
import LeftColumn from "@/app/LeftColumn";
import Footer from "@/app/Footer";

export default function RootLayout(props: { children: React.ReactNode }) {
    return (<html lang="en">
        <body>
            <AppRouterCacheProvider options={{enableCssLayer: true}}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Grid container direction="column" spacing={0}>
                        <Grid container direction="column" spacing={0} justifyContent="center" alignItems="center">
                            <div>Header</div>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <LeftColumn/>
                                </Grid>
                                <Grid item xs={10} justifyContent="center" alignItems="center">
                                    <div>Dashboard
                                        {props.children}
                                    </div>
                                </Grid>
                                <Grid item xs>
                                    <div>Right column</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} direction="row">
                            <Footer/>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </body>
    </html>);
}
