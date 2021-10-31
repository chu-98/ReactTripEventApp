import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Index = styled.Text`
  color: #ee5714;
`;
const Column = styled.View`
  margin: 32px 20px;
`;
const Title = styled.Text`
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: 700;
`;
const Desc = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
const Sights = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #62931f;
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
          <Index>N.</Index> {name}
        </Title>
        <Desc>{desc}</Desc>
        <Sights>추천명소: {sights}</Sights>
      </Column>
    </Container>
  );
};

export default HList;
