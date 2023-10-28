import React, { useState } from "react";
import { Transition } from "react-transition-group";
const About = () => {
  const [faqOpen, setFaqOpen] = useState(false);

  const faqQuestions = [
    {
      question: "What genres of books do you offer on your site?",
      answer:
        "Our site offers a wide range of book genres, including fiction, non-fiction, romance, science fiction, fantasy, mystery, self-help, and many more. You'll find something for every reading taste.",
    },
    {
      question: "Can I search for specific book titles on your site?",
      answer:
        "Yes, you can easily search for specific book titles using our search feature. Just enter the book title in the search bar, and you'll find the book you're looking for.",
    },
    {
      question: "How do I add a book to my favorites?",
      answer:
        "To add a book to your favorites, simply click on the 'Add to Favorites' button located on the book's details page. This will save the book to your personal favorites list for easy access.",
    },
    {
      question: "Is there a cart feature to purchase books on your site?",
      answer:
        "Yes, we have a shopping cart feature that allows you to add books you want to purchase. You can review your selected books in your cart and proceed to the checkout to complete your purchase.",
    },
    {
      question: "Are there any special discounts or promotions available?",
      answer:
        "We frequently offer special discounts and promotions on selected books. Keep an eye on our homepage and subscribe to our newsletter to stay updated on the latest deals and offers.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mt-5 mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our book project! We are passionate about books and strive
          to provide a wide range of book-related content for our users.
        </p>

        <div className="mt-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => setFaqOpen(!faqOpen)}
          >
            {faqOpen ? "Close FAQ" : "Open FAQ"}
          </button>

          <Transition in={faqOpen} timeout={300} unmountOnExit>
            {(state) => (
              <div
                className={`mt-4 ${
                  state === "entered" ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl font-semibold mt-4">
                  Frequently Asked Questions
                </h2>
                <ul>
                  {faqQuestions.map((faq, index) => (
                    <li key={index} className="mt-2">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => alert(faq.answer)}
                      >
                        {faq.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Transition>
          <h2 className="text-xl font-semibold mb-4 mt-5">Our Vision</h2>
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
          {/* <div className="bg-gray-100 p-2"> */}
          {/* <div className="max-w-screen-lg mx-auto"> */}

          {/* </div> */}
          {/* </div> */}
        </div>
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
