import EntradaValorEditable from "./EntradaValorEditable";

export default function Listado ({list, onDelete, onEditList}) {
    return (
        <>
            {
                list.map((item, index) => (
                    <div key={index}>
                        { !isNaN(Number(item))
                            ? <span>{item}: { (item % 2 === 0 ? 'Par' : 'Impar')} </span>
                            : <EntradaValorEditable 
                                value={item} onEdit={(newValue) => {
                                    onEditList(index, newValue)
                                }}
                            />
                        }
                        <button onClick={onDelete.bind(null, index)}>Borrar</button>
                    </div>
                ))
            }
        </>
    )
}