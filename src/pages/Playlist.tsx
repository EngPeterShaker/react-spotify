import React, { FC, useEffect, useState } from "react";
import { useMst } from "../models/Root";
import CardItem from "../components/CardItem";
import { observer } from "mobx-react";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";

interface Props {
  name?: string;
  priority?: boolean;
}

const Playlist: FC<Props> = () => {
  const { Playlist } = useMst();
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Playlist.fetchPlaylists();
    const pro = Playlist.fetchPlaylists();
    pro.then((res: any) => {
      setList(res.data.items);
    });
  }, [Playlist]);

  useEffect(() => {
    console.log("Playlist.playlistItemszzzzzzzzzzzz", Playlist.playlistItems);
  }, [Playlist]);
  const selectPlaylist = (item: any) => {
    console.log("id", item);
    history.push(`artist/${item.id}`);
  };

  return (
    <div>
      Playlist
      {list.length > 0 &&
        list.map((item: any) => {
          console.log("item", item.id);
          return (
            <span key={item.id} onClick={() => selectPlaylist(item)}>
              {/* // <p key={item.id}>{item.id}</p> */}
              <CardItem item={item} />
            </span>
          );
        })}
    </div>
  );
};

export default Playlist;
