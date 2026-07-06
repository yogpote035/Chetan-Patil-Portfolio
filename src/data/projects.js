import nirmalHealthCare from "../../Images/Projects/Nirmal Health Care.png";
import realEstateCrm from "../../Images/Projects/Real Estate CRM System.png";
import swamiCab from "../../Images/Projects/Swami Cab – Airport Taxi Booking App.png";

export const projectTabs = ["Software", "Web Sites", "Mobile App"];

export const projects = [
  {
    title: "Nirmal Health Care",
    year: "2025",
    category: "Web Sites",
    technologies: ["ReactJs", "NodeJs", "JavaScript"],
    descriptionTitle: "Nirmal Health Care Management System",
    description:
      "Developed a healthcare website and admin panel for managing appointments, patient enquiries, doctor information, and healthcare services through a centralized dashboard, improving operational efficiency and user experience.",
    image: nirmalHealthCare,
    background: "project-blue",
  },
  {
    title: "Swami Cab - Airport Taxi Booking App",
    year: "2025",
    category: "Mobile App",
    technologies: ["Figma", "UI", "UX"],
    descriptionTitle: "Swami Cab - Airport Taxi Booking App",
    description:
      "Built a mobile cab booking application for airport transfers, enabling users to schedule rides, manage bookings, view fare details, and track travel information through a user-friendly interface.",
    image: swamiCab,
    background: "project-brown",
  },
  {
    title: "Real Estate CRM System",
    year: "2026",
    category: "Software",
    technologies: [],
    features: [
      "Property Listing Management",
      "Lead & Customer Tracking",
      "Site Visit Scheduling",
      "Enquiry Management",
      "Sales Pipeline Monitoring",
    ],
    descriptionTitle: "Real Estate CRM System",
    description:
      "Built a CRM solution for real estate businesses to manage property listings, customer leads, site visits, and sales activities through a centralized and user-friendly dashboard.",
    image: realEstateCrm,
    background: "project-violet",
  },
];
