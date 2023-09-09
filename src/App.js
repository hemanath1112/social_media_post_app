import "./App.css";
import About from "./Componnets/About";
import Footer from "./Componnets/Footer";
import Header from "./Componnets/Header";
import Home from "./Componnets/Home";
import Missing from "./Componnets/Missing";
import Nav from "./Componnets/Nav";
import NewPost from "./Componnets/NewPost";
import PostPage from "./Componnets/PostPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
