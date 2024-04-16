package com.elif.satis.repository;

import com.elif.satis.entity.Personel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PersonelRepository extends JpaRepository<Personel, Long> {
    Optional<Personel> findOptionalByUsernameAndPassword(String password, String password1);

}
