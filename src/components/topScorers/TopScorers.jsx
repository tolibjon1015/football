import React, { useState, useEffect } from 'react'
import { Anchor, Box, Grid, Group, Loader, SimpleGrid, Table, Text } from '@mantine/core'

const TopScorers = () => {
    const api = "https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=207&APIkey=0c25abf2b0c0c6c45220dc9a04f7372d11f5b515625856f01b0292b7ac7b958e"
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data.result)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Loader size="xl" m={"0 auto"} />;
    if (!data) return <p>No profile data</p>


    const ths = (
        <tr>
            <th>O'rni</th>
            <th>Ism</th>
            <th>Gol</th>
            <th>Jamoa</th>
        </tr>
    );

    const rows = data.map((item) => (
        <tr key={item.player_key}>
            <td>{item.player_place}</td>
            <td>{item.player_name}</td>
            <td>{item.goals}</td>
            <td>{item.team_name}</td>
        </tr>
    ));

    return (
        <Box>
            <Grid justify="space-between" align="center">
                <Grid.Col span={3} >
                    <Text m={"20px auto"}>Eng ko'p gol urgan o'yinchilar</Text>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Anchor href="/top-scorers" >
                        Top 5 turnirlarni ko'rish
                    </Anchor>
                </Grid.Col>
            </Grid>

            <Table highlightOnHover withBorder horizontalSpacing="xl" captionSide="bottom">
                <caption>Top Scorers</caption>
                <thead>{ths}</thead>
                <tbody>{rows}</tbody>
            </Table>
        </Box>
    );

}

export default TopScorers