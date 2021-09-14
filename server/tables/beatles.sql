USE exercise_6;

CREATE TABLE Beatles(
    id INT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    year_of_birth INT,
    living BOOLEAN,
    famous_song VARCHAR(50)
)

-- INSERT INTO Beatles()
-- VALUES(null, "John", 1940, 0, "Imagine"),
-- (null, "Paul", 1942, 1, "Yesterday"),
-- (null, "George", 1943, 0, "Something"),
-- (null, "Ringo", 1940, 1, "Good Night");