import * as React from "react";
import Grid from "@mui/material/Grid";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";

export default function Footer() {
    return (
        <Grid container direction="column" spacing={0} justifyContent="center" alignItems="center">
            <Grid item>
                <ProTip/>
            </Grid>
            <Grid item>
                <Copyright/>
            </Grid>
        </Grid>
    )
}
