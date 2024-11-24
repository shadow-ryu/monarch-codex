'use client'
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';

const RouteBreadcrumb = () => {
  const pathname = usePathname();

  // Split the path into segments, excluding empty segments
  const pathSegments = pathname
    .split('/')
    .filter(segment => segment !== '');
    console.log(pathSegments)
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center border-b bg-background px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {pathSegments.map((segment, index) => {
              const segmentPath = '/' + pathSegments.slice(0, index + 1).join('/');

              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={segmentPath}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase().replace(/-/g, ' ')}
                  </BreadcrumbLink>
                  {index < pathSegments.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default RouteBreadcrumb;