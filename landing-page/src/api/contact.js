const API_URL = 'http://localhost:8000/api';

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};