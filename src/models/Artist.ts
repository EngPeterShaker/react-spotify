import {
  types,
  Instance,
  SnapshotIn,
  // getParent,
  destroy,
  flow,
  onSnapshot,
  applySnapshot
} from "mobx-state-tree";
import axios from "../api/axios";

export const PlaylistOwner = types
  .model({
    id: types.string,
    name: types.string,
    display_name: types.string,
  });
export const PlaylistItem = types
  .model({
    name: types.string,
    id: types.string,
    owner: types.array(PlaylistOwner)
  });

export const Artist = types
  .model({
    // items:[]
    // items: types.map(types.array(PlaylistItem)),
    items: types.array(PlaylistItem)
  })
  .actions(self => {
    function fetchTracks(playlist_id : string) {
      return  axios.get(`/users/me/playlists/${playlist_id}/tracks`);
    }
    // const fetchPlaylists = flow(function* fetchPlaylists() {
    //   try {
    //     const response = yield axios.get('/users/me/playlists');
    //     console.log("response: ", response.data.items);
    //     // applySnapshot(self.items ,response.data.items )
    //   } catch (e) {
    //     console.log("error: ", e);
    //   }
    // });

    return { fetchTracks };
  })
  // .actions(self => ({
  //   async fetchPlaylists(){
  //     let items: any = [];
  //   return  axios.get('/users/wizzler/playlists')
  //     // .then((res: any) => {
  //     //   console.log('res33333333333', res)
  //     //   items = res.data.items
  //     // })
  //     // self.items = items
  //     // console.log('items', items)
  //     // .then(self.fetchProjectsSuccess, self.fetchProjectsError)
  //       // console.log('res', res)
  //       // console.log('self', self)

  //     // .catch((err: any) => {
  //     //   console.log('err', err)
  //     // })
  //     // console.log('res.data.items',items)
  //     // self.items.push(items);
  //   },
  //   fetchPlaylistsSuccess(res :any){
  //     console.log('res.data.items',res)
  //     // self.items.push(items);

  //   },
  //   fetchProjectsError(res :any){
  //     console.log('res.data.items',res)
  //     // self.items.push(items);

  //   },
  //   addCartItem(
  //     cartItem: SnapshotIn<typeof PlaylistItem> | Instance<typeof PlaylistItem>
  //   ) {
  //     self.items.push(cartItem);
  //   },
  //   remove(item: SnapshotIn<typeof PlaylistItem>) {
  //     destroy(item);
  //   }
  // }))
  .views(self => ({
    get playlistItems() {
      return self.items;
    },
    // get totalPrice() {
    //   return self.items.reduce((sum, entry) => sum + entry.price, 0);
    // }
  }));

