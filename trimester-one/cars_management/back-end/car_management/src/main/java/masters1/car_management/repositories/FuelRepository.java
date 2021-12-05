package masters1.car_management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import masters1.car_management.entities.FuelEntity;

public interface FuelRepository extends JpaRepository<FuelEntity, Integer> {

}
