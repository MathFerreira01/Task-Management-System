import api from "../api";

const getAllTasks = async () => {
  return await api
    .get("/task")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllTasks;
