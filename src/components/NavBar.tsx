import React from "react"
import { HStack, Text, Image, Container } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"

import logo from '../assets/logo.webp'




function NavBar() {
  return (
    <HStack justifyContent={"space-between"}>
        <HStack>
            <Image src={logo} boxSize={'60px'}/>
            <Text>Gamers</Text>
        </HStack>

        <ColorModeSwitch></ColorModeSwitch>
         
    </HStack>

  )
}

export default NavBar