import React from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import { PackageInfoProvider } from "./contexts/PackageContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <PackageInfoProvider>
      <LoadingContextProvider>
        <AppLayout />
      </LoadingContextProvider>
    </PackageInfoProvider>
  );
}

export default App;
