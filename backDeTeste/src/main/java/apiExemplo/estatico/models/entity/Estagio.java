package apiExemplo.estatico.models.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Estagio {
    @Id
    private int id;
    private String cargo;
    private int cargaHoraria;
    private double valorBolsa;
    private int vagas;
    private String modalidade;
}
