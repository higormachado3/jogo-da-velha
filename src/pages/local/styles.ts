/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { darkTheme, styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: darkTheme.colors.body,
});

export const Header = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: 20,
  padding: "0 3rem",
});

export const Game = styled("div", {
  width: "100%",
  justifyContent: "center",
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gridGap: "1rem",

  ".square": {
    width: "100px",
    height: "100px",
    border: `1px solid ${darkTheme.colors.hiContrast}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    cursor: "default",
    color: darkTheme.colors.hiContrast,
    borderRadius: ".5rem",
    transition: ".3s",
  },

  ".null:hover": {
    backgroundColor: darkTheme.animations.buttonBackgroundHover,
    cursor: "pointer",
  },
});

export const Status = styled("div", {
  width: "100%",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "20px",
  fontWeight: "bold",
  color: darkTheme.colors.hiContrast,
});

export const Button = styled("button", {
  background: "none",
  border: `1px solid ${darkTheme.colors.hiContrast}`,
  color: darkTheme.colors.hiContrast,
  width: "200px",
  marginTop: "20px",
  padding: "10px",
  fontSize: "16px",
  borderRadius: ".5rem",
  transition: ".3s",
  cursor: "default",

  variants: {
    null: {
      false: {
        "&:hover": {
          background: darkTheme.animations.buttonBackgroundHover,
          cursor: "pointer",
        },
      },
    },
  },
});
