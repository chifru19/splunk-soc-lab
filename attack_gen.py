import time
import random
import os

# Ensure the log directory exists (mapped to your Docker volume)
LOG_FILE = "/var/log/attacks/access.log"
os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)

def generate_log():
    """Generates simulated attack and access logs."""
    users = ["admin", "root", "frank_fru", "guest", "db_user", "web_master"]
    actions = ["FAILED_LOGIN", "SUCCESSFUL_LOGIN", "FILE_ACCESS", "SUDO_ATTEMPT", "SQL_INJECTION_TRY"]
    
    print(f"--- Attack Generator Started: Writing to {LOG_FILE} ---")

    while True:
        user = random.choice(users)
        action = random.choice(actions)
        
        # Simulate Brute Force Logic: 
        # If action is FAILED_LOGIN, repeat multiple times quickly
        iterations = random.randint(10, 30) if action == "FAILED_LOGIN" else 1
        
        for _ in range(iterations):
            status = "critical" if action in ["FAILED_LOGIN", "SQL_INJECTION_TRY", "SUDO_ATTEMPT"] else "info"
            src_ip = f"192.168.1.{random.randint(2, 254)}"
            
            log_entry = f"{time.ctime()} | status={status} | user={user} | action={action} | src_ip={src_ip}\n"
            
            with open(LOG_FILE, "a") as f:
                f.write(log_entry)
            
            print(f"Log Generated: {action} for user {user}")
            
            if iterations > 1:
                time.sleep(0.1)

        time.sleep(random.randint(2, 7))

if __name__ == "__main__":
    generate_log()
