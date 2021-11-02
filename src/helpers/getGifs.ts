import { Image } from './../models/image.model';

export const getGifs = async (category: string) => {

    const url: string = 
        `https://api.giphy.com/v1/gifs/search?api_key=p3WJyag8CPqeO4HlfXrJWuNLJ4WRvuvc&q=${ encodeURI(category) }&limit=10`;
    const resp: Response = await fetch(url);
    const { data } = await resp.json();
    const gifs: Image[] = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        } as Image;
    });
   
    return gifs;
};