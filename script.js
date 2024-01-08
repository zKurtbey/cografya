document.querySelector(".sorualani").style.display="none";
document.querySelector("#brdr").addEventListener("click", () => {
  document.querySelector("#brdr").style="display: none";
  document.querySelector(".sorualani").style="display: flex; animation: sorualani 1s ease-in-out forwards";
  start();
  document.querySelector(".moon").style="animation: uydu 17.5s ease-in-out infinite";
  document.querySelector('.greens').style="animation: greens 12.5s ease-in-out infinite";
  document.querySelector('#bottom-green').style="animation: bottom-green 12.5s ease-in-out infinite";
  document.querySelector('.cloud').style="animation: cloud 7.5s ease-in-out infinite";
  const skan = document.querySelectorAll(".suk");
  skan.forEach((skan) => {
    setTimeout(() => {
      skan.style="opacity: 1";
    }, 350);
  });
});
function start(){
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
  "Endonezya'nın en yüksek dağı nedir?"
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
  "Cartensz"
  ];
var sahtesiklar = [
  "İzmir", "Bursa", "Antalya", "Konya",
  "Atlas", "Hint", "Büyük Okyanus", "Arktik",
  "Ağrı Dağı", "Toros Dağları", "Kaçkar Dağları", "Cilo Dağları",
  "Nijer Nehri", "Congo Nehri", "Nijerya Nehri", "Zambezi Nehri",
  "Mısır", "Nijerya", "Ethiopia", "Gana",
  "Gölcük", "Beyşehir Gölü", "Eber Gölü", "Nazik Gölü",
  "Vietnam", "Tayland", "Hindistan", "Pakistan",
  "Melbourne", "Sydney", "Brisbane", "Perth",
  "Hiçbir ülke", "Avustralya", "Norveç", "Rusya",
  "Türkiye", "İtalya", "Japonya", "Kanada",
  "Ege Denizi", "Akdeniz", "Karadeniz", "Kızıldeniz",
  "K2", "Broad Peak", "Gasherbrum II", "Rakaposhi",
  "Kilimanjaro", "Ras Dashen", "Simien Dağları", "Kenya Dağları",
  "Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Salda Gölü",
  "Aconcagua", "Huascarán", "Chimborazo", "Sajama",
  "Yenisey Nehri", "Lena Nehri", "Ob Nehri", "Amur Nehri",
  "Şanghay", "Pekin", "Guangzhou", "Tianjin",
  "Huron Gölü", "Superior Gölü", "Michigan Gölü", "Erie Gölü",
  "Sardinya", "Sisilya", "Korsika", "Balear Adaları",
  "Rhone Nehri", "Loire Nehri", "Seine Nehri", "Duna Nehri",
  "Fuji Dağı", "Ontake Dağı", "Aso Dağı", "Ibuki Dağı",
  "Dal Gölü", "Wular Gölü", "Vembanad Gölü", "Chilika Gölü",
  "Teide Dağı", "Mulhacén", "Veleta", "Aneto Dağı",
  "Grönland", "Svalbard", "Novaya Zemlya", "Ellesmere Adası",
  "Java", "Sumatra", "Borneo", "Celebes",
  "Superior Gölü", "Huron Gölü", "Baikal Gölü", "Great Bear Gölü",
  "Johannesburg", "Cape Town", "Durban", "Pretoria",
  "Cebel-i Lübnan", "Cebel-i Nur", "Cebel-i Bedir", "Cebel-i Cudi",
  "Drava Nehri", "Mur Nehri", "Sava Nehri", "Tuna Nehri",
  "Giresun Adası", "Sinop Adası", "Heybeliada", "Marmara Adası",
  "Medellin", "Cali", "Cartagena", "Bogota",
  "Sarez Gölü", "Zorkul Gölü", "Issyk-Kul", "Son Kul",
  "Yeni Gine", "Kalimantan", "Jawa", "Sumatra",
  "Nærøyfjord", "Geiranger Fiyordu", "Hardanger Fiyordu", "Sogne Fiyordu",
  "Texcoco Gölü", "Chapala Gölü", "Nicaragua Gölü", "Titicaca Gölü",
  "Tiflis", "Kutaisi", "Rustavi", "Batumi",
  "Delhi", "Mumbai", "Kolkata", "Chennai",
  "Suudi Arabistan", "Katar", "Birleşik Arap Emirlikleri", "Umman",
  "Dufourspitze", "Nordend", "Lyskamm", "Dom",
  "Shannon Nehri", "Boyne Nehri", "Blackwater Nehri", "Liffey Nehri",
  "Rinjani Dağı", "Merapi Dağı", "Semeru Dağı", "Bromo Dağı",
  "Karakoram", "Himalaya", "Andlar", "Alpler"
];
var yzlnsk;
var yzlnskkldr;
var yzlncvp;
var yzlncvpkldr;
var soru = sorular[Math.floor(Math.random() * sorular.length)];
document.querySelector("#sorubaslik").innerHTML=soru;
var sorukonumu = sorular.indexOf(soru);
console.log(sorukonumu);
var dogrucvpsikki = [document.querySelectorAll(".cevap")[0], document.querySelectorAll(".cevap")[1], document.querySelectorAll(".cevap")[2], document.querySelectorAll(".cevap")[3], document.querySelectorAll(".cevap")[4]]; 
var dogrucvp = dogrucvpsikki[Math.floor(Math.random() * dogrucvpsikki.length)];
var grckcvpdgr;
grckcvpdgr = siklar.splice(sorukonumu, 1);
dogrucvp.innerHTML=grckcvpdgr;
yzlnsk = dogrucvpsikki.indexOf(dogrucvp);
yzlnskkldr = dogrucvpsikki.splice(yzlnsk, 1);
  var cvpdgr;
var suk;
var sukdgr;
var dgrcvppl;
var ynlscvp;
  sorukonumu = sorukonumu * 4;
console.log(sorukonumu);

dogrucvpsikki.forEach((dogrucvpsikki) => {
  sukdgr = sahtesiklar.splice(sorukonumu, 1);
  dogrucvpsikki.innerHTML = sukdgr;
  yzlnsk = sahtesiklar.indexOf(sorukonumu);
  yzlnskkldr = sahtesiklar.splice(yzlnsk, 1);
  sorukonumu = sorukonumu+.25;
  console.log(sorukonumu);
  console.log(dogrucvpsikki);
});
}
