package masters1.car_management;

import org.springframework.http.ResponseEntity;

public class Helpers {
	public static ResponseEntity<String> ServerError(Exception ex) {
		return ResponseEntity.
				internalServerError().
				body(ex.getMessage());
	}
	
}
