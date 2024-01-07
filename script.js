const sorular = ["Aşağıdakilerden hangisi volkanik bir dağdır?", "Aşağıdakilerden hangisi Dünya'nın en ince katmanıdır?", "Manto'nun sona erdiği, 2.900km ile yerin merkezi olan 6.300km arasında yer alan katman hangisidir?"];
var siklar = ["Yunt Dağı", "Kazma Dağı", "Boz Dağ", "Aydın Dağı", "Ağrı Dağı", "İç Çekirdek", "Dış Çekirdek", "Manto", "Yer Kabuğu", "Atmosfer", "Sima", "Sial", "Gökyüzü", "Çekirdek", "Stratosfer"];
const soru = sorular[Math.floor(Math.random() * sorular.length)];
document.querySelector("#sorubaslik").innerHTML=soru;
var suk;
var cvplr = document.querySelectorAll(".cevap");
var dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]]; 
var dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
if(soru.includes("volkanik" && "dağ")){
  dogrucvp.innerHTML="Ağrı Dağı";,
  var yzlnsk = siklar.indexOf(dogrucvp);
  siklar = siklar.splice(yzlnsk, 1);
} else if(soru.includes("en" && "ince katmanıdır")){
  dogrucvp.innerHTML="Yer Kabuğu";,
  var yzlnsk = siklar.indexOf(dogrucvp);
  siklar = siklar.splice(yzlnsk, 1);
} else if(soru.includes("2.900km" && "6.300km")){
  dogrucvp.innerHTML="Çekirdek"; 
  var yzlnsk = siklar.indexOf(dogrucvp);
  siklar = siklar.splice(yzlnsk, 1);
}
var yzlncvp = dogrucvpsikki.indexOf(dogrucvp);
var yzlncvpkldr = dogrucvpsikki.splice(yzlncvp, 1);
dogrucvpsikki.forEach((dogrucvpsikki) => {
  suk = siklar[Math.floor(Math.random() * siklar.length)];
  dogrucvpsikki.innerHTML = suk;
  var yzlnsk = siklar.indexOf(suk);
  siklar = siklar.splice(yzlnsk, 1);
});
