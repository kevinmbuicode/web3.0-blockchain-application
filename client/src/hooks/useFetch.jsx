import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;
console.log(APIKEY);

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");
    
    const fetchGifs = async () => {
        try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`
        const response = await fetch(`${url}`);
        const json = await response.json();
        const data = json.data;

        setGifUrl(data?.[0]?.images?.downsized_medium.url || "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    } catch (error) {
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;


// import { useEffect, useState } from "react";

// const APIKEY = import.meta.env.VITE_GIPHY_API;

// const useFetch = ({ keyword }) => {
//     const [ gifUrl, setGifUrl ] = useState("");

//     const fetchGifs = async () => {
//         try {
//             console.log("fetching gif")
//             const response = await fetch(`https://api.giphy.com/v1/gifs/search/?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
//             const { data } = await response.json();
//             console.log("gif response data" ,data)

//             setGifUrl(data[0]?.images?.downsized_medium.url);
//         } catch (error) {
//             setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')
//         }
//     }

//     useEffect(() => {
//         if(keyword) fetchGifs();
//     }, [keyword]);

//     return gifUrl;
// }

// export default useFetch;