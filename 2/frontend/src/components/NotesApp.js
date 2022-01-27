import NotesList from "./NotesList"
import NotesForm from "./NotesForm"
import { useEffect, useState } from "react"


const NotesApp = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        loadPosts()
    },[])

    const loadPosts = () => {
		fetch(process.env.REACT_APP_NOTES_URL)
		.then(response => response.json())
		.then(notes => {
			setNotes(notes)
		})
	}

    const deletePosts = id => {
        fetch(process.env.REACT_APP_NOTES_URL + id, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
		.then(response => response.json())
		.then(notes => {
            loadPosts()
		})
    }

    const createPosts = content => {
        fetch(process.env.REACT_APP_NOTES_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                content:content,
            })
        })
		.then(response => response.json())
		.then(notes => {
            loadPosts()
		})
    }

    if (!notes) return null;

	return (
        <div className="container">
        <NotesList 
            notes={notes} 
            loadPosts={loadPosts}
            deletePosts={deletePosts}
        />
        <NotesForm onAdd={createPosts} />
        </div>
	);
}


export default NotesApp;
