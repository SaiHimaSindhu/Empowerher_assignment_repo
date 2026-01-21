# Database Fundamentals – Conceptual Understanding

---

## 1. Why is db.json not suitable as a database for real projects?

Using a `db.json` file is not suitable for real-world applications because it is only a simple file-based storage system and lacks essential database features.

### Limitations of file-based storage:
- **Performance**: Every read or write operation requires loading the entire file, which becomes slow as data grows.
- **Scalability**: It cannot handle large amounts of data or multiple users efficiently.
- **Concurrency issues**: If multiple users try to access or modify the file at the same time, data corruption may occur.
- **Reliability**: There is no backup, recovery, or transaction mechanism. If the file gets corrupted, data may be lost.
- **No security**: File-based storage does not provide proper authentication or access control.

Therefore, `db.json` is suitable only for learning or small demo projects, not for production applications.

---

## 2. What are the ideal characteristics of a database system (apart from storage)?

A good database system should provide more than just data storage. Some important characteristics are:

- **Performance**: The database should retrieve and store data quickly, even with large datasets.
- **Concurrency**: Multiple users should be able to access and modify data simultaneously without conflicts.
- **Reliability**: The system should ensure data is always available and not easily lost.
- **Data Integrity**: The database should maintain accuracy and consistency of data using constraints and validations.
- **Scalability**: It should handle increasing data and user load without performance degradation.
- **Fault Tolerance**: The system should recover from crashes or failures without losing data.

These features make database systems reliable for real-world applications.

---

## 3. How many types of databases are there? What are their use cases?

Databases are mainly classified into two types:

### 1. Relational Databases
Relational databases store data in tables with rows and columns and follow a fixed schema.

**Examples**: MySQL, PostgreSQL, Oracle

**Use cases**:
- Banking systems
- Student management systems
- E-commerce applications
- Applications requiring structured data and complex queries

---

### 2. Non-Relational (NoSQL) Databases
NoSQL databases store data in flexible formats like documents, key-value pairs, or graphs.

**Examples**: MongoDB, Firebase, Redis

**Use cases**:
- Social media applications
- Real-time applications
- Big data and analytics
- Applications with rapidly changing data structures

---

## Conclusion

Relational databases are best suited for structured and transactional data, while NoSQL databases are ideal for flexible, scalable, and high-performance applications. Choosing the right database depends on the project requirements.
