import Image from "next/image";
import { Client, Databases, Query } from "appwrite";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {

    const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.APPWRITE_PROJECT);

    const databases = new Databases(client);

    const response = await databases.listDocuments("horizaura", "Products", [Query.equal("product_id", 'HZ1'), Query.limit(1)])
    const product = response.documents[0]
  return (
    <div>
      <section className="body-font dark:text-white text-black overflow-hidden">
        <span>
        <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">
                          Components
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
        </span>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {product && (
              <div>
                <Image
                  width={400}
                  height={400}
                  alt={`${product.name}, ID - ${product.product_id}, Price - Rs. ${product.price}`}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={`/media/products/${product.product_id}.jpg`}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-white tracking-widest">
                    HORIZAURA - Big Furniture{" "}
                  </h2>
                  <h1 className="text-3xl title-font text-white font-medium mb-1">
                    {product.product_name}
                  </h1>
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
