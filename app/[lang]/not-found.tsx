"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // useRouter'ı next/navigation'dan içe aktar

export default function LocalizedNotFound() {
  const router = useRouter(); // useRouter hook'unu kullan

  useEffect(() => {
    // Belirtilen URL'ye yönlendir (replace kullanarak tarayıcı geçmişine eklenmesini önle)
    router.replace('https://www.adhesivewheelweight.com/tr/chopping-and-marking-machine');
  }, [router]); // router'ı bağımlılık dizisine ekle

  // Yönlendirme gerçekleşirken isteğe bağlı olarak bir yükleme mesajı veya null döndür
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p>Yönlendiriliyor...</p>
    </div>
  );
}
