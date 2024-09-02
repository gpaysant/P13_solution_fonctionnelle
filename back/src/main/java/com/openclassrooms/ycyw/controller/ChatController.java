package com.openclassrooms.ycyw.controller;

import com.openclassrooms.ycyw.dto.ChatSessionDto;
import com.openclassrooms.ycyw.model.ChatSession;
import com.openclassrooms.ycyw.model.ServiceClient;
import com.openclassrooms.ycyw.model.Utilisateur;
import com.openclassrooms.ycyw.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
public class ChatController {
    @Autowired
    private ChatService chatService;

    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public ChatSessionDto sendMessage(ChatSessionDto chatSessionDto) {
        ChatSession chatSession = new ChatSession();
        chatSession.setId(chatSessionDto.getId());
        chatSession.setMessage(chatSessionDto.getMessage());
        Utilisateur sender = new Utilisateur();
        sender.setId(chatSessionDto.getSenderId());
        chatSession.setSender(sender);
        ServiceClient serviceClient = new ServiceClient();
        serviceClient.setId(chatSessionDto.getServiceClientId());
        chatSession.setServiceClient(serviceClient);
        chatSession.setHeureMessage(chatSessionDto.getHeureMessage());

        chatService.saveChat(chatSession);

        return chatSessionDto;
    }

}

