import React from 'react';


const About = () => {
  return (
    <div className="container mt-2  p-3">
        <div className="text-center custom-footer">
            <ul>
                <li><a href="https://github.com/sagarchauhan005"><i className="fa fa-github" aria-hidden="true"/></a> </li>
                <li><a href="https://twitter.com/sagarchauhan005"><i className="fa fa-twitter" aria-hidden="true"/></a></li>
                <li><a href="https://www.linkedin.com/in/sagar-chauhan/"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                <li><a href="https://postscripts.medium.com/"><i className="fa fa-medium" aria-hidden="true"/></a></li>
            </ul>
        </div>
        <div className="text-center custom-footer mt-2">
            <ul>
                <li>covidleads.help@gmail.com</li>
            </ul>
        </div>
    </div>
  );
};


export default About;