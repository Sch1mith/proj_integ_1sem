package com.fatec.ajudai.infrastructure.adapters.input;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = "com")
public class AjudaiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AjudaiApplication.class, args);
	}

}
