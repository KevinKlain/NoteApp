import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";
import CreateArea from "./components/CreateArea/CreateArea";

const App = () => {

  const [notes, setNotes] = useState([])

  const addNote = newNote => {

    return setNotes( prevNotes => {
      return [ ...prevNotes, newNote];
    });

  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Navbar />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
