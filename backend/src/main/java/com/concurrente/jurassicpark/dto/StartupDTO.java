package com.concurrente.jurassicpark.dto;

import com.concurrente.jurassicpark.models.TipoDinosaurio;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StartupDTO {
    @NotBlank
    private String name;
    @NotNull
    private TipoDinosaurio type;
    @Min(1)
    private int dinosaurs;
    @Min(1)
    private int bufferSize;
}
