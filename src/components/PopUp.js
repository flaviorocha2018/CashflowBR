import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Controls from '../components/controls/Controls';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(1),
        position: 'absolute',
        top: theme.spacing(0)
    },
    dialogTitle: {
        paddingRight: '0px'
    }

}))

export default function Poup(props) {
const { title, children, openPopup, setOpenPopup } = props;
const classes = useStyles();



  return (
    <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}} >
        <DialogTitle className={classes.dialogTitle}>
            <div style={{display: 'flex'}}>
            <Typography variant="h6" component="div" style={{flexGrow: 1}}>
               {title}
            </Typography>
            <Controls.ActionButton
                color="secondary"
                onClick={()=>{setOpenPopup(false)}}>
                <CancelPresentationIcon fontSize="large" color="secondary"/>
            </Controls.ActionButton>
            </div>
        </DialogTitle>
        <DialogContent dividers>
           {children}
        </DialogContent>

    </Dialog>
  )
}
