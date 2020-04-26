BEGIN TRANSACTION;

CREATE TABLE favfoods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255),
    favorite_food VARCHAR(255)
);

INSERT INTO favfoods (name, lastname, favorite_food) VALUES
('Chip', 'Crawford', 'Hamburgers'),
('Julia', 'Kyung', 'Pasta'),
('Tam', 'Nguyen', 'Peperonni Pizza'),
('Garret', 'Chun', 'Loco Moco'),
('Jeff', 'Bentley', 'Roast'),
('Polly', 'Stucliff', 'Sushi'),
('Halee', 'From Cali', 'Salad'),
('Roger', 'Vancouver', 'Spaghetti'),
('Shuntaro', 'Maekawa', 'Sashimi'),
('Kohki', 'Shiga', 'Natto'),
('Yuta', 'The man', 'Cheese burrito'),
('Yasuhiko', 'Nara', 'Kimchi'),
('Yurika', 'Namba', 'Ravioli'),
('Aizhan', 'Imankulova', 'Pork chops'),
('Riku', 'Kawano', 'Fish Tacos'),
('Mako', 'Kusuda', 'Okonomiyaki'),
('Zowie', 'Amazing', 'Teppanyaki'),
('Yuya', 'Harada', 'Tacos'),
('Carlos', 'Salazar', 'Tacos');

COMMIT;