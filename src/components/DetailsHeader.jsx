import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artist[artistId].attributes;
  const song = songData?.resources['shazam-songs'][songData.data[0].id];
  const songGenres = songData?.resources['shazam-songs'][songData.data[0].id].attributes?.genres?.primary || 'No genres found!';
  const artistSongId = songData ? Object.keys(songData?.resources?.artists)[0] : '';

  return (
    <div className="relative w-wull flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 " />

      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artistData?.artist?.artwork?.url.replace('{w}', '500').replace('{h})', '500')
              : song?.attributes.images.coverArt
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          alt="art"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist.name : song?.attributes.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${artistSongId}`}>
              <p className="text-base text-gray-400 mt-2">{song?.attributes.label}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songGenres}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};
//
export default DetailsHeader;
