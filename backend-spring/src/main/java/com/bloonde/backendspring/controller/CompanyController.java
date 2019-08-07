package com.bloonde.backendspring.controller;

import com.bloonde.backendspring.model.Company;
import com.bloonde.backendspring.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @GetMapping
    public List<Company> list() {
        return this.service.list();
    }
}
