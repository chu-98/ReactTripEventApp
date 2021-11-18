import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Column = styled.View`
  margin: 32px 20px;
`;
const Name = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;

const One = styled.View``;
const TicketType = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
const Dis = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;

const Two = styled.View``;
const Location = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
const Title = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
const Three = styled.View``;
const Price = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;
const Origin = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;

interface VListProps {
  name: string;
  location: string;
  title: string;
  ticketType: string;
  discountPercent: number;
  priceOrigin: number;
  priceDiscounted: number;
  trips: { location: string; title: string };
}

const VList: React.FC<VListProps> = ({
  name,
  location,
  title,
  ticketType,
  discountPercent,
  priceOrigin,
  priceDiscounted,
  trips,
}) => {
  return (
    <Container>
      <Column>
        <Name>{name}</Name>
        <One>
          <TicketType>{ticketType}</TicketType>
          <Dis>{discountPercent}</Dis>
        </One>
        <Two>
          <Location>{location}</Location>
          <Title>{title}</Title>
        </Two>
        <Three>
          <Origin>{priceOrigin}</Origin>
          <Price>{priceDiscounted}</Price>
        </Three>
      </Column>
      <FlatList
        data={trips}
        renderItem={({ item }) => <Title>{item.location}</Title>}
      />
    </Container>
  );
};

export default VList;
