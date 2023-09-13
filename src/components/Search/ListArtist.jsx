import PropTypes from "prop-types";
const ListArtist = ({ artists }) => {
  return (
    <div className="flex gap-4 flex-wrap overflow-y-auto justify-around py-4 max-h-[600px] max-[750px]:max-h-[none] max-[750px]:col-span-2">
      {artists.map((artist) => {
        return (
          <div
            key={artist.id}
            className="relative group h-36 w-36 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-30 before:cursor-pointer before:hover:bg-slate-600 before:transition-all before:duration-300 before:ease-in-out "
          >
            <p className="absolute truncate w-32 hidden group-hover:block inset-0 m-auto h-min custom-light-text-shadow z-30 text-xl cursor-pointer bg-slate-600 px-3 py-2 rounded-md">
              {artist.name}
            </p>

            <object
              className="h-full w-full object-cover rounded-full"
              data={`https://api.napster.com/imageserver/v2/artists/${artist.id}/images/230x153.jpg`}
              type="image/jpg"
            >
              <img
                src="https://images.pexels.com/photos/1293126/pexels-photo-1293126.jpeg?cs=srgb&dl=abstract-art-abstract-background-art-art-background-1293126.jpg&fm=jpg"
                className="h-full w-full object-cover rounded-full"
                alt={artist.name}
              />
            </object>
          </div>
        );
      })}
    </div>
  );
};

ListArtist.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListArtist;
