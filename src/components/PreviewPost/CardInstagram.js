import React, { useState, useEffect } from "react";
import {
  CardIntagramBody,
  CardIntagramFooter,
  CardIntagramHeader,
  ContainerCard,
  CardImage,
  ActionsCard,
  ImageAvatar,
  AvatarName,
  CardAvatar,
} from "./style";
import CommentIcon from "../../assets/icons/comment-instagram.svg";
import BookmarkIcon from "../../assets/icons/bookmark-instagram.svg";
import HeartIcon from "../../assets/icons/heart-instagram.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";

export const CardIntagram = (props) => {
  const { image, text, date } = props;
  return (
    <ContainerCard>
      <CardIntagramHeader>
        <CardAvatar>
          <ImageAvatar instagram>
            <InstagramIcon />
          </ImageAvatar>
          <AvatarName>
            <h1>Anselmo Carlos</h1>
          </AvatarName>
        </CardAvatar>
      </CardIntagramHeader>
      <CardIntagramBody>
        <CardImage image={image} />
      </CardIntagramBody>
      <CardIntagramFooter>
        <ActionsCard>
          <div>
            <img src={HeartIcon}></img>
            <img src={CommentIcon}></img>
          </div>
          <div>
            <img src={BookmarkIcon}></img>
          </div>
        </ActionsCard>
        <p>{text}</p>
      </CardIntagramFooter>
    </ContainerCard>
  );
};
