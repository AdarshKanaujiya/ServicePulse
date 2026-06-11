CREATE INDEX idx_logs_service
ON logs(service_id);

CREATE INDEX idx_logs_level
ON logs(log_level);

CREATE INDEX idx_alert_status
ON alerts(status);

CREATE INDEX idx_incident_status
ON incidents(status);

CREATE INDEX idx_api_logs_endpoint
ON api_logs(endpoint);