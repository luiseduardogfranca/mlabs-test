import React, { useState, useEffect } from "react";
import {
  ActionsInstagram,
  CardIntagramBody,
  CardIntagramFooter,
  CardIntagramHeader,
  ContainerCard,
  ContainerDialog,
  DialogContent,
  WrapperDialogContent,
  ActionsRight,
  ActionsLeft,
  CardImage,
  AvatarInstagram,
  ImageAvatar,
} from "./style";
import CommentIcon from "../../assets/icons/comment-instagram.svg";
import BookmarkIcon from "../../assets/icons/bookmark-instagram.svg";
import HeartIcon from "../../assets/icons/heart-instagram.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";

export const CardIntagram = (props) => {
  const { image, text, dateTime } = props;
  return (
    <ContainerCard>
      <CardIntagramHeader>
        <AvatarInstagram>
          <ImageAvatar instagram>
            <InstagramIcon />
          </ImageAvatar>
          <p>Anselmo Carlos</p>
        </AvatarInstagram>
      </CardIntagramHeader>
      <CardIntagramBody>
        <CardImage image={image} />
      </CardIntagramBody>
      <CardIntagramFooter>
        <ActionsInstagram>
          <div>
            <img src={HeartIcon}></img>
            <img src={CommentIcon}></img>
          </div>
          <div>
            <img src={BookmarkIcon}></img>
          </div>
        </ActionsInstagram>
        <p>{text}</p>
      </CardIntagramFooter>
    </ContainerCard>
  );
};
