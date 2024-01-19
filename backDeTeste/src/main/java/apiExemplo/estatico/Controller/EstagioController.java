package apiExemplo.estatico.Controller;

import apiExemplo.estatico.models.entity.Estagio;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
public class EstagioController {
    @GetMapping("/estagio")
    public List<Estagio> getAllEstagios () {
        List<Estagio> lista = new ArrayList<>();
        lista.add(new Estagio(0, "SIGA", "Dev. SIGA", 20,
                900, 5, "Remoto"
        ));

        lista.add(new Estagio(1, "Microsoft", "Dev. Web", 26,
                1250, 4, "Híbrido"
        ));

        lista.add(new Estagio(2, "Google", "Infraestrutura de Servidor", 30,
                1400, 2, "Presencial"
        ));

        lista.add(new Estagio(3, "Apple", "Banco de Dados", 20,
                1000, 6, "Remoto"
        ));

        lista.add(new Estagio(4, "Microsoft", "Dev. de Jogos", 26,
                1100, 20, "Híbrido"
        ));

        lista.add(new Estagio(5, "Apple", "Dev. Software Mobile", 26,
                1000, 8, "Híbrido"
        ));

        lista.add(new Estagio(6, "Samsung", "Dev. Aplicação Mobile", 20,
                1150, 8, "Presencial"
        ));

        lista.add(new Estagio(7, "Motorola", "Dev. Software Mobile", 18,
                800, 4, "Remoto"
        ));

        lista.add(new Estagio(8, "Logitech", "Infraestrutura de Hardware", 20,
                850, 10, "Presencial"
        ));

        lista.add(new Estagio(9, "Motorola", "Infr. Hardware Mobile", 18,
                800, 4, "Presencial"
        ));

        return lista;
    }
}