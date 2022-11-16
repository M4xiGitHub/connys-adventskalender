import { Box, Grid, Button, Typography, Zoom } from "@mui/material";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Environment } from "@react-three/drei";
import Schleife from "./schleife.png";
import Present from "./Present";
import Photo1 from "./images/1.JPG";
const monthNames = [
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

export default function Main() {
    var datum = new Date();
    const [open, setOpen] = useState(false);
    const [ui, setUi] = useState(false);

    const icon = (
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
            width={{xs:"90vw",md:"50vw"}}
            borderRadius={4}
            zIndex={1000}
        >
            <Box
                m={2}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
            >
                <Box
                    sx={{ height: {xs: "50vh", md:"50vh"},  objectFit:"cover"}}
                    component="img"
                    alt="Photo"
                    src={Photo1}
                    borderRadius={4}
                />
                <Box my={2} overflow={"scroll"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                    totam incidunt ipsum magni nobis aperiam magnam suscipit
                    reprehenderit distinctio ducimus facilis illo dicta doloribus,
                    neque alias, quis maxime esse. Commodi. icta commodi placeat
                    molestiae temporibus quidem veritatis hic officia, dolor,
                    accusantium delectus culpa quod a? Incidunt, obcaecati
                    exercitationem at illum quis, rerum pariatur architecto eaque
                    ipsum non vitae?
                </Box>
                <Button variant={"contained"} onClick={() => {setUi(false)}}>Ok</Button>
            </Box>
        </Box>
    );

    return (
        <Grid
            container
            width={"100%"}
            height={"100vh"}
            display={"flex"}
            sx={{ bgcolor: "#ba0127" }}
        >
            <Grid item xs={12}>
                <Box mt={5} mb={1} display={"flex"} justifyContent={"center"}>
                    <Typography
                        fontFamily={"Mountains of Christmas"}
                        fontWeight={"bold"}
                        variant={"h5"}
                        color="white"
                    >
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
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    alt="Schleife"
                    display={"flex"}
                    justifyContent={"center"}
                    mb={6}
                >
                    <Typography
                        fontFamily={"Mountains of Christmas"}
                        fontWeight={"bold"}
                        variant={"h3"}
                        color="white"
                        sx={{ marginBottom: "10px" }}
                    >
                        {datum.getDate() + ". " + monthNames[datum.getMonth()]}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, -0.3, 4], fov: 50 }}
                >
                    <ambientLight intensity={0.2} />
                    <spotLight angle={0} penumbra={1} />
                    <Present setUi={setUi} open={open} />

                    <Environment preset="city" />
                </Canvas>
            </Grid>
            <Zoom style={{ transitionDuration: ui?"1s":"350ms" }} in={ui}>
                {icon}
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
                    }}
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <Typography variant="h6">Open</Typography>
                </Button>
            </Box>
        </Grid>
    );
}
