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
"İstanbul", "İzmir", "Bursa", "Antalya",
"Atlantik", "Hint", "Arktik", "Güney",
"Everest", "Makalu", "Kangchenjunga", "Aconcagua",
"Mississippi", "Nijer", "Nile", "Gana",
"Etiyopya", "Mısır", "Kenya", "Güney Afrika",
"Como", "Geneva", "Balaton", "Baikal",
"Endonezya", "Pakistan", "Bangladeş", "Hindistan",
"Brisbane", "Melbourne", "Adelaide", "Perth",
"Antartika", "Rusya", "Norveç", "Grönland",
"Birinci", "Tropik", "Ekvator", "Meridyen",
"Hazar", "Akdeniz", "Karadeniz", "Kızıldeniz",
"Güney", "Arktik", "Hint", "Atlantik",
"Fortaleza", "São Paulo", "Salvador", "Rio de Janeiro",
"Himalaya", "Ural", "Rockies", "Appalachian",
"Elbrus", "Mont Blanc", "Kilimanjaro", "Aconcagua",
"Superior", "Huron", "Michigan", "Ontario",
"And Dağları", "Himalaya", "Alpler", "Rockies",
"Volga", "Yangtze", "Amur", "Ob",
"Şangay", "Guangzhou", "Tianjin", "Pekin",
"Michigan Gölü", "Lake Titicaca", "Lake Baikal", "Lake Michigan",
"Sicilya", "Girit", "Korsika", "Sardinya",
"Seine", "Ren", "Tuna", "Tamiz",
"Fuji", "Hakusan", "Ontake", "Aso",
"Wular", "Chilika", "Vembanad", "Dal",
"Pireneler", "Karpatlar", "Serranía", "Ural",
"Teide", "Pico Aneto", "Monte Perdido", "Mulhacén",
"Svalbard", "Grönland", "Newfoundland", "İzlanda",
"Java", "Borneo", "Celebes", "Sumatra",
"Büyük Ayı", "Hazar", "Baikal", "Superior",
"Cape Town", "Johannesburg", "Pretoria", "Durban",
"Jabal Al-Lawz", "Jabal Sawda", "Jabal Umm Ad Dami", "Jabal Shams",
"Ren", "Tuna", "Elbe", "Loire",
"Cyprus", "Sardinya", "Korsika", "Girit",
"Bogotá", "Medellín", "Cali", "Barranquilla",
"Issyk-Kul", "Sarez", "Ysyk-Ata", "Balkhash",
"Java", "Sulawesi", "Borneo", "Sumatra",
"Iceland", "Greenland", "Newfoundland", "Svalbard",
"Pretoria", "Johannesburg", "Durban", "Cape Town",
"Vatnajökull", "Langjökull", "Hofsjökull", "Mýrdalsjökull",
"Lake Chapala", "Lake Nicaragua", "Lake Titicaca", "Lake Maracaibo",
"Tiflis", "Kutaisi", "Batumi", "Rustavi",
"Delhi", "Mumbai", "Kolkata", "Chennai",
"Oman", "Suudi Arabistan", "Kuveyt", "Yemen",
"Lyskamm", "Nordend", "Zumsteinspitze", "Dufourspitze",
"Shannon", "Liffey", "Boyne", "Lee",
"Carstensz Pyramid", "Rinjani", "Kerinci", "Puncak Jaya"
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
  sorukonumu--;
grckcvpdgr = siklar.splice(sorukonumu, 1);
dogrucvp.innerHTML=grckcvpdgr;
yzlnsk = dogrucvpsikki.indexOf(dogrucvp);
yzlnskkldr = dogrucvpsikki.splice(yzlnsk, 1);
  var cvpdgr;
var suk;
var sukdgr;
var dgrcvppl;
var ynlscvp;
cvpdgr = siklar.splice(sorukonumu, 1);
  dogrucvp.innerHTML=cvpdgr;
  sorukonumu++;
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
