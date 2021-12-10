package masters1.car_management.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name = "tbCar")
public class CarEntity {

	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "Model", length = 100, nullable = false)
	private String model;
	
	@Column(name = "ReleaseYear")
	private Integer releaseYear;
	
	@Column(name = "HorsePower")
	private Integer horsePower;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "BrandID")
	private BrandEntity brand;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="FuelID")
	private FuelEntity fuel;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public Integer getHorsePower() {
		return horsePower;
	}

	public void setHorsePower(Integer horsePower) {
		this.horsePower = horsePower;
	}

	public BrandEntity getBrand() {
		return brand;
	}

	public void setBrand(BrandEntity brand) {
		this.brand = brand;
	}

	public FuelEntity getFuel() {
		return fuel;
	}

	public void setFuel(FuelEntity fuel) {
		this.fuel = fuel;
	}

	@Transient
	public boolean hasModelNameInList(List<String> models) {
		for(String model : models) {
			if(model.equals(this.model))
				return true;
		}
		
		return false;
	}
}
