const sorular = ["Aşağıdakilerden hangisi volkanik bir dağdır?", "Aşağıdakilerden hangisi Dünya'nın en ince katmanıdır?", "Manto'nun sona erdiği, 2.900km ile yerin merkezi olan 6.300km arasında yer alan katman hangisidir?"];
var siklar = ["Yunt Dağı", "Kazma Dağı", "Boz Dağ", "Aydın Dağı", "Ağrı Dağı", "İç Çekirdek", "Dış Çekirdek", "Manto", "Yer Kabuğu", "Atmosfer", "Sima", "Sial", "Gökyüzü", "Çekirdek", "Stratosfer"];
const soru = sorular[Math.floor(Math.random() * sorular.length)];
document.querySelector("#sorubaslik").innerHTML=soru;
var suk;
var cvplr = document.querySelectorAll(".cevap");
if(soru.includes("volkanik" && "dağ")){
  var dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]];
  var dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
  dogrucvpsikki = dogrucvpsikki.length - dogrucvp;
  dogrucvp.innerHTML="Ağrı Dağı";
  siklar = siklar - "Ağrı Dağı";
  console.log(dogrucvpsikki);
  for(i=0; i<5; i++){
    suk = siklar[Math.floor(Math.random() * siklar.length)];
    dogrucvpsikki.innerHTML = suk;
    siklar = siklar - suk;
  }
} else if(soru.includes("en" && "ince katmanıdır")){
  var dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]];
  var dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
  dogrucvp.innerHTML="Yer Kabuğu";
  dogrucvpsikki = dogrucvpsikki.length - dogrucvp;
  siklar = siklar - "Yer Kabuğu";
  console.log(dogrucvpsikki);
  for(i=0; i<5; i++){
    suk = siklar[Math.floor(Math.random() * siklar.length)];
    dogrucvpsikki.innerHTML = suk;
    siklar = siklar - suk;
  }
} else if(soru.includes("2.900km" && "6.300km")){
  var dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]];
  var dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
  dogrucvp.innerHTML="Çekirdek";
  dogrucvpsikki = dogrucvpsikki.length - dogrucvp;
  siklar = siklar - "Çekirdek";
  console.log(dogrucvpsikki);
  for(i=0; i<5; i++){
    suk = siklar[Math.floor(Math.random() * siklar.length)];
    dogrucvpsikki.innerHTML = suk;
    siklar = siklar - suk;
  }
}