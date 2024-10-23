import { RESTDataSource } from "@apollo/datasource-rest";

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  async getAllUsers() {
    return await this.get("users");
  }

  async getUserById(userId) {
    return await this.get(`users/${userId}`);
  }
}

export default UserAPI;
