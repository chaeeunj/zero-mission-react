import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Carousel() {
  const [style, setStyle] = useState({ transform: 'translate(0)' });
  const [activeButton, setActiveButton] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickButton = (translation, buttonIndex) => {
    setStyle({ transform: `translate(${translation})` });
    setActiveButton(buttonIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleClickButton(`-${currentIndex * 100}vw`, currentIndex + 1);
  }, [currentIndex]);

  return (
    <Container>
      <Wrapper style={style}>
        <Slide>
          <SlideImg src="/shop_fashion.jpeg" alt="fashion" />
        </Slide>
        <Slide>
          <SlideImg src="/shop_digital.jpeg" alt="digital" />
        </Slide>
        <Slide>
          <SlideImg src="/shop_grocery.jpeg" alt="grocery" />
        </Slide>
      </Wrapper>
      <DescArea>
        <Title></Title>
      </DescArea>
      <ButtonWrapper>
        <Button
          onClick={() => handleClickButton('0', 1)}
          isactive={activeButton === 1}></Button>
        <Button
          onClick={() => handleClickButton('-100vw', 2)}
          isactive={activeButton === 2}></Button>
        <Button
          onClick={() => handleClickButton('-200vw', 3)}
          isactive={activeButton === 3}></Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  width: 300vw;
  transition: transform 0.5s;
`;

const Slide = styled.div`
  width: 100vw;
  height: 700px;
  float: left;
`;

const SlideImg = styled.img`
  width: 100%;
`;

const DescArea = styled.div``;

const ButtonWrapper = styled.div`
  position: relative;
  top: -50px;
  left: 750px;
  z-index: 5;
`;

const Button = styled.button`
  width: 8px;
  height: 12px;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ isactive }) => (isactive ? 'white' : 'grey')};
`;

const Title = styled.h2``;
