CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username CHARACTER VARYING(30) NOT NULL UNIQUE,
    createAt INTEGER NOT NULL DEFAULT 0,
    password CHARACTER VARYING(32) NOT NULL DEFAULT '',
    email CHARACTER VARYING(64) NOT NULL DEFAULT '',
    fullname CHARACTER VARYING(150) NOT NULL DEFAULT '',
    lasttime INTEGER NOT NULL DEFAULT 0,
    last_authorize INTEGER NOT NULL DEFAULT 0,
    ip_addr CHAR(32) NOT NULL DEFAULT '',
    accessToken CHAR(32) DEFAULT ''
);
CREATE TABLE IF NOT EXISTS Jelo (
    id SERIAL PRIMARY KEY,
    naziv CHARACTER VARYING(30) NOT NULL UNIQUE,
    cijena REAL NOT NULL,
    CONSTRAINT POZITIVNA_VRIJEDNOST CHECK (cijena > 0)
);
CREATE TABLE IF NOT EXISTS Racun (
    id SERIAL PRIMARY KEY,
    datum TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS Namirnice (
    id SERIAL PRIMARY KEY,
    naziv CHARACTER VARYING(30) NOT NULL UNIQUE,
    raspoloziva_kol REAL,
    rok_trajanja DATE,
    nabavna_cijena REAL,
    CONSTRAINT POZITIVNA_VRIJEDNOST CHECK (
        raspoloziva_kol > 0
        AND nabavna_cijena > 0
    ),
    CONSTRAINT DATUM_NAKON CHECK (rok_trajanja > now())
);
CREATE TABLE IF NOT EXISTS DnevniMeni (
    id SERIAL PRIMARY KEY,
    datum DATE NOT NULL UNIQUE,
    CONSTRAINT DATUM_NAKON CHECK (datum > now())
);
CREATE TABLE IF NOT EXISTS Meni (
    id SERIAL PRIMARY KEY,
    naziv CHARACTER VARYING(30) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS JeloRacun (
    id_jelo BIGINT references Jelo(id),
    id_racun BIGINT references Racun(id),
    kolicina REAL NOT NULL DEFAULT 1,
    PRIMARY KEY (id_jelo, id_racun),
    CONSTRAINT POZITIVNA_VRIJEDNOST CHECK (kolicina > 0)
);
CREATE TABLE IF NOT EXISTS JeloNamirnice (
    id_jelo BIGINT references Jelo(id),
    id_namirnice BIGINT references Namirnice(id),
    kolicina REAL NOT NULL DEFAULT 1,
    PRIMARY KEY (id_jelo, id_namirnice),
    CONSTRAINT POZITIVNA_VRIJEDNOST CHECK (kolicina > 0)
);
CREATE TABLE IF NOT EXISTS JeloDnevniMeni (
    id_jelo BIGINT references Jelo(id),
    id_dnevnimeni BIGINT references DnevniMeni(id),
    broj_porcija INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (id_jelo, id_dnevnimeni),
    CONSTRAINT POZITIVNA_VRIJEDNOST CHECK (broj_porcija > 0)
);
CREATE TABLE IF NOT EXISTS JeloMeni (
    id_jelo BIGINT references Jelo(id),
    id_meni BIGINT references Meni(id),
    PRIMARY KEY (id_jelo, id_meni)
);