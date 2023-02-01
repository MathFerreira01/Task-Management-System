import allTasksRepository from "../../repositories/tasks/all-tasks-repository";

const allTasksService = async () => {
  try {
    const taskData = await allTasksRepository();
    return {
      statusCode: 200,
      body: taskData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching tasks" };
  }
};

export default allTasksService;
