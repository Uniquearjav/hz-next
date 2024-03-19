import { Client, Databases } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT) // Your project ID
    ;

export async function fetchData() {
    try {
        const response = await databases.listDocuments('horizaura', 'Products');
        const productIds = response.documents;
        return productIds; 
    } catch (error) {
        return []; // Return an empty array in case of error
    }
}