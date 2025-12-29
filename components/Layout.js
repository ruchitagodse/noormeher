import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="layout-wrapper">
        <main className="page-layout">
          <div className="page-content">{children}</div>
          <Sidebar />
        </main>
      </div>

      <Footer />
    </>
  );
}
