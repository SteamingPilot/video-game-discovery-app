import React, { useEffect, useState } from "react";

import { UnorderedList, ListItem, Text, SimpleGrid, Card, CardBody, Image, Heading } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                }} spacing={10}
            >
                {games.map((game) => (
               
                    <GameCard game={game}/>

                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
