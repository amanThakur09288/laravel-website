import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import PageLoader from "./components/common/PageLoader";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";

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

import Quizzes from "./pages/Quizzes";
import QuizDetails from "./pages/QuizDetails";
import QuizAttempt from "./pages/QuizAttempt";
import QuizResult from "./pages/QuizResult";

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
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />

            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:id" element={<QuizDetails />} />
            {/* <Route path="/quiz-attempts/:attemptId" element={<QuizAttempt />} /> */}
            {/* <Route
              path="/quiz-attempts/:attemptId/result"
              element={<QuizResult />}
            /> */}
            <Route path="/quiz-results/:attemptId" element={<QuizResult />} />
            <Route path="/quiz-attempts/:id" element={<QuizAttempt />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
