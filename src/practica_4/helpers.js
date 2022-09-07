export const calcLogicGate = (input1, input2, logicGate) => {
        switch (logicGate) {
            case 'OR':
                return input1 || input2 ? 1 : 0;
            case 'AND':
                return input1 && input2 ? 1 : 0;
            case 'NOR':
                return !(input1 || input2) ? 1 : 0;
            case 'NAND':
                return !(input1 && input2) ? 1 : 0;
            default:
                return '';
        }
    }
