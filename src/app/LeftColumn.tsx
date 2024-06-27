import Link from "@mui/material/Link";
import NextLink from "next/link";
import * as React from "react";
import Grid from "@mui/material/Grid";

export default function LeftColumn() {
    return (
        <Grid container direction="column" spacing={2} alignItems="left" justifyContent="left" margin={5}>
            <Grid item>
                <Link href="/" color="secondary" component={NextLink}>Home</Link>
            </Grid>
            <Grid item>
                <Link href="/about" color="secondary" component={NextLink}>About</Link>
            </Grid>
            <Grid item>
                <Link href="/blogs" color="secondary" component={NextLink}>Blogs</Link>
            </Grid>
            <Grid item>
                <Link href="/blog" color="secondary" component={NextLink}>Blog</Link>
            </Grid>
            <Grid item>
                <Link href="/contact" color="secondary" component={NextLink}>Contact Us</Link>
            </Grid>
            <Grid item>
                <Link href="/donate" color="secondary" component={NextLink}>Donate</Link>
            </Grid>
            <Grid item>
                <Link href="/forums" color="secondary" component={NextLink}>Forums</Link>
            </Grid>
        </Grid>
    )
}
