import { useParams, Link } from "react-router-dom"
import GetCharacters from "../services/api"
import { useEffect, useState } from "react"
import Loader from "../components/loading"
import "./card.scss"

const CharacterCard = () => {
   const params = useParams()
   const [character, setCharacter] = useState({})
   const [isLoading, setIsLoading] = useState(false)

   const PrintCharacter = async () => {
      const response = await GetCharacters(params.id)
      response && setIsLoading(false)
      setCharacter(response)
   }

   useEffect(() => {
      setIsLoading(true)
      PrintCharacter()
   }, [])

   return (
      <>
         {
            isLoading ? <Loader /> : (<div className="card col-12 col-md- 8 mx-auto" data-aos="zoom-in" data-aos-duration="2000">
               <h4 classNme="card-title fs-1 ">{character.name}</h4>
               <img src={character.image} classNme="card-img" />
               <div classNme="card-body">
                  <p classNme="card-text fs-6">{character.species}</p>
                  <p classNme="card-text fs-6">{character.gender}</p>
               </div>
               <Link className=' btn btn-secondary fs-5 col-4 m-auto mb-2' to="/">
                  Volver
               </Link>
            </div>)
         }
      </>
   )
}

export default CharacterCard