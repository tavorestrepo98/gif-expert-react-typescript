import PropTypes from 'prop-types';

import { Image } from '../models/image.model';

interface IProps {
    img: Image
}

export const GifGridItem = ({img}: IProps) => {

    return (
        <div className="card">   
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    img: PropTypes.object.isRequired
};
