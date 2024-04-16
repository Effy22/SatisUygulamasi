package com.elif.satis.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum ErrorType {

    INTERNAL_ERROR(1000,"Kontroller katmanında tanımsız gelen hata oluştu. Lütfen tekrar deneyiniz.",HttpStatus.INTERNAL_SERVER_ERROR),
    BAD_REQUEST_ERROR(1001,"Girilen paratmetreler hatalıdır. Lütfen düzelterek tekrar deneyiniz.",HttpStatus.BAD_REQUEST),
    ERROR_USER_EKLEME_HATASI(1111,"User eklenemedi, girilen parametreler eksik", HttpStatus.BAD_REQUEST),
    TOKEN_HATASI(1111,"User eklenemedi, girilen parametreler eksik", HttpStatus.BAD_REQUEST),
    ERROR_USERNAME_OR_PASSWORD_IS_WRONG(1112,"Kullanıcı adı ya da şifreniz yanlış" ,HttpStatus.BAD_REQUEST );

    int code;
    String message;
    HttpStatus httpStatus;
}
