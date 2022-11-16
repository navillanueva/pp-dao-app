import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListVote from "../components/lists/ListVote";
import ListVoteSeparator from "../components/lists/ListVoteSeparator";
import ListVoteDeleteAction from "../components/lists/ListVoteDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Campus 100% sin humo",
    description: "Empieza el debate...",
    image: require("../assets/noFumar.png"),
  },
  {
    id: 2,
    title: "Becas de 500 euros a los 1000 estudiantes con mejor media",
    description: "Debate en proceso...",
    image: require("../assets/uc3m.png"),
  },
];

function DebatesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListVote
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListVoteDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListVoteSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Paloma.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default DebatesScreen;
