import { Aside, Box, ScrollArea, Loader, Card, Group, Image, Button, rem, getStylesRef, Center, Text, createStyles } from '@mantine/core';
import Link from 'next/link';
import { IconArrowBigRightLine, IconEye, IconMessageCircle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        height: rem(280),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

        [`&:hover .${getStylesRef('image')}`]: {
            transform: 'scale(1.03)',
        },
    },

    image: {
        ...theme.fn.cover(),
        ref: getStylesRef('image'),
        backgroundSize: 'cover',
        transition: 'transform 500ms ease',
    },

    overlay: {
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        zIndex: 1,
    },

    title: {
        color: theme.white,
        marginBottom: rem(5),
    },

    bodyText: {
        color: theme.colors.dark[2],
        marginLeft: rem(7),
    },

    author: {
        color: theme.colors.dark[2],
    },
}));


const AppAsida = () => {
    const { classes, theme } = useStyles();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://onside-sport.uz/api/news/')
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
        <Aside sx={{ overflow: "auto" }} p="md" width={{ sm: 200, lg: 300 }}>
            <ScrollArea type="always" offsetScrollbars scrollbarSize={10}>
                <Text m={"0 0 20px 0"}>Tavsiya qilamiz</Text>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {data?.slice(0, 6).map((item) => {
                        return <Card
                            p="lg"
                            shadow="lg"
                            className={classes.card}
                            radius="md"
                            component="a"
                            href={`news/${item.id}`}
                        >
                            <div className={classes.image} style={{ backgroundImage: `url(${item.image.url})` }} />
                            <div className={classes.overlay} />

                            <div className={classes.content}>
                                <div>
                                    <Text size="lg" className={classes.title} weight={500}>{item.text.slice(0, 45)}...</Text>

                                    <Group position="apart" spacing="xs">
                                        <Text size="sm" className={classes.author}>
                                            {item.author.name}
                                        </Text>

                                        <Group spacing="lg">
                                            <Center>
                                                <IconEye size="1rem" stroke={1.5} color={theme.colors.dark[2]} />
                                                <Text size="sm" className={classes.bodyText}>
                                                    {item.views}
                                                </Text>
                                            </Center>
                                            <Center>
                                                <IconMessageCircle size="1rem" stroke={1.5} color={theme.colors.dark[2]} />
                                                <Text size="sm" className={classes.bodyText}>
                                                    {item.comments}
                                                </Text>
                                            </Center>
                                        </Group>
                                    </Group>
                                </div>
                            </div>
                        </Card>
                    })}
                </Box>
                <Link href="/news">
                    <Button m={"20px 0"} variant='outline' rightIcon={<IconArrowBigRightLine />} component='a' href='/news'>Ko'proq ko'rish</Button>
                </Link>
            </ScrollArea>
        </Aside >

    )
}

export default AppAsida