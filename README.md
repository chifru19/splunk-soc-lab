# Sentinel Fortress | Splunk SIEM & SOC Lab

**Engineer:** [Frank Fru](https://frankfru.com) | [GitHub](https://github.com/chifru19) | [LinkedIn](https://linkedin.com/in/frankfru)
**Compliance:** NIST SP 800-61 (Incident Handling)

## Overview
This laboratory environment is a managed SIEM instance designed to monitor the digital infrastructure of Fon Ngwashi Law and Agwo Carlson & Partners. It integrates automated attack simulation with real-time defensive monitoring.

## Architecture
- **Splunk Enterprise:** Centralized indexing and visualization.
- **Attack Generator:** Custom Python scripts to simulate adversarial behavior.
- **Dockerized Environment:** Scalable and isolated components using Docker Compose.

## Security Configuration
This repository uses environment variable obfuscation (`S_CRED`) to manage sensitive credentials via GitHub Secrets, ensuring compliance with secure CI/CD practices and preventing credential leakage in public logs.

## Setup & Deployment
1. Ensure your local `.env` file is configured with the necessary secrets.
2. Spin up the environment:
   ```bash
   docker-compose up -d