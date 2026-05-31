package com.fatec.ajudai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam; 
import org.springframework.ui.Model; 

@Controller
public class CadastroController {

    @GetMapping("/cadastro")
    public String paginaCadastro() {
        return "cadastro";
    }
}
