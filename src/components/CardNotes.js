import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {  DeleteOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.status == 'Urgente'){
                return '1px solid red'
            }
            return '1px solid blue'
        }
    }
})


export default function CardNotes({ note, handleDelete }){

    const classes = useStyles(note)

    return( // passando props de Notes
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader 
                 action={
                    <IconButton onClick={()=> handleDelete(note.id) }>
                    <DeleteOutlined />
                  </IconButton>
                 }
                 title={note.title}
                 subheader={note.status}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}