import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Door({ number, click, setClickedDay }) {
    function handleClick() {
        var date = new Date();
        console.log(date.getDate())
        if (number <= date.getDate() && date.getMonth() === 10) {
            setClickedDay(number);
            click(true);
        }
    }
    return (
        <Grid
            item
            xs={3}
            m={1}
            height="30vh"
            bgcolor="burlywood"
            sx={{ borderTopLeftRadius: 100, borderTopRightRadius: 100 }}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            onClick={() => handleClick()}
        >
            <Typography variant="Christmas" fontSize={80}>
                {number}
            </Typography>
        </Grid>
    );
}
