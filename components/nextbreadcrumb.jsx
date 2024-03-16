import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  
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
  

  