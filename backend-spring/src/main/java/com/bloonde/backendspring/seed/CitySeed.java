package com.bloonde.backendspring.seed;

import com.bloonde.backendspring.model.City;
import com.bloonde.backendspring.repository.ICity;
import com.bloonde.backendspring.repository.ICompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class CitySeed {

    public List<City> seedCityTable(ICity repository) {
        List<City> cities = new ArrayList<>();
        City city = new City();
        city.setName("City 1");
        repository.save(city);
        cities.add(city);

        City city2 = new City();
        city2.setName("City 2");
        repository.save(city2);
        cities.add(city2);

        return cities;
    }
}
