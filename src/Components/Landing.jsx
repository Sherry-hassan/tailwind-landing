import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Components/style.css'

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

        </>
    )
}

export default Landing