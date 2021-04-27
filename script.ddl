--@(#) script.ddl

CREATE TABLE FormosLaukoTipas
(
	id_FormosLaukoTipas integer,
	PRIMARY KEY(id_FormosLaukoTipas)
);

CREATE TABLE Imone
(
	pavadinimas varchar (255),
	id_Imone integer,
	PRIMARY KEY(id_Imone)
);

CREATE TABLE RezervacijosBusena
(
	id_RezervacijosBusena integer,
	PRIMARY KEY(id_RezervacijosBusena)
);

CREATE TABLE Role
(
	id_Role integer,
	PRIMARY KEY(id_Role)
);

CREATE TABLE SistemosNaudotojas
(
	vardas varchar (255),
	pavarde varchar (255),
	elPastas varchar (255),
	slaptazodis varchar (255),
	id_SistemosNaudotojas integer,
	PRIMARY KEY(id_SistemosNaudotojas)
);

CREATE TABLE Paslauga
(
	pavadinimas varchar (255),
	trukme integer,
	kaina,
	arAktyvi boolean,
	id_Paslauga integer,
	fk_Imoneid_Imone integer NOT NULL,
	PRIMARY KEY(id_Paslauga),
	CONSTRAINT teikia FOREIGN KEY(fk_Imoneid_Imone) REFERENCES Imone (id_Imone)
);

CREATE TABLE PaslaugosTeikejas
(
	aprasymas varchar (255),
	id_SistemosNaudotojas integer,
	fk_Roleid_Role integer NOT NULL,
	fk_Imoneid_Imone integer NOT NULL,
	PRIMARY KEY(id_SistemosNaudotojas),
	UNIQUE(fk_Roleid_Role),
	FOREIGN KEY(fk_Roleid_Role) REFERENCES Role (id_Role),
	CONSTRAINT priklauso FOREIGN KEY(fk_Imoneid_Imone) REFERENCES Imone (id_Imone),
	FOREIGN KEY(id_SistemosNaudotojas) REFERENCES SistemosNaudotojas (id_SistemosNaudotojas)
);

CREATE TABLE DarboGrafikas
(
	laikasNuo date,
	laikasIki date,
	pietuPertrauka boolean,
	pietuPertraukaNuo date,
	pietuPertraukaIki date,
	id_DarboGrafikas integer,
	fk_PaslaugosTeikejasid_SistemosNaudotojas integer NOT NULL,
	PRIMARY KEY(id_DarboGrafikas),
	UNIQUE(fk_PaslaugosTeikejasid_SistemosNaudotojas),
	CONSTRAINT sudarineja FOREIGN KEY(fk_PaslaugosTeikejasid_SistemosNaudotojas) REFERENCES PaslaugosTeikejas (id_SistemosNaudotojas)
);

CREATE TABLE Nuolaida
(
	procentas double precision,
	kodas integer,
	galiojimoPradzia date,
	galiojimoPabaiga date,
	id_Nuolaida integer,
	fk_PaslaugosTeikejasid_SistemosNaudotojas integer NOT NULL,
	PRIMARY KEY(id_Nuolaida),
	CONSTRAINT sukuria FOREIGN KEY(fk_PaslaugosTeikejasid_SistemosNaudotojas) REFERENCES PaslaugosTeikejas (id_SistemosNaudotojas)
);

CREATE TABLE RezervacijosForma
(
	id integer,
	id_RezervacijosForma integer,
	fk_PaslaugosTeikejasid_SistemosNaudotojas integer NOT NULL,
	PRIMARY KEY(id_RezervacijosForma),
	UNIQUE(fk_PaslaugosTeikejasid_SistemosNaudotojas),
	CONSTRAINT kuria FOREIGN KEY(fk_PaslaugosTeikejasid_SistemosNaudotojas) REFERENCES PaslaugosTeikejas (id_SistemosNaudotojas)
);

CREATE TABLE TeikejoPaslauga
(
	trukme integer,
	kaina double precision,
	id_TeikejoPaslauga integer,
	fk_PaslaugosTeikejasid_SistemosNaudotojas integer NOT NULL,
	fk_Paslaugaid_Paslauga integer NOT NULL,
	PRIMARY KEY(id_TeikejoPaslauga),
	CONSTRAINT teikia FOREIGN KEY(fk_PaslaugosTeikejasid_SistemosNaudotojas) REFERENCES PaslaugosTeikejas (id_SistemosNaudotojas),
	FOREIGN KEY(fk_Paslaugaid_Paslauga) REFERENCES Paslauga (id_Paslauga)
);

CREATE TABLE FormosLaukas
(
	pavadinimas varchar (255),
	arPrivalomas boolean,
	id_FormosLaukas integer,
	fk_FormosLaukoTipasid_FormosLaukoTipas integer NOT NULL,
	fk_RezervacijosFormaid_RezervacijosForma integer NOT NULL,
	PRIMARY KEY(id_FormosLaukas),
	UNIQUE(fk_FormosLaukoTipasid_FormosLaukoTipas),
	FOREIGN KEY(fk_FormosLaukoTipasid_FormosLaukoTipas) REFERENCES FormosLaukoTipas (id_FormosLaukoTipas),
	CONSTRAINT susideda_is FOREIGN KEY(fk_RezervacijosFormaid_RezervacijosForma) REFERENCES RezervacijosForma (id_RezervacijosForma)
);

CREATE TABLE Rezervacija
(
	sukurimoData date,
	id_Rezervacija integer,
	fk_RezervacijosBusenaid_RezervacijosBusena integer NOT NULL,
	fk_PaslaugosTeikejasid_SistemosNaudotojas integer NOT NULL,
	fk_DarboGrafikasid_DarboGrafikas integer NOT NULL,
	PRIMARY KEY(id_Rezervacija),
	UNIQUE(fk_RezervacijosBusenaid_RezervacijosBusena),
	FOREIGN KEY(fk_RezervacijosBusenaid_RezervacijosBusena) REFERENCES RezervacijosBusena (id_RezervacijosBusena),
	CONSTRAINT itrauktas_i FOREIGN KEY(fk_PaslaugosTeikejasid_SistemosNaudotojas) REFERENCES PaslaugosTeikejas (id_SistemosNaudotojas),
	CONSTRAINT ieina FOREIGN KEY(fk_DarboGrafikasid_DarboGrafikas) REFERENCES DarboGrafikas (id_DarboGrafikas)
);

CREATE TABLE FormosLaukoPasirinkimas
(
	rezervacijosPasirinkimas varchar (255),
	id_FormosLaukoPasirinkimas integer,
	fk_Rezervacijaid_Rezervacija integer NOT NULL,
	fk_FormosLaukasid_FormosLaukas integer NOT NULL,
	PRIMARY KEY(id_FormosLaukoPasirinkimas),
	CONSTRAINT itrauktas_i FOREIGN KEY(fk_Rezervacijaid_Rezervacija) REFERENCES Rezervacija (id_Rezervacija),
	CONSTRAINT pasirinktas FOREIGN KEY(fk_FormosLaukasid_FormosLaukas) REFERENCES FormosLaukas (id_FormosLaukas)
);

CREATE TABLE FormosVariantas
(
	pavadinimas varchar (255),
	id_FormosVariantas integer,
	fk_FormosLaukasid_FormosLaukas integer NOT NULL,
	PRIMARY KEY(id_FormosVariantas),
	CONSTRAINT turi FOREIGN KEY(fk_FormosLaukasid_FormosLaukas) REFERENCES FormosLaukas (id_FormosLaukas)
);

CREATE TABLE itraukta_i
(
	fk_Paslaugaid_Paslauga integer,
	fk_Rezervacijaid_Rezervacija integer,
	PRIMARY KEY(fk_Paslaugaid_Paslauga, fk_Rezervacijaid_Rezervacija),
	CONSTRAINT itraukta_i FOREIGN KEY(fk_Paslaugaid_Paslauga) REFERENCES Paslauga (id_Paslauga)
);

CREATE TABLE FormosVariantoPasirinkimas
(
	id_FormosVariantoPasirinkimas integer,
	fk_FormosVariantasid_FormosVariantas integer NOT NULL,
	fk_Rezervacijaid_Rezervacija integer NOT NULL,
	PRIMARY KEY(id_FormosVariantoPasirinkimas),
	CONSTRAINT pasirinktas FOREIGN KEY(fk_FormosVariantasid_FormosVariantas) REFERENCES FormosVariantas (id_FormosVariantas),
	CONSTRAINT itrauktas_i FOREIGN KEY(fk_Rezervacijaid_Rezervacija) REFERENCES Rezervacija (id_Rezervacija)
);
