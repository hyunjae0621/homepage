import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import PropTypes from 'prop-types';

const PriceCard = ({ title, price, features, isPopular, description }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className={`bg-white rounded-xl p-6 shadow-lg ${
      isPopular ? 'border-2 border-primary-500 relative' : ''
    }`}
  >
    {isPopular && (
      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
        인기 플랜
      </span>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="text-3xl font-bold text-primary-600">
        {price}
        <span className="text-base font-normal text-gray-500"></span>
      </div>
    </div>

    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <HiCheck className="text-primary-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <button 
      onClick={() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={`w-full py-3 rounded-lg transition-colors duration-200 ${
        isPopular 
          ? 'bg-primary-600 text-white hover:bg-primary-700' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      시작하기
    </button>
  </motion.div>
);



// PropTypes 추가
PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPopular: PropTypes.bool,
  description: PropTypes.string.isRequired
};

// 기본값 설정
PriceCard.defaultProps = {
  isPopular: false
};

const PriceSection = () => {
  const plans = [
    {
      title: "스타터",
      description: "처음 시작하시는 분들을 위한 베이직 플랜",
      price: "299,000원",
      features: [
        "반응형 원페이지 디자인",
        "기본 예약 시스템",
        "SNS 연동",
        "1개월 무료 호스팅",
        "기술 지원 (이메일)"
      ]
    },
    {
      title: "프로",
      description: "전문가를 위한 모든 기능",
      price: "599,000원",
      isPopular: true,
      features: [
        "멀티페이지 디자인",
        "고급 예약 관리 시스템",
        "SNS 연동",
        "결제 시스템 연동",
        "3개월 무료 호스팅",
        "우선 기술 지원 (전화/이메일)",
        "트래픽 분석"
      ]
    },
    {
      title: "비즈니스",
      description: "성장하는 비즈니스를 위한 맞춤 솔루션",
      price: "899,000원",
      features: [
        "맞춤형 디자인",
        "고급 예약 관리 시스템",
        "SNS 연동",
        "결제 시스템 연동",
        "6개월 무료 호스팅",
        "24/7 기술 지원",
        "트래픽 분석",
        "SEO 최적화",
        "도메인 1년 무료"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="space-y-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">합리적인 가격</h2>
          <p className="text-gray-600">
            당신의 비즈니스 성장을 위한 최적의 플랜을 선택하세요
          </p>
        </motion.div>

        <div className="grid gap-6">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="text-center bg-gray-50 p-6 rounded-xl"
        >
          <p className="text-sm text-gray-600">
            * 모든 플랜은 부가세 별도이며, 초기 구축 비용입니다.<br />
            * 호스팅 비용은 무료 기간 이후 월 19,900원입니다.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PriceSection;