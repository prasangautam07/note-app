import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import EditNotePage from "./pages/EditNotePage";
import { toast } from "react-toastify";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterText, setFilterText] = useState();
  const handleFilterText = (val) => {
    setFilterText(val);
  };
  const filteredNotes =
    filterText == "BUSINESS"
      ? notes.filter((note) => note.category == "BUSINESS")
      : filterText == "PERSONAL"
      ? notes.filter((note) => note.category == "PERSONAL")
      : filterText == "IMPORTANT"
      ? notes.filter((note) => note.category == "IMPORTANT")
      : notes;

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://note-app-api-vwz4.onrender.com/notes")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchNotes = (searchQuery) => {
    setSearchText(searchQuery);
  };
  useEffect(() => {
    /*  if(searchText.length < 3) return; */
    axios
      .get(`https://note-app-api-vwz4.onrender.com/notes-search/?search=${searchText}`)
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [searchText]);

  const addNote = (data) => {
    axios
      .post("https://note-app-api-vwz4.onrender.com/notes/", data)
      .then((res) => {
        console.log(res.data);
        setNotes([...notes, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateNote = (data, slug) => {
    axios
      .put(`https://note-app-api-vwz4.onrender.com/notes/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        setNotes(notes.map((note) => (note.slug === slug ? res.data : note)));
        toast.success("Note Updated Suscessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteNote = (slug) => {
    axios
      .delete(`https://note-app-api-vwz4.onrender.com/notes/${slug}`)
      .then((res) => {
        console.log(res.data);
        setNotes(notes.filter((note) => note.slug !== slug));
        navigate("/");
        toast.success("Note Deleted Suscessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout searchNotes={searchNotes} />}>
          <Route
            index
            element={
              <HomePage
                notes={filteredNotes}
                handleFilterText={handleFilterText}
              />
            }
          />
          <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
          <Route
            path="/notes/:slug"
            element={<NoteDetailPage deleteNote={deleteNote} />}
          />
          <Route
            path="/notes/:slug/edit-note/:slug"
            element={<EditNotePage updateNote={updateNote} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
