import React from 'react';

const ArrayRender = ({ item }) =>{
    const parsedNumber = parseFloat(item);

    return (
        <div>
        {isNaN(parsedNumber) ? (
          <input type="text" value={item} readOnly />
        ) : (
          <p>
            {parsedNumber.toFixed()} es {parsedNumber % 2 === 0 ? 'par' : 'impar'}
          </p>
        )}
      </div>
    );
}
export default ArrayRender