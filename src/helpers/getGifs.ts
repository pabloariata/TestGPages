const api_key = 'K7QcpQirezvyok7fp7r3555XkxLWOVKA';

export const getGifs =  async (category: string) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

    const resp = await fetch(url);
    // console.log(resp);

    const { data } = await resp.json();

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium  
    }))

    console.log(gifs);


    return gifs;
}