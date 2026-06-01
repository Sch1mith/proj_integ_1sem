package com.fatec.ajudai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam; 
import org.springframework.ui.Model; 

@Controller
public class AnuncioController {

    @GetMapping("/anuncios")
    public String paginaGeralAnuncios(@RequestParam(name = "q", required = false) String termoBusca, Model model) {
        
       if (termoBusca != null && !termoBusca.isBlank()) {
          System.out.println("Buscando por: " + termoBusca);
            
          model.addAttribute("termoPesquisado", termoBusca);
       }
        
       return "anuncios"; 
    }

    @GetMapping("/anuncio_proximidade")
    public String paginaAnuncioProximidade() {
        return "anuncio_proximidade";
    }

    @GetMapping("/criar-anuncio")
    public String paginaCriarAnuncio() {
        return "criar-anuncio";
    }

    @GetMapping("/solicitacao-sucesso")
    public String paginaAnuncioSucesso() {
      return "anuncio-proximidade-sucesso";
    }
}
