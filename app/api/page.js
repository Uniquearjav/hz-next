import Image from "next/image";
import { Client, Databases, ID } from "appwrite";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
    // const prodjson = [
    //   {
    //     "id": 1,
    //     "product_id": "HZ1",
    //     "product_name": "Exclusive Refurbished Palana Coffee Table",
    //     "category": "Big Furniture",
    //     "price": 14000,
    //     "description": "An antique ' palna ' ( baby cot ) refashioned into a coffee table. Crafted with care from solid teak wood to give your home a rustic yet chic look.Dimensions:Height: 15.5 inchWidth: 35 inchDepth: 24 inchWood: TeakShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 2,
    //     "product_id": "HZ2",
    //     "product_name": "Vintage Tile Fitted Side Table",
    //     "category": "Big Furniture",
    //     "price": 7500,
    //     "description": "A luxurious teak wood side table with original vintage tiles fitted in it , making it a perfect accent piece for your home.Dimensions:Height: 27 inchWidth: 18 inchDepth: 18 inchWood: TeakShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 3,
    //     "product_id": "HZ3",
    //     "product_name": "Modern Side Table With Storage Cabinet",
    //     "category": "Big Furniture",
    //     "price": 8500,
    //     "description": "A modern side table crafted by assembling various strips of different types of wood. This edgy piece is the perfect blend of modern style and elegance making it a fitting piece for your home.Dimensions:Height: 28 inchWidth: 16 inchDepth: 13 inchWood: SheeshamShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 4,
    //     "product_id": "HZ4",
    //     "product_name": "Push Drawer",
    //     "category": "Big Furniture",
    //     "price": 12000,
    //     "description": "An elegant ' Push Drawer ' crafted with sheesham wood. The drawers are handcrafted with modern techniques to make this one of a kind piece. This product is also user friendly since the drawers open with just a push.Dimensions:Height: 24 inchWidth: 20 inchDepth: 16 inchWood: SheeshamShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 5,
    //     "product_id": "HZ5",
    //     "product_name": "Victorian Style Semicircle Side Table",
    //     "category": "Big Furniture",
    //     "price": 13500,
    //     "description": "A vintage Victorian style side table designed in a semicircle. This design is crafted from sheesham wood and features three small drawers. The rich brown finish gives this design versatility.Dimensions:Height: 30 inchWidth: 28 inchDepth: 14 inchWood: SheeshamShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 6,
    //     "product_id": "HZ6",
    //     "product_name": "Modern Iron Base Storage Black Coffee Table",
    //     "category": "Big Furniture",
    //     "price": 8000,
    //     "description": "A round extraordinary side table crafted from mango wood. Featured with wooden and metal construction and ample of space for storage. This side table is the perfect blend of vintage elegance and modern design making it a fitting piece for any household.Dimensions:Height: 18 inchDiameter: 21.5 inchWood: Metal baseShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 7,
    //     "product_id": "HZ7",
    //     "product_name": "Unique Coffee Table With Adjustable Height",
    //     "category": "Big Furniture",
    //     "price": 8500,
    //     "description": "A unique round coffee table with a sleek iron base. This design features an additional function of adjusting its height according to our needs making it a perfect piece to accent office spaces as well as living spaces.Dimensions:Height: Max: 23 inch, Min: 17 inchDiameter: 28 inchWood: Metal"
    //   },
    //   {
    //     "id": 8,
    //     "product_id": "HZ8",
    //     "product_name": "Exclusive Refurbished Distressed Coffee Table",
    //     "category": "Big Furniture",
    //     "price": 14000,
    //     "description": "Exclusive Refurbished Distressed Coffee Table made with old wooden doors.Dimensions:Height: 18 inchWidth: 48 inchDepth: 21 inchWood: ReclaimedShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 9,
    //     "product_id": "HZ9",
    //     "product_name": "Vintage Distressed White Carved Side Table",
    //     "category": "Big Furniture",
    //     "price": 33000,
    //     "description": "A vintage style side table with distressed white pattern finish , crafted from seasoned mango wood consisting of beautiful mughal carvings giving it a rich chic look.Dimensions:Height: 25 inchDiameter: 17.7 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 10,
    //     "product_id": "HZ10",
    //     "product_name": "Old Wall Bracket Side Table",
    //     "category": "Big Furniture",
    //     "price": 7500,
    //     "description": null
    //   },
    //   {
    //     "id": 11,
    //     "product_id": "HZ11",
    //     "product_name": "Distressed Style White Centre Table",
    //     "category": "Big Furniture",
    //     "price": 12000,
    //     "description": "A vintage style side table with distressed white pattern finish , crafted from seasoned mango wood consisting of beautiful carvings giving it a rich chic look.Dimensions:Height: 18 inchWidth: 40 inchDepth: 23 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 12,
    //     "product_id": "HZ12",
    //     "product_name": "Vinatage Sea Green Caibnet",
    //     "category": "Big Furniture",
    //     "price": 18000,
    //     "description": "744"
    //   },
    //   {
    //     "id": 13,
    //     "product_id": "HZ13",
    //     "product_name": "Intricate Carved Chiffonier",
    //     "category": "Big Furniture",
    //     "price": 22000,
    //     "description": "An antique ' Chiffonier ' with white sideboards with distressed pattern embellishments and turquoise panels with intricate carvings on drawers and shutters. This one of a kind piece is made of seasoned Mango wood.Dimensions:Height: 32 inchWidth: 62 inchDepth: 14 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 14,
    //     "product_id": "HZ14",
    //     "product_name": "White Distressed Vinatge Side Board",
    //     "category": "Big Furniture",
    //     "price": 28000,
    //     "description": "A rare vintage style mango wood cabinet accentuated with a distressed white finish with intricately carved shutters .Dimensions:Height: 33 inchWidth: 55 inchDepth: 15 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 15,
    //     "product_id": "HZ15",
    //     "product_name": "Wooden Carved Side Board",
    //     "category": "Big Furniture",
    //     "price": 24000,
    //     "description": "Wooden Carved Side board accentuated with a distressed finish and intricately carved shutters.Dimensions:Height: 36 inchWidth: 36 inchDepth: 18 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 16,
    //     "product_id": "HZ16",
    //     "product_name": "Turquoise Distressed Carved Almirah",
    //     "category": "Big Furniture",
    //     "price": 40000,
    //     "description": "A unique handcrafted turquoise 'Almirah' with a distressed pattern finish , created with seasoned Mango wood and laden with beautifully carved floral designs. This vintage wardrobe will make the perfect ethnic addition to your modern home.Dimensions:Height: 73 inchWidth: 41 inchDepth: 22.5 inchWood: MangoShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 17,
    //     "product_id": "HZ17",
    //     "product_name": "Vintage Distressed Jharokha Style Yellow Shelf",
    //     "category": "Big Furniture",
    //     "price": 32000,
    //     "description": "A vintage yellow ' Jharokha Style ' bookshelf with a distressed pattern finish made of reclaimed wood. This beautiful hand carved pattern adds depth to the design also making it one of its kind.Dimensions:Height: 58.5 inchWidth: 29 inchDepth: 18 inchWood: ReclaimedShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 18,
    //     "product_id": "HZ18",
    //     "product_name": "Vintage Distressed Jharokha Style Blue Shelf",
    //     "category": "Big Furniture",
    //     "price": 30000,
    //     "description": "A vintage blue ' Jharokha Style ' bookshelf with a distressed pattern finish made of reclaimed wood .This beautiful hand carved pattern adds depth to the design also making it one of its kind.Dimensions:Height: 60 inchWidth: 28 inchDepth: 16 inchWood: ReclaimedShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 19,
    //     "product_id": "HZ19",
    //     "product_name": "Old Wooden Sandook",
    //     "category": "Big Furniture",
    //     "price": 30000,
    //     "description": "An antique old teak wood Sandook from North Western ancient India. This one of a kind wooden chest laden with intricate carvings was used to store precious goods in ancient times.Dimensions:Height: 29.5 inchWidth: 41.5 inchDepth: 27 inchWood: TeakShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 20,
    //     "product_id": "HZ20",
    //     "product_name": "Wooden Tribal Carved Sandook",
    //     "category": "Big Furniture",
    //     "price": 12000,
    //     "description": "A rare vintage style teak wood ' Sandook ' with white distressed pattern finish. This timeless piece has intricate tribal carvings on it which adds grandeur to its beauty.Dimensions:Height: 16 inchWidth: 28 inchDepth: 13.5 inchWood: TeakShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 21,
    //     "product_id": "HZ21",
    //     "product_name": "Exclusive Refurbished From Old Door Sandook",
    //     "category": "Big Furniture",
    //     "price": 12000,
    //     "description": "An exclusive vintage 'sandook / chest' crafted from seasoned teak wood. This piece is carved from an antique door and given an orange distressed pattern finish making this timeless piece one of its kind.Dimensions:Height: 29.5 inchWidth: 41.5 inchDepth: 27 inchWood: ReclaimedShipping:"
    //   },
    //   {
    //     "id": 22,
    //     "product_id": "HZ22",
    //     "product_name": "Luxurious Brass  Dining Table With Four Chairs",
    //     "category": "Big Furniture",
    //     "price": 58000,
    //     "description": "A vintage five piece dining table set complete with one square table and four streamlined side chairs. Crafted from seasoned sheesham wood with intricate carvings and beautiful brass.Dimensions:Table:Height: 30 inchTop: 42x42 inchChairs:Height: 40 inchSeat: 18x18 inchSitting height: 18 inchWood"
    //   },
    //   {
    //     "id": 23,
    //     "product_id": "HZ23",
    //     "product_name": "Old Gujarati Dhamchiya",
    //     "category": "Big Furniture",
    //     "price": 35000,
    //     "description": "A vintage Gujarati teak wood 'DHAMCHIYA' with a beautifully carved teal blue console. In ancient times it was known to be the Indian bride's dresser and in modern times it addes a little vintage extravagance to our modern homes.Dimensions:Height: 39 inchWidth: 48 inchDepth: 26 inchWood: TeakShipping: Additional charges calculated at checkout."
    //   },
    //   {
    //     "id": 24,
    //     "product_id": "HZ24",
    //     "product_name": "Exotic Arch Style White Console",
    //     "category": "Big Furniture",
    //     "price": 20000,
    //     "description": "A unique Mango wood ' 2 drawer arch style console' , engraved with exotic mughal style carvings. This vintage piece would make a perfect addition to your home giving it a traditional touch.Dimensions:Height: 30 inchWidth: 47 inchDepth: 15 inchWood:"
    //   },
    //   {
    //     "id": 30,
    //     "product_id": "HZ30",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 31,
    //     "product_id": "HZ31",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 32,
    //     "product_id": "HZ32",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 33,
    //     "product_id": "HZ33",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 34,
    //     "product_id": "HZ34",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 35,
    //     "product_id": "HZ35",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 36,
    //     "product_id": "HZ36",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 37,
    //     "product_id": "HZ37",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 38,
    //     "product_id": "HZ38",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 39,
    //     "product_id": "HZ39",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 40,
    //     "product_id": "HZ40",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   },
    //   {
    //     "id": 41,
    //     "product_id": "HZ41",
    //     "product_name": "Wooden Carved Circular Wall Decor",
    //     "category": "Wooden Carved Circular Wall Decor",
    //     "price": 1200,
    //     "description": "A vintage style carved plate crafted from seasoned mango wood showcasing a symmetrical design. This round wooden frame adds elegance and warmth to your walls Dimensions: Width: Diameter: 8 inch Wood: Mango Shipping: Free"
    //   }
    // ]
    
    // const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.APPWRITE_PROJECT);

    // const databases = new Databases(client);

    // // const response = await databases.createDocument(
    // //   'horizaura',
    // //   'Products',
    // //   ID.unique(),

    // // )
    // for (let index = 0; index < prodjson.length; index++) {
    //   const element = prodjson[index];
    //      const response = await databases.createDocument(
    //       'horizaura',
    //       'Products',
    //       ID.unique(),
    //       element
    //      );
    }
    // for (const product of prodjson) {
    //   const response = await databases.createDocument(
    //     'horizaura',
    //     'Products',
    //     ID.unique(),
    //     {product}
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
