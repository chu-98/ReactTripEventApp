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

// "리액트 네이티브"
//  리액트 문법으로 iOS & Android App
//  둘 다 한꺼번에 만들 수 있는 하이브리드 플랫폼

// "폴더 소개"
//  apis | components | navigations | assets

// "사용한 스택"
//  'React Query' - React Hook 대신에 쓴 라이브러리
//   훨씬 코드도 적게 적고 쉽게 개발할 수 있었다
//  'TypeScript' - 자바스크립트 기반에 타입을 정해줘서 요즘 트렌드라고 하는데,
//   아직 개발 경력이 많지 않다보니 어떤 부분이 편한지 잘 와닿지는 않았다
//  'Styled Components' - CSS 파일을 따로 만들지 않고 각 컴포넌트를
//   내가 마음대로 이름을 지어줄 수 있어서 정말 편했다

// "아쉬웠던 점"
//   'Location' - N에 해당하는 부분을 API에서
//    ID로 가져오려고 했으나 이상하게도 구현이 되지 않았다
//   'Activity' - API에서 데이터를 가져올 떼,
//    더 포커싱해서 가져오는 방법을 찾지 못해서 구현 자체가 되지 않았다
