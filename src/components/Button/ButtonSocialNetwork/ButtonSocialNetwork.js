import React, { useState, useEffect } from "react";
import {
  ContainerButton,
  ContainerButtonSocialNetwork,
  IconSocialNetwork,
} from "./style";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook-f.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagram.svg";
import { ReactComponent as PinterestIcon } from "../../../assets/icons/pinterest.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../../assets/icons/youtube.svg";

const socialNetworkOptins = [
  { key: "instagram", icon: <InstagramIcon /> },
  { key: "facebook-f", icon: <FacebookIcon /> },
  { key: "linkedin-in", icon: <LinkedinIcon /> },
  { key: "youtube", icon: <YouTubeIcon /> },
  { key: "pinterest-p", icon: <PinterestIcon /> },
  { key: "twitter", icon: <TwitterIcon /> },
];

const getIcon = (iconName, iconArr) => {
  iconArr = iconArr.filter((el) => el.key == iconName);

  if (iconArr.length > 0) {
    let iconObj = iconArr[0];
    return iconObj && iconObj.icon ? iconObj.icon : null;
  }

  return null;
};

export const ButtonSocialNetwork = (props) => {
  const { socialNetwork, addSocialNetwork, removeSocialNetwork } = props;

  let iconName = null;
  if (socialNetwork && socialNetwork.icon) iconName = socialNetwork.icon;

  const [checked, setChecked] = useState(false);

  const handleOnClick = () => {
    if (addSocialNetwork && !checked) addSocialNetwork(socialNetwork);
    if (removeSocialNetwork && checked) removeSocialNetwork(socialNetwork.id);
    setChecked((el) => !el);
  };

  return (
    <ContainerButtonSocialNetwork
      {...props}
      onClick={handleOnClick}
      disabled={socialNetwork && socialNetwork.status == "disabled"}
      checked={checked}
    >
      <IconSocialNetwork>
        {getIcon(iconName, socialNetworkOptins)}
      </IconSocialNetwork>
    </ContainerButtonSocialNetwork>
  );
};
