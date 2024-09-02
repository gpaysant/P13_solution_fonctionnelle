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
public class ChatSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "service_client_id", referencedColumnName = "id")
    private ServiceClient serviceClient;

    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id")
    private Utilisateur sender;

    private String message;
    private Date heureMessage;

}

