package apiExemplo.estatico.Controller;

import apiExemplo.estatico.models.entity.Estagio;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EstagioController {
    @GetMapping("/estagio")
    public List<Estagio> getAllEstagios () {
        List<Estagio> lista = new ArrayList<>();
        lista.add(new Estagio(0, "dev frontend", 20,
                900, 5, "Remoto"
        ));

        lista.add(new Estagio(1,"dev backend", 30,
                1300, 10, "Presencial"
        ));

        return lista;
    }
}