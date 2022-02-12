import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content:""
    });

    const [isFolded, setFolded]= useState(false);

function handleChange(event){
    const {name, value} = event.target;

    setNote((preValues) =>{
        return{
            ...preValues,
            [name]:value
        };
    });
}

function submitNote(event){
    props.onAdd(note);
    setNote({
        title: "",
        content:""
    });
    event.preventDefault();
}

function setView(){
    setFolded(true);
}

    return(
        <div>
            <form className="create-note">
                {(isFolded && <input 
                onChange={handleChange}
                value={note.title}
                name="title"
                placeholder="Title"/>)}
                <textarea 
                onClick={setView}
                onChange={handleChange}
                value={note.content} 
                name="content" 
                placeholder="Take a note" 
                rows= {isFolded?3:1}/>
                <Zoom in={isFolded}>
                <Fab 
                onClick={submitNote}>
                <AddIcon/>
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;