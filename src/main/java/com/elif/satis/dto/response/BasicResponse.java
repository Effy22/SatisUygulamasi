package com.elif.satis.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BasicResponse<T> {
    int status;
    String message;
    T data; //generic bir response data dönebiliriz yeri geldiğinde
}
