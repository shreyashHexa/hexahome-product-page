// pages/api/blogpagedata.js

// Sample blog data
const blogs = [
    {
      id: 1,
      image: '/images/blog1.webp', // Ensure the path is correct for Next.js
      title: 'How Much Does It Cost to Make A Mobile App In 2023: Detailed Cost Analysis',
      description: 'Did you know that on average, 1290 new mobile apps are launched every 24 hours on Apple App Store,',
    },
    {
      id: 2,
      image: '/images/blog2.webp', // Ensure the path is correct for Next.js
      title: 'Decoding Airbnb – How Does the Vacation Rental App Work?',
      description: 'Learn about the common pitfalls in mobile app development and how to avoid them for a successful launch.',
    },
    {
      id: 3,
      image: '/images/blog3.webp', // Ensure the path is correct for Next.js
      title: 'Maximizing User Engagement in Your App',
      description: 'Discover strategies to enhance user engagement and retention in your mobile applications.',
    },
];

// API handler function
export default function handler(req, res) {
    // Respond with the blog data
    res.status(200).json(blogs);
}
