import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateBox from "./CreateBox";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => [...prevNotes, note]);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        });
    }

    return <div>
        <Header />
        <CreateBox
            onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
            return (
            <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />
            )}
        )}
        <Footer />
    </div>
}

export default App;