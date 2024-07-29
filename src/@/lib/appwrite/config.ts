import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// Configuration object with project details
export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // Your Appwrite project ID from environment variables
  url: import.meta.env.VITE_APPWRITE_URL, // Your Appwrite endpoint URL from environment variables
};

// Creating a new Appwrite client instance
export const client = new Client();
client.setProject(appwriteConfig.projectId); // Setting the project ID
client.setEndpoint(appwriteConfig.url); // Setting the API endpoint

// Creating instances of various Appwrite services
export const account = new Account(client); // For handling user accounts
export const database = new Databases(client); // For database operations
export const storage = new Storage(client); // For file storage
export const avatars = new Avatars(client); // For avatar-related operations
