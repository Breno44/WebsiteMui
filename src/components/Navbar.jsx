import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography>Breno Dev</Typography>
      </Toolbar>
    </AppBar>
  );
}
