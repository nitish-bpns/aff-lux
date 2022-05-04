
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../Images/logo.png';
import './../Styles/form.css';
import { useLocation } from 'react-router-dom'


function Form() {

    const location = useLocation()
    const { itemLink } = location.state

    // const Contact = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        itemLink: { itemLink },
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
        const { userName, email, phone, age, address, itemLink } = userData;

        if (userName && email && phone && age && address && itemLink) {


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
                    itemLink: { itemLink },
                });
                alert(`Query sent successfully! We will contact you soon.`);
            } else {
                alert(`Please fill the form.`);
            }
        } else {
            alert(`Please fill the form.`);
        }
    };


    return (

        <div className='main2' >

            <div className='cont2' >
                <center>
                    <img className='logo' src={img1} alt="img" />

                </center>
            </div>

            <div className='form-back'>
                <Link to="/">
                    <span className='back-btn' > ← Back </span>
                </Link>
            </div>

            <div>
                <h2 className='heading3' >Please fill this form to send your request.</h2>
                <br />

                <form method="POST" className='form-input'>
                    <center> <img className='item-image-form' alt='product'
                        src={itemLink} />
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
                    <br />

                    <center>
                        <button
                            name="submit"
                            placeholder="Submit"
                            className="sub-btn"
                            onClick={submitData}
                        >Submit</button>
                    </center>

                </form>
                <br />
                <br />


            </div>

        </div >
    )
}


export default Form;