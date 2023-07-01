import React from 'react'
import { Footer, } from '@mantine/core'
import { createStyles, Anchor, Group, Text, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const data = [
    {
        id: 1,
        link: "#",
        label: "Contact"
    },
    {
        id: 2,
        link: "#",
        label: "Privacy"
    },
    {
        id: 3,
        link: "#",
        label: "Blog"
    },
    {
        id: 4,
        link: "#",
        label: "Store"
    },
    {
        id: 5,
        link: "#",
        label: "Careers"
    }

]

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
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
        <div >
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
        </div>
    )
}

export default AppFooter