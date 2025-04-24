"use client";

import { useEffect } from 'react';

export default function LocalizedNotFound() {
  useEffect(() => {
    // Belirtilen URL'ye yönlendir
    window.location.href = 'https://www.adhesivewheelweight.com/tr/chopping-and-marking-machine';
  }, []); // Boş bağımlılık dizisi, etkinin yalnızca bileşen monte edildiğinde çalışmasını sağlar

  // Yönlendirme gerçekleşirken isteğe bağlı olarak bir yükleme mesajı veya null döndür
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p>Yönlendiriliyor...</p>
    </div>
  );
}
