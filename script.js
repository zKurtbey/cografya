const ust = document.querySelector(".ust");
const ustukapat = document.querySelector(".ustukapat");
let click = 0;
ustukapat.addEventListener("click", () =>{
  click++;
  if(click % 2 === 0){
    ustukapat.style="animation: ustukapat-rvr 1s forwards";
    ust.style= "animation: ust-rvr .5s forwards";
    } else{
  ust.style="animation: ust .5s forwards";
  ustukapat.style="animation: ustukapat 1s forwards";
  }
});
document.querySelector("#brdr").addEventListener("click", () => {
  document.querySelector(".sorualani").style="display: flex; animation: sorualani .5s ease-in-out forwards";
  document.querySelector("#brdr").style="display: none";
  start();
  document.querySelector(".moon").style="animation: uydu 17.5s ease-in-out infinite";
  document.querySelector('.greens').style="animation: greens 12.5s ease-in-out infinite";
  document.querySelector('#bottom-green').style="animation: bottom-green 12.5s ease-in-out infinite";
  document.querySelector('.cloud').style="animation: cloud 7.5s ease-in-out infinite";
  });
var sorular = [
  "Türkiye'nin başkenti nedir?",
  "Dünyanın en büyük okyanusu hangisidir?",
  "Kuzey Amerika'nın en yüksek dağı nedir?",
  "Güney Amerika'nın en uzun nehri nedir?",
  "Afrika'nın en kalabalık ülkesi hangisidir?",
  "Avrupa'nın en büyük gölü nedir?",
  "Asya'nın en kalabalık ülkesi hangisidir?",
  "Avustralya'nın en büyük şehri nedir?",
  "Antarktika kıtası üzerinde hangi ülke hakimiyet kurmaktadır?",
  "Ekvator çizgisi hangi ülkelerden geçer?",
  "Kuzey Kutbu'nda yer alan deniz nedir?",
  "Dünyanın en derin okyanusu nedir?",
  "Brezilya'nın en büyük şehri nedir?",
  "Kuzey Amerika'da Rocky Dağları'nın diğer adı nedir?",
  "Afrika'nın en yüksek dağı nedir?",
  "Orta Doğu'da yer alan en büyük göl nedir?",
  "Güney Amerika'da en yüksek dağ nedir?",
  "Rusya'nın en uzun nehri nedir?",
  "Çin'in en büyük şehri nedir?",
  "Amerika'nın en büyük gölü nedir?",
  "İtalya'nın en büyük adası nedir?",
  "Fransa'nın en uzun nehri nedir?",
  "Japonya'nın en yüksek dağı nedir?",
  "Hindistan'ın en büyük gölü nedir?",
  "İspanya'nın en yüksek dağı nedir?",
  "Arktik Okyanusu'nun en büyük adası nedir?",
  "Endonezya'nın en kalabalık adası nedir?",
  "Kanada'nın en büyük gölü nedir?",
  "Güney Afrika'nın en büyük şehri nedir?",
  "Arabistan Yarımadası'nın en yüksek dağı nedir?",
  "Avusturya'nın en uzun nehri nedir?",
  "Karadeniz'in en büyük adası nedir?",
  "Kolombiya'nın en büyük şehri nedir?",
  "Asya'nın en yüksek gölü nedir?",
  "Pasifik Okyanusu'ndaki en büyük ada nedir?",
  "Norveç'in en uzun fjordu nedir?",
  "Meksika'nın en büyük gölü nedir?",
  "Gürcistan'ın başkenti nedir?",
  "Hindistan'ın en kalabalık şehri nedir?",
  "Arap Yarımadası'nın en büyük ülkesi nedir?",
  "İsviçre'nin en yüksek dağı nedir?",
  "İrlanda'nın en uzun nehri nedir?",
  "Endonezya'nın en yüksek dağı nedir?",
  "Türkiye'nin en yüksek dağı nedir?",
  "Türkiye'nin en uzun nehri nedir?",
  "Türkiye'nin en kalabalık şehri nedir?",
  "Türkiye'nin en büyük gölü nedir?",
  "Türkiye'nin en büyük adası nedir?",
  "Türkiye'nin en uzun kıyı şeridi nerededir?",
  "Türkiye'nin en yüksek platosu nedir?",
  "Türkiye'nin en çok yağış alan bölgesi nedir?",
  "Türkiye'nin en sıcak bölgesi nedir?",
  "Türkiye'nin en kuzey noktası nedir?",
  "Türkiye'nin en güney noktası nedir?",
  "Türkiye'nin en batı noktası nedir?",
  "Türkiye'nin en doğu noktası nedir?",
  "Türkiye'nin en büyük tarım bölgesi nedir?",
  "Türkiye'nin en büyük sanayi şehri nedir?",
  "Türkiye'nin en önemli turistik bölgesi nedir?",
  "Türkiye'nin en önemli ticaret limanı nedir?",
  "Türkiye'nin en yüksek barajı nedir?",
  "Türkiye'nin en büyük göç alan şehri nedir?",
  "Türkiye'nin en büyük milli parkı nedir?",
  "Türkiye'nin en büyük akarsuyu nedir?",
  "Türkiye'nin en kalabalık ikinci şehri nedir?",
  "Türkiye'nin en büyük doğal göleti nedir?",
  "Türkiye'nin en büyük limanı nedir?",
  "Türkiye'nin en önemli maden kaynağı nedir?",
  "Türkiye'nin en büyük göç veren şehri nedir?",
  "Türkiye'nin en yüksek ovası nedir?",
  "Türkiye'nin en eski yerleşim yeri nedir?",
  "Türkiye'nin en büyük ikinci gölü nedir?",
  "Türkiye'nin en fazla turist çeken şehri nedir?",
  "Türkiye'nin en büyük sanayi bölgesi nedir?",
  "Türkiye'nin en uzun akarsu sistemi nedir?",
  "Türkiye'nin en soğuk bölgesi nedir?",
  "Türkiye'nin en büyük adası nedir?",
  "Türkiye'nin en kalabalık üniversitesi nedir?",
  "Türkiye'nin en büyük gölü hangisidir?",
  "Türkiye'nin en çok tarım ürünü yetiştiren bölgesi nedir?",
  "Türkiye'nin en uzun demiryolu hattı nedir?",
  "Türkiye'nin en uzun tüneli nedir?",
  "Türkiye'nin en önemli turistik mağarası nedir?",
  "Türkiye'nin en büyük hava limanı nedir?",
  "Türkiye'nin en çok göç alan şehri nedir?",
  "Türkiye'nin en büyük göleti nedir?",
  "Türkiye'nin en yüksek köyü nedir?",
  "Türkiye'nin en büyük akarsu gölü nedir?",
  "Türkiye'nin en önemli endüstri bölgesi nedir?",
  "Türkiye'nin en uzun demiryolu hattı nedir?",
  "Türkiye'nin en büyük milli parkı nedir?",
  "Türkiye'nin en büyük ovası nedir?"
];

var siklar = [
  "Ankara",
  "Pasifik",
  "Denali",
  "Amazon",
  "Nijerya",
  "Ladoga",
  "Çin",
  "Sydney",
  "Hiçbiri",
  "Ekvador, Kolombiya, Brezilya, Gabon, Kongo, Kongo DC, Uganda, Kenya, Somali, Endonezya",
  "Barents",
  "Pasifik",
  "Sao Paulo",
  "Rocky",
  "Kilimanjaro",
  "Van Gölü",
  "Aconcagua",
  "Yenisey",
  "Şangay",
  "Michigan",
  "Sicilya",
  "Loire",
  "Fuji",
  "Vembanad",
  "Teide",
  "Grönland",
  "Java",
  "Üst Göller",
  "Johannesburg",
  "Cebel-i Luğa",
  "Dunav",
  "Büyük Ada",
  "Bogota",
  "Nam Tso",
  "Yeni Gine",
  "Sognefjord",
  "Chapala",
  "Tiflis",
  "Mumbai",
  "Suudi Arabistan",
  "Grossglockner",
  "Shannon",
  "Cartensz",
  "Ağrı",
  "Kızılırmak",
  "İstanbul",
  "Van",
  "Gökçeada",
  "Ege",
  "Anadolu",
  "Karadeniz",
  "Güneydoğu",
  "Sinop",
  "Hatay",
  "Edirne",
  "Iğdır",
  "Çukurova",
  "Kocaeli",
  "Akdeniz",
  "İzmir",
  "Atatürk Barajı",
  "İstanbul",
  "Olimpos-Beydağları",
  "Kızılırmak",
  "Ankara",
  "Hazır",
  "Mersin",
  "Bor",
  "Şanlıurfa",
  "Konya Ovası",
  "Göbeklitepe",
  "Tuz Gölü",
  "Antalya",
  "İstanbul",
  "Fırat-Dicle",
  "Doğu Anadolu",
  "Gökçeada",
  "İstanbul Üniversitesi",
  "Van Gölü",
  "Güneydoğu Anadolu",
  "İstanbul-Ankara",
  "Ovit Tüneli",
  "Derinkuyu",
  "İstanbul Havalimanı",
  "İstanbul",
  "Atatürk Barajı Göleti",
  "Sarıçiçek",
  "Manyas Gölü",
  "Marmara",
  "Ankara-Kars",
  "Yozgat Bozok Milli Parkı",
  "Çukurova Ovası"
  ];
var sahtesiklar = [
  "İzmir", "Bursa", "Antalya", "Edirne",
"Hint", "Arap", "Baltık", "Cebelitarık",
"K2", "Kilimanjaro", "Elbrus", "Matterhorn",
"Paraguay", "Uruguay", "Magdalena", "São Francisco",
"Demokratik Kongo", "Gana", "Güney Afrika", "Etiyopya",
"Vänern", "Saimaa", "Onega", "Chad",
"Pakistan", "Endonezya", "Bangladeş", "Vietnam",
"Brisbane", "Perth", "Adelaide", "Gold Coast",
"Arjantin", "Şili", "Bolivya", "Ekvador",
"Gabon", "Kamerun", "Kongo", "Angola",
"Chukchi", "Hiçbiri", "Kara", "Bering",
"Güney Okyanusu", "Baltık", "Karadeniz", "Ak Deniz",
"Fortaleza", "Salvador", "Brasília", "Recife",
"Sierra Nevada", "Andlar", "Cascades", "Ural",
"Ras Dashen", "Ras Deshen", "Kenya", "Simien",
"Sevan", "Urmia", "Tuz", "Hazar",
"Illimani", "Ojos del Salado", "Huascarán", "Hiçbiri",
"Lena", "Amur", "Hiçbiri", "Ob",
"Guangzhou", "Shenzhen", "Chongqing", "Wuhan",
"Hiçbiri", "Erie", "Ontario", "Superior",
"Capri", "Hiçbiri", "Sardunya", "Elba",
"Garonne", "Seine", "Hiçbiri", "Thames",
"Ontake", "Asama", "Hakusan", "Daisen",
"Hiçbiri", "Chilika", "Dal", "Wular",
"Posets", "Aneto", "Mulhacén", "Galdhøpiggen",
"Ellesmere", "Victoria", "Baffin", "Devon",
"Sulawesi", "Kalimantan", "Sumatra", "Hiçbiri",
"Winnipeg", "Great Bear", "Great Slave", "Süperior",
"Durban", "Pretoria", "Bloemfontein", "Port Elizabeth",
"Jabal Al-Lawz", "Jabal Sawda", "Jabal Shams", "Jabal Yibir",
"Rhein", "Hazar", "Po", "Dnieper",
"Heybeli Ada", "Büyükçekmece", "Gökçeada", "Bozcaada",
"Cali", "Barranquilla", "Medellin", "Cartagena",
"Qinghai", "Issyk-Kul", "Sarez", "Van",
"Borneo", "Java", "Sumatra", "Sulawesi",
"Nærøyfjord", "Hardangerfjord", "Hiçbiri", "Lysefjord",
"Titicaca", "Managua", "Hepsi", "Nicaragua",
"Rustavi", "Batumi", "Kutaisi", "Zugdidi",
"Kolkata", "Hiçbiri", "Bangalore", "Hyderabad",
"Umman", "Yemen", "Katar", "Birleşik Arap Emirlikleri",
"Täschhorn", "Nordend", "Lyskamm", "Dom",
"Liffey", "Shannon", "Erne", "Lee",
"Tambora", "Kerinci", "Jaya", "Rantemario",
  "Erciyes", "Cilo", "Süphan", "Davraz",
  "Sakarya", "Fırat", "Meriç", "Yeşilırmak",
  "Ankara", "İzmir", "Bursa", "Adana",
  "Tuz", "Beyşehir", "İznik", "Eğirdir",
  "Bozcaada", "Marmara", "Büyükada", "Heybeliada",
  "Akdeniz", "Karadeniz", "Marmara", "İyon",
  "Çoruh", "Konya", "Erzurum", "Bolu",
  "Akdeniz", "Marmara", "Ege", "Doğu Anadolu",
  "Akdeniz", "Doğu Anadolu", "İç Anadolu", "Ege",
  "Ordu", "Samsun", "Zonguldak", "Bartın",
  "Adıyaman", "Mersin", "Adana", "Kilis",
  "Kırklareli", "Tekirdağ", "Çanakkale", "İstanbul",
  "İzmir", "Ağrı", "Kars", "Ardahan",
  "Konya Ovası", "Trakya Ovası", "Ege", "İç Anadolu",
  "Adana", "İstanbul", "Bursa", "İzmir",
  "Marmara", "Ege", "Karadeniz", "Kapadokya",
  "Kocaeli", "Mersin", "İstanbul", "Antalya",
  "Hiçbiri", "Karakaya Barajı", "Keban Barajı", "Hirfanlı Barajı",
  "Çanakkale", "Ankara", "İzmir", "Bursa",
  "Hepsi", "Göreme", "Milli Park", "Kazdağları",
  "Hepsi", "Sakarya", "Fırat", "Yeşilırmak",
  "Samsun", "İzmir", "Bursa", "Adana",
  "Hiçbiri", "Beyşehir", "Acıgöl", "Meke",
  "Kırıkkale", "İzmir", "İstanbul", "Antalya",
  "Demir", "Kömür", "Bakır", "Altın",
  "Hatay", "Siirt", "Mardin", "Batman",
  "Hiçbiri", "Çukurova", "Thrakya Ovası", "Antalya Ovası",
  "Hiçbiri", "Çatalhöyük", "Hacılar", "Nevalı Çori",
  "Van Gölü", "Beyşehir Gölü", "Eğirdir Gölü", "Acı Göl",
  "Samsun", "İstanbul", "Muğla", "İzmir",
  "Ankara", "Kocaeli", "İzmir", "Bursa",
  "Hiçbiri", "Meriç-Ergene", "Sakarya", "Kızılırmak",
  "İç Anadolu", "Karadeniz", "Ardahan", "Erzurum",
  "Hiçbiri", "Bozcaada", "Marmara", "Büyükada",
  "On Dokuz Mayıs Üniversitesi", "Ankara Üniversitesi", "İzmir Ekonomi Üniversitesi", "Hacettepe Üniversitesi",
  "Hiçbiri", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü",
  "İç Anadolu", "Çukurova", "Marmara", "Ege",
  "Uşak-Mersin", "Ankara-Kars", "İzmir-Adana", "Eskişehir-Konya",
  "Hiçbiri", "Marmaray Tüneli", "Avrasya Tüneli", "Bolu Tüneli",
  "Hiçbiri", "Karaca Mağarası", "Damlatas Mağarası", "Damlataş Mağarası",
  "Sabiha Gökçen Havalimanı", "Atatürk Havalimanı", "Antalya Havalimanı", "İzmir Adnan Menderes Havalimanı",
  "Adana", "Ankara", "İzmir", "Bursa",
  "Hiçbiri", "Hirfanlı Barajı Göleti", "Oymapınar Barajı Göleti", "Keban Barajı Göleti",
  "Elmalı", "Demirkazık", "Çobandede", "Şenyayla",
  "Van Gölü", "Sapanca Gölü", "Uluabat Gölü", "Beyşehir Gölü",
  "Akdeniz", "İç Anadolu", "Ege", "Karadeniz",
  "Samsun-Sinop", "İstanbul-Ankara", "Eskişehir-Konya", "Ankara-Sivas",
  "Kent Milli Parkı", "Olimpos-Beydağları Milli Parkı", "Kazdağları Milli Parkı", "Göreme Milli Parkı",
  "Bafra Ovası", "Konya Ovası", "Thrakya Ovası", "Antalya Ovası"
];
  const suklar = document.querySelectorAll(".suk");
  var cvpdgr;
  var suk;
  var sukdgr;
  var dgrcvppl;
  var ynlscvp;
  var yzlncvp;
  var yzlncvpkldr;
  var soru;
  var grckcvpdgr;
  var sorukonumu;
  var soru;
var yzlnsk; 
var yzlnskkldr;
var yzlnshtsk;
var yzlnshtskkldr;
var yzlnsrkldr;
var dogrucvp;
var dogrucvpsikki;
const correct = new Audio('correct.mp3');
const wrong = new Audio('wrong.mp3');
function start(){
  document.querySelectorAll(".cevap").forEach((cevap) => {
    document.querySelector(".cevap").remove();
    document.querySelector(".suk").remove();
  });
  for(i=0; i<5; i++){
    var cvp = document.createElement("p");
    cvp.setAttribute("class", "cevap");
    var sk = document.createElement("div");
    sk.setAttribute("class", "suk");
    document.querySelector(".siklar").appendChild(sk);
    sk.appendChild(cvp);
  }
  dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]];
  soru = sorular[Math.floor(Math.random() * sorular.length)];
  document.querySelector("#sorubaslik").innerHTML=soru;
  sorukonumu = sorular.indexOf(soru);
  yzlnsrkldr = sorular.splice(sorukonumu, 1);
  dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
  grckcvpdgr = siklar.splice(sorukonumu, 1);
  dogrucvp.innerHTML=grckcvpdgr;
  yzlnsk = dogrucvpsikki.indexOf(dogrucvp);
  yzlnskkldr = dogrucvpsikki.splice(yzlnsk, 1);
  sorukonumu = sorukonumu * 4;
  dogrucvpsikki.forEach((dogrucvpsikki) => {
    sukdgr = sahtesiklar.splice(sorukonumu, 1);
    dogrucvpsikki.innerHTML = sukdgr;
    yzlnshtsk = sahtesiklar.indexOf(sorukonumu);
    yzlnshtskkldr = sahtesiklar.splice(yzlnshtsk, .25);
    sorukonumu = sorukonumu+.25;
    dogrucvpsikki.parentElement.addEventListener("click", ()=>{
      dogrucvpsikki.parentElement.style="background-color: rgb(252 20 20 / 30%)";
      wrong.currentTime = 0; 
      wrong.play();
      document.querySelector(".sorualani").style="animation: sorualanikapat 1s ease-in-out forwards; display: flex";
  setTimeout(() => {
    wrong.pause();
    document.querySelector(".sorualani").style="display: none";
  document.querySelector("#brdr").style="display: flex";
  }, 1000);
    });
  });
  dogrucvp.parentElement.addEventListener("click", ()=>{
    correct.currentTime = 0;
    correct.play();
    dogrucvp.parentElement.style="background-color: rgb(16 243 24 / 30%)";
    setTimeout(() => {
      correct.pause();
      start();
    }, 1000);
});
}
