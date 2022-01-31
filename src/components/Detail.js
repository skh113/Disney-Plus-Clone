import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/Disney-plus-img/avengers-infinity-war_dd0f_2560x1440.jpg" />
      </Background>
      <ImgTitle>
        <img src="/images/Disney-plus-img/logo/avengers-41015.png" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>2018 . 2h 29m . Action/Adventure</Subtitle>
      <Description>
        Avengers: Infinity War is a 2018 American superhero film based on the
        Marvel Comics superhero team the Avengers.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  margin: 20px 10px;
  transition-duration: 250ms;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  &:hover {
    background: rgb (100, 100, 100);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 250ms;
  &:hover {
    background: black;
  }
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)``;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin: 16px 0;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
`;
