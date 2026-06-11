-- 1. SERVICES (Create first because alerts and logs need it)
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'UP',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. ALERTS (Create second because incidents needs it)
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id),
    severity VARCHAR(20),
    message TEXT,
    status VARCHAR(30) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. INCIDENTS (Create third because it depends on alerts)
CREATE TABLE incidents (
    id SERIAL PRIMARY KEY,
    alert_id INT REFERENCES alerts(id),
    title VARCHAR(255),
    description TEXT,
    status VARCHAR(50) DEFAULT 'OPEN',
    assigned_to VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 4. LOGS
CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id),
    log_level VARCHAR(20),
    message TEXT,
    timestamp TIMESTAMP DEFAULT NOW()
);

-- 5. API LOGS
CREATE TABLE api_logs (
    id SERIAL PRIMARY KEY,
    endpoint VARCHAR(255),
    method VARCHAR(20),
    status_code INT,
    response_time NUMERIC,
    timestamp TIMESTAMP DEFAULT NOW()
);

-- 6. TICKETS
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    issue TEXT,
    status VARCHAR(50) DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT NOW()
);
