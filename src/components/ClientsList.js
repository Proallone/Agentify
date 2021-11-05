import * as React from "react";
import { List } from "react-native-paper";
import { FlatList } from "react-native";
import { View } from "react-native";
import { firebaseGetDocs } from "../services/FirebaseMethods";

const ClientList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Klienci">
      <List.Accordion
        title="Lista klientów"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default ClientList;
