import React from "react";
import axios from "axios";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import config from "../Config/config";

export default function Contact() {
  function contact(e){
    e.preventDefault();
    var userName = document.getElementById("w3lName").value;
    var userEmail = document.getElementById("w3lSender").value;
    var phoneNumber = document.getElementById("w3lPhone").value;
    var subject = document.getElementById("w3lSubject").value;
    var message = document.getElementById("w3lMessage").value;

    var payload = {
      userName,
      userEmail,
      phoneNumber,
      subject,
      message
    }

    axios.post(`${config.apiLink}/contact`, payload).then(()=>{
      NotificationManager.success("Inquiry Sent!");
    }).catch((e)=>{
      NotificationManager.error("Something went wrong!");
      console.log(e);
    })
  }



  return (
    <div>
      <NotificationContainer/>
      <section className="w3l-contact-7 pt-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <p className="mb-4">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form onSubmit={contact}>
                  <div className="form-grid">
                    <div className="input-field">
                      <label> Your name</label>
                      <input
                        type="text"
                        name="userName"
                        id="w3lName"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div className="input-field">
                      <label> Your Email</label>
                      <input
                        type="email"
                        name="userEmail"
                        id="w3lSender"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div className="input-field">
                      <label> Your Phone</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="w3lPhone"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div className="input-field">
                      <label> Your Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="w3lSubject"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="input-field mt-4">
                    <label>Enter your message</label>
                    <textarea
                      name="message"
                      id="w3lMessage"
                      placeholder=""
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-style mt-3">
                    Submit
                  </button>
                  </form>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">Our Office Address</h5>
                    <p>
                      <span className="fa fa-map-marker"></span>The blog
                      business centre, 32, My Street,Kingston, New York
                      12401United States{" "}
                    </p>

                    <h5 className="mt-4 pt-lg-3">Phone informatiom</h5>
                    <p>
                      <span className="fa fa-mobile"></span>{" "}
                      <strong>Phone :</strong>
                      <a href="tel:+1(12) 366 411 4999"> (+1) 366 411 499</a>
                    </p>

                    <p>
                      <span className="fa fa-phone"></span>{" "}
                      <strong>Tel :</strong>
                      <a href="tel:+1(12) 366 411 4999"> (+1) 366 411 499</a>
                    </p>

                    <p>
                      {" "}
                      <span className="fa fa-envelope"></span>{" "}
                      <strong>Email :</strong>
                      <a href="mailto:mail@example.com"> mail@example.com</a>
                    </p>

                    <h5 className="mt-4 pt-lg-3 mb-3">
                      Feel free to contact us
                    </h5>
                    <p>
                      We want to provide you with a great experience which is
                      why we want to hear from you. .
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
              title="maps"
              frameborder="0"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
