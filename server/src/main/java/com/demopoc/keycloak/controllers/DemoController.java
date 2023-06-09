package com.demopoc.keycloak.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.security.authorization.AuthorityAuthorizationManager.hasRole;


@RestController
@RequestMapping("/api/v1/demo")
public class DemoController {
    @GetMapping
    @PreAuthorize("hasRole('user')")
    public String hello() {
        return "Hello everyone";
    }

    @GetMapping("/hello-2")
    @PreAuthorize("hasRole('admin')")
    public String hello2() {
        return "Hello admins";
    }
}
