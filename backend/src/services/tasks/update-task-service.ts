import updateTaskRepository from "../../repositories/tasks/update-task-repository";

const updateTaskService = async (id: string, params: any) => {
  try {
    await updateTaskRepository(id, params);
    return {
      statusCode: 200,
      body: "Task successfully updated!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error updating task." };
  }
};

export default updateTaskService;
