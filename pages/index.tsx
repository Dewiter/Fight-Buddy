import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  createStyles,
  keyframes,
  MantineProvider,
  Text,
  Title,
} from "@mantine/core";
import Document from "./_document";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BG from "../Assets/Images/Background/BG.png";

export const animate = keyframes({
  "0": { width: "0" },
  "70%, 90%": { width: "100%" },
});

export const background = BG;

const useStyles = createStyles((theme, _params, getRef) => ({
  title: {
    position: "relative",
    fontSize: "5vw",
    color: "#F5F5F0",
    WebkitTextStroke: ".1vw  #F5F5F0",
    textTransform: "uppercase",
    "&::before": {
      content: "attr(data-text)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "0%",
      height: "100%",
      color: "black",
      WebkitTextStroke: "0vw black",
      borderRight: ".3vw solid black",
      transitionProperty: "width",
      overflow: "hidden",
      animation: `${animate} 2s linear`,
    },
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  shapeBlur: {
    position: "absolute",
    borderRadius: "16px",
    backdropFilter: "blur(11px)",
    paddingRight: "10px",
    zIndex: 10,
  },
  shapeBackground: {
    backdropFilter: "blur(8px)",
    zIndex: 9,
    backgroundSize: "200px 200px, cover",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const [redirectSeconds, setRedirectSeconds] = useState<number>(2);
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (redirectSeconds === 0) {
      console.log("login");
      router.push("login");
      return;
    }

    setTimeout(() => {
      console.log(redirectSeconds);
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 2000);
  }, [redirectSeconds]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.shapeBlur}>
        <h2 className={classes.title} data-text="Welcome">
          Welcome
        </h2>
      </div>
      <Image src={BG} alt=".." className={classes.shapeBackground} />
    </div>
  );
};

export default Home;
