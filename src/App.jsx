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
  SingleVideo,
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
        <Route path="/user" element={<User />} />
        <Route path="/video/:_id" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
