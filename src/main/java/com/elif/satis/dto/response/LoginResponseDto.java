package com.elif.satis.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {
    String token; //Kullanıcı login olduktan sonra isteklerini token ile atsn diye döncem
    String name;
    String username;
    String image;
}
