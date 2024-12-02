import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import PropTypes from 'prop-types';

const QnaItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex justify-between items-center text-left hover:bg-gray-50"
      >
        <span className="font-medium pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="p-6 text-gray-600 whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

QnaItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

const QnaSection = () => {
  const qnaList = [
    {
      question: "홈페이지 제작 기간은 얼마나 걸리나요?",
      answer: "기본적으로 디자인 협의 후 2주 이내 제작이 완료됩니다.\n고객님의 피드백 반영과 수정 작업 기간에 따라 약간의 차이가 있을 수 있습니다.\n급하신 경우 빠른 제작도 가능하니 문의해주세요."
    },
    {
      question: "제작 후 수정이 가능한가요?",
      answer: "네, 제작 완료 후 2주 동안은 무상으로 수정이 가능합니다.\n이후에는 유지보수 계약을 통해 지속적인 관리를 받으실 수 있습니다.\n간단한 텍스트나 이미지 수정은 직접 관리자 페이지에서 하실 수 있도록 안내해드립니다."
    },
    {
      question: "모바일에서도 잘 보이나요?",
      answer: "네, 모든 홈페이지는 모바일 환경에 최적화되어 제작됩니다.\n실제로 대부분의 고객들이 모바일로 접속하시기 때문에, 모바일 사용성을 가장 중요하게 고려하여 디자인합니다."
    },
    {
      question: "도메인과 호스팅은 어떻게 되나요?",
      answer: "도메인 구매와 호스팅 서비스를 모두 지원해드립니다.\n초기 1년 호스팅은 무료로 제공되며, 이후에는 월 19,900원의 유지비용이 발생합니다.\n기존에 보유하고 계신 도메인이 있다면 그대로 사용하실 수도 있습니다."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto w-full space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
          <p className="text-gray-600">
            궁금하신 점을 빠르게 확인하세요
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {qnaList.map((item, index) => (
            <QnaItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            더 궁금하신 점이 있으신가요?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
          >
            문의하기
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QnaSection;
