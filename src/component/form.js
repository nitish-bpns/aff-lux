
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../Images/logo.png';
import './../Styles/form.css';
import { useLocation } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import Modal from 'react-modal';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0px 15px 10px 15px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
// Modal.setAppElement('#yourAppElement');


function Form() {


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const location = useLocation()
    const { itemLink, itemDetail1, itemDetail2 } = location.state

    // const Contact = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        // itemLink: { itemLink },
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };


    // connect with firebase

    const submitData = async (event) => {
        event.preventDefault();
        const { userName, email, phone, age, address } = userData;

        if (userName && email && phone && age && address) {


            const res = fetch(
                "https://afflux-4f4ae-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName,
                        email,
                        phone,
                        age,
                        address,
                        itemLink,
                        itemDetail1,
                        itemDetail2

                    }),
                }
            );

            if (res) {
                setUserData({
                    userName: "",
                    email: "",
                    phone: "",
                    age: "",
                    address: "",
                    itemLink: { itemLink, itemDetail1, itemDetail2 },
                });
                openModal()
                    ;

            } else {
                alert(`Please fill the form.`);
            }
        } else {
            alert(`Please fill the form.`);
        }
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className='main2' >
            <ScrollToTop smooth />

            <div className='cont2' >
                <center>
                    <img className='logo' src={img1} alt="img" />

                </center>
            </div>



            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <Link to="/">
                        <button style={{ float: "right" }} onClick={closeModal}> X </button>
                    </Link>
                    <br />
                    <p>Your response is submitted! Our team will contact you soon.</p>

                    <Link to="/">Rent more items</Link>
                    <br />
                </Modal>
            </div>

            <div className='form-back'>
                <Link to="/">
                    <span className='back-btn' > ← Back </span>
                </Link>
            </div>

            <div>
                <h2 className='heading3' >Please fill this form to send your request.
                </h2>
                <br />


                <form method="POST" className='form-input' onSubmit={submitData} >
                    <center>
                        <div>
                            <img className='item-image-form' alt='product'
                                src={itemLink} />
                        </div>
                        <div className='item-details'>
                            <span className='idetail1'>
                                {itemDetail1}
                            </span><br />
                            <span className="idetail2">
                                {itemDetail2}
                            </span>
                        </div>
                    </center>


                    <br />
                    <span className='i-head' >Name:</span>
                    <input
                        type="name"
                        placeholder="Name"
                        name="userName"
                        className='i-fill'
                        value={userData.userName}
                        onChange={postUserData}
                    ></input>
                    <br />
                    <span className='i-head' >Email:</span>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="i-fill"
                        value={userData.email}
                        onChange={postUserData}
                    ></input>
                    <br />
                    <span className='i-head' >Contact no:</span>
                    <input
                        type="number"
                        placeholder="Contact no."
                        name="phone"
                        className="i-fill"
                        value={userData.phone}
                        onChange={postUserData}
                    ></input>
                    <br />
                    <span className='i-head' >Age:</span>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        className="i-fill"
                        value={userData.age}
                        onChange={postUserData}
                    ></input>
                    <br />
                    <span className='i-head' >Address:</span>
                    <input
                        type="text"
                        hasIcon="right"
                        placeholder="Address"
                        name="address"
                        className="i-fill"
                        value={userData.address}
                        onChange={postUserData}
                    ></input>
                    <div
                        type="text"
                        className='itemLink'
                        placeholder={itemLink}
                        name={itemLink}
                        value={userData.itemLink}
                        onChange={[postUserData]}
                    ></div>
                    <div
                        type="text"
                        className='itemDetail1'
                        placeholder={itemDetail1}
                        name={itemDetail1}
                        value={userData.itemDetail1}
                        onChange={[postUserData]}
                    ></div>
                    <div
                        type="text"
                        className='itemDetail2'
                        placeholder={itemDetail2}
                        name={itemDetail2}
                        value={userData.itemDetail2}
                        onChange={[postUserData]}
                    ></div>
                    <br />

                    <center>
                        <button
                            name="submit"
                            placeholder="Submit"
                            className="sub-btn"
                            type='submit'
                            value="submit"
                        // onClick={submitData}
                        // onClick={openModal}
                        ><b>Submit</b></button>
                    </center>

                </form>

                <br />
                <br />


            </div>

        </div >
    )
}


export default Form;