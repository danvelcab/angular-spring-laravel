package com.bloonde.backendspring.repository;

import com.bloonde.backendspring.model.City;
import com.bloonde.backendspring.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ICity extends JpaRepository<City, Integer> {
    @Modifying
    @Query(
            value = "truncate table cities",
            nativeQuery = true
    )
    void truncate();
}
