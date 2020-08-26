import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbum } from '../redux';
import { useParams } from 'react-router-dom';
import AlbumHead from './AlbumHead';
import Song from './Song';

import '../assets/styles/components/Playlist.scss';

const Album = () => {

  const history = useParams().id;
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const { image, name_Album, name_Artist, duration, year, image_artist, songs } = albums.album;

  useEffect(() => {
    dispatch(fetchAlbum(history));
  }, []);

  return (
    <section className='playlist'>
      <AlbumHead
        caratula={image ? image : null}
        nameAlbum={name_Album}
        imageArtist={image_artist}
        linkArtist={name_Artist}
        duration={duration}
        year={year}
      />
      <section className='songs'>
        {
          songs &&
            songs.map(song => <Song nameSong={song.name} nameArtist={name_Artist} duration={song.duration} />)
        }
      </section>
    </section>
  );
};

export default Album;
