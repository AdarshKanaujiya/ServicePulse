-- =======================================================
-- TRIGGER SETUP (Automatically flags errors as alerts)
-- =======================================================

-- 1. Create the Trigger Function
CREATE OR REPLACE FUNCTION create_alert()
RETURNS TRIGGER AS
$$
BEGIN
    IF NEW.log_level = 'ERROR' THEN
        INSERT INTO alerts (
            service_id,
            severity,
            message,
            status
        )
        VALUES (
            NEW.service_id,
            'HIGH',
            NEW.message,
            'ACTIVE'
        );
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Bind the Trigger to the 'logs' table
CREATE OR REPLACE TRIGGER error_alert_trigger
AFTER INSERT ON logs
FOR EACH ROW
EXECUTE FUNCTION create_alert();
