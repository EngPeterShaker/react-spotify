import React  ,{FC,} from 'react'
interface Props {
  name?: string;
  priority?: boolean
}
const Playlist : FC<Props> = () => {
  return (
    <div>
    Playlist
    </div>
  )
}

export default Playlist
