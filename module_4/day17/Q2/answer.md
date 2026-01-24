# Database Relationships in E-Commerce Application

## Definition of Database Relationship

A database relationship defines how two or more tables are connected to each other using keys.
These relationships help in organizing data efficiently, avoiding duplication, and maintaining data integrity.

In relational databases, relationships are created using:
- Primary Key (PK)
- Foreign Key (FK)

A Primary Key uniquely identifies a record in a table.
A Foreign Key is used to link one table with another.

------------------------------------------------------------

## Types of Database Relationships

There are three main types of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

------------------------------------------------------------

## 1) One-to-One Relationship (1:1)

In a one-to-one relationship, one record in Table A is related to only one record in Table B.

### E-Commerce Example

Each user has only one profile.

### Tables

Users Table
- user_id (PK)
- name
- email

User_Profile Table
- profile_id (PK)
- user_id (FK)
- address
- phone_number

Here, each user can have only one profile.

------------------------------------------------------------

## 2) One-to-Many Relationship (1:N)

In a one-to-many relationship, one record in Table A can be related to many records in Table B.

### E-Commerce Example

One customer can place many orders.

### Tables

Customers Table
- customer_id (PK)
- name
- email

Orders Table
- order_id (PK)
- customer_id (FK)
- order_date
- total_amount

Here, one customer can have multiple orders.

------------------------------------------------------------

## 3) Many-to-Many Relationship (M:N)

In a many-to-many relationship, many records in Table A can relate to many records in Table B.

This is implemented using a Junction Table.

### E-Commerce Example

One order can contain many products.
One product can be part of many orders.

### Tables

Orders Table
- order_id (PK)

Products Table
- product_id (PK)
- product_name
- price

Order_Products Table (Junction Table)
- order_id (FK)
- product_id (FK)
- quantity

This junction table connects orders and products.

------------------------------------------------------------

## Diagram Representation (Logical View)

Customers (1) -------- (N) Orders

Orders (1) -------- (N) Order_Products -------- (N) Products

Users (1) -------- (1) User_Profile

------------------------------------------------------------

## Conclusion

Database relationships are essential in designing structured and efficient databases.
In an e-commerce application:

- One-to-One is used for user and profile
- One-to-Many is used for customer and orders
- Many-to-Many is used for orders and products

These relationships help in maintaining data integrity, avoiding redundancy, and improving query performance.
