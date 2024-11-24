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
import RouteBreadcrumb from "@/components/global/RouteBreadcrumb";
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
            <RouteBreadcrumb/>
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
