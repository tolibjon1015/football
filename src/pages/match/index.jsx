import { Group, Image, createStyles, Text, Card, rem, Grid, Badge } from '@mantine/core';
import { IconBallFootball } from '@tabler/icons-react';
import React from 'react'

const useStyles = createStyles((theme) => ({

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "space-between"
    }

}));

const index = ({ team }) => {
    const { classes } = useStyles();
    let api = team.result.firstTeamResults
    console.log(api);
    return (
        <div>
            <Text m={"0 0 20px 0"}>O'yinlar</Text>
            <Grid >
                {api.map((item) => {
                    return <Grid.Col key={item.event_key} md={3} xl={4}>

                        <Card shadow="md" radius="md" className={classes.card} padding="xl">
                            <Group className={classes.grid}>
                                <IconBallFootball />
                                <Badge color="red" variant="filled">Yakunlangan</Badge>
                            </Group>
                            <Group>
                                <Text fz="lg" fw={500} mt="md">
                                    {item.event_home_team}
                                </Text>
                                <Text m={"15px 0 0 0"}>{item.event_final_result}</Text>
                                <Text fz="lg" fw={500} mt="sm">
                                    {item.event_away_team}
                                </Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                })}
            </Grid>
        </div>
    )
}

export default index

export async function getStaticProps() {
    const res = await fetch("https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=0c25abf2b0c0c6c45220dc9a04f7372d11f5b515625856f01b0292b7ac7b958e&firstTeamId=93&secondTeamId=4973");
    const team = await res.json();

    return {
        props: {
            team,
        },
    };
}
