package com.bloonde.backendspring.seed;

import com.bloonde.backendspring.model.City;
import com.bloonde.backendspring.model.Company;
import com.bloonde.backendspring.repository.ICity;
import com.bloonde.backendspring.repository.ICompany;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CompanySeed {


    public void seedCompanyTable(ICompany repository, ICity cityRepository, List<City> cities) {
        Company company = new Company();
        company.setName("Company 1");
        company.setEmail("company1@email.com");
        company.setPhone("123456789");
        company.setCity(cities.get(0));
        repository.save(company);

        Company company2 = new Company();
        company2.setName("Company 2");
        company2.setEmail("company2@email.com");
        company2.setPhone("123456789");
        company2.setCity(cities.get(1));
        repository.save(company2);
    }
}
