
// import UserRefrence from "./hooks/UserRefrence";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GetUsers from "./page/getUsersPage";
import UserCall from "./page/UserCall";
import InfinteScrolPage from "./page/InfinteScrolPage";
import Posts from "./page/Posts";
// import Scroll from "./InfiniteScroll/Scroll";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetUsers />} />
        <Route path="/user" element={<UserCall />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/user_scroll" element={<InfinteScrolPage/>} />
        <Route path="/about" element={<h1 className="p-10 text-xl">About Page</h1>} />
      </Routes>
    </Router>


       {/* <UserRefrence/>  */}
       {/* <Scroll/> */}
    </div>
  );
}

export default App;
