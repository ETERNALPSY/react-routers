import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GetCharacters from "../services/api"
import Loader from "../components/loading"

const Home = () => {

   const [characters, setCharacters] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   const PrintCharacters = async () => {
      const response = await GetCharacters()
      response && setIsLoading(false)
      setCharacters(response.results)
   }
   useEffect(() => {
      setIsLoading(true)
      PrintCharacters()
   }, [])

   return (
      <>
         {
            isLoading ? <Loader /> : (
               characters.map(character => {
                  const { id, name, image } = character
                  return (
                     <Link to={`/card/${id}`} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 text-decoration-none" key={id} data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="card h-100">
                           <img src={image} className="card-img-top" />
                           <div className="card-body">
                              <h5 className=" card-title">{name}</h5>
                           </div>
                        </div>
                     </Link>
                  )
               })
            )
         }
      </>
   )
}

export default Home