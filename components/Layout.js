import Header from "./Header";
import Footer from "./Footer";
import PageSidebar from "./PageSideBar";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="layout-wrapper">
        <main className="page-layout">
          <div className="page-content">{children}</div>
          <PageSidebar />
        </main>
      </div>

      <Footer />
    </>
  );
}
