const Input1 = ({sentInputValue}) => {

    //Función para captar el valor del input y asignarle el valor al state 
    const inputValueHandler = (e) => {
        let aux =  e.target.value == 1 ? 1 : 0 ;
        sentInputValue(aux);
    }

    return (
        <div>
            <input placeholder={Math.round(Math.random())} onChange={inputValueHandler}/>
        </div>
    )
}

export default Input1;