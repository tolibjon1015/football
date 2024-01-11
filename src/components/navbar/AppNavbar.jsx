import React, { useState, useEffect } from 'react'
import { Box, Navbar, ScrollArea, Loader } from "@mantine/core"
import { createStyles, Paper, Text, ThemeIcon, rem, Button } from '@mantine/core';
import { IconBallFootball, IconArrowBigRightLine } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: rem(6),
            backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
        },
    },
}));

const AppNavbar = () => {
    const { classes } = useStyles();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.tribuna.uz/v1/posts')
            .then((res) => res.json())
            .then((data) => {
                const pro = data.data
                setData(pro)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Loader size="xl" variant="bars" />;
    if (!data) return <p>No profile data</p>

    return (
        <Navbar p="md" sx={{ overflow: "auto" }} hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <ScrollArea type="always" offsetScrollbars scrollHideDelay={1500}>
                <Text m={"0 0 10px 0"}>Oxirgi yangiliklar</Text>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {data?.slice(7, 17).map((item) => {
                        return <Paper m={"5px 0"} withBorder key={item.id} component='a' href={`/news/${item.id}`} radius="md" className={classes.card}>
                            <ThemeIcon
                                size="xl"
                                radius="md"
                                variant="gradient"
                                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
                            >
                                <IconBallFootball />
                            </ThemeIcon>
                            <Text size="15px" weight={500} mt="md">
                                {item.title} ...
                            </Text>
                        </Paper>
                    })}
                </Box>
                <Link href="/news">
                    <Button m={"20px 0"} variant='outline' rightIcon={<IconArrowBigRightLine />} component='a' href='/news'>Ko'proq ko'rish</Button>
                </Link>
            </ScrollArea>
        </Navbar>
    )
}

export default AppNavbar