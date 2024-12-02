import { motion } from 'framer-motion';
import { HiGlobe, HiClock, HiTrendingUp } from 'react-icons/hi';

const WhySection = () => {
  const reasons = [
    {
      icon: <HiGlobe className="w-8 h-8 text-primary-600" />,
      title: "나만의 영구적인 디지털 공간",
      description: "SNS는 알고리즘에 의존적이지만, 홈페이지는 당신만의 영구적인 디지털 자산이 됩니다."
    },
    {
      icon: <HiClock className="w-8 h-8 text-primary-600" />,
      title: "24/7 비즈니스 허브",
      description: "잠들어 있는 동안에도 당신의 비즈니스는 계속됩니다. 자동화된 예약 시스템으로 언제든 고객을 맞이하세요."
    },
    {
      icon: <HiTrendingUp className="w-8 h-8 text-primary-600" />,
      title: "프로페셔널한 브랜딩",
      description: "SNS만으로는 부족합니다. 전문성과 신뢰도를 높이는 프로페셔널한 온라인 거점이 필요합니다."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            왜 홈페이지가 필요할까요?
          </h2>
          <p className="text-gray-600">
            SNS는 시작일 뿐입니다. 진정한 비즈니스 성장은 여기서 시작됩니다.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="space-y-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="text-center bg-primary-50 rounded-xl p-6"
        >
          <p className="text-lg text-primary-800 font-medium">
            단순한 SNS 계정이 아닌, <br />
            당신의 비즈니스를 대표하는 프로페셔널한 공간을 만들어보세요
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhySection;