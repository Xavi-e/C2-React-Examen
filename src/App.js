import { useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Listado } from "./componentes/Listado";


function App() {


  //APi amigos: 
  // GET http://localhost:3001/amigos/  <- devuelve el listado de amigos
  // DELETE http://localhost:3001/amigos/3 <- borra el amigo con id 3
  // PUT http://localhost:3001/amigos/3 <- modifica el amigo con id 3 (hay que mandarle el amigo modificado en el body)
  // POST http://localhost:3001/amigos/ -> crea un amigo (hay que mandarle el nuevo amigo en el body)
  const APIamigos = process.env.REACT_APP_APP_AMIGOS;
  const [numAmigos, setNumAmigos] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [amigos, setAmigos] = useState([...amigosAPI]);
  // const amigo = ([
  //   id: "",
  //   nombre : "",
  //   apellidos: "",
  //   valoracion: "",
  // ]);
  const sumarAmigos = () => {
    setNumAmigos(amigos.length);
  };
  const getAmigosApi = async () => {
    const resp = await fetch(APIamigos)
    const amigosAPI = await resp.json();
    sumarAmigos();
    setAmigos([amigosAPI]);
  };

  return (
    <>
      <Cabecera numAmigos={numAmigos} showForm={showForm} setShowForm={setShowForm} />
      <main className="container my-3">
        <div className="row">
          <Listado amigos={amigos} setAmigos={setAmigos} pintarAmigos={pintarAmigos} />
        </div>
      </main>
    </>
  )
}

export default App;
