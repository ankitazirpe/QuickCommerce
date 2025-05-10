package com.quickcomm.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfigClass  {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors().and() // Enable CORS support
            .csrf().disable() // Disable CSRF for simplicity (adjust if needed)
            .authorizeRequests(auth -> auth
                .requestMatchers("/User/Register", "/user/login", "/User/update/**").permitAll() // Allow signup and login without authentication
                .requestMatchers("/user/preferences/matches/**","/messages/conversation" , "/messages/conversations", "/user/**" , "/messages/unreadCount/**","/messages/markAsRead").permitAll()
                .requestMatchers("/messages/send", "/profile-picture/upload" , "/profile-picture/**","/**","/uploads/profile-pictures/**","/uploads/**").permitAll()
                .anyRequest().authenticated() // All other routes require authentication
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    // Bean to enable CORS configuration
    @Bean
    public WebConfig corsConfig() {
        return new WebConfig();
    }
}
