const baseUrl = "https://rickandmortyapi.com/api/character/"


const GetCharacters = async (id) => {
   id || (id = "")
   try {
      let response = await fetch(baseUrl + id);
      let data = await response.json();
      return data
   } catch (error) {
      console.log(error);
   }
};

export default GetCharacters