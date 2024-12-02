import { motion } from 'framer-motion';

const MainSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold leading-tight">
          살아남는 사람들은{' '}<br />
          <span className="text-primary-600">자신만의 공간</span>이
          <br />
          분명히 있습니다
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          SNS는 일시적입니다.<br />
          당신만의 영구적인 디지털 정원을 가꾸어보세요.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            시작하기
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-gray-400 text-sm">스크롤하여 더 알아보기</div>
      </motion.div>
    </div>
  );
};

export default MainSection;