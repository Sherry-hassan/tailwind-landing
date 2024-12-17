import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
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

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }


    return (
        <>
            <Navbar
                expand={false}
                className="container mx-auto flex justify-between items-center w-full"
                expanded={expanded}
            >
                <Navbar.Brand href="#" className="font-bold ml-4">
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggle}
                    className="border-0 mr-4"
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                    <Nav className="flex flex-col md:flex-row md:space-x-4">
                        <Nav.Link href="#" className="ml-4 hover:text-blue-500">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="hover:text-blue-500">
                            About
                        </Nav.Link>
                        <Nav.Link href="#" className="hover:text-blue-500">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <div className="flex flex-wrap justify-start mt-4 md:mt-0">
                        <button
                            className=" buy-now      mr-3 hover:bg-blue-600"
                            onClick={handleShowModal}
                        >
                            Purchase Item
                        </button>
                        <button className="buy-now     hover:bg-gray-600">
                            Login
                        </button>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
                <div className="bg-white rounded-lg  w-full max-w-md">
                    <Modal.Header className="flex justify-between items-center p-4 border-b">
                        <h5 className="text-lg font-semibold">Purchase Description</h5>
                        <button
                            className="text-gray-600 hover:text-gray-900"
                            onClick={handleCloseModal}
                        >
                            ×
                        </button>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <h3 className="text-xl font-bold mb-4">Please Enter the Item Details</h3>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="itemName"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="itemName"
                                    placeholder="Enter the item name..."
                                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="itemPrice"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Price:
                                </label>
                                <input
                                    type="number"
                                    id="itemPrice"
                                    placeholder="Enter the price..."
                                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="itemDescription"
                                    className="block text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Description:
                                </label>
                                <input
                                    type="text"
                                    id="itemDescription"
                                    placeholder="Enter the description..."
                                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="flex justify-end space-x-2 p-4 border-t">
                        <button
                            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600"
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                            onClick={handleCloseModal}
                        >
                            Confirm Purchase
                        </button>
                    </Modal.Footer>
                </div>
            </Modal>


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