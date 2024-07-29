import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface PresentationLogicContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<PresentationLogicContextType | undefined>(
  undefined,
);

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = (): PresentationLogicContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoadingContext must be used within a PresentationLogicProvider",
    );
  }
  return context;
};
