import deleteTaskRepository from "../../repositories/tasks/delete-task-repository";

const deleteTaskService = async (id: string) => {
  try {
    await deleteTaskRepository(id);
    return {
      statusCode: 200,
      body: "Task successfully deleted!!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error deleting task" };
  }
};

export default deleteTaskService;
