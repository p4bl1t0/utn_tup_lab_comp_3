import React, { useState } from 'react';
const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleChange = (e) => {
      setIsChecked(e.target.checked);
    };
  
    return (
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          Checkbox
        </label>
      </div>
    );
  };

  export default Checkbox;