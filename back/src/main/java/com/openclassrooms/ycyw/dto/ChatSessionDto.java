package com.openclassrooms.ycyw.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChatSessionDto {
    private int id;
    private int serviceClientId;
    private int senderId;
    private String message;
    private Date heureMessage;
}
