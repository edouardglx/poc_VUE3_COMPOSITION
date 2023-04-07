import axios from 'axios'

//SEARCH_A_SPECIFIC_BEER
export const findASpecificBeer = async (beerResearch) => {
  if (beerResearch) {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/?beer_name=` + `${beerResearch}`
      )
      return response.data
    } catch (error) {
      console.dir(error.message)
    }
  }
}
//BEER_DETAIL
export const fetchBeerDetail = async (id) => {
  try {
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

//LIST_OF_ALL_BEERS
export const listOfAllBeer = async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50')
    return response.data
  } catch (error) {
    console.dir(error.message)
  }
}
