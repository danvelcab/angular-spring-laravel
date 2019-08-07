package com.bloonde.backendspring.repository;

import com.bloonde.backendspring.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ICompany extends JpaRepository<Company, Integer> {
    @Modifying
    @Query(
            value = "truncate table companies",
            nativeQuery = true
    )
    void truncate();
}
