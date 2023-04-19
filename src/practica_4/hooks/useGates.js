const useGates = () => {
  const getOr = (num1, num2) => {
    if (num1 === 0 && num2 === 0) {
      return 0;
    } else {
      return 1;
    }
  };

  const getAnd = (num1, num2) => {
    if (num1 === 1 && num2 === 1) {
      return 1;
    } else {
      return 0;
    }
  };

  const getNand = (num1, num2) => {
    if (num1 === 1 && num2 === 1) {
      return 0;
    } else {
      return 1;
    }
  };

  const getNor = (num1, num2) => {
    if (num1 === 0 && num2 === 0) {
      return 1;
    } else {
      return 0;
    }
  };

  const getXor = (num1, num2) => {
    if (num1 !== num2) {
      return 1;
    } else {
      return 0;
    }
  };


  return {getAnd, getNand,getNor,getOr,getXor}
};
