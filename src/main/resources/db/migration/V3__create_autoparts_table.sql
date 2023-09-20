CREATE TABLE autoparts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    part_name VARCHAR(100) NOT NULL,
    category VARCHAR(40) NOT NULL,
    car_name VARCHAR(80) NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    image VARCHAR(255) NOT NULL
);
