import {
  ReferenceField,
  ReferenceFieldProps,
  useRecordContext,
} from "react-admin";

const AlbumReferenceField = (
  props: Omit<ReferenceFieldProps, "reference" | "children" | "source"> & {
    source?: string;
  }
) => {
  const record = useRecordContext();
  return (
    <ReferenceField
      source="id"
      reference="albums"
      link={`/albums/${record.id}/photos`}
      {...props}
    >
      {record.title}
    </ReferenceField>
  );
};

AlbumReferenceField.defaultProps = {
  source: "id",
};

export default AlbumReferenceField;
