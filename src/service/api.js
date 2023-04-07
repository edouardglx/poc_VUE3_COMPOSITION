//SEARCH
const findASpecificBeer = async (beerResearch) => {
  if (beerResearch) {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/?beer_name=` + `${beerResearch}`
      )
      state.beersList = response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

//LIST_OF_ALL_BEERS
const listOfAllBeer = async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50')
    state.beersList = response.data
  } catch (error) {
    console.log(error.message)
  }
}
