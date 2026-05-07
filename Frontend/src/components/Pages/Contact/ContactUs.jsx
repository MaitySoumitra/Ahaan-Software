import React from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import ContactBanner from "./ContactBanner";
import WorldMap from "./WorldMap";
import { createContact } from "../../../Api/api";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createContact(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ContactBanner />

      <div className="contact-modern-section">
        <div className="contact-modern-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-modern-left">
            <p className="modern-label">GET IN TOUCH</p>

            <h2 className="modern-heading">
              Seamless Communication, Global Impact.
            </h2>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaHome />
              </div>
              <div>
                <strong>Email</strong>
                <p>
                  <a
                    href="mailto:support@ahaansoftware.com"
                    className="modern-email-link"
                  >
                    support@ahaansoftware.com
                  </a>
                </p>
              </div>
            </div>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaPhoneVolume />
              </div>
              <div>
                <strong>Phone</strong>
                <p>
                  <a
                    href="tel:+1-740-748-4441"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1-740-748-4441
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/919830371143"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98303 71143
                  </a>
                </p>
              </div>
            </div>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong>Address</strong>
                <p>
                  <a
                    href="https://www.google.com/maps/dir//Ahaan+Software+Consulting,+Bengal+Eco+Intelligent+Park,+EM+Block,+Sector+V,+Bidhannagar,+Kolkata,+West+Bengal+700091/@22.577152,88.4309163,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a0275d239b8d5d3:0x3fca68895852d152!2m2!1d88.4274345!2d22.5752084?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-address-link"
                  >
                    Bengal Eco Intelligent Park, Sector V, Bidhannagar, Kolkata
                  </a>
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="modern-social">
              <a
                href="https://www.linkedin.com/company/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-modern-right">
            <h3 className="modern-form-title">Send us a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="modern-form">
              <div className="modern-row">
                <input type="text" placeholder="Name" {...register("name")} />
                <input
                  type="email"
                  placeholder="Email ID"
                  {...register("email")}
                />
              </div>

              <div className="modern-row">
                <input
                  type="tel"
                  placeholder="Phone no."
                  {...register("phone")}
                />
                <input
                  type="text"
                  placeholder="Website"
                  {...register("website")}
                />
              </div>

              <textarea
                rows="5"
                placeholder="Message"
                {...register("message")}
              />

              <button type="submit" className="modern-submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
      <WorldMap />
    </>
  );
};

export default ContactUs;
