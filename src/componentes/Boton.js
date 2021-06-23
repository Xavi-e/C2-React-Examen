export const Boton = (props) => {

    const { showForm, habilitarFormulario, texto } = props;
    const botonDesactivado = () => {
        if (showForm === true) {
            return botonDesactivado(false);
        } else {
            return botonDesactivado(true)
        }
    };
    return (
        <button className="btn btn-success" onClick={habilitarFormulario} disabled={botonDesactivado}>
            {texto}
        </button>
    );
};