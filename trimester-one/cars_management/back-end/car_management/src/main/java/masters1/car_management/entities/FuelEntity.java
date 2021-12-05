package masters1.car_management.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name = "tbFuel")
public class FuelEntity {

	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "Name", length = 100, nullable = false)
	private String name;
	
	@Column(name = "Description", length = 1024)
	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@Transient
	public boolean hasIdInList(List<String> ids) {
		for(String id : ids) {
			if(Integer.parseInt(id) == this.id)
				return true;
		}
		
		return false;
	}
	
}
