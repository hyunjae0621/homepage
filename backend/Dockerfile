# 베이스 이미지 (본인 프로젝트에 맞는 버전 기입)
FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# 종속성 파일 복사
COPY ./requirements.txt /homepage/


# 작업 디렉토리 설정
WORKDIR /homepage

# 종속성 설치
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn

# 애플리케이션 코드 복사
COPY ./app /homepage/app
WORKDIR /homepage/app


# 소켓 파일 생성 디렉토리 권한 설정
RUN mkdir -p /homepage && chmod -R 755 /homepage

# Gunicorn을 사용하여 애플리케이션 실행
COPY ./scripts /scripts
RUN chmod +x /scripts/run.sh
CMD ["/scripts/run.sh"]