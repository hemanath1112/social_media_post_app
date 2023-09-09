import { useState } from "react";
import "./App.css";
import About from "./Componnets/About";
import Footer from "./Componnets/Footer";
import Header from "./Componnets/Header";
import Home from "./Componnets/Home";
import Missing from "./Componnets/Missing";
import Nav from "./Componnets/Nav";
import NewPost from "./Componnets/NewPost";
import PostPage from "./Componnets/PostPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPost] = useState([
    {
      id: 1,
      title: "My First post",
      datetime: "July 01, 2021 11:17:36 AM",
      discription: "Made a video about tes 01 result",
    },
    {
      id: 2,
      title: "My 2nd post",
      datetime: "July 11, 2021 1:17:36 AM",
      discription: "Made a video about tes 02 result",
    },
    {
      id: 3,
      title: "My 3nd post",
      datetime: "July 06, 2021 5:17:36 AM",
      discription: "Made a video about tes 03 result",
    },
    {
      id: 4,
      title: "My 4nd post",
      datetime: "July 21, 2021 7:17:36 AM",
      discription: "Made a video about tes 04 result",
    },
  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Home posts={posts} />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
