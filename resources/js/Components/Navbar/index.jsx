import { useState, useEffect } from "react";
import "./Navbar.scss";
import { Logo, Person, Mode, LightMode } from "@/images";
import { Link } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import axios from "axios";
import LiveClockUpdate from "../Clock";
import { useApiQuery } from "@/hooks/useApi";
import Image from "../UI/Image";
import { useTheme } from "@/context/ThemeContext";

function Navbar({ userID, userName }) {
    // const [myStyle, setMyyStyle] = useState({
    //     color: "#fff",
    // });

    // var element = document.querySelector("body");
    // const toggleSwitch = () => {
    //     if (myStyle.color === "#fff") {
    //         element.classList.add("dark_theme");
    //         setMyyStyle({
    //             color: "#000",
    //         });
    //     } else {
    //         element.classList.remove("dark_theme");
    //         setMyyStyle({
    //             color: "#fff",
    //         });
    //     }
    // };

    const { theme, toggleTheme } = useTheme();
    const { data: images, isLoading: imagesLoader } = useApiQuery('images', "/get-images");

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark_theme" : "";
    }, [theme]);


    // useEffect(() => {
    //     const sectionTop = document.querySelector("#navbar");
    //     window.addEventListener("scroll", function () {
    //         if (window.scrollY >= 80) {
    //             sectionTop.classList.add("active_nav");
    //         } else {
    //             sectionTop.classList.remove("active_nav");
    //         }
    //     });
    // }, []);

    return (
        <>
            {/* <div
                className="container-fluid main-nav bg-custom-dark"
                id="navbar"
                style={myStyle}
            > */}
            <div
                className={`container-fluid main-nav bg-custom-dark ${theme === "dark" ? "dark_theme" : ""}`}
                id="navbar"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-4 col-md-3 d-flex align-items-center col-logo">
                            <Link href="/">
                                {/* src={`../${HeaderLogo}`} */}
                                <Image value={images?.logo_header} defaultSrc="https://dummyimage.com/148x35/000/f0b90b" />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Aratmak istediğin ogenin adini yaz."
                                    aria-label="Search"
                                />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-8 d-flex align-items-center justify-content-center col-right">
                            <div className="nav-right-col">
                                <div className="nav-acc-info">
                                    {/* <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
                                    {userID != null ? (
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <a
                                                    href="#!"
                                                    className="text-lg font-bold text-white no-underline"
                                                >
                                                    {userName}
                                                </a>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                {/* <Link
                                                    className="pl-2 m-1 text-black no-underline d-block"
                                                    href={route("dashboard")}
                                                >
                                                    Dashboard
                                                </Link> */}
                                                <a
                                                    href="/dashboard"
                                                    className="pl-2 m-1 text-black no-underline d-block"
                                                >
                                                    Dashboard
                                                </a>
                                                <Link
                                                    className="pl-2 m-1 text-black no-underline d-block"
                                                    method="post"
                                                    href={route("logout")}
                                                >
                                                    Logout
                                                </Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    ) : (
                                        <a href="/login">
                                            <img src={Person} alt="" />
                                        </a>
                                    )}
                                    {/* <!-- Modal --> */}
                                    <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="exampleModalLabel"
                                                    >
                                                        Please sign in
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="form-signin">
                                                        <div className="form-floating">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="floatingInput"
                                                            />
                                                            <label htmlFor="floatingInput">
                                                                Email address
                                                            </label>
                                                        </div>
                                                        <div className="form-floating">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="floatingPassword"
                                                            />
                                                            <label htmlFor="floatingPassword">
                                                                Password
                                                            </label>
                                                        </div>

                                                        <div className="mb-3 checkbox">
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    value="remember-me"
                                                                />{" "}
                                                                Remember me
                                                            </label>
                                                        </div>
                                                        <button
                                                            className="w-100 btn btn-lg btn-primary"
                                                            type="submit"
                                                        >
                                                            Sign in
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        // onClick={toggleSwitch}
                                        onClick={toggleTheme}
                                        className="dark-mode"
                                    >
                                        {/* <img
                                            src={
                                                myStyle.color === "#fff"
                                                    ? Mode
                                                    : LightMode
                                            }
                                            alt=""
                                        /> */}
                                        <img
                                            src={theme === "light" ? Mode : LightMode}
                                            alt={theme === "light" ? "Light Mode" : "Dark Mode"}
                                        />
                                    </button>
                                </div>
                                <span id="curr-time">
                                    {/* <span id="hrs">00</span>
                                    <span>:</span>
                                    <span id="min">00</span>
                                    <span>:</span>
                                    <span id="sec">00</span> */}
                                    <LiveClockUpdate showSeconds={true} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
