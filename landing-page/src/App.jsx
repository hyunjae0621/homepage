import { lazy, Suspense } from 'react';
import './styles/globals.css';
import Navbar from './components/layout/Navbar';
import ErrorBoundary from './components/error/ErrorBoundary';

// Lazy imports
const MainSection = lazy(() => import('./components/sections/MainSection'));
const WhySection = lazy(() => import('./components/sections/WhySection'));
const PortfolioSection = lazy(() => import('./components/sections/PortfolioSection'));
const PriceSection = lazy(() => import('./components/sections/PriceSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
const QnaSection = lazy(() => import('./components/sections/QnaSection'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      {/* 최외곽 컨테이너 - 전체 배경색 적용 */}
      <div className="min-h-screen w-full bg-gray-50">
        {/* 실제 콘텐츠 영역을 중앙으로 제한하는 컨테이너 */}
        <div className="relative mx-auto min-h-screen flex justify-center w-full">
          {/* 콘텐츠의 최대 너비를 제한하고 중앙 정렬하는 컨테이너 */}
          <div className="w-full max-w-[1200px] bg-white shadow-lg">
            {/* 고정 네비게이션 바 */}
            <Navbar />
            
            {/* 메인 콘텐츠 영역 */}
            <main className="relative">
              <Suspense fallback={<LoadingFallback />}>
                <section id="main" className="min-h-screen flex items-center justify-center px-4">
                  <MainSection />
                </section>

                <section id="why" className="min-h-screen flex items-center justify-center px-4">
                  <WhySection />
                </section>

                <section id="portfolio" className="min-h-screen flex items-center justify-center px-4">
                  <PortfolioSection />
                </section>

                <section id="price" className="min-h-screen flex items-center justify-center px-4">
                  <PriceSection />
                </section>

                <section id="contact" className="min-h-screen flex items-center justify-center px-4">
                  <ContactSection />
                </section>

                <section id="qna" className="min-h-screen flex items-center justify-center px-4">
                  <QnaSection />
                </section>
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;