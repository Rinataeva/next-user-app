const API_URL = "https://jsonplaceholder.typicode.com";

class UserApiService {
    async getAllUsers() {
        const response = await fetch(`${API_URL}/users`);
        return await response.json();
    }

    async getUserById(id: number) {
        const response = await fetch(`${API_URL}/users/${id}`);
        return await response.json();
    }
}
export const userApiService = new UserApiService();