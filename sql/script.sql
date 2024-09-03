CREATE TABLE Utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(3) NOT NULL,  -- 'EMP' ou 'CLI'
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(100),
	adresse VARCHAR(600),
	codePostal INT,
	motDePasse VARCHAR(60),
	urlPhoto VARCHAR(600),
	dateCreation DATE,
	dateMiseAJour DATE,
	numTelephone INT,
    CHECK (type IN ('EMP', 'CLI'))
);

CREATE TABLE ServiceClient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    employee_id INT,
    dateDebut DATE,
    dateFin DATE,
    FOREIGN KEY (client_id) REFERENCES Utilisateur(id),
    FOREIGN KEY (employee_id) REFERENCES Utilisateur(id)
);

CREATE TABLE VideoSession (
    id INT PRIMARY KEY AUTO_INCREMENT,
    service_client_id INT,
    video_url VARCHAR(255),
    duration TIME,
    FOREIGN KEY (service_client_id) REFERENCES ServiceClient(id)
);

CREATE TABLE ChatSession (
    id INT PRIMARY KEY AUTO_INCREMENT,
    service_client_id INT,
	sender_id INT,
    message VARCHAR(300),
    heure_message DATETIME,
    FOREIGN KEY (service_client_id) REFERENCES ServiceClient(id),
	FOREIGN KEY (sender_id) REFERENCES Utilisateur(id)
);

CREATE TABLE Parametre (
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	langue VARCHAR(100),
    notificationSms BOOLEAN,
    notificationEmail BOOLEAN,
	FOREIGN KEY (user_id) REFERENCES Utilisateur(id)
);

CREATE TABLE Agence (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nom VARCHAR (60),
	adresse VARCHAR(600),
	codePostal INT,
	numTelephone INT,
	description VARCHAR (400)
);

CREATE TABLE Voiture (
	id INT PRIMARY KEY AUTO_INCREMENT,
	marque VARCHAR(40),
	modele VARCHAR (40),
	annee INT,
	nombrePlace INT,
	puissance INT,
	type VARCHAR(40),
	manuelle BOOLEAN,
	climatisation BOOLEAN,
	typeCarburant VARCHAR(20),
	photo_url VARCHAR(255),
	tarif INT,
	agence_id INT,
	FOREIGN KEY (agence_id) REFERENCES Agence(id)
);

CREATE TABLE Reservation (
	id INT PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(400),
    villeDepart VARCHAR (200),
	villeRetour VARCHAR (200),
	dateDepart DATE,
	heureDepart DATETIME,
	dateRetour DATE,
	heureRetour DATETIME,
	user_id INT,
	voiture_id INT,
	FOREIGN KEY (user_id) REFERENCES Utilisateur(id),
	FOREIGN KEY (voiture_id) REFERENCES Voiture(id)
);

CREATE TABLE Paiement (
	id INT PRIMARY KEY AUTO_INCREMENT,
	montant INT,
	datePaiement date,
	typePaiement VARCHAR (40),
	reservation_id INT,
	FOREIGN KEY (reservation_id) REFERENCES Reservation(id)
);

CREATE TABLE Promotion (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dateDebut DATE,
	dateFin DATE,
	pourcentage INT,
	description VARCHAR (400),
	voiture_id INT,
	FOREIGN KEY (voiture_id) REFERENCES Voiture(id)
);