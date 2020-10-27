import React, { useState, useEffect } from "react";
import {
  ContainerFlexHome,
  ContainerHome,
  ContainerStatus,
  SocialNetworkContainer,
  SocialNetworkIcon,
} from "./style";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-f.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icons/pinterest.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";

const socialNetworkOptins = [
  { key: 3, icon: <InstagramIcon />, color: "#D60F86" },
  { key: 1, icon: <FacebookIcon />, color: "#3A70DA" },
  { key: 2, icon: <LinkedinIcon />, color: "#3A70DA" },
  { key: 4, icon: <YouTubeIcon />, color: "#3A70DA" },
  { key: 5, icon: <PinterestIcon />, color: "#3A70DA" },
  { key: 6, icon: <TwitterIcon />, color: "#3A70DA" },
];

const getIcon = (id, iconArr) => {
  iconArr = iconArr.filter((el) => el.key == id);

  if (iconArr.length > 0) {
    let iconObj = iconArr[0];
    return iconObj ? iconObj : null;
  }

  return null;
};

export const SocialNetworkList = (props) => {
  const { socialNetworks } = props;
  return (
    <SocialNetworkContainer>
      {socialNetworks &&
        socialNetworks.map((el, key) => {
          let icon = getIcon(el, socialNetworkOptins);
          if (icon)
            return (
              <SocialNetworkIcon color={icon.color}>
                {icon.icon}
              </SocialNetworkIcon>
            );
        })}
    </SocialNetworkContainer>
  );
};
