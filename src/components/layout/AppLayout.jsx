import { useState } from 'react';
import {
    AppShell,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import AppNavbar from '../navbar/AppNavbar';
import AppAside from '../navbar/AppAside';
import AppHeader from '../navbar/AppHeader';
import AppFooter from '../footer/AppFooter';

export default function AppLayout({ children }) {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<AppNavbar />}
            aside={<AppAside />}
            footer={<AppFooter />}
            header={<AppHeader />}
        >
            {children}
        </AppShell>
    );
}