import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import propTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* {isLoading ? 
      <h2>Cargando ...</h2> 
      : null} */}

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} 
          />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category:propTypes.string.isRequired,
}
export default GifGrid;
