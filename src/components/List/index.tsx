import React, { FC } from "react";
import { View, Text } from "react-native";

interface ListProps {
  data: string[];
}

const List: FC<ListProps> = ({ data }) => {
  return (
    <View>
      {data.map((item: string, index: number) => (
        <Text key={index}>{`\u2022 ${item}`}</Text>
      ))}
    </View>
  );
};

export default List;
