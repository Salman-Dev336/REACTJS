import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgccuNfuJMp37UWhdHsKpQB1clQvHYcL2paQ&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo:
        "https://www.shutterstock.com/image-vector/color-square-icon-tone-red-260nw-2176011705.jpg",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUW5Ek6IWyeN53c7nVYESmhlLWOhbZK201Q&s",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhjGtDVpCbI43esVmATVPezbYYFOwkYw5zw&s",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJP7X_crOPPYfdGyvHw8KhkxswWPubv8P4w&s",
      companyName: "Tesla",
      datePosted: "8 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "California, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYMSEJH72n_HL6ee0zey6l1-bOU6wW8yEmg&s",
      companyName: "IBM",
      datePosted: "12 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVZsNZU5G7L-wf9pF7DKQPFzZZaechvzNIg&s",
      companyName: "Oracle",
      datePosted: "6 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7ODyMoTeHIH_-BmUKpgKkfq-f9lwgf7kPg&s",
      companyName: "Intel",
      datePosted: "3 weeks ago",
      post: "Hardware Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Karachi, Pakistan",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (element, index) {
        return (
          <div key={index}>
            <Card
              key={index}
              company={element.companyName}
              logo={element.brandLogo}
              date={element.datePosted}
              position={element.post}
              tag1={element.tag1}
              tag2={element.tag2}
              salary={element.pay}
              location={element.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
