import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {  DeleteOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MuiCheckbox  from '../components/controls/MuiCheckbox';
import { Box } from '@mui/material';

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


export default function CardNotes({ note, handleDelete, props }){
    
     
    const classes = useStyles(note)

    return( // receiving props from Notes
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader 
                titleTypographyProps={{
                    fontSize: 16,
                  }}
                 action={
                    <IconButton onClick={()=> handleDelete(note.id) }>
                    <DeleteOutlined />
                  </IconButton>
                  
                 }
        
                 title={note.title}
                 subheader={note.status}

                />
                
                <CardContent>
                    <Typography variant="display2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
                 <Box ml={2}>
                <MuiCheckbox />
               
                 </Box>

            </Card>
        </div>
    )
}
// (e) => setChecked(e.target.checked)