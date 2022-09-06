import './Note.css';


const Note = (props) => {

        const handleClick = () => props.onDelete(props.id);
        
    return(
        <div className='note'>
            <h2 className='note-title'>{props.title}</h2>
            <p className='note-content'>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;