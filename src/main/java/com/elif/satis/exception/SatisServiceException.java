package com.elif.satis.exception;

import lombok.Getter;

@Getter
public class SatisServiceException extends RuntimeException{

    private final ErrorType errorType; //canımızın istediği gibi istisna fırlatamayız. hangi istisna çeşidi ise onu fırlatcaz

    public SatisServiceException(ErrorType errorType){
        super(errorType.getMessage());
        this.errorType = errorType;
    }

    //kullanıcı hatasını kendi fırlatcaksa;
    public SatisServiceException(ErrorType errorType, String message){
        super(message);     //kullanıcıdan hata mesajını alırsınız
        this.errorType = errorType;
    }


}
