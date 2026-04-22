FROM python:3.9-slim
RUN apt-get update && apt-get install -y curl
WORKDIR /app
COPY attack_gen.py .
CMD ["python", "attack_gen.py"]