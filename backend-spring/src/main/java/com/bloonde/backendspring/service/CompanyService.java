package com.bloonde.backendspring.service;

import com.bloonde.backendspring.model.Company;
import com.bloonde.backendspring.repository.ICompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    private ICompany repository;

    public List<Company> list() {
        return this.repository.findAll();
    }
}
