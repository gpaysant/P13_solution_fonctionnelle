package com.openclassrooms.ycyw.controller;

import com.openclassrooms.ycyw.dto.ChatSessionDto;
import com.openclassrooms.ycyw.model.ChatSession;
import com.openclassrooms.ycyw.model.ServiceClient;
import com.openclassrooms.ycyw.model.Utilisateur;
import com.openclassrooms.ycyw.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chats")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping
    public List<ChatSession> getAllChats() {
        return chatService.getAllChats();
    }

    @PostMapping
    public ChatSession saveChat(@RequestBody ChatSessionDto chatSessionDto) {
        System.out.println(chatSessionDto);
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
        System.out.println(chatSession);
        return chatService.saveChat(chatSession);
    }
}

