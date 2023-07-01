import React from 'react'
import { Aside } from '@mantine/core'
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, createStyles, getStylesRef, rem } from '@mantine/core';


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

const AppAside = ({ product }) => {
    console.log(product);
    const { classes, theme } = useStyles();
    return (
        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>saslom</Text>
        </Aside>
    )
}

export default AppAside

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const product = await res.json();
    return {
        props: {
            product,
        }
    };
};