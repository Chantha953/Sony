import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import contact from "../assets/images/contact.png";
const ContactPage = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container">
      <div className="contact border border rounded-5">
        <div
          className="row align-items-center controlInput px-4"
          data-aos = "zoom-in"
        >
          <div className="col-12 col-md-6">
            <img src={contact} alt="photo" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <form>
              <div className="row">
                <div className="w-50">
                  <label htmlFor="firstName" className="form-label text-white">
                    First Name
                  </label>
                  <input
                    value={Fname}
                    type="text"
                    id="firstName"
                    className="bg-transparent text-white border-0"
                    required
                    autoComplete="off"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="w-50">
                  <label htmlFor="lastName" className="form-label text-white">
                    Last Name
                  </label>
                  <input
                    value={Lname}
                    type="text"
                    id="lastName"
                    className="bg-transparent text-white border-0"
                    required
                    autoComplete="off"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "4rem" }}>
                <div className="w-50">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    id="email"
                    className="bg-transparent text-white border-0"
                    required
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-50">
                  <label htmlFor="email" className="form-label text-white">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    type="text"
                    id="phoneNumber"
                    className="bg-transparent text-white border-0"
                    required
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-100 mt-5">
                <label htmlFor="message" className="form-label text-white">
                  Message
                </label>
                <input
                  value={message}
                  type="text"
                  className="bg-transparent text-white border-0 messages"
                  required
                  placeholder="Write your message..."
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="text-white iconContact">
                  <p>Follow our social media</p>
                  <div style={{ transform: "translate(-16px,-14px)" }}>
                    <button className="btn text-white">
                      <i class="p-2 border rounded-circle fs-5 fa-brands fa-facebook"></i>
                    </button>
                    <button className="btn text-white">
                      <i class="p-2 border rounded-circle fs-5 fa-brands fa-tiktok"></i>
                    </button>
                    <button className="btn text-white">
                      <i class="p-2 border rounded-circle fs-5 fa-brands fa-telegram"></i>
                    </button>
                  </div>
                </div>
                <div className="text-end mb-3">
                  <button
                    className="btn py-2 px-4 rounded-5 fw-medium text-white border btnSubmit border"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
