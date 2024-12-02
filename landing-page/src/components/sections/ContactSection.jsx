import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FormInput = ({ label, error, register, type = 'text', options = [], ...props }) => {
  const renderInput = () => {
    const baseInputStyles = "w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500";
    
    if (type === 'select') {
      return (
        <select
          {...register}
          className={baseInputStyles}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
    if (type === 'textarea') {
      return (
        <textarea
          {...register}
          className={`${baseInputStyles} min-h-[120px]`}
          {...props}
        />
      );
    }
    return (
      <input
        type={type}
        {...register}
        className={baseInputStyles}
        {...props}
      />
    );
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {renderInput()}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  register: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'select', 'textarea']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const jobOptions = [
    { value: 'influencer', label: '인플루언서' },
    { value: 'business', label: '1인 사업' },
    { value: 'instructor', label: '1인 강사' },
    { value: 'freelancer', label: '프리랜서' },
    { value: 'artist', label: '예체능' },
    { value: 'other', label: '기타' }
  ];

  const onSubmit = async (data) => {
    try {
      setSubmitStatus({ type: 'loading', message: '전송 중...' });
      
      // API 호출 부분 - 백엔드 연동 시 이 부분을 수정
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }

      setSubmitStatus({ type: 'success', message: '문의가 성공적으로 전송되었습니다.' });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: '전송 중 오류가 발생했습니다. 다시 시도해 주세요.' });
    }
  };

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
          <h2 className="text-3xl font-bold mb-4">문의하기</h2>
          <p className="text-gray-600">
            궁금하신 점이 있으시다면 언제든 문의해주세요
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white rounded-xl shadow-lg p-6"
        >
          <FormInput
            label="이름"
            register={register('name', { required: '이름을 입력해주세요' })}
            error={errors.name?.message}
          />

          <FormInput
            label="연락처"
            type="tel"
            register={register('phone', { 
              required: '연락처를 입력해주세요',
              pattern: {
                value: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                message: '올바른 형식으로 입력해주세요 (예: 010-1234-5678)'
              }
            })}
            error={errors.phone?.message}
            placeholder="010-1234-5678"
          />

          <FormInput
            label="이메일"
            type="email"
            register={register('email', { 
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '올바른 이메일 주소를 입력해주세요'
              }
            })}
            error={errors.email?.message}
          />

          <FormInput
            label="직업"
            type="select"
            register={register('job')}
            options={jobOptions}
          />

          <FormInput
            label="문의사항"
            type="textarea"
            register={register('message', { required: '문의사항을 입력해주세요' })}
            error={errors.message?.message}
            placeholder="궁금하신 점을 자유롭게 작성해주세요"
          />

          <motion.button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitStatus.type === 'loading'}
          >
            {submitStatus.type === 'loading' ? '전송 중...' : '문의하기'}
          </motion.button>

          {submitStatus.message && (
            <div className={`text-center p-3 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-50 text-green-600' : 
              submitStatus.type === 'error' ? 'bg-red-50 text-red-600' : 
              'bg-gray-50 text-gray-600'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-500"
        >
          * 문의주신 내용은 영업일 기준 24시간 이내 답변드립니다
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;