import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <YouTubeIcon sx={{ color: "red", fontSize: 60 }} />
      <Typography
        variant="h5"
        align="center"
        mx={1}
        sx={{ color: "#fff", display: { xs: "none", md: "flex" } }}
      >
        Youtube V2
      </Typography>
    </Link>
    <SearchBar></SearchBar>
  </Stack>
);

export default Navbar;
