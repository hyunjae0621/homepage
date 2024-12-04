# HomePage Project

개인 홈페이지 제작 서비스를 위한 웹 애플리케이션입니다.

## 프로젝트 구조

- `backend/`: Django 백엔드
- `landing-page/`: React 프론트엔드

## 시작하기

### 백엔드 설정
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 프론트엔드 설정
```bash
cd landing-page
npm install
npm run dev
```

## 기술 스택

- 백엔드: Django, Django REST Framework
- 프론트엔드: React, Tailwind CSS, Framer Motion
- 데이터베이스: SQLite (개발) / PostgreSQL (배포)