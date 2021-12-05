package masters1.car_management.controllers;

import java.util.List;
import masters1.car_management.Helpers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import masters1.car_management.entities.BrandEntity;
import masters1.car_management.repositories.BrandRepository;


@RestController
public class BrandController {

	BrandRepository brandRepo;
	
	public BrandController(BrandRepository brandRepo) {
		this.brandRepo = brandRepo;
	}
	
	@GetMapping("brand/all")
	public List<BrandEntity> GetAll() {
		return brandRepo.findAll();
	}
	
	@GetMapping("brand")
	public ResponseEntity<?> GetById(
			@RequestParam(value = "id") int id) {
		 if(brandRepo.existsById(id)) {
			 return ResponseEntity.
					 ok(brandRepo.findById(id).get());
		 }
		 else {
			 return ResponseEntity
					 .notFound().
					 build();
		 }
	}
	
	@PostMapping(path = "/brand")
	public ResponseEntity<?> CreateBrand(
			@RequestBody BrandEntity brand	
			) {
			
			BrandEntity newBrand = new BrandEntity();
			
			newBrand.setName(brand.getName());
			newBrand.setDescription(brand.getDescription());
			
			try {
				newBrand = brandRepo.saveAndFlush(newBrand);	
				return ResponseEntity.ok(newBrand);
			}
			catch(Exception ex) {
				return Helpers.ServerError(ex);
			}
	}
	
	@PutMapping(path = "/brand")
	public ResponseEntity<?> UpdateBrand(
			@RequestBody BrandEntity brand	
			) {
						
			if(brandRepo.existsById(brand.getId())) {
				BrandEntity brandEntity = brandRepo.findById(brand.getId()).get();
				
				brandEntity.setName(brand.getName());
				brandEntity.setDescription(brand.getDescription());
				
				try {
					brandRepo.saveAndFlush(brandEntity);	
					return ResponseEntity.
							ok(brandEntity);
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
	
	@DeleteMapping("brand")
	public ResponseEntity<?> DeleteById(
			@RequestParam(value = "id") int id) {
		 if(brandRepo.existsById(id)) {
			 try {
			 brandRepo.deleteById(id);
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


