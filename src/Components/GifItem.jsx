import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (
        <div className='card-content'>
            <picture className='container-image'>
                <img src={url} alt={title} />
            </picture>
            <div className='.footer-image'>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}