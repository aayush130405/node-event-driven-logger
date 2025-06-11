# Node.js Event-Driven System Logger

A lightweight, modular event-driven logger built with Node.js. This project demonstrates best practices in event-driven architecture, asynchronous file I/O, and basic system monitoring. It leverages Node’s core modules to emit and handle custom logging events, while periodically recording system memory usage to a persistent log file.

---

## Features

- **Event-Driven Logging:** Decouples log generation from log handling using a custom `EventEmitter`-based logger.
- **System Monitoring:** Periodically logs system memory usage for basic observability.
- **Timestamped Log Entries:** All logs are timestamped in ISO format for easy parsing and analysis.
- **Persistent File Output:** Appends logs to `eventlog.txt` for durability and later review.
- **Extensible Design:** Easily add new event types or log handlers for advanced use cases.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/node-event-driven-system-logger.git
    cd node-event-driven-system-logger
    ```

2. **Install dependencies:**  
   *(No external dependencies required for the base project)*

3. **Run the logger:**
    ```sh
    node eventLogger.js
    ```

---

## Usage

- On startup, the logger writes initial application events to `eventlog.txt`.
- Every 3 seconds, it logs the current system memory usage as a percentage.
- All log entries are timestamped and appended to the log file.

**Sample log output:**
```
2025-06-11T10:00:00.000Z - Application started
2025-06-11T10:00:00.001Z - Application processing
2025-06-11T10:00:03.000Z - Memory being used is : 42.13%
```

---

## Code Overview

- **eventLogger.js:**  
  - Defines a `Logger` class extending `EventEmitter`.
  - Emits `'message'` events for log entries.
  - Listens for `'message'` events and writes them to `eventlog.txt`.
  - Uses `os` module to monitor memory usage.

---

## Extending the Logger

- **Add new event types:**  
  Emit and handle custom events (e.g., error, warning, info).
- **Asynchronous Logging:**  
  Replace `fs.appendFileSync` with `fs.appendFile` for non-blocking I/O.
- **Log Rotation:**  
  Implement log rotation for large-scale or long-running applications.
- **Integration:**  
  Use as a module in larger Node.js applications for centralized logging.

---

## Best Practices Demonstrated

- Event-driven architecture for decoupled, scalable code.
- Use of Node.js core modules (`fs`, `os`, `events`).
- Modular, extensible design.
- Clear, timestamped logging for traceability.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, new features, or bug fixes.

---

## License

MIT License

---

## Author

[Aayush Yadav](https://github.com/aayush130405)
