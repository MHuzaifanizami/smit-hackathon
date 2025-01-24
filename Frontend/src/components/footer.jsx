import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod nisi non felis aliquam, ut tincidunt purus mollis.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="text-sm hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H6C4.897 2 4 2.897 4 4v16c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-7 18V10h2l1-2h-3V6c0-.553.447-1 1-1h2V3h-3c-2.211 0-4 1.789-4 4v2H7v2h2v8h2z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 3c-1 .44-2.05.77-3.15.91A5.01 5.01 0 0022.46 2a5 5 0 00-4.91 5.91C13.56 7.06 7.96 4.69 5.42 1.42 4.23 3.6 3 6.2 3 9c0 3.03 1.56 5.72 3.88 7.27a5.01 5.01 0 01-2.27-.63v.06c0 4.15 2.96 7.64 6.88 8.41a9.97 9.97 0 01-4.49.17c1.26 3.95 4.91 6.82 9.24 6.88 11.1-.02 16.96-9.19 16.96-17.19 0-.27 0-.52-.03-.78A12.03 12.03 0 0023 3z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.2c3.08 0 3.45 0 4.67.07 1.06.06 1.93.26 2.61.64a4.92 4.92 0 011.72 1.73c.38.68.58 1.55.64 2.61.07 1.22.07 1.59.07 4.67s0 3.45-.07 4.67c-.06 1.06-.26 1.93-.64 2.61a4.92 4.92 0 01-1.73 1.72c-.68.38-1.55.58-2.61.64-1.22.07-1.59.07-4.67.07s-3.45 0-4.67-.07c-1.06-.06-1.93-.26-2.61-.64a4.92 4.92 0 01-1.72-1.73c-.38-.68-.58-1.55-.64-2.61-.07-1.22-.07-1.59-.07-4.67s0-3.45.07-4.67c.06-1.06.26-1.93.64-2.61a4.92 4.92 0 011.73-1.72c.68-.38 1.55-.58 2.61-.64 1.22-.07 1.59-.07 4.67-.07zM12 0c-3.59 0-4.02 0-5.43.07-1.47.07-2.78.42-3.91 1.15a6.18 6.18 0 00-2.2 2.2C.42 6.79 0 8.1 0 9.57c0 3.03 0 3.46.07 4.96.07 1.47.42 2.78 1.15 3.91a6.18 6.18 0 002.2 2.2c1.13.73 2.44 1.08 3.91 1.15 1.41.07 1.84.07 5.43.07 3.59 0 4.02 0 5.43-.07 1.47-.07 2.78-.42 3.91-1.15a6.18 6.18 0 002.2-2.2c.73-1.13 1.08-2.44 1.15-3.91.07-1.47.07-1.93.07-4.96 0-3.47 0-3.02-.07-4.96-.07-1.47-.42-2.78-1.15-3.91a6.18 6.18 0 00-2.2-2.2C18.78.42 17.47.07 16.03.07 14.62 0 14.19 0 12 0z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm">1234 Street Name, City, Country</p>
            <p className="text-sm">Email: contact@yourdomain.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
