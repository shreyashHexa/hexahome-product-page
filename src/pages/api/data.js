// pages/api/aboutdata.js

export default function handler(req, res) {
  // Sample data to send as a response
  const data = {
    title: "About HexaHome",
    description: "HexaHome, your one-stop solution for all your real estate needs! Whether you're looking to buy, sell, rent, or lease properties, HexaHome makes the process seamless and efficient. Our platform connects buyers, sellers, renters, and agents in one place, offering a wide range of real estate options, including properties, projects, PGs, and shared flats. At HexaHome, we empower users by providing direct access to listings from owners, builders, and agents, giving you the flexibility to choose the best fit for your needs. With detailed property information, high-quality images, and an intuitive interface, you can explore, compare, and make informed decisions with ease.",
    imageUrl: "/images/aboutimg.png" // Include the image URL here
  };

  // Sending the JSON response with a 200 status code
  res.status(200).json(data);
}
