import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, GridItem, Grid, Show, Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav nav" "aside main main"`,
                }}
            >
                <GridItem area="nav">
                    <NavBar></NavBar>
                </GridItem> 
                <Show above='lg'>
                    <GridItem area={'aside'} bg={'lightblue'}>
                        Aside
                    </GridItem>
                </Show>
                <GridItem area={'main'}>
                    <GameGrid/>
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
