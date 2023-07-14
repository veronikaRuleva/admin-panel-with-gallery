import { List } from "react-admin";
import ImageList from "./GridList";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

export const PhotoList = () => {
  const { id } = useParams();

  return (
    <List resource={`album/${id}/photos`}>
      <Box display="flex" justifyContent="center">
        <ImageList />
      </Box>
    </List>
  );
};
