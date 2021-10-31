import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
// const Pic = styled.Image``;
const Column = styled.View``;
const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;
const Desc = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
const Sights = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

interface HListProps {
  id: string;
  name: string;
  desc: string;
  sights: string;
}

const HList: React.FC<HListProps> = ({ id, name, desc, sights }) => {
  return (
    <Container>
      <Column>
        <Title>
          {id}. {name}
        </Title>
        <Desc>{desc}</Desc>
        <Sights>{sights}</Sights>
      </Column>
    </Container>
  );
};

export default HList;
