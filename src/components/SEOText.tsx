import React from 'react';

export default function SEOText() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full">
          <div className="mb-8">
            <span className="inline-block text-[#009be1] text-[10px] font-bold tracking-widest uppercase mb-2">
              GREE KLİMA REHBERİ
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-black leading-tight tracking-tight">
              Eviniz İçin En Doğru Yatırım: Neden Gree Klima Seçmelisiniz?
            </h2>
          </div>

          <article className="text-gray-500 text-[14px] leading-relaxed space-y-6">
            <p>
              Klima satın almak, yalnızca yazın serinlemek veya kışın ısınmak için yapılan bir harcama değil; evinizin konforuna ve enerji verimliliğine yaptığınız uzun vadeli bir yatırımdır. Doğru bir klima, hem enerji faturalarınızı düşürür hem de sessiz çalışarak yaşam alanınızdaki konforu maksimum seviyeye çıkarır. Tam da bu noktada <strong className="text-gray-800">Gree klimalar</strong>, estetik tasarımları ve son teknoloji inverter özellikleri ile rakiplerinden ayrılır. İzmir gibi hem nemin hem de sıcaklığın yüksek olduğu bölgelerde, yüksek performans ve enerji tasarrufu beklentisini Gree kalitesiyle karşılıyoruz.
            </p>

            <p>
              Gree klimaların sahip olduğu gelişmiş A+++ enerji verimliliği özellikleri sayesinde, evinizde veya ofisinizde yılın her günü ideal sıcaklığı bütçenizi zorlamadan elde edebilirsiniz. Aynı zamanda, pürüzsüz ve şık dış paneli ile her dekorasyona kolayca uyum sağlar. <strong className="text-gray-800">Deytes İklimlendirme</strong> olarak biz, bir klima satmaktan çok daha fazlasını vaat ediyoruz. Tamamen ücretsiz keşif hizmetimizle mekanınıza en uygun modeli ve kapasiteyi (BTU) profesyonelce belirliyoruz. Böylelikle gereğinden büyük kapasiteli cihazlara fazladan bütçe ayırmanızın veya küçük cihazlarla konfordan ödün vermenizin önüne geçiyoruz.
            </p>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">En Popüler Gree Modelleri ile Evinizi Yenileyin</h3>
              <p>
                Kullanıcıların en çok tercih ettiği <strong>Gree Fairy</strong>, <strong>Pular</strong> ve <strong>Amber</strong> serileri, pazarın en güçlü ve verimli cihazları arasında yer almaktadır. Üstün filtrasyon sistemleri sayesinde havadaki toz, partikül ve alerjenleri yakalar, size sadece temiz ve taze bir hava solumak kalır. Ayrıca akıllı WiFi kontrol özelliği sayesinde, evinize gelmeden önce telefonunuzdan klimanızı çalıştırabilir ve ideal konfor alanınızı hazır edebilirsiniz.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Satıştan Kuruluma: Deytes İklimlendirme Uzmanlığı</h3>
              <p>
                Bizi tercih etmenizin en büyük nedeni, mükemmelliğe odaklanmış satış ve satış sonrası süreçlerimizdir. Doğru klima seçiminden hemen sonra, profesyonel teknik ekibimiz cihazın montajını sıfır hata prensibi ve titiz bir vakumlama işlemiyle tamamlar. En ince detaya kadar dikkat edilen bu süreç, cihazınızın 10 yıl ve üzeri bir ömre sahip olmasının altın kuralıdır. Satış temsilcilerimiz, evinize yakışacak modeli seçmenize yardımcı olurken bütçenize uygun esnek ödeme koşulları sunarlar.
              </p>
            </div>

            <div className="bg-gray-50/50 p-6 rounded-2xl my-6 border border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Gree ve Deytes Ayrıcalıkları:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0">
                {[
                  "Ücretsiz Profesyonel Keşif",
                  "A+++ Enerji Verimliliği (Inverter)",
                  "Sessiz ve Konforlu Uyku Modları",
                  "Akıllı Ev (Wi-Fi) Uyumluluğu",
                  "Mekana Özel BTU Analizi",
                  "Hızlı Montaj ve Kurulum Kalitesi"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-600">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-[#009be1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Deytes Kalite ve Sürdürülebilirlik Vizyonu</h3>
              <p>
                Deytes İklimlendirme olarak sadece bugün için değil, gelecek kuşaklar için de sorumluluk alıyoruz. Satışını yaptığımız tüm Gree klimalar, ozon tabakasına zarar vermeyen çevre dostu <strong>R32 soğutucu akışkan</strong> teknolojisi ile donatılmıştır. Yüksek enerji verimliliği (A+++), sadece sizin elektrik faturalarınızı düşürmekle kalmaz; aynı zamanda karbon ayak izinizi azaltarak gezegenimizin korunmasına katkı sağlar.
              </p>
              <p className="mt-4">
                Süreklilik arz eden müşteri memnuniyeti politikamız gereği, satış sonrası süreçlerde de her zaman yanınızdayız. Gelişmiş üretim teknolojisi sayesinde arıza oranları pazar ortalamasının çok altında olan Gree ürünlerimizi, 22 yıllık mühendislik tecrübemizle birleştiriyoruz. Güvenilir, dürüst ve şeffaf hizmet anlayışımızla İzmir'in iklimlendirme geleceğini birlikte inşa ediyoruz.
              </p>
            </div>

            <div className="pt-10 text-center opacity-80 border-t border-gray-100 mt-16">
              <p className="text-gray-400 text-[10px]">
                İzmir Gree Klima Rehberi - Satış & Pazarlama Odaklı İçerik © {new Date().getFullYear()}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
