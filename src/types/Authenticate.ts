export interface AuthContextData{
  signIn: () => void
  user: User | null;
}

export interface User{
  id: string;
  name: string;
  avatar: string;
  email:string;
}