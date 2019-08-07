package com.bloonde.backendspring.seed;

import com.bloonde.backendspring.model.City;
import com.bloonde.backendspring.repository.ICity;
import com.bloonde.backendspring.repository.ICompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DBSeed implements ApplicationListener<ApplicationReadyEvent> {
    @Autowired
    private ICity cityRepository;
    @Autowired
    private ICompany companyRepository;
    @Override
    public void onApplicationEvent(final ApplicationReadyEvent event) {
        this.companyRepository.deleteAll();
        this.cityRepository.deleteAll();
        CitySeed citySeed = new CitySeed();
        List<City> cities = citySeed.seedCityTable(this.cityRepository);
        CompanySeed companySeed = new CompanySeed();
        companySeed.seedCompanyTable(this.companyRepository, this.cityRepository, cities);
    }
}
