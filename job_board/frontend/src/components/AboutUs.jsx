import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="my-10 mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to Job Connect, your number one source for finding the best job opportunities and the most talented candidates. Our mission is to connect employers with top talent through a user-friendly and effective platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to simplify the job search process and help organizations build outstanding teams. We strive to offer a comprehensive job board that meets the needs of both job seekers and employers.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="mb-2">Integrity: We believe in transparency and honesty in all our interactions.</li>
          <li className="mb-2">Innovation: We continually improve our platform to better serve our users.</li>
          <li className="mb-2">Customer Focus: We are dedicated to providing excellent service and support.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Team</h2>
        <p className="text-lg">
          Our team is made up of passionate professionals dedicated to helping you succeed. From experienced developers to knowledgeable recruiters, we are here to support your career journey.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
