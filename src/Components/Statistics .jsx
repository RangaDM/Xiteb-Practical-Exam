import React from 'react';
import '../Styles/Statistics.css';

const statistics = [
  { number: 890, description: 'Delivered packages' },
  { number: 137, description: 'Countries covered' },
  { number: 740, description: 'Tons of Goods' },
  { number: 600, description: 'Satisfied Clients' },
];

const Statistics = () => {
  return (
    <div className="statistics-container">
      {statistics.map((stat, index) => (
        <div className="stat-item" key={index} data-number={stat.number}>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-description">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
