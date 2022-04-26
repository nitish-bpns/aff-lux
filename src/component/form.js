
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './../Images/logo.png';
import './../Styles/form.css';
import Home from './home';


function Form(stat) {

    // const { state } = this.props.location
    console.log(this.props.stat);


    return (


        <div className='main2' >

            <div className='cont2' >
                <center>
                    <img className='logo' src={img1} />
                </center>
            </div>



            <div className='form-back'>
                <Link to="/">
                    <span className='back-btn' > ← Back </span>
                </Link>
            </div>
            <br />
            <br />
            <div>
                <h2 className='heading3' >Please fill this form to send your request.</h2>
                <br />
                <p>image </p>



                <form className='form-input' >
                    <span className='i-head' >Name:</span>
                    <input
                        type="name"
                        placeholder="Name"
                        name="name"
                        className='i-fill'
                    ></input>
                    <br />
                    <span className='i-head' >Email:</span>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="i-fill"
                    ></input>
                    <br />
                    <span className='i-head' >Contact no:</span>
                    <input
                        type="number"
                        placeholder="Contact no."
                        name="Phone"
                        className="i-fill"
                    ></input>
                    <br />
                    <span className='i-head' >Age:</span>
                    <input
                        type="number"
                        placeholder="Age"
                        name="Age"
                        className="i-fill"
                    ></input>
                    <br />
                    <span className='i-head' >Address:</span>
                    <input
                        type="text"
                        hasIcon="right"
                        placeholder="Address"
                        name="Address"
                        className="i-fill"
                    ></input>
                    <br />

                    <center>
                        <input
                            name="submit"
                            placeholder="Submit"
                            className="sub-btn"
                            type="submit"
                            value="Submit"
                        />
                    </center>

                </form>


            </div>

        </div>
    )
}

export default Form;