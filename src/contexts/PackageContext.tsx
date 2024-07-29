import React, { useState, useContext, createContext, ReactNode } from "react";

type Package = {
  name: string;
  stars: number;
  owner: string;
};

interface PackageDataContext {
  packages: Package[];
  setPackages: React.Dispatch<React.SetStateAction<Package[]>>;
}

const PackageInfoContext = createContext<PackageDataContext | undefined>(
  undefined,
);

interface PackageInfoProviderProps {
  children: ReactNode;
}

export const PackageInfoProvider: React.FC<PackageInfoProviderProps> = ({
  children,
}) => {
  const [packages, setPackages] = useState<Package[]>([]);

  return (
    <PackageInfoContext.Provider value={{ packages, setPackages }}>
      {children}
    </PackageInfoContext.Provider>
  );
};

export const usePackageInfo = (): PackageDataContext => {
  const context = useContext(PackageInfoContext);
  if (!context) {
    throw new Error("usePackageInfo must be used within a PackageInfoProvider");
  }
  return context;
};
