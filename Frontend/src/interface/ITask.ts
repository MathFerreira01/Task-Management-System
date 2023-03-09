import IUser from "./IUser";

interface ITask {
  id?: string;
  name: string;
  description: string;
  date: string;
  userId: string;
  users?: IUser;
}

export default ITask;
