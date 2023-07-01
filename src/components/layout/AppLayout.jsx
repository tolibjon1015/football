import {
    AppShell,
    useMantineTheme
} from '@mantine/core';
import AppFooter from '../footer/AppFooter';
import AppAside from '../navbar/AppAside';
import AppHeader from '../navbar/AppHeader';
import AppNavbar from '../navbar/AppNavbar';

export default function AppLayout({ children }) {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbar={<AppNavbar />}
            aside={<AppAside />}
            footer={<AppFooter />}
            header={< AppHeader />}
        >
            {children}
        </AppShell >
    );
}

