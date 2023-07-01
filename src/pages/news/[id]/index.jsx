import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import Link from "next/link";
import { IconArrowBigLeftLine, IconArrowBigRightLine, IconHeart, IconLeaf, IconShoppingBag } from "@tabler/icons-react";



const index = ({ data }) => {
  function createMarkup() {
    return { __html: data.editorText };
  }
  return (
    <div className="at">
      <Box>
        <Link href={"/news"}>
          <Button variant="subtle" mb={"lg"} color="blue" rightIcon={<IconArrowBigRightLine />}>Yangiliklarni ko'rish</Button>
        </Link>
      </Box>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={data.image.url} height={"auto"} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{data.text}</Text>
          <Text dangerouslySetInnerHTML={createMarkup(data.editorText)}></Text>
        </Group>

        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }}
        >
          <Link href={"/news"}>
            <Button
              size="lg"
              variant="outline"
              fullWidth
              color="blue"
              mt="md"
              radius="md"
              leftIcon={<IconArrowBigLeftLine />}
            >
              Ortga qaytish
            </Button>
          </Link>
        </Box>
      </Card>
    </div >
  );
};

export default index;

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://onside-sport.uz/api/news/${params.id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
