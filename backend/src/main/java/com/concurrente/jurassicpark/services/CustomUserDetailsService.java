package com.concurrente.jurassicpark.services;

import com.concurrente.jurassicpark.models.User;
import com.concurrente.jurassicpark.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Obtener el usuario como Optional
        Optional<User> userOpt = userRepository.findUserByEmail(email);

        // Comprobar si existe
        User user = userOpt.orElseThrow(() ->
                new UsernameNotFoundException("User not found with email: " + email)
        );

        // Retornar un UserDetails con la información del usuario y su rol
        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRol().name())
                .build();
    }
}
