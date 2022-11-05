
const CheckBox = ({sentCheckBoxValue}) => {

    //Función para captar el valor del checkbox y asignarle el valor al state 
    const checkboxHandler = (e) => {
        let aux = e.target.checked ? 1 : 0 ;
        //setCheckboxValue(aux)
        sentCheckBoxValue(aux)
        console.log(aux)
    }

    return (
        <div> 
            <input type="checkbox" onChange={checkboxHandler}/>
        </div>
    )
}

export default CheckBox