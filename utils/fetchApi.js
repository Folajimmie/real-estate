import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fb5c14894amsh1f3c3cfde640dc8p111fedjsn5a90ea2ad5e5',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data; 
}