import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import About from "./Componnets/About";
import Footer from "./Componnets/Footer";
import Header from "./Componnets/Header";
import Home from "./Componnets/Home";
import Missing from "./Componnets/Missing";
import Nav from "./Componnets/Nav";
import NewPost from "./Componnets/NewPost";
import PostPage from "./Componnets/PostPage";
import { format } from "date-fns";
import api from "./Api/posts"
import EditPost from "./Componnets/EditPost";


function App() {
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");


// api data resive
  useEffect(()=>{
    const fetchPost = async ()=>{
      try {
        const response = await api.get('/posts');
        setPost(response.data);
      }
      catch(err){
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        }
        else {
          console.log(`Error: ${err.massage}`);
        }
      }
    }
    fetchPost();
  },[])

// search post result
  useEffect(() => {
    const filterPost =posts.filter((post) =>{
        const body = post.body || "";
        const title = post.title || "" ;
        return  body.toLowerCase().includes(search.toLowerCase()) ||
                    title.toLowerCase().includes(search.toLowerCase())
  });
    setSearchResult(filterPost.reverse());
  }, [posts, search]);

// new post submit
  const postSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, discription: postBody };
    try{    
    const response = await api.post('/posts', newPost)
    const allPost = [...posts, response.data];
    setPost(allPost);
    setPostTitle("");
    setPostBody("");
    }
    catch(err){
      console.log(`Error: ${err.massage}`);
    }
  };

// post edit
  const editPost = async(id)=>{
    try{
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const updatedPost = { id, title: editTitle, datetime, discription: editBody };
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPost(posts.map(post=> post.id===id ? {...response.data}: post));
      setEditTitle("");
      setEditBody("");
    }
    catch(err){
      console.log(`Error: ${err.massage}`);
    }
  }

  // post delet
  const deletedPost = async (id)=>{
    try{
      await api.delete(`posts/${id}`);
      const deletedItem = posts.filter(post=>post.id !== id)
      setPost(deletedItem);
    }
    catch(err){
      console.log(`Error: ${err.massage}`);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav search={search} setSearch={setSearch} />

          <Routes>
            <Route 
            path="/"
            element={
              <Home posts={searchResult} />
            }
            ></Route>
            <Route path="/post" >
              <Route index element={
                <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                postSubmit={postSubmit}/>
                } />
              <Route path=":id" element={<PostPage posts={posts} deletedPost={deletedPost}/>} />
            </Route>
            <Route path="/edit/:id" 
            element={<EditPost 
              posts={posts}
              editPost={editPost}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody ={editBody}
              setEditBody ={setEditBody}
            />} 
            />
            <Route
            path="/about"
            element={
              <About />
            }
            ></Route>
            <Route
            path="*" 
            element={
              <Missing /> 
            }
            ></Route>
          </Routes>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
