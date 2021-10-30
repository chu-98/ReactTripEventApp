import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./navigations/Root";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
