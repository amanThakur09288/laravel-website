import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import PageLoader from "./components/common/PageLoader";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

const Home = lazy(() => import("./pages/Home"));
const UpcomingBatches = lazy(() => import("./pages/UpcomingBatches"));
const BatchDetails = lazy(() => import("./pages/BatchDetails"));
const InfrastructureNetwork = lazy(
  () => import("./pages/services/InfrastructureNetwork"),
);
const Cloud = lazy(() => import("./pages/services/Cloud"));
const Security = lazy(() => import("./pages/services/Security"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const Training = lazy(() => import("./pages/services/Training"));
const Consulting = lazy(() => import("./pages/services/Consulting"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming-batches" element={<UpcomingBatches />} />
            <Route path="/upcoming-batches/:slug" element={<BatchDetails />} />
            <Route
              path="/services/infrastructure-network"
              element={<InfrastructureNetwork />}
            />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/security" element={<Security />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
