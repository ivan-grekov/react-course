import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
