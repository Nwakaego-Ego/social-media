import { ID } from "appwrite";
import { INewUser } from "../../../../src/types/index";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(), // Generates a unique ID for the new account
      user.email, // User's email
      user.password, // User's password
      user.name // User's name
    );
    return newAccount; // Returns the created account details
  } catch (error) {
    console.log(error); // Logs any error that occurs
    return error; // Returns the error
  }
}
