import { useState, useEffect } from 'react';

//helpers
import { getGifs } from '../helpers/getGifs';

//models
import { Image } from '../models/image.model';

interface IState {
    data: Image[];
    loading: boolean;
}

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState<IState>({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {
            getGifs(category)
            .then((imgs: Image[]) => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
        }, 3000);

        
    }, [category]);

    return state;
}
