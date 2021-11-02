import PropTypes from 'prop-types';

//components
import { GifGridItem } from './GifGridItem';

//hooks
import { useFetchGifs } from '../hooks/useFetchGifs';

//models
import { Image } from '../models/image.model';

interface IProps {
    category: string
}

export const GifGrid = ({ category }: IProps) => {

    const { data:images, loading } = useFetchGifs(category);

    console.log(loading);

   

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Cargando ...</p> }
            <div className="card-grid">
                {
                    images.map((img: Image) => (
                        <GifGridItem key={img.id} img={ img } />
                    ))
                }
            </div>
        </>
        
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};