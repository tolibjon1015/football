import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
    Box,
} from '@mantine/core';


const data = [
    {
        id: 1,
        postedAt: "10 minut oldin",
        body: "Navbahor vs Buxoro , O'yinda favorit malum . Buxoro chuqur himoyalanib avtobus qo'yishga harakat qiladi bu albatta Navbahor jamoasiga halaqit qiladi . Navbahor bugun qiynalib bo'lsa ham g'alaba qozonsa kerak kichik hisobda .",
        author: {
            name: "Tolibjon jamoliddinov",
            image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
    },
    {
        id: 2,
        postedAt: "17 minut oldin",
        body: "Bunyodkor vs Turon , O'yinda favorit malum . Buxoro chuqur himoyalanib avtobus qo'yishga harakat qiladi bu albatta Navbahor jamoasiga halaqit qiladi . Navbahor bugun qiynalib bo'lsa ham g'alaba qozonsa kerak kichik hisobda .",
        author: {
            name: "Tolibjon jamoliddinov",
            image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
    },
    {
        id: 3,
        postedAt: "1 minut oldin",
        body: "Andijon vs Qizilqum , O'yinda favorit malum . Buxoro chuqur himoyalanib avtobus qo'yishga harakat qiladi bu albatta Navbahor jamoasiga halaqit qiladi . Navbahor bugun qiynalib bo'lsa ham g'alaba qozonsa kerak kichik hisobda .",
        author: {
            name: "Tolibjon jamoliddinov",
            image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
    },
    {
        id: 4,
        postedAt: "40 minut oldin",
        body: "Nasaf vs Neftchi , O'yinda favorit malum . Buxoro chuqur himoyalanib avtobus qo'yishga harakat qiladi bu albatta Navbahor jamoasiga halaqit qiladi . Navbahor bugun qiynalib bo'lsa ham g'alaba qozonsa kerak kichik hisobda .",
        author: {
            name: "Tolibjon jamoliddinov",
            image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
    }
]


const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    },

    body: {
        paddingLeft: rem(54),
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));

export default function Discus() {
    const { classes } = useStyles();
    return (
        <Box m={"40px 0"}>
            <Text m={"20px auto"}>Superliga haqida</Text>
            <Group sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: "20px", }}>
                {data.map((item) => {
                    return <Paper withBorder key={item.id} radius="md" className={classes.comment}>
                        <Group>
                            <Avatar src={item.author.image} alt={item.author.name} radius="xl" />
                            <div>
                                <Text fz="sm">{item.author.name}</Text>
                                <Text fz="xs" c="dimmed">
                                    {item.postedAt}
                                </Text>
                            </div>
                        </Group>
                        <TypographyStylesProvider className={classes.body}>
                            <div className={classes.content} dangerouslySetInnerHTML={{ __html: item.body }} />
                        </TypographyStylesProvider>
                    </Paper>
                })}
            </Group>
        </Box>
    );
}