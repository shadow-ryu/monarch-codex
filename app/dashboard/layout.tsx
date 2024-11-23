import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";
type Props = {
  children: React.ReactNode;
};

const onBoardingLayout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen w-full">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex w-full flex-1 flex-col">
            <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center border-b bg-background px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="" />
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <main className="flex-1">
              <SidebarInset className="h-full">{children}</SidebarInset>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default onBoardingLayout;
