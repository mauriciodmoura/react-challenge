import React, { useState } from 'react';
import './breakifyStyles.css';


const Breakify = () => {
  const [input, setInput] = useState({ firstName: '', lastName: '' });
  const [highlightedName, setHighlightedName] = useState({ firstName: '', lastName: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const breakifyName = (input) => {
    const breakify = (name) => {
      const firstPart = name.substring(0, 2);
      const rest = name.substring(2);
      return `<span class="name"><span class="element">${firstPart}</span>${rest}</span>`;
    };

    setHighlightedName({
      firstName: breakify(input.firstName),
      lastName: breakify(input.lastName)
    });
  };


  return (
    <div className="breakify-container">
      <div>
        <div dangerouslySetInnerHTML={{ __html: highlightedName.firstName }} />
        <span className="name-separator"> </span>
        <div dangerouslySetInnerHTML={{ __html: highlightedName.lastName }} />
      </div>
        <div className="input-group">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={input.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={input.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      <button onClick={() => breakifyName(input)}>Breakify</button>
    </div>
  );
};

export default Breakify;
