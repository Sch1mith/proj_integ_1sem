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

    // 2. Sua rota antiga que você já configurou para o formulário direto
    @GetMapping("/anuncio_proximidade")
    public String paginaAnuncioProximidade() {
        // Vai procurar o arquivo src/main/resources/templates/anuncio_proximidade.html
        return "anuncio_proximidade";
    }
}
