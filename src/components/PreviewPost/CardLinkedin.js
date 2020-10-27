import React, { useState, useEffect } from "react";
import {
  ActionsCard,
  CardLinkedinFooter,
  CardLinkedinHeader,
  ContainerCard,
  CardImage,
  CardLinkedinBody,
  ImageAvatar,
  AvatarName,
  CardAvatar,
} from "./style";
import SendIcon from "../../assets/icons/send-linkedin.svg";
import OkayIcon from "../../assets/icons/okay-linkedin.svg";
import CommentIcon from "../../assets/icons/comment-linkedin.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";

export const CardLinkedin = (props) => {
  const { image, text, date } = props;
  return (
    <ContainerCard>
      <CardLinkedinHeader>
        <CardAvatar>
          <ImageAvatar linkedin>
            <LinkedinIcon />
          </ImageAvatar>
          <AvatarName>
            <h1>Anselmo Carlos</h1>
            <p>{`${date.date}`}</p>
          </AvatarName>
        </CardAvatar>
      </CardLinkedinHeader>
      <CardLinkedinBody>
        <p>{text}</p>
        <CardImage image={image} />
      </CardLinkedinBody>
      <CardLinkedinFooter>
        <p>5 comentários</p>
        <hr></hr>
        <ActionsCard>
          <div>
            <img src={OkayIcon}></img>
            <img src={CommentIcon}></img>
            <img src={SendIcon}></img>
          </div>
        </ActionsCard>
      </CardLinkedinFooter>
    </ContainerCard>
  );
};
