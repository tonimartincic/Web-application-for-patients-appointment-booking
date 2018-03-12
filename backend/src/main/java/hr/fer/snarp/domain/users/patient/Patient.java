package hr.fer.snarp.domain.users.patient;

import hr.fer.snarp.domain.users.user.User;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Patient extends User {
}
