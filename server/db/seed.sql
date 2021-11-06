INSERT INTO namirnice(
        naziv,
        raspoloziva_kol,
        rok_trajanja,
        nabavna_cijena
    )
VALUES ('Sol', 2, '2022-01-03'::date, 15),
    ('Brasno', 8, '2021-10-03'::date, 10),
    ('Secer', 1, '2021-11-20'::date, 20),
    ('Sunka', 2, '2021-07-03'::date, 30),
    ('Sir', 2, '2021-07-03'::date, 20),
    ('Origano', 0.1, '2022-08-03'::date, 30),
    ('Maslinovo ulje', 1, '2023-08-03'::date, 80),
    ('Limun', 0.5, '2021-06-15'::date, 13),
    ('Krompir', 10, '2021-07-15'::date, 11),
    ('Luk', 0.5, '2021-07-15'::date, 10),
    ('Kapula', 0.8, '2022-01-03'::date, 15);
INSERT INTO jelo(naziv, cijena)
VALUES ('Mjesana Pizza', 60),
    ('Margarita Pizza', 60),
    ('Kolac', 20),
    ('Peceno', 180),
    ('Palacinke', 25);
INSERT INTO jelonamirnice(id_jelo, id_namirnice, kolicina)
VALUES (1, 1, 30),
    (1, 2, 20),
    (1, 3, 30),
    (1, 4, 30),
    (1, 5, 20),
    (1, 6, 30),
    (1, 7, 80),
    (2, 1, 30),
    (2, 2, 20),
    (2, 3, 30),
    (2, 5, 20),
    (2, 6, 30),
    (2, 7, 80);
INSERT INTO meni(naziv)
VALUES ('Juhe'),
    ('Deserti'),
    ('Meso'),
    ('Salate');
INSERT INTO dnevnimeni(datum)
VALUES ('2021-10-01'::date),
    ('2021-10-02'::date),
    ('2021-10-03'::date),
    ('2021-10-04'::date),
    ('2021-10-05'::date),
    ('2021-10-06'::date),
    ('2021-10-07'::date),
    ('2021-10-08'::date),
    ('2021-10-09'::date),
    ('2021-10-10'::date);