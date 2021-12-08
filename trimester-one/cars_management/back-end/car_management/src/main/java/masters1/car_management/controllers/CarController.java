package masters1.car_management.controllers;

import java.util.ArrayList;
import java.util.List;

import masters1.car_management.FieldFilter;
import masters1.car_management.Helpers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import masters1.car_management.entities.CarEntity;
import masters1.car_management.repositories.CarRepository;


@RestController
@CrossOrigin(origins="*")
public class CarController {
	CarRepository carRepo;
	
	public CarController(CarRepository carRepo) {
		this.carRepo = carRepo;
	}
	
	@GetMapping("/car/all")
	public ResponseEntity<?> GetFiltered(
			@RequestBody List<FieldFilter> filters) {
		
		List<CarEntity> cars = carRepo.findAll();

		//no filters provided
		if(filters.isEmpty()) {
			return ResponseEntity.
					ok(cars);
		}
		
		List<CarEntity> filteredCars = new ArrayList<CarEntity>();
		
		for(FieldFilter filter : filters) {
			for(CarEntity car : cars) {
				boolean match = false;
				
				//if any filter matches, add the entity to filtered list
				switch(filter.getName()) {
					case "brand":
						if(car.getBrand().hasIdInList(filter.getValues()))
							match=true;
						break;
					case "fuel":
						if(car.getFuel().hasIdInList(filter.getValues()))
							match=true;
						break;
				}
				
				if(match)
					filteredCars.add(car);
			}
		}
		
		return ResponseEntity.
				ok(filteredCars);
	}
	
	@GetMapping("/car")
	public ResponseEntity<?> GetById(
			@RequestParam(value = "id") int id) {
		 if(carRepo.existsById(id)) {
			 return ResponseEntity.
					 ok(carRepo.findById(id).get());
		 }
		 else {
			 return ResponseEntity
					 .notFound().
					 build();
		 }
	}
	
	@PostMapping(path = "/car")
	public ResponseEntity<?> AddCar(
			@RequestBody CarEntity car	
			) {
			
			CarEntity newCar = new CarEntity();
			
			newCar.setModel(car.getModel());
			newCar.setHorsePower(car.getHorsePower());
			newCar.setReleaseYear(car.getReleaseYear());
			newCar.setBrand(car.getBrand());
			newCar.setFuel(car.getFuel());
			
			try {
				newCar = carRepo.saveAndFlush(newCar);	
				return ResponseEntity.ok(newCar);
			}
			catch(Exception ex) {
				return Helpers.ServerError(ex);
			}
	}
	
	@PutMapping(path = "/car")
	public ResponseEntity<?> UpdateCar(
			@RequestBody CarEntity car	
			) {
						
			if(carRepo.existsById(car.getId())) {
				CarEntity carEntity = carRepo.findById(car.getId()).get();
				
				carEntity.setModel(car.getModel());
				carEntity.setHorsePower(car.getHorsePower());
				carEntity.setReleaseYear(car.getReleaseYear());
				carEntity.setBrand(car.getBrand());
				carEntity.setFuel(car.getFuel());
				
				try {
					carRepo.saveAndFlush(carEntity);	
					return ResponseEntity.
							ok(carEntity);
				}
				catch(Exception ex) {
					return Helpers.ServerError(ex);
				}
			 }
			else {
				return ResponseEntity.
						notFound()
						.build();
			}			
	}
	
	@DeleteMapping("car")
	public ResponseEntity<?> DeleteById(
			@RequestParam(value = "id") int id) {
		 if(carRepo.existsById(id)) {
			 try {
			 carRepo.deleteById(id);
			 }
			 catch(Exception ex) {
					return Helpers.ServerError(ex);
			 }
			 return ResponseEntity.
					 ok()
					 .build();
		 }
		 else {
			 return ResponseEntity
					 .notFound().
					 build();
		 }
	}
}


