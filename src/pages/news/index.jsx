import {
  Grid,
  Card,
  Group,
  Image,
  Text,
  Badge,
  Button,
  Input,
  Box,
  Center,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

const index = ({ news }) => {
  const data = news.data
  console.log(data);
  const [value, setValue] = useState("");
  const SearchApi = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Box mb={"xl"}>
        <Input placeholder="Qidiruv" icon={<IconSearch />} onChange={(e) => SearchApi(e)} />
      </Box>

      <Grid justify="space-between">
        {data.filter((fill) => fill.text.toLowerCase().includes(value.toLowerCase())).map((item) => {
          return (
            <Grid.Col md={6} xl={3} key={item.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={item.image.url} height={200} alt="Norway" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item.text.slice(0, 30)}...</Text>
                </Group>

                <Link href={`/news/${item.id}`}>
                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Ko'rish
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://onside-sport.uz/api/news/");
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
}
