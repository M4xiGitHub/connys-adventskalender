import { Box, Grid, Button, Typography, Zoom } from "@mui/material";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { Environment } from "@react-three/drei";
import Door from "./Door";
import Schleife from "./schleife.png";
import Present from "./Present";
import Photo1 from "./images/1.JPG";
import Data from "./Popup.json";
const MONTHS = [
    "Jänner",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

const PHOTOS = [
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
    Photo1,
];

export default function Main() {
    var datum = new Date();
    const [open, setOpen] = useState(false);
    const [ui, setUi] = useState(false);
    const [boxClick, setBoxClick] = useState(false);
    const [clickedDay, setClickedDay] = useState(1);

    useEffect(() => {
        setOpen(false);
    }, [boxClick]);

    const popup = (
        <Box
            position={"absolute"}
            left={0}
            right={0}
            top={0}
            bottom={0}
            margin={"auto"}
            bgcolor={"#fff"}
            boxShadow={10}
            display={"flex"}
            justifyContent={"center"}
            width={{ xs: "90vw", md: "40vw" }}
            height={{ xs: "82vh", md: "80vh" }}
            borderRadius={4}
            zIndex={1000}
        >
            <Box
                m={2}
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                justifyContent={"space-between"}
            >
                <Box
                    sx={{
                        height: { xs: "50vh", md: "30vh" },
                        objectFit: "cover",
                    }}
                    component="img"
                    alt="Photo"
                    src={PHOTOS[clickedDay - 1]}
                    borderRadius={4}
                />
                <Box my={2} overflow={"scroll"}>
                    <Typography style={{ wordWrap: "break-word" }}>
                        {Data.data[clickedDay - 1].text}
                    </Typography>
                </Box>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        setUi(false);
                    }}
                >
                    Ok
                </Button>
            </Box>
        </Box>
    );

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box mb={5} onClick={() => setBoxClick(false)}>
                <Box mt={5} mb={1} display={"flex"} justifyContent={"center"}>
                    <Typography variant={"Christmas"} color="white">
                        Conny's Adventskalender
                    </Typography>
                </Box>
                <Box
                    sx={{
                        backgroundImage: `url(${Schleife})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: { xs: "100vw", md: "35vw" },
                        width: "100%",
                        height: { xs: "10vh", md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    alt="Schleife"
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Typography
                        fontFamily={"Mountains of Christmas"}
                        fontWeight={"bold"}
                        variant={"h3"}
                        color="white"
                        sx={{ marginBottom: "10px" }}
                    >
                        {datum.getDate() + ". " + MONTHS[datum.getMonth()]}
                    </Typography>
                </Box>
            </Box>
            <Box display={boxClick ? "none" : "block"} overflow={"scroll"}>
                <Grid
                    container={true}
                    justifyContent={"center"}
                    height={"60vh"}
                >
                    <Door
                        number={1}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={2}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={3}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={4}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={5}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={6}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={7}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={8}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={9}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={10}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={11}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={12}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={13}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={14}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={15}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={16}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={17}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={18}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={19}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={20}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={21}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={22}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={23}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                    <Door
                        number={24}
                        click={setBoxClick}
                        setClickedDay={setClickedDay}
                    />
                </Grid>
            </Box>
            <Box display={boxClick ? "block" : "none"} height={"60vh"}>
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, -0.3, 4], fov: 50 }}
                >
                    <ambientLight intensity={0.2} />
                    <spotLight angle={0} penumbra={1} />
                    <Present day={clickedDay} setUi={setUi} open={open} />
                    <Environment preset="city" />
                </Canvas>
                <Zoom
                    style={{ transitionDuration: ui ? "1s" : "350ms" }}
                    in={ui}
                >
                    {popup}
                </Zoom>

                <Box
                    position={"absolute"}
                    bottom={"2rem"}
                    width={"100vw"}
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Button
                        sx={{
                            padding: "1rem",
                            paddingX: "8rem",
                            borderRadius: "4rem",
                            color: "white",
                        }}
                        variant="contained"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <Typography variant="h6">{clickedDay} Öffnen</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
