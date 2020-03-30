import React  ,{FC,useEffect , useState} from 'react'
import { useMst } from "../models/Root";
import ArtistItem from "../components/ArtistItem";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";
interface Props {
  name?: string;
  priority?: boolean
}
const Artist : FC<Props> = () => {
  const { Artist } = useMst();
const [list , setList]= useState([])
let { id='' } = useParams();
console.log('id', id)

  useEffect(() => {

      const pro = Artist.fetchTracks(id);
pro.then((res: any) => {
  setList(res.data.items)
})
  },[Artist, id])

  return (
    <div>
    Artists
    {
      list.length >0 && list.map((item: any) => {
        return (
          // <p key={item.id}>{item.id}</p>
          <ArtistItem item={item.track.artists[0]} />
        )
      })
    }
    </div>
  )
}

export default Artist
