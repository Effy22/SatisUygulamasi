package com.elif.satis.service;

import com.elif.satis.dto.request.PersonelLoginRequestDto;
import com.elif.satis.dto.request.PersonelRegisterRequestDto;
import com.elif.satis.dto.response.LoginResponseDto;
import com.elif.satis.entity.Personel;
import com.elif.satis.exception.ErrorType;
import com.elif.satis.exception.SatisServiceException;
import com.elif.satis.repository.PersonelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonelService {
    private final PersonelRepository personelRepository;

    public void save(PersonelRegisterRequestDto dto) {
        personelRepository.save(
                Personel.builder()
                        .adsoyad(dto.getAdsoyad())
                        .username(dto.getUsername())
                        .password(dto.getPassword())
                        .build()
        );
    }
    public LoginResponseDto login(PersonelLoginRequestDto dto){
        Optional<Personel> personelOptional = personelRepository
                .findOptionalByUsernameAndPassword(dto.getUsername(),dto.getPassword());
        if(personelOptional.isEmpty()){
            throw new SatisServiceException(ErrorType.ERROR_USERNAME_OR_PASSWORD_IS_WRONG);
        }

        return LoginResponseDto.builder()
                .image(personelOptional.get().getAvatar())
                .name(personelOptional.get().getAdsoyad())
                .username(personelOptional.get().getUsername())
                .token("Token: " + personelOptional.get().getId())
                .build();
    }
}
