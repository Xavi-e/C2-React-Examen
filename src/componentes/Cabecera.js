import { Boton } from "./Boton";

export const Cabecera = (props) => {

    const { numAmigos, showForm, setShowForm } = props;
    const habilitarFormulario = () => {
        setShowForm(true);
    };
    return (
        <header>
            <h1>Gestión de mis {numAmigos} amigos</h1>

            <Boton showform={showForm} texto="crear" habilitarFormulario={habilitarFormulario} />
        </header>
    );
};