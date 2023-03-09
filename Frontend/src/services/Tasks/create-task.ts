import ITask from "../../interface/ITask";
import api from "../api";

const createTaskService = async (task: ITask) => {
  return await api
    .post("/task", task)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default createTaskService;
