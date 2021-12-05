package masters1.car_management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import masters1.car_management.entities.BrandEntity;

public interface BrandRepository extends JpaRepository<BrandEntity, Integer> {

}
