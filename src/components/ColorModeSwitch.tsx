import { HStack, Switch, useColorMode, Text} from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
    
    const {toggleColorMode, colorMode} = useColorMode()

    return (
        
    <HStack>
        <Switch size='lg' colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>

    )
}

export default ColorModeSwitch;
