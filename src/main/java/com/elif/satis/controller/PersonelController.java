package com.elif.satis.controller;

import com.elif.satis.dto.request.PersonelLoginRequestDto;
import com.elif.satis.dto.request.PersonelRegisterRequestDto;
import com.elif.satis.dto.response.BasicResponse;
import com.elif.satis.dto.response.LoginResponseDto;
import com.elif.satis.service.PersonelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/personel")
@RequiredArgsConstructor
public class PersonelController {
    private final PersonelService personelService;
    @PostMapping("/register")
    @CrossOrigin("*")
    public ResponseEntity<BasicResponse<Boolean>> register(@RequestBody PersonelRegisterRequestDto dto){
        personelService.save(dto);
        return ResponseEntity.ok(BasicResponse.<Boolean>builder()
                        .status(200)
                        .message("Kayıt Başarılı")
                        .data(true)
                .build());
    }

    @PostMapping("/login")
    @CrossOrigin("*")
    public ResponseEntity<BasicResponse<LoginResponseDto>> login(@RequestBody PersonelLoginRequestDto dto){

        return ResponseEntity.ok(BasicResponse.<LoginResponseDto>builder()
                .status(200)
                .message("Giriş Başarılı")
                .data(personelService.login(dto))
                .build());
    }
}
