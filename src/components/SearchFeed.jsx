import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((res) => {
      setVideos(res.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :{" "}
        <span
          style={{
            color: "#F31503",
          }}
        >
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <Videos videos={videos}></Videos>
    </Box>
  );
};

export default SearchFeed;
