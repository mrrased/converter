"use client";

import { Col, Layout, Row } from "antd";
import Sider from "../Bar/Sider";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  //   const base = "admin";
  //   const FrontHeader = dynamic(() => import("../header/Header"), { ssr: false });
  return (
    <Content
      style={{
        minHeight: "100vh",
        overflow: "initial",
        backgroundColor: "#fff",
      }}
    >
      {/* <div className="w-with mx-auto">
        <CBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "product",
              link: `/${base}/product`,
            },
          ]}
        />
      </div> */}
      <div className="py-4 w-full 2xl:w-[1280px] mx-auto font-medium text-[16px]">
        Calculate
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="w-full 2xl:w-[1280px] mx-auto ">
        <div className="">
          <Row className="md:mx-5 xl:mx-10 2xl:mx-0">
            <Col
              xs={24}
              sm={24}
              md={0}
              lg={0}
              xl={4}
              className="hidden lg:block"
            >
              <Sider />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={20}>
              {children}
            </Col>
          </Row>
        </div>
      </div>
      {/* <TopFooter />
      <BottomFooter />
      <div className="fixed lg:hidden bottom-0 w-full bg-white py-2">
        <FooterButton />
      </div> */}
    </Content>
  );
};

export default Contents;
