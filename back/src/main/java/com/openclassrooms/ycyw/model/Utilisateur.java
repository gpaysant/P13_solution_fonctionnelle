package com.openclassrooms.ycyw.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String nom;
    private String prenom;
    private String email;
    private String adresse;
    private int codePostal;
    private String motDePasse;
    private String urlPhoto;
    private Date dateCreation;
    private Date dateMiseAJour;
    private int numTelephone;

}

