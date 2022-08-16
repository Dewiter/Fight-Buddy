import {
  Anchor,
  Card,
  Checkbox,
  createStyles,
  Textarea,
  Text,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: "grid",
    columnGap: 0,
  },
  art: {
    gridColumn: 1,
    background: "red",
    height: "100vh",
  },
  login: {
    gridColumn: 2,
    display: "grid",
    height: "100vh",
    justifyContent: "center",
  },
  title: {
    height: "100%",
  },
  form: {},

  signupLink:  {
    color: "blue"
  }
}));

const login: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.art}></div>
      <div className={classes.login}>
        <div>
          <Title className={classes.title} order={1}>
            Hello Again!
          </Title>
        </div>
        <div className={classes.form}>
          <Card>
            <Card.Section>
              <Textarea placeholder="email" label="email" />
              <Textarea placeholder="password" label="password" />
              <div>
                <Checkbox label="remember me" />
                <Link href="/signup">
                  <Anchor component="a">forgot password?</Anchor>
                </Link>
              </div>
            </Card.Section>
          </Card>
        </div>
        <div>
          <Text>Dont have an account? 
            <Link href="/signup">
              <a className={classes.signupLink}> Signup here!</a>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default login;
