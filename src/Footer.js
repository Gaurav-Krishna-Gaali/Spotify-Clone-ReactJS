import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleICon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Slider from "@material-ui/core/Slider";

import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Usheryeahaltcover.jpg/220px-Usheryeahaltcover.jpg"
          className="footer__albumlogo"
          alt=""
        />
        <div className="songInfo">
          <h4>Yeah!</h4>
          <p>Usher.</p>
        </div>
      </div>
      <div className="footer__centre">
        <ShuffleICon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider min={0} max={100} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
