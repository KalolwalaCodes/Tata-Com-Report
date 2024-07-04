import React, { useState } from 'react';
import './Performance.css'; // Make sure to adjust the path as needed
import { motion } from 'framer-motion';

const barsData = [
  { 
    id: 1, 
    title: 'Financial Performance', 
    subtitle: '@hed', 
    icon: "☀️", 
    image: './Homepage/perf1.png', 
    gradient: 'to right, #3d85c6, transparent', 
    callouts: [
      ["20,969" , "Revenue" , "(₹ in Crores)"], 
      ["17,181", "Data Revenue", "(₹ in Crores)"] ,
      ["4,230", "Reported EBITDA", "(₹ in Crores)"],
      ["20.2%", "Reported EBITDA \u000a Margin"],
      ["968", "Net Profit After \u000a Tax (PAT)", "(₹ in Crores)"] ,
      ["16.70", "Dividend per \u000a share"]
    ]
  },
  { 
    id: 2, 
    title: 'Operational Performance', 
    subtitle: '@lolaguti', 
    icon: "🌧️", 
    image: './Homepage/perf2.png', 
    gradient: 'to right, #e97725, transparent', 
    callouts: [
      ["79", "Net Promoter\u000aScore\u000a (NPS) "],
      ["3", "Number of Strategic Acquisitions in FY2024"],
      ["55.4%", "Increase in revenuefrom digital portfolio"],
      ["18", "Customers added to 5 Million Dollar Club"]
    ]
  },
  { 
    id: 3, 
    title: 'Sustainability Performance', 
    subtitle: '@quentindrphotography', 
    icon: "🌙", 
    image: './Homepage/perf3.png', 
    gradient: 'to right, #b3ba35, transparent', 
    callouts: [
      ["500", "Land covered in tree plantation","(In acres)"],
      ["14", "100% renewable energy-operated facilities"],
      ["20", "CSR projects"],
      ["7. 7", "Energy saved ", "(in million kWh)"],
      ["A-", "Energy saved ", "Rating achieved in CDP Climate CDP Supplier Engagement Rating"],
      ["9,82,471", "Energy saved ", "People benefitted through CSR initiatives"],
    ]
  }
];

const Performance = () => {
  const [activeBar, setActiveBar] = useState(1);

  return (
    <motion.div initial={{ scale:0.5, opacity: 0 }}
    whileInView={{scale:1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}  className="general-container my-10">
      {barsData.map(bar => (
        <React.Fragment key={bar.id}>
          <input
            className="radio"
            type="radio"
            name="card"
            id={`card-${bar.id}`}
            checked={activeBar === bar.id}
            onChange={() => setActiveBar(bar.id)}
          />
          <label
            className="content"
            htmlFor={`card-${bar.id}`}
            style={{
              backgroundImage: `linear-gradient(${bar.gradient}), url(${bar.image})`
            }}
          >
            <h3 className="card-title">
              {bar.title}
            </h3>
            {activeBar === bar.id && (
              <div className="callouts">
                <h4>Key Performance Indicators:</h4>
                <div className="callout-row">
                  {bar.callouts.map((callout, index) => (
                    <div key={index} className="callout">
                      <h3>{callout[0]}</h3>
                      <p>{callout[1]}</p>
                      <span>{callout[2]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </label>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Performance;
