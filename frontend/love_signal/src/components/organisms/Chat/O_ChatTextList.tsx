import React, { useRef, useLayoutEffect } from "react";
import style from "./styles/O_ChatTextList.module.scss";
import M_ChatTextItem from "../../molecules/Chat/M_ChatTextItem";

type PropsType = {
  roomType?: string;
};

const O_ChatTextList: React.FC<PropsType> = ({ roomType }) => {
  const chatList = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const keyboardHeight =
        viewportHeight - document.documentElement.clientHeight;

      // chatList.current.height = chatList.current.height - keyboardHeight;
    };
  });

  const resizeChatListHeight = () => {};

  return (
    <ul className={style.textList} ref={chatList}>
      <M_ChatTextItem
        roomType={roomType}
        isMe={true}
        text={"안녕하세요"}
        sendTime={"2023-04-30 11:58:38"}
      />
      <M_ChatTextItem
        roomType={roomType}
        text={"반가워요~~"}
        sender={"Tom"}
        sendTime={"2023-04-30 12:02:12"}
      />
    </ul>
  );
};

export default O_ChatTextList;
