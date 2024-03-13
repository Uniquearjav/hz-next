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
        console.log(productIds); // Array of product IDs
        return productIds; 
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of error
    }
}