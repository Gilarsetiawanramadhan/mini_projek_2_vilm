import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


export const getMovielist = async () =>{
    const movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    
    // console.log({movielist: movie}); 
    // setelah kita cek data yang udah ada baru kita return
    return movies.data.results
}