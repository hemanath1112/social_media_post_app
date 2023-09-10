import { useEffect, useState } from "react";
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
import { format } from "date-fns";

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
    }
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const filterPost = posts.filter((post) =>{
        const body = post.body || "";
        const title = post.title || "" ;
        return  body.toLowerCase().includes(search.toLowerCase()) ||
                    title.toLowerCase().includes(search.toLowerCase())
  });
    setSearchResult(filterPost.reverse());
  }, [posts, search]);

  const postSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, discription: postBody };
    const allPost = [...posts, newPost];
    setPost(allPost);
    setPostTitle("");
    setPostBody("");
  };
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route 
        path="/"
        element={
          <>
          <Header />
          <Nav search={search} setSearch={setSearch} />
          <Home posts={searchResult} />
          <Footer />

          </>
        }
        ></Route>
        <Route 
        path="/post"
        element={
          <>
          <Header />
          <Nav search={search} setSearch={setSearch} />
          <NewPost
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            postSubmit={postSubmit}/>
          <Footer />
          </>
        }
        ></Route>
        <Route
        path="/about"
        element={
          <>
           <Header />
          <Nav search={search} setSearch={setSearch} />
          <About />
          <Footer />
          </>
        }
        >

        </Route>
        </Routes>
      </Router>
      
      
      
      {/* <PostPage />
   
      <Missing /> */}
      
    </div>
  );
}

export default App;
