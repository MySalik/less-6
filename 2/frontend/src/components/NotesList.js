const NoteDetail = ({note, onDelete}) => {
    return(
        <div className="col-6">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{note.content}</p>
                </div>
                <button 
                    className="material-icons circle close-icon"
                    onClick={()=>onDelete(note.id)}
                >
                    close
                </button>
            </div>
        </div>
    )
}


const NotesList = ({notes, loadPosts, deletePosts}) => {
	return (
		<div className="notes">
			<h2>
				Notes 
				<button 
					className="material-icons circle refresh-icon"
					onClick={loadPosts}
				>
					sync
				</button>
			</h2>
			<div className="mt-4 mb-4">
				{notes.length > 0
					? <div className="row">
						{notes.map((note)=>{
							return <NoteDetail key={note.id} note={note} onDelete={deletePosts}/>
						})}
					   </div>
					: <p>Записей не найдено</p>
				}
			</div>
		</div>
	);
}


export default NotesList;
