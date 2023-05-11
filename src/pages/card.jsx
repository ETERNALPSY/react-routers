import { useParams, Link } from "react-router-dom"
import GetCharacters from "../services/api"
import { useEffect, useState } from "react"

const CharacterCard = () => {
   const params = useParams()
   const [character, setCharacter] = useState({})
   const PrintCharacter = async () => {
      const response = await GetCharacters(params.id)
      setCharacter(response)
   }

   useEffect(() => {
      PrintCharacter()
   }, [])

   return (
      <>
         <div className="card col-12 col-md- 8 mx-auto" data-aos="zoom-in" data-aos-duration="2000">
            <img src={character.image} classNme="card-img" />
            <div classNme="card-body">
               <h5 classNme="card-title fs-1 fw-bold">{character.name}</h5>
               <p classNme="card-text fs-6">{character.species}</p>
            </div>
            <Link className=' btn btn-secondary fs-5 col-4 m-auto mb-2' to="/">
               Volver
            </Link>
         </div>
      </>
   )
}

export default CharacterCard