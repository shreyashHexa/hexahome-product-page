// pages/api/links.js
export default function handler(req, res) {
  const propertyOptions = [
    {
      id: "rent",
      list: ["Apartment in HSR Layout Noida","Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida","Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida","Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida", "Apartment in HSR Layout Noida"],
    },
    {
      id: "buy",
      list: ["Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore","Apartments in Whitfield City, Bangalore", "Apartments in Whitfield City, Bangalore", "Apartments in Whitfield City, Bangalore", "Apartments in Whitfield City, Bangalore"],
    },
    {
      id: "projects",
      list: ["New Projects in Noida","New Projects in Noida","New Projects in Noida","New Projects in Noida","New Projects in Noida","New Projects in Noida","New Projects in Noida","New Projects in Noida", "New Projects in Noida", "New Projects in Noida", "New Projects in Noida", "New Projects in Noida"],
    },
    {
      id: "plots",
      list: ["Plots available in Sector 150", "Plots available in Sector 150", "Plots available in Sector 150","Plots available in Sector 150","Plots available in Sector 150", "Plots available in Sector 150", "Plots available in Sector 150","Plots available in Sector 150", "Plots available in Sector 150", "Plots available in Sector 150", "Plots available in Sector 150", "Plots available in Sector 150"],
    },
    {
      id: "pg",
      list: ["PG Options in Noida", "PG Options in Noida", "PG Options in Noida","PG Options in Noida", "PG Options in Noida", "PG Options in Noida", "PG Options in Noida","PG Options in Noida", "PG Options in Noida", "PG Options in Noida", "PG Options in Noida", "PG Options in Noida"],
    },
    {
      id: "co-living",
      list: ["Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida","Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida","Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida", "Co-Living Spaces in Noida"],
    },
  ];

  res.status(200).json(propertyOptions);
}
