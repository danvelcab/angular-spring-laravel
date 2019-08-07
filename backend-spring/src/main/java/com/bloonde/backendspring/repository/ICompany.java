package com.bloonde.backendspring.repository;

import com.bloonde.backendspring.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICompany extends JpaRepository<Company, Integer> {
}
