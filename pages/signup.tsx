import { Button, Card, createStyles, Textarea, Title, Text } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import type { user } from "./api/server/createUser"

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

  signIn: {
    color: "blue"
  }
}));


const signup: NextPage = () => {
  const { classes } = useStyles();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passConf, setPassConf] = useState<string>("");

  const createUser =  async () => {
    if (!email) console.log('no email passed')
    if (!pass) console.log('no password')
    if (pass !== passConf) console.log('pass does not match')

    const payload: user = {
      email: email,
      password: pass
    }

    const myHeaders = new Headers()
    const headers = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: {
        type: 'CreateUser',
        payload: payload
      }
    }

    const res = await fetch('/api/server/server', headers)
    


  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.art}></div>
      <div className={classes.login}>
        <div>
          <Title className={classes.title} order={1}>
            Welcome!
          </Title>
        </div>
        <div className={classes.form}>
          <Card>
            <Card.Section>
              <Textarea placeholder="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Textarea placeholder="password" label="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
              <Textarea
                placeholder="confirm password"
                label="confirm password"
                value={passConf} onChange={(e) => setPassConf(e.target.value)}
              />
            </Card.Section>
          </Card>
          <Button onClick={createUser}>Create Account</Button>
        </div>
        <div>
          <Text>Already have an account? <Link href="/login"><a className={classes.signIn}>Sign in here</a></Link></Text>
        </div>
      </div>
    </div>
  );
};

export default signup;
