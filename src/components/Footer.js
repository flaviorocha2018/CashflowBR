import React from "react";
import { makeStyles, createStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 500,
      maxWidth: '100%',
      flexDirection: "row", //change to row for horizontal layout
    },
    footer: {
      fontSize: 10,
      backgroundImage: "linear-gradient(to bottom right, #8c9d9b, #bdcdbf);"
    }
  })
);

export default function MediaControlCard() {
    const classes = useStyles();

        return(
            <>
             <div className={classes.footer}>
                <Typography>Footer Text</Typography>
            </div>
            </>
        );
}  