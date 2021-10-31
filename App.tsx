import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClient, QueryClientProvider } from "react-query";
import Tabs from "./navigations/Tabs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
