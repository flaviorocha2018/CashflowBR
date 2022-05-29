import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import CardNotes from '../components/CardNotes';


export default function Notes(){
    const [ notes, setNotes ] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, []);

const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
        method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id) ;
    setNotes(newNotes);
}

    return(
        <Container>
            <Grid container spacing={3}>
           {notes.map(note => (
               <Grid item key={note.id} xs={12} md={6} lg={4}>
                  <CardNotes note={ note } handleDelete={handleDelete}/>  {/*passing props note with element note */}
               </Grid>
           ))}
           </Grid>
        </Container>
    )
}