Schema Design in Relational Databases
1. What is Schema Design and what a Database Schema represents
    Schema design is the process of planning and organizing how data will be stored in a database before creating tables.
    A database schema is the blueprint or structure of the database.
It defines:
    What tables exist
    What columns each table has
    Data types of columns
    Relationships between tables
    Constraints and validations

Example:
In an E-commerce system, schema decides tables like:
Users
Products
Orders
Payments

2. Why schema design is required before writing backend code
    Backend code depends completely on how data is stored.

If schema is not designed properly:
    Developers won’t know where data is stored
    Code becomes confusing and hard to manage
    Frequent database changes will break the backend

When schema is ready:
    Backend developers know exact table names and fields
    Queries become clear and easy
    Development becomes faster and structured
So, schema design comes first, backend code comes next.

3. How schema design impacts data consistency, maintenance, and scalability
Data Consistency.
    Proper schema avoids duplicate and incorrect data using constraints and relationships.

Example: A user email stored once in Users table instead of multiple places.
Maintenance:
    If each table has a clear purpose, changes are easy.

Example: Changing user details only in Users table.
Scalability:
    Well-designed schema can handle large data without performance issues.

Example: Separate Orders table can grow without affecting Users table.

4. What validations are in schema design and why databases enforce validations

Validations (constraints) are rules applied to columns to ensure correct data.

Validation	          Meaning	                        Example
NOT NULL	          Value must be present	            User name cannot be empty
UNIQUE	              No duplicate values	            Email must be unique
DEFAULT	              Default value if none given	    Status = 'Active'
PRIMARY KEY	          Unique identifier for each row	User ID
FOREIGN KEY	          Link between tables	            Order linked to User

Databases enforce these to protect data from wrong entries even if backend has bugs.

5. Difference between a Database Schema and a Database Table
Database Schema	                    Database Table
Overall structure of the database	A single entity inside schema
Contains many tables	            Contains rows and columns
Blueprint	                        Actual data storage
Example: E-commerce schema	        Example: Users table

6. Why a table should represent only one entity
    Each table should store data about only one real-world object.

Wrong: Users and Orders in same table
Correct: Separate Users table and Orders table

This makes:
    Data easy to understand
    Queries simple
    Updates easier
    Avoids data duplication

7. Why redundant or derived data should be avoided in table design

Redundant data = Same data stored multiple times.
Problems:
    Wastes storage
    Causes inconsistency
    Hard to update

Derived data = Data that can be calculated.
Example:
    Storing total_price in Orders table when it can be calculated from quantity × price.
    Better to calculate when needed instead of storing.

8. Importance of choosing correct data types while designing tables

Choosing correct data types:
    Saves memory
    Improves performance
    Prevents invalid data

Examples:
    INT for IDs
    VARCHAR for names
    DATE for dates
    BOOLEAN for true/false
Wrong data type can cause errors and slow queries.

Conclusion
    Schema design is the foundation of a relational database.
A well-designed schema ensures:
    Clean data
    Easy development
    Better performance
    Long-term scalability
Proper schema design makes both database and backend development efficient and reliable.