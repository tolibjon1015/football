import React from 'react'
import { Navbar, Text } from "@mantine/core"

const AppNavbar = () => {
    return (
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>article</Text>
        </Navbar>
    )
}

export default AppNavbar