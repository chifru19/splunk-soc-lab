# 🛡️ Sentinel Fortress | Splunk SIEM & SOC Lab

[![Security Scan](https://img.shields.io/github/actions/workflow/status/chifru19/splunk-soc-lab/codeql.yml?branch=main&label=Security%20Scan&logo=github)](https://github.com/chifru19/splunk-soc-lab/actions)
[![NIST Compliance](https://img.shields.io/badge/Compliance-NIST%20CSF%202.0-blue)](https://www.nist.gov/cyberframework)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📖 Overview
**Sentinel Fortress** is a managed SIEM and SOC laboratory engineered to provide active defensive monitoring for mission-critical infrastructure. Originally designed to protect the "Digital Fortress" architecture, this environment integrates automated adversarial simulations with real-time incident triage and log correlation.

## 🏗️ Architecture
The lab environment is built on a modular, containerized stack designed for observability and scalability:

* **Splunk Enterprise:** Centralized indexing, custom field extraction, and security visualization.
* **Attack Generator:** Custom Python scripts designed to simulate brute-force, SQL injection, and unauthorized access behaviors.
* **Dockerized Stack:** Fully containerized environment using Docker Compose.
* **CI/CD Security:** Integrated GitHub Actions with secret scanning and environment variable obfuscation to prevent credential leakage.
* **Logging Driver:** Integrated Docker logging drivers that stream container telemetry directly to the Splunk HEC for centralized observability.



## 🕵️‍♂️ SOC Lab in Action: Threat Hunting & Triage
To validate infrastructure resilience, I perform continuous monitoring and log correlation. Below is the evidence of active threat hunting within the Sentinel Fortress environment.

### 1. Brute Force & SQL Injection Detection
Using custom **SPL (Splunk Processing Language)**, I correlated raw access logs to identify automated attack patterns targeting the infrastructure.

**Analysis:** The system successfully correlated multiple `FAILED_LOGIN` and `SQL_INJECTION_TRY` events from common default accounts (admin, root, db_user), triggering high-priority alerts for incident response.

### 2. Privileged Access Monitoring (Sudo Triage)
I utilize Regex field extraction within Splunk to identify and triage suspicious internal system behavior, specifically focusing on unauthorized escalation attempts.

**Technical Implementation (SPL):**
```splunk
index="main" source="/tmp/data/access.log" 
| rex field=_raw "user=(?<attacker_user>\w+) | action=(?<status>\w+)" 
| stats count by attacker_user, status 
| sort - count
🚀 Setup & Deployment
Prerequisites
Docker & Docker Compose

A local .env file (excluded via .gitignore) containing your SPLUNK_PASSWORD.

Deployment Commands
Bash
# Clone the repository
git clone [https://github.com/chifru19/splunk-soc-lab.git](https://github.com/chifru19/splunk-soc-lab.git)
cd splunk-soc-lab

# Start the environment
docker-compose up -d
🔐 Security & Compliance
This project adheres to "Shift Left" security principles:

NIST Alignment: Implements the Detect and Respond functions of the NIST Cybersecurity Framework (CSF) 2.0.

Credential Masking: Prevents hardcoded secrets by utilizing environment file masking and .gitignore best practices.

Audit Trail: Maintains a permanent, searchable audit trail for Root-Cause Analysis (RCA).

👨‍💻 Engineering
Frank Fru * Portfolio: frankfru.com

GitHub: chifru19

LinkedIn: linkedin.com/in/frankfru