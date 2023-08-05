export interface AuthContextData{
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
}

export interface User{
  name: string;
  avatar: string;
  email: string;
  password?: string;
  id: string;
}