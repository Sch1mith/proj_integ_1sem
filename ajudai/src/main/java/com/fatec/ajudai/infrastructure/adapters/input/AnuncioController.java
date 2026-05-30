package com.fatec.ajudai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AnuncioController {

    @GetMapping("/anuncio_proximidade")
    public String renderizarAnuncio() {
        return "anuncio_proximidade";
    }
}
