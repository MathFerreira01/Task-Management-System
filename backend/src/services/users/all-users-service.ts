import allUsersRepository from "../../repositories/users/all-users-repository";

const allUsersServices = async () => {
  try {
    const userData = await allUsersRepository();
    return {
      statusCode: 201,
      body: userData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching Users" };
  }
};

export default allUsersServices;
