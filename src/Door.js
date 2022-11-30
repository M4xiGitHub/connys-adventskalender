import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Door({ number, click, setClickedDay }) {
    var date = new Date();
    function handleClick() {
        if (number <= date.getDate() && date.getMonth() === 11) {
            setClickedDay(number);
            click(true);
        }
    }
    return (
        <Grid
            item
            xs={5}
            md={2}
            m={1}
            height="30vh"
            bgcolor={number < date.getDate() ? "#deb887" : "#cf974f"}
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
