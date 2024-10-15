// pages/api/testimonials.js

export default function handler(req, res) {
    const testimonialsData = [
      {
        description: 'HexaHome made finding a home so easy! I was able to browse listings with no hassle.',
        name: 'John Doe',
        image: '/images/reviewpf.png',
        rating: 5,
      },
      {
        description: 'I love the features and convenience. HexaHome has changed the way I search for properties!',
        name: 'Jane Smith',
        image: '/images/reviewpf.png',
        rating: 4,
      },
      {
        description: 'Amazing service! The platform is user-friendly and the customer support is top-notch.',
        name: 'Alex Johnson',
        image: '/images/reviewpf.png',
        rating: 5,
      },
      {
        description: 'Best experience I’ve had with real estate platforms.',
        name: 'Michael Lee',
        image: '/images/reviewpf.png',
        rating: 4,
      },
      {
        description: 'HexaHome is the most reliable service I’ve used for property rentals.',
        name: 'Sarah Kim',
        image: '/images/reviewpf.png',
        rating: 5,
      },
    ];
  
    res.status(200).json(testimonialsData);
  }
  