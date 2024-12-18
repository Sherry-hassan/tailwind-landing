import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/style.css'
import groupImg from '../assets/images/Group.png'
import iconImg from '../assets/images/Icon.png'
import featureImg from '../assets/images/main.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import fbImg from '../assets/images/fb.png'
import inImg from '../assets/images/in.png'
import twitterImg from '../assets/images/twitter.png'
import utubeImg from '../assets/images/utube.png'
import instaImg from '../assets/images/Instagram.png'
import axios from "axios";
import useSubmitForm from './useSubmitForm';

const cardData = [
    {
        id: 1,
        img: card1,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 2,
        img: card2,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 3,
        img: card3,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        hasButton: true,
    },
];

const Landing = () => {
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    // const [userData, setUserData] = useState([]);
    // const [formData, setFormData] = useState({
    //     name: "",
    //     price: "",
    //     description: "",
    // });

    const handleToggle = () => setExpanded(!expanded);

    const handleShowModal = (type) => {
        setModalType(type);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:3001/api/users",
    //             formData
    //         );
    //         const newUser = response.data;
    //         setUserData((prev) => [...prev, newUser]);
    //         setFormData({ name: "", description: "", price: "" });
    //         setShowModal(false);

    //     } catch (error) {
    //         console.error("Error saving purchase:", error);
    //     }
    // };
    const {
        userData,
        formData,
        isLoading,
        error,
        setFormData,
        handleSubmit,
    } = useSubmitForm("http://localhost:3001/api/users", {
        name: "",
        description: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    return (
        <>
            <div>
                <Navbar expand="md" className="container flex justify-between items-center py-4" expanded={expanded}>
                    <Navbar.Brand href="#" className="font-bold ms-4">
                        Logo
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={handleToggle}
                        className="md:hidden p-2 me-4 border-none"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? "block" : "hidden"} md:flex space-x-6`}>
                        <Nav className="me-auto xl:ms-80 lg:ms-56 md:ms-28">
                            <Nav.Link href="#" className="text-gray-700 hover:text-blue-500">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#" className="text-gray-700 hover:text-blue-500">
                                About
                            </Nav.Link>
                            <Nav.Link href="#" className="text-gray-700 hover:text-blue-500">
                                Contact
                            </Nav.Link>
                        </Nav>

                        <div className="flex ms-0 space-x-4">
                            <button
                                onClick={() => handleShowModal("purchase")}
                                className="hover:bg-blue-600 buy-now"
                            >
                                Purchase Item
                            </button>
                            <button
                                onClick={() => handleShowModal("login")}
                                className="hover:bg-gray-700 buy-now"
                            >
                                Login
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>


                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalType === "login" ? "Login" : "Purchase Item"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalType === "login" ? (
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                        className="px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        className="px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </Form.Group>
                            </Form>
                        ) : (
                            <form>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 mb-1"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter the item name..."
                                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-semibold text-gray-700 mb-1"
                                    >
                                        Price:
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name='price'
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="Enter the price..."
                                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-semibold text-gray-700 mb-1"
                                    >
                                        Description:
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        name='description'
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter the description..."
                                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                    />
                                </div>
                            </form>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        {modalType === "purchase" && (
                            <Button
                                variant="success"
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Confirm Purchase
                            </Button>
                        )}
                        <Button
                            variant="secondary"
                            onClick={handleCloseModal}
                            className="px-4 py-2"
                        >
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>




            <div className="container-fluid main-section">
                <div className="flex justify-center items-center">
                    <div className="lg:w-2/3 xl:w-2/3 md:w-full sm:w-full xs:w-full mt-5 hero-section">
                        <h1 className=" ">
                            Introduce Your Product
                            <br />
                            Quickly & Efficiently
                        </h1>
                        <p >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
                        </p>
                        <p >
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className="hero-button flex gap-3 mt-4">
                            <button className="purchase-btn ">
                                Purchase UI Kit
                            </button>
                            <button className="light-button ">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="xl:w-1/3 lg:w-1/3 md:w-full sm:w-full xs:w-full hidden md:block img-container">
                        <img src={groupImg} alt="Hero" className="img-fluid w-full h-auto hero-img" />
                    </div>
                </div>
            </div>

            <div className="container card-container   xl:flex lg:flex">
                <div className="features-section ">

                    <div className="features-text lg:w-2/3 xl:w-2/3 md:w-full sm:w-full xs:w-full ">
                        <h2 className=" mb-4  ">Light, Fast & Powerful</h2>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h6>
                    </div>

                    <div className="features-card lg:w-2/3 xl:w-2/3 md:w-full sm:w-full xs:w-full   xl:flex lg:flex   mt-5">
                        <div className="feature-card w-full xl:w-1/2 lg:w-1/2 md:w-full sm:w-full mb-4 xl:mr-3">
                            <img src={iconImg} alt="Featured Icon 1" className="mb-3" />
                            <h3>Title Goes Here</h3>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                        <div className="feature-card w-full xl:w-1/2 lg:w-1/2 md:w-full sm:w-full mb-4">
                            <img src={iconImg} alt="Feature Icon 2" className="mb-3" />
                            <h3>Title Goes Here</h3>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <div class="xl:w-96 lg:w-96 md:w-full sm:w-full w-full hidden lg:block feature-img">
                        <img src={featureImg} alt="Feature Img" />
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="info-container grid gap-4">
                    {cardData.map((card) => (
                        <div className="info-card w-full" key={card.id}>
                            <div className="card h-auto shadow-0 border-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">


                                    <div className="info-img mb-3 md:mb-0 flex justify-center items-center">
                                        <img
                                            src={card.img}
                                            alt={`Card ${card.id}`}
                                            className="card-img-top mx-auto md:ml-auto max-w-full h-auto"
                                        />
                                    </div>


                                    <div>
                                        <div className="card-body">
                                            <h2 className="card-title text-lg font-semibold">{card.title}</h2>
                                            <h6 className="card-description  ">{card.description}</h6>
                                            {card.hasButton && (
                                                <button className="button-primary hover:bg-blue-600">
                                                    Purchase Now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="pricing-container grid gap-8 mt-5 sm:mt-5">


                <div className="col-span-12 text-center">
                    <div className="pricing-text">
                        <h2 >A Price To Suit Everyone</h2>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </h6>
                    </div>
                </div>


                <div className="col-span-12 text-center">
                    <div className="pricing-design">
                        <h3>$40</h3>
                        <h5>UI Design Kit</h5>
                    </div>
                </div>


                <div className="col-span-12 text-center">
                    <div className="pricing-button">
                        <p>See, One price. Simple.</p>
                        <button className=" hover:bg-blue-600">
                            Purchase UI Kit
                        </button>
                    </div>
                </div>

            </div>


            <div className="footer-section bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="footer-container grid gap-8">


                        <div className="footer-wrapper text-center">
                            <p className="text-gray-600 text-lg">New Company</p>
                            <h2 className="text-3xl font-bold">Landing</h2>
                            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                                Purchase Now
                            </button>
                        </div>


                        <div className="footer-wrapper">

                            <div className="footer-wrapper-content text-center">
                                <ul className="list-none flex justify-center gap-8 text-gray-600">
                                    <li>
                                        <a href="#" className="hover:text-blue-500">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500">Contact</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="footer-icons-list flex justify-center mt-4 gap-4">
                                <a href="#" >
                                    <img src={fbImg} alt="fb-icon" />
                                </a>
                                <a href="#" >
                                    <img src={inImg} alt="in-icon" />
                                </a>
                                <a href="#" >
                                    <img src={twitterImg} alt="twitter-icon" />
                                </a>
                                <a href="#">
                                    <img src={utubeImg} alt="youtube-icon" />
                                </a>
                                <a href="#">
                                    <img src={instaImg} alt="instagram-icon" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Landing