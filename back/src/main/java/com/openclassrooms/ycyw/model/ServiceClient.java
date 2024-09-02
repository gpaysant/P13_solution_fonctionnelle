package com.openclassrooms.ycyw.model;

import jakarta.persistence.*;
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
public class ServiceClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Utilisateur client;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Utilisateur employee;

    private Date dateDebut;
    private Date dateFin;

}
