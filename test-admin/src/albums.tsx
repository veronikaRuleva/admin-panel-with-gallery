import { Datagrid, List, ReferenceField, ReferenceInput } from "react-admin";

import AlbumReferenceField from "./AlbumReferenceField";

const albumFilters = [
  <ReferenceInput
    source="userId"
    label="User ID"
    reference="users"
    alwaysOn
    key="userId"
  />,
];

export const AlbumList = () => {
  return (
    <List filters={albumFilters}>
      <AlbumDataGrid />
    </List>
  );
};

export const AlbumDataGrid = () => {
  return (
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <AlbumReferenceField />
    </Datagrid>
  );
};
