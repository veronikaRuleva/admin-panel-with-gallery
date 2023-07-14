import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import AlbumIcon from "@mui/icons-material/PhotoAlbum";
import { AlbumList } from "./albums";
import { PhotoList } from "./photos";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" recordRepresentation="name" />
      <Resource
        name="albums"
        list={AlbumList}
        icon={AlbumIcon}
        recordRepresentation="title"
      >
        <Route path=":id/photos" element={<PhotoList />} />
      </Resource>
    </Admin>
  );
};
