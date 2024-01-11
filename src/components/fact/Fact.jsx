import { createStyles, Paper, Text, ThemeIcon, rem, Box, Grid, SimpleGrid } from '@mantine/core';
import { IconBallFootball, IconColorSwatch } from '@tabler/icons-react';

const data = [
    {
        id: 1,
        title: "Биласизми?",
        description: "Бу йилги мавсум Ўзбекистон миллий чемпионатларининг 32-мавсуми. Ортда қолган мавсумлардаЎзбекистон Coca Cola Суперлигаси (олий лигаси)да жами 40 та жамоа иштирок этган. Улардан фақатгина 2 клуб, яъни, “Пахтакор” ва “Навбаҳор” миллий чемпионатларимизнинг мунтазам қатнашчиси ҳисобланади, яъни, ушбу жамоалар Суперлига(олий лига)нинг барча мавсумларида иштирок этган ҳамда бу йил мазкур клублар 32-мавсумини ўтказмоқда."
    },
    {
        id: 2,
        title: "Биласизми?",
        description: "Таъкидлаганимиздек, жорий мавсум Ўзбекистон миллий чемпионатларининг 32-мавсуми ҳисобланади ва ортда қолган 31 та мавсумда Ўзбекистон Coca Cola Суперлигаси (олий лигаси)да жами 40 та жамоа иштирок этган. Аммо улардан фақатгина 7 таси, яъни, “Пахтакор” (15 марта), “Нефтчи” ҳамда “Бунёдкор” (5 мартадан), “Локомотив” (3 марта), “Дўстлик” (2 марта), “Навбаҳор” ва МҲСК(1 мартадан) клубларига Ўзбекистон чемпионлигини қўлга киритиш насиб этган, холос. Ушбу жамоалардан МҲСК ҳамда “Дўстлик” йўқлик қаърига сингган. “Навбаҳор” олтин медалларни 1996 йили, марҳум таниқли мутахассис  Виктор Жалилов бош мураббийлик қилган пайтда қўлга киритганди."
    },
    {
        id: 3,
        title: "Биласизми?",
        description: "Хабарингиз бор, “Навбаҳор” ўтган мавсумда ўз тарихида илк бор вице-чемпионликни қўлга киритиб, кумуш медаль соҳибига айланди. Шу тариқа, жамоамиз Ўзбекистон миллий чемпионатлари тарихидаги барча медалларга эга чиққан клублар қаторидан жой олди.Бунгача “лочинлар” ҳисобида  1 та олтин ва 9 та бронза медаллари бор эди. “Навбаҳор” Ўзбекистон Суперлига(олий лигаси) тарихида барча медалларни қўлга киритган 6 - жамоа бўлди.Бунгача “Пахтакор”, “Нефтчи”, “Бунёдкор”, “Локомотив” ҳамда МҲСК клублари олтин, кумуш ва бронза медалларига эга чиққанди. Биз жорий мавсумда ҳам жамоамизга омад ёр бўлиб, совриндорлар сафидан жой олиши, медаллари сонини кўпайтиришига тилакдошмиз."
    }
]

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

export function Fact() {
    const { classes } = useStyles();
    return (
        <Box>
            <Text m={"40px 0 10px 0"}>Faktlar</Text>
            <SimpleGrid cols={1} mt="md">
                {data.map((item) => {
                    return <Paper key={item.id} withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: 'pink', to: 'orange' }}
                        >
                            <IconBallFootball size={rem(28)} stroke={1.5} />
                        </ThemeIcon>
                        <Text size="xl" weight={500} mt="md">
                            {item.title}
                        </Text>
                        <Text size="sm" mt="sm" color="dimmed">
                            {item.description}
                        </Text>
                    </Paper>
                })}
            </SimpleGrid>
        </Box>
    );
}