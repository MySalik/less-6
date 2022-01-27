import { useState } from "react"

const NotesForm = ({onAdd}) => {
    const [content, setContent] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        onAdd(content)
    }

    const handleNameChange = e => {
        const {value} = e.target
        setContent(value)
    }

	return (
        <form onSubmit={handleSubmit}>
            <textarea 
                className="form-control" 
                rows="3"
                value={content}
                onChange={handleNameChange}
            />
            <button 
                className="material-icons circle send-icon"
                type="submit"
            >
                send
            </button>
        </form>
	);
}

export default NotesForm;
