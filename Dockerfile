# Dockerfile
FROM python:latest

COPY app.py /app/app.py

WORKDIR /app

CMD ["python", "app.py"]