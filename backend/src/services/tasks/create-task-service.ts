import createTaskRepository from "../../repositories/tasks/create-task-repository";

const createTaskService = async (params: any) => {
  try {
    await createTaskRepository(params);
    return {
      statusCode: 201,
      body: "Task Registration successfully Completed!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching cars" };
  }
};

export default createTaskService;
