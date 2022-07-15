import React, { useEffect, useState } from "react";
import { Navbar, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../api/axios";

// import Diary from "../assets/diary-admin.png";
import About from "../pages/About";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Content from "../pages/Content";
import UploadBook from "../pages/UploadBook";

export const NavItem = () => {
  let itemNav = [
    {
      to: "/about",
      text: "What is Diary?",
      element: About,
    },
    {
      to: "/",
      text: "Beranda",
      element: Content,
    },
    {
      to: "/UploadBook",
      text: "Upload Karya",
      element: UploadBook,
    },
    {
      to: "/profile",
      text: "Profile",
      element: Profile,
    },
  ];
  return itemNav;
};
export default function NavBar(data) {
    // const [loading, setLoading] = useState ("");
    // const [posts, setPosts] = useState([]);
    // const [searchTitle, setSearchTitle] = useState("");

    // useEffect(() => {
    //   const loadPosts = async () => {
    //     setLoading(true);
    //     const response = await axios.get("/api/v1/books")
    //     setPosts(response.data);
    //     setLoading(false);
    //   }

    //   loadPosts();
    // }, []);
  return (
    <>
      <Navbar style={{ backgroundColor: "#FFFFFF" }}>
        <Navbar.Brand to="App.js">
          <img src="../assets/img/diary.png" alt="logo" width="150px" className="img-fluid m-3" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form>
            <div className="gh-search-forms">
              <i className="fa fa-search"></i>
              <input className="gh-input" type="text" placeholder="Search..." />
              {/* {loading ? (
                <h4>loading ...</h4>
              ) : (
                posts
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.title.toLowerCase().includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item) => <h5 key={item.id}>{item.title}</h5>)
              )} */}
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} className="text-center justify-content-center">
        <Nav className="me-align-center gh-nav">
          {NavItem().map((item) => {
            if (data.currPath.toLowerCase() === item.to.toLowerCase()) {
              return (
                <Link key={item.text} className="gh-navlink active" to={item.to}>
                  {item.text}
                </Link>
              );
            } else {
              return (
                <Link key={item.text} className="gh-navlink" to={item.to}>
                  {item.text}
                </Link>
              );
            }
          })}
        </Nav>
      </Navbar>
    </>
  );

}

{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
