import React from 'react'
import Cards from './components/Cards'
import { div } from 'three/tsl';

const App = () => {

  const jobPosts = [
  {
    id: 1,
    companyLogo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Google",
    posted: "5 days ago",
    designation: "Senior UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA",
  },
  {
    id: 2,
    companyLogo: "https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png",
    companyName: "Airbnb",
    posted: "2 weeks ago",
    designation: "Product Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Berlin, Germany",
  },
  {
    id: 3,
    companyLogo: "https://s3-alpha.figma.com/hub/file/2734964093/9f5edc36-eb4d-414a-8447-10514f2bc224-cover.png",
    companyName: "Spotify",
    posted: "3 days ago",
    designation: "Junior UI Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Stockholm, Sweden",
  },
  {
    id: 4,
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yO7eBKdwllZI7yNp37T6tE-P61p0Q0mJbw&s",
    companyName: "Amazon",
    posted: "1 week ago",
    designation: "UX Researcher",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Seattle, USA",
  },
  {
    id: 5,
    companyLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    posted: "4 days ago",
    designation: "Interaction Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Toronto, Canada",
  },
  {
    id: 6,
    companyLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    posted: "6 days ago",
    designation: "Senior Product Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Los Angeles, USA",
  },
  {
    id: 7,
    companyLogo: "https://designcompass.org/wp-content/uploads/2025/05/adobe-brand-system-11.jpg",
    companyName: "Adobe",
    posted: "2 days ago",
    designation: "Visual Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "London, UK",
  },
  {
    id: 8,
    companyLogo: "https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png",
    companyName: "Figma",
    posted: "1 week ago",
    designation: "UI Designer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote, Worldwide",
  },
  {
    id: 9,
    companyLogo: "https://pngimg.com/d/meta_PNG12.png",
    companyName: "Meta",
    posted: "3 weeks ago",
    designation: "Design Systems Lead",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "New York, USA",
  },
  {
    id: 10,
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqQxDw0mFjHJ7s3aq9ENEJ_FU26Q-33k_kw&s",
    companyName: "Atlassian",
    posted: "5 days ago",
    designation: "UX Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Sydney, Australia",
  },
];

  return (
    <div className='parent'>
      {jobPosts.map((elem)=>{
        return <div key={elem.id}>
          <Cards logo={elem.companyLogo} company={elem.companyName} post={elem.posted} desig={elem.designation} tag1={elem.tag1} tag2={elem.tag2} salary={elem.pay} loc={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
