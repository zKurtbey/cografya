const sorular = ["Aşağıdakilerden hangisi volkanik bir dağdır?", "Aşağıdakilerden hangisi yerkabuğunun en ince katmanıdır?", "Manto'nun sona erdiği, 2.900m ile yerin merkezi olan 6.300km arasında yer alan katman hangisidir?"];
var siklar = ["Yunt Dağı", "Kazma Dağı", "Boz Dağ", "Aydın Dağı", "Ağrı Dağı", "İç Çekirdek", "Dış Çekirdek", "Manto", "Yer Kabuğu", "Atmosfer", "Sima", "Sial", "Gökyüzü", "Çekirdek", "Stratosfer"];
const soru = sorular[Math.floor(Math.random() * sorular.length)];
document.querySelector("#sorubaslik").innerHTML=soru;
const cevap = document.querySelectorAll(".cevap");
var suk;
cevap.forEach((cevap) =>{
  suk = siklar[Math.floor(Math.random() * siklar.length)];
  cevap.innerHTML = suk;
});
