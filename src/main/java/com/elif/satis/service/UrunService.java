package com.elif.satis.service;

import com.elif.satis.repository.UrunRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UrunService {
    private final UrunRepository urunRepository;
}
