import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDatalayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDatalayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={SearchIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SideBarOption title={playlist.name} />
      ))}
      {/* <SideBarOption title="Hip Hop" />
      <SideBarOption title="ROCK" />
      <SideBarOption title="RnB" /> */}
    </div>
  );
}

export default Sidebar;
