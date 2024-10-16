// pages/api/blogpagedata.js

// Sample blog data
const blogs = [
    {
      id: 1,
      image: '/images/blog1.png', // Ensure the path is correct for Next.js
      title: 'The Future of Mobile App Development',
      description: 'Explore the upcoming trends in mobile app development and how they will impact the industry.',
    },
    {
      id: 2,
      image: '/images/blog2.png', // Ensure the path is correct for Next.js
      title: 'Top Mistakes to Avoid in App Development',
      description: 'Learn about the common pitfalls in mobile app development and how to avoid them for a successful launch.',
    },
    {
      id: 3,
      image: '/images/blog3.png', // Ensure the path is correct for Next.js
      title: 'Maximizing User Engagement in Your App',
      description: 'Discover strategies to enhance user engagement and retention in your mobile applications.',
    },
];

// API handler function
export default function handler(req, res) {
    // Respond with the blog data
    res.status(200).json(blogs);
}
