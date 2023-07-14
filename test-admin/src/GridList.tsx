import { useTheme, useMediaQuery } from "@mui/material";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { useListContext } from "react-admin";

const GridList = () => {
  const { isLoading } = useListContext();
  return isLoading ? <LoadingGridList /> : <LoadedGridList />;
};

const useColsForWidth = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  // there are all dividers of 24, to have full rows on each page
  if (xl) return 8;
  if (lg) return 6;
  if (md) return 4;
  if (sm) return 3;
  return 2;
};

// eslint-disable-next-line no-unused-vars
const times = (nbChildren: number, fn: (key: number) => any) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = () => {
  const { perPage } = useListContext();
  const cols = useColsForWidth();
  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {times(perPage, (key) => (
        <ImageListItem key={key}>
          <Box bgcolor="grey.300" height="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const LoadedGridList = () => {
  const { data } = useListContext();
  const cols = useColsForWidth();

  if (!data) return null;

  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {data.map((record) => (
        <img src={record.thumbnailUrl} alt={record.title} key={record.id} />
      ))}
    </ImageList>
  );
};

export default GridList;
