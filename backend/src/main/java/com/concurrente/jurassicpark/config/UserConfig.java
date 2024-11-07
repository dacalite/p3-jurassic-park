package com.concurrente.jurassicpark.config;

import com.concurrente.jurassicpark.models.Rol;
import com.concurrente.jurassicpark.models.User;
import com.concurrente.jurassicpark.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner userRunner(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            User defaultUser = new User("user@jurassicpark.com", "user", passwordEncoder.encode("user"), Rol.USER);
            userRepository.deleteAll();
            userRepository.save(defaultUser);
        };
    }
}
