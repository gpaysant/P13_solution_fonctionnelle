package com.openclassrooms.ycyw.service;

import com.openclassrooms.ycyw.model.ChatSession;
import com.openclassrooms.ycyw.repository.ChatSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatSessionRepository chatSessionRepository;

    public List<ChatSession> getAllChats() {
        return chatSessionRepository.findAll();
    }

    public ChatSession saveChat(ChatSession chatSession) {
        return chatSessionRepository.save(chatSession);
    }
}

