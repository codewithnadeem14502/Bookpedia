

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">About Our Library</h1>
        <p className="text-gray-700 mb-8">
          Welcome to our library website! We are dedicated to providing a wide
          range of books and resources for our community. Our mission is to
          promote reading and knowledge, making our library a hub for learning
          and discovery.
        </p>

        <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-8">
          We envision a world where everyone has access to quality books and
          educational resources. Our library is committed to fostering a love
          for reading and lifelong learning.
        </p>

        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <ul className="list-disc pl-5">
          <li>Extensive collection of books across various genres.</li>
          <li>Access to digital resources and e-books.</li>
          <li>Research and study areas for patrons.</li>
          <li>Regular events and book clubs for our community.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or would like to get in touch with us,
          please feel free to contact us at:
        </p>
        <p className="text-gray-700">
          Email: info@librarywebsite.com
          <br />
          Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default About;
