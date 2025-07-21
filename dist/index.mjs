// App.tsx
import React from "react";
import { View, Text, Button } from "react-native";
var FlowEntryScreen = ({ onComplete }) => {
  return /* @__PURE__ */ React.createElement(View, { style: { flex: 1, justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Text, null, "Welcome to the SDK Flow"), /* @__PURE__ */ React.createElement(Button, { title: "Done", onPress: onComplete }));
};
export {
  FlowEntryScreen
};
