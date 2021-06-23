export const Listado = (props) => {

    const { amigos, setAmigos, pintarAmigos } = props;

    return (
        <div className="col-12">
            <span>
                <p>{pintarAmigos}</p>
            </span>
        </div>
    );
};