import React  ,{FC,useEffect , useState} from 'react'
import { useMst } from "../models/Root";
import CardItem from "../components/CardItem";
interface Props {
  name?: string;
  priority?: boolean
}
const Playlist : FC<Props> = () => {
  const { Playlist } = useMst();
const [list , setList]= useState([])

  useEffect(() => {

      const pro = Playlist.fetchPlaylists();
pro.then(res => {
  console.log('res', res)
  setList(res.data.items)
})
  },[Playlist])

  useEffect(() => {
    console.log('Playlist.playlistItemszzzzzzzzzzzz', Playlist.playlistItems)

  }, [Playlist])

  return (
    <div>
    Playlist
    {
      list.length >0 && list.map(item => {
        return (
          // <p key={item.id}>{item.id}</p>
          <CardItem item={item} />
        )
      })
    }
    </div>
  )
}

export default Playlist
