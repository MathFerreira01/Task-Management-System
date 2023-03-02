import user from "./IUser";

interface task {
  id: string;
  name: string;
  description: string;
  date: string;
  userId: string;
  users: user
}

export default task;
