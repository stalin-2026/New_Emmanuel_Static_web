
import React from 'react';

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  MapPinned,
  ShoppingBag,
  ShieldCheck,
  UsersRound,
  ShoppingCart,
  BadgeCheck,
  Headset,
  Heart,
} from 'lucide-react';

// Brand icons
import {
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact">

      {/* Section Header */}
      <h2 className="section-title">
        Contact <span>Us</span>
      </h2>

      <p className="contact-subtitle">
        We're here to help! Reach out to us for any queries,
        support, or business enquiries.
      </p>

      {/* Main Contact Cards */}
      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <div className="info-item">
            <h4>
              <MapPin className="icon" />
              Our Shop Address
            </h4>
            <p>
              23-9A2, NA, Nenchanthi Vilai, Anducode Post,
              Kanyakumari, Tamil Nadu - 629 168
            </p>
          </div>

          <div className="info-item">
            <h4>
              <Mail className="icon" />
              General Enquiries
            </h4>
            <p>stalinrobert83@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>
              <Phone className="icon" />
              Call Us
            </h4>
            <p>+91-9486012668</p>
          </div>

          <div className="info-item">
            <h4>
              <Clock className="icon" />
              Our Timing
            </h4>
            <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>

        </div>

        {/* Connect & Services */}
        <div className="contact-connect">

          <h3>Let's Connect</h3>

          <p className="connect-description">
            Find us on different platforms or get quick
            information below.
          </p>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://wa.me/919486012668"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="social-icon whatsapp">
                <MessageCircle />
              </span>
              <strong>WhatsApp</strong>
              <small>Chat with us</small>
            </a>

            <a
              href="#"
              className="social-item"
              aria-label="Instagram"
            >
              <span className="social-icon instagram">
                <FaInstagram />
              </span>
              <strong>Instagram</strong>
              <small>Follow us</small>
            </a>

            <a
              href="#"
              className="social-item"
              aria-label="Facebook"
            >
              <span className="social-icon facebook">
                <FaFacebookF />
              </span>
              <strong>Facebook</strong>
              <small>Like our page</small>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=23-9A2+Nenchanthi+Vilai+Anducode+Kanyakumari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="social-icon maps">
                <MapPinned />
              </span>
              <strong>Get Directions</strong>
              <small>Find us easily</small>
            </a>

          </div>

          <div className="connect-divider"></div>

          {/* Service Highlights */}
          <div className="service-highlights">

            <div className="service-item">
              <span className="service-icon">
                <ShoppingBag />
              </span>
              <h4>Genuine Products</h4>
              <p>Quality products from trusted brands</p>
            </div>

            <div className="service-item">
              <span className="service-icon">
                <ShieldCheck />
              </span>
              <h4>Trusted Service</h4>
              <p>Reliable service and customer care</p>
            </div>

            <div className="service-item">
              <span className="service-icon">
                <UsersRound />
              </span>
              <h4>Customer Support</h4>
              <p>We're always here to assist you</p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Benefits */}
      <div className="contact-benefits">

        <div className="benefit-item">
          <ShoppingCart className="benefit-icon" />
          <div>
            <h4>Wide Range of Products</h4>
            <p>All your needs under one roof</p>
          </div>
        </div>

        <div className="benefit-item">
          <BadgeCheck className="benefit-icon" />
          <div>
            <h4>Best Quality</h4>
            <p>Trusted brands and genuine products</p>
          </div>
        </div>

        <div className="benefit-item">
          <Headset className="benefit-icon" />
          <div>
            <h4>Friendly Support</h4>
            <p>Always ready to help you</p>
          </div>
        </div>

        <div className="benefit-item">
          <Heart className="benefit-icon" />
          <div>
            <h4>Our Commitment</h4>
            <p>Your satisfaction is our priority</p>
          </div>
        </div>

      </div>

    </section>
  );
}