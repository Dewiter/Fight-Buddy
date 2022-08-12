import {
  Anchor,
  Card,
  Checkbox,
  createStyles,
  Textarea,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: "grid",
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
    gap: 0,
    justifyContent: "center",
  },
  title: {
    height: "100%",
  },
  form: {},
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
                <Link href="/">
                  <Anchor component="a">forgot password?</Anchor>
                </Link>
              </div>
            </Card.Section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default login;
