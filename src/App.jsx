import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import {
  History,
  Home,
  Liked,
  Login,
  Logout,
  Playlists,
  Signup,
  WatchLater,
  User,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
