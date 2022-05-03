import { Route, Routes } from "react-router-dom";
import { Navbar, SideNav } from "./components";
import { History, Home, Liked, Playlists, WatchLater } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
