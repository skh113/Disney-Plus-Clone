import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="/images/Disney-plus-img/avengers-endgame.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/spider-man-far-from-home.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/venom.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/star-wars-the-rise-of-skywalker_2.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/bambi_0b5d_2500x4000.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/beauty-and-the-beast_0721_2500x4000.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/mulan_33c4_2500x4000.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/Disney-plus-img/robin-hood_4dd0_2500x4000.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition-duration: 300ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.125);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
