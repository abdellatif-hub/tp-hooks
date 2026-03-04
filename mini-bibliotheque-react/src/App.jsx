import { useState, useEffect } from "react"
import BookLike from "./components/BookLike"

function App() {
  const [livre, setLivre] = useState("Le Petit Prince")

  useEffect(() => {
    document.title = `Livre : ${livre}`
  }, [livre])


  return (
    <div>

      <h1>Ma bibliothèque en React</h1>

      <p>Livre sélectionné : {livre}</p>

      <button onClick={() => setLivre("Le Petit Prince")}>
        Livre 1
      </button>

      <button onClick={() => setLivre("Les Misérables")}>
        Livre 2
      </button>

      <button onClick={() => setLivre("Clean Code")}>
        Livre 3
      </button>

      <BookLike
        titre={livre}
        auteur="Auteur variable"
      />

    </div>
  )
}

export default App