import React, { useState, useEffect } from "react";
import {
  ContainerButton,
  ContainerButtonSocialMedia,
  IconSocialMedia,
} from "./style";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import FacebookIcon from "../../../assets/icons/facebook-f.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import PinterestIcon from "../../../assets/icons/pinterest.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/icons/linkedin.svg";
import YouTubeIcon from "../../../assets/icons/youtube.svg";

export const ButtonSocialMedia = (props) => {
  const {
    linkedin,
    instagram,
    facebook,
    youtube,
    pinterest,
    twitter,
    label,
  } = props;

  return (
    <ContainerButtonSocialMedia {...props}>
      <IconSocialMedia>
        <LinkedinIcon></LinkedinIcon>
      </IconSocialMedia>
    </ContainerButtonSocialMedia>
  );
};
