import PropTypes from 'prop-types';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-6 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200' // Dark mode gradient and lighter text color
          : 'bg-gradient-to-r from-purple-800 to-blue-800 text-white' // Light mode gradient and white text color
      }`}
    >
      <div className="container mx-auto text-center">
        <p className="copyright">
          © 2024 Deepak Nekkanti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
