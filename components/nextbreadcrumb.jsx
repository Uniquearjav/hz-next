import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  const link = {
    '/' : 'Home',
    '/store' : 'About',
    {`/product/${params.productId}`} : 'Services',
    '/contact' : 'Contact',

  }
  
  export function NextBreadcrumb() {
    return (
        <span id='breadcrumb' className="px-10 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
            <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      </span>
    )
  }
  

  