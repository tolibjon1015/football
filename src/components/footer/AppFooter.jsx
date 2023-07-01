import React from 'react'
import { Box, Footer, } from '@mantine/core'
import { createStyles, Anchor, Group, Text, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const data = [
    {
        id: 1,
        link: "/",
        label: "Home"
    },
    {
        id: 2,
        link: "/news",
        label: "Yangiliklar"
    },
    {
        id: 3,
        link: "/",
        label: "o'yinlar"
    },
    {
        id: 4,
        link: "/support",
        label: "Murojaat"
    }
]

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colors.blue}
            }`,
    },

    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        padding: `${theme.spacing.md} ${theme.spacing.md}`,
        borderTop: `${rem(1)} solid ${theme.colors.blue}
            }`,
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        margin: "0 30px",
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

const AppFooter = () => {
    const { classes } = useStyles();
    const items = data.map((link) => (
        <Anchor
            color="dimmed"
            key={link.id}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor >
    ));
    return (
        <Box bg={"white"} w={"100%"}>
            <div className={classes.inner}>
                <Text>Football</Text>

                <Group className={classes.links}>{items}</Group>

                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </Box>
    )
}

export default AppFooter