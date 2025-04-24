"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Bileşen props'una params ekleyerek lang değerini alalım
export default function LocalizedNotFound({ params }: { params: { lang: string } }) {
  const router = useRouter();
  const { lang } = params; // Dil parametresini al

  useEffect(() => {
    if (lang) { // lang değeri mevcutsa yönlendirme yap
      // Mevcut dile göre dinamik URL oluştur ve yönlendir
      router.replace(`/${lang}/taping-and-packaging-machine`);
    }
    // lang yoksa veya beklenmedik bir durum olursa diye bir fallback düşünülebilir,
    // ancak App Router yapısında [lang] segmenti zorunlu olduğu için genelde lang bulunur.
  }, [router, lang]); // router ve lang'ı bağımlılık dizisine ekle

  // Yönlendirme gerçekleşirken bir yükleme mesajı göster
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p>Yönlendiriliyor...</p>
    </div>
  );
}
