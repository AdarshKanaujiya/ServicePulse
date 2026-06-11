# ServicePulse

A full-stack service monitoring and support engineering platform that simulates real-world operational workflows used by Support, SRE, and Platform Engineering teams.

ServicePulse provides centralized service monitoring, log management, automated alerting, incident tracking, ticket management, SQL analytics, and observability through Prometheus and Grafana.

---

## Key Features

### Service Monitoring

* Create and manage services
* Track service health and availability
* Update service status

Supported statuses:

* UP
* DOWN
* DEGRADED

### Log Management

* Centralized application logging
* Service-specific log tracking
* Log retrieval through REST APIs
* Support for multiple log levels

Supported log levels:

* INFO
* WARNING
* ERROR
* CRITICAL

### Automated Alerting

Alerts are automatically generated from application errors.

Workflow:

Log → Alert

Supported alert statuses:

* ACTIVE
* ACKNOWLEDGED
* RESOLVED

### Incident Management

Operational incident lifecycle management.

Workflow:

Service Failure → Error Log → Alert → Incident → Resolution

Features:

* Create incidents from alerts
* Assign incidents
* Track incident status
* Resolve incidents
* Automatic alert acknowledgement

Supported statuses:

* OPEN
* IN_PROGRESS
* RESOLVED

### Ticket Management

Customer support ticket workflow.

Features:

* Create tickets
* Assign tickets
* Resolve tickets
* Close tickets

Supported statuses:

* OPEN
* ASSIGNED
* RESOLVED
* CLOSED

### API Request Logging

Tracks API activity including:

* Endpoint
* HTTP Method
* Status Code
* Response Time
* Timestamp

Stored in the `api_logs` table for auditing and analytics.

### SQL Analytics

Implemented PostgreSQL-based analytical endpoints:

* Most Failing Services
* Top API Endpoints
* Average Response Time Analysis
* Incident Status Summary
* Dashboard Summary Metrics

Dashboard metrics include:

* Total Services
* Total Alerts
* Total Incidents
* Total Tickets
* Total Logs

### Monitoring & Observability

Integrated Prometheus and Grafana for application monitoring.

#### Infrastructure Metrics

* Memory Usage
* Event Loop Metrics
* Garbage Collection Metrics
* Node.js Runtime Metrics

#### Application Metrics

* HTTP Request Count
* Request Latency
* Endpoint Monitoring
* HTTP Status Distribution

#### Business Metrics

* Active Alerts
* Open Incidents
* Open Tickets

Metrics are exposed through:

```http
GET /metrics
```

for Prometheus scraping and Grafana visualization.

---

## Technology Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Logging

* Winston
* Morgan

### Monitoring

* Prometheus
* Grafana
* prom-client

### Frontend

* React
* Axios

---

## Database Schema

Core tables:

* services
* logs
* alerts
* incidents
* tickets
* api_logs

---

## Architecture

```text
Client
   │
   ▼
Express API
   │
   ▼
PostgreSQL

Express API
   │
   ▼
Prometheus
   │
   ▼
Grafana

Logs
   │
   ▼
Alerts
   │
   ▼
Incidents

Customers
   │
   ▼
Tickets
```

---

## REST APIs

### Services

```http
GET    /api/services
POST   /api/services
PATCH  /api/services/:id
```

### Logs

```http
GET    /api/logs
POST   /api/logs
```

### Alerts

```http
GET    /api/alerts
POST   /api/alerts
PATCH  /api/alerts/:id
```

### Incidents

```http
GET    /api/incidents
POST   /api/incidents
PATCH  /api/incidents/:id
```

### Tickets

```http
GET    /api/tickets
POST   /api/tickets
PATCH  /api/tickets/:id
```

### Analytics

```http
GET /api/analytics/top-services
GET /api/analytics/top-endpoints
GET /api/analytics/latency
GET /api/analytics/incidents
GET /api/analytics/summary
```

### Monitoring

```http
GET /metrics
```

---

## Operational Workflow

```text
Service
   │
   ▼
Log Event
   │
   ▼
Alert Creation
   │
   ▼
Incident Creation
   │
   ▼
Assignment
   │
   ▼
Resolution
```

---

## Project Highlights

* REST API Development
* PostgreSQL Database Design
* SQL Analytics & Reporting
* Incident Management Workflows
* Automated Alert Generation
* Prometheus Monitoring
* Grafana Dashboards
* Operational Metrics Collection
* Full-Stack Application Development
* Production-Inspired System Design

---

## Screenshots

Add screenshots here:

### Grafana Dashboard

![Grafana Dashboard](https://github.com/AdarshKanaujiya/ServicePulse/blob/main/doc/ss/graphana-dashboard.png)

### Prometheus Metrics

![Prometheus Metrics](https://github.com/AdarshKanaujiya/ServicePulse/blob/main/doc/ss/prometheus.png)

### Service Dashboard

![Service Dashboard](https://github.com/AdarshKanaujiya/ServicePulse/blob/main/doc/ss/servicedashboard.png)

### Incident Management

![Incident Management](https://github.com/AdarshKanaujiya/ServicePulse/blob/main/doc/ss/incidents.png)

---

## Current Status

### Completed

* Database Design and Schema Modeling
* Service Management APIs
* Log Management APIs
* Automated Alert Generation
* Incident Management Workflow
* Ticket Management APIs
* SQL Analytics
* Prometheus Instrumentation
* Prometheus Scraping Configuration
* Grafana Integration
* React Dashboard
* Service Monitoring UI
* Alerts UI
* Incident Tracking UI

### Future Enhancements

* Docker Compose Deployment
* Authentication & Authorization
* Email/Slack Notifications
* Cloud Deployment
* Advanced Analytics Dashboards
* Role-Based Access Control

```
```
