import Contents from "@/components/contents/Contents.";
// import SideBar from "@/components/ui/sidebar/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const [isMobile, setIsMobile] = useSt

  // const cookieStore = cookies();
  // const hasCookie = cookieStore.get("XSRF-TOKEN");
  // console.log(hasCookie, "cookies");

  // window.addEventListener("resize", () => {
  //   setIsMobile(window.innerWidth <= 425);
  // });

  return (
    <Layout hasSider className="bg-[#fefefe]">
      {/* <SideBar /> */}

      <Layout>
        <Contents>{children}</Contents>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
