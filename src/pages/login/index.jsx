import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: "100vh",
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function index() {
  const { classes } = useStyles();
  const email = useRef(null);
  const password = useRef(null);
  const router = useRouter();

  const getSignIn = () => {
    setCookie("email", email.current.value);
    setCookie("password", password.current.value);
    router.reload();
  };

  useEffect(() => {
    if (getCookie("email") && getCookie("password")) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Hello User
        </Title>

        <TextInput
          label="Username"
          placeholder="Username"
          size="md"
          ref={email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          ref={password}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button onClick={getSignIn} variant="outline" fullWidth mt="xl" size="md">
          Login
        </Button>
      </Paper>
    </div>
  );
}

index.getLayout = function getLayout(page) {
  return <>{page}</>;
};
