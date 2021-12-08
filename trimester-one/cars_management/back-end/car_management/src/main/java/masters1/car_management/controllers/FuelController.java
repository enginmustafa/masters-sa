package masters1.car_management.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import masters1.car_management.Helpers;
import masters1.car_management.entities.FuelEntity;
import masters1.car_management.repositories.FuelRepository;

@RestController
@CrossOrigin(origins="*")
public class FuelController {
	
	FuelRepository fuelRepo;
	
	public FuelController(FuelRepository fuelRepo) {
		this.fuelRepo = fuelRepo;
	}
	
	@GetMapping("/fuel/all")
	public List<FuelEntity> GetAll() {
		return fuelRepo.findAll();
	}
	
	@GetMapping("/fuel")
	public ResponseEntity<?> GetById(
			@RequestParam(value = "id") int id) {
		 if(fuelRepo.existsById(id)) {
			 return ResponseEntity.
					 ok(fuelRepo.findById(id).get());
		 }
		 else {
			 return ResponseEntity
					 .notFound().
					 build();
		 }
	}
	
	@PostMapping(path = "/fuel")
	public ResponseEntity<?> CreateFuel(
			@RequestBody FuelEntity fuel	
			) {
			
			FuelEntity newfuel = new FuelEntity();
			
			newfuel.setName(fuel.getName());
			newfuel.setDescription(fuel.getDescription());
			
			try {
				newfuel = fuelRepo.saveAndFlush(newfuel);	
				return ResponseEntity.ok(newfuel);
			}
			catch(Exception ex) {
				return Helpers.ServerError(ex);
			}
	}
	
	@PutMapping(path = "/fuel")
	public ResponseEntity<?> Updatefuel(
			@RequestBody FuelEntity fuel	
			) {
						
			if(fuelRepo.existsById(fuel.getId())) {
				FuelEntity fuelEntity = fuelRepo.findById(fuel.getId()).get();
				
				fuelEntity.setName(fuel.getName());
				fuelEntity.setDescription(fuel.getDescription());
				
				try {
					fuelRepo.saveAndFlush(fuelEntity);	
					return ResponseEntity.
							ok(fuelEntity);
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
	
	@DeleteMapping("/fuel")
	public ResponseEntity<?> DeleteById(
			@RequestParam(value = "id") int id) {
		 if(fuelRepo.existsById(id)) {
			 try {
			 fuelRepo.deleteById(id);
			 }
			 catch(Exception ex) {
					return Helpers.ServerError(ex);
			 }
			 return ResponseEntity.ok().build();
		 }
		 else {
			 return ResponseEntity
					 .notFound().
					 build();
		 }
	}

}
