import axios from "axios";

export const getActors = async () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs",
      params: {
        homeCountry: "US",
        currentCountry: "US",
        purchaseCountry: "US"
      },
      headers: {
        "x-rapidapi-key": "aae7869116msha8751baa770e58bp127724jsn622a1f03cb9f",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };
    
    try {
        const result = await axios.request(options).then(function (response) {
          return response.data;
        });
        return result;
    } catch (e) {
        console.log(e)
    }
}

export const getActorDetails = async(actorId) => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/actors/get-bio",
      params: { 
        nconst: `${actorId}`},
      headers: {
        "x-rapidapi-key": "aae7869116msha8751baa770e58bp127724jsn622a1f03cb9f",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const result = await axios.request(options).then(function (response) {
        return response.data;
      });
      return result;
    } catch (e) {
      console.log(e);
    }
}

export const getKnowFor = async() => {

    const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/actors/get-known-for",
    params: { nconst: "nm0001667" },
    headers: {
        "x-rapidapi-key": "aae7869116msha8751baa770e58bp127724jsn622a1f03cb9f",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
    };

    try {
      const result = await axios.request(options).then(function (response) {
        return response.data;
      });
      return result;
    } catch (e) {
      console.log(e);
    }
}