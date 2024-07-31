import React, { PropsWithChildren, useContext, useState } from "react";

interface UserContext {
  user: UserProfile | null;
  login: () => void;
  logout: () => void;
}

const UserContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  const login = () => {
    setUser({ display_name: "Admin" } as UserProfile);
  };
  const logout = () => {
    setUser(null);
  };

  const context = {
    user,
    login,
    logout,
  };

  return (
    <>
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
    </>
  );
};

/**
 * gets global user context
 */
export const useUserProfile = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error(
      "useUserProfile() hook must be a child of <UserContextProvider /> "
    );

  return context;
};

export default UserContextProvider;

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}
