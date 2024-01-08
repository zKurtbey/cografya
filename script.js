document.querySelector(".sorualani").style.display="none";
document.querySelector("#brdr").addEventListener("click", () => {
  document.querySelector("#brdr").style="display: none";
  document.querySelector(".sorualani").style="display: flex; animation: sorualani 1s ease-in-out forwards";
  start();
  document.querySelector(".moon").style="animation: uydu 5s ease-in-out infinite";
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
  "Ankara", "Pasifik", "Denali", "Amazon", "Nijerya",
  "Ladoga", "Çin", "Sidney", "Hiçbiri", "Ekvator",
  "Barents", "Pasifik", "São Paulo", "Rockies", "Kilimanjaro",
  "Van", "Aconcagua", "Yenisey", "Şangay", "Büyük Tuz Gölü",
  "Sicilya", "Loire", "Fuji", "Vembanad", "Teide",
  "Grönland", "Java", "Huron", "Johannesburg", "Everest",
  "Dunaj", "Trabzon", "Victoria", "Cape Town", "Abha",
  "Tuna", "Giresun", "Bogotá", "Tilicho", "Borneo",
  "Svalbard", "Atyrau", "Chad", "Mont Blanc", "Shannon",
  "Puncak Jaya"
  ];
var sahtesiklar = [
  "İstanbul", "İzmir", "Bursa", "Antalya",
  "Atlantik", "Hint", "Arktik", "Güney",
  "Everest", "K2", "Kangchenjunga", "Makalu",
  "Nil", "Kongo", "Yangtze", "Mississippi",
  "Mısır", "Etiyopya", "Güney Afrika", "Kenya",
  "Baikal", "Como", "Cenevre", "Balaton",
  "Hindistan", "Endonezya", "Pakistan", "Bangladeş",
  "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Antarktika", "Grönland", "Norveç", "Rusya",
  "Birinci", "Meridyen", "Tropik", "Boylam",
  "Bering", "Hazar", "Akdeniz", "Karadeniz",
  "Atlantik", "Hint", "Arktik", "Güney",
  "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza",
  "Appalachian", "And Dağları", "Himalaya", "Ural",
  "Kilimanjaro", "Elbrus", "Mont Blanc", "Aconcagua",
  "Ölü Deniz", "Baikal", "Hazar", "Üstün",
  "And Dağları", "Himalaya", "Rockies", "Alpler",
  "Volga", "Ob", "Amur", "Don",
  "Pekin", "Şangay", "Guangzhou", "Tianjin",
  "Büyük Tuz Gölü", "Michigan Gölü", "Baikal Gölü", "Titicaca Gölü",
  "Sardinya", "Korsika", "Sicilya", "Girit",
  "Seine", "Ren", "Tuna", "Tamiz",
  "Hakusan", "Fuji", "Aso", "Ontake",
  "Dal", "Vembanad", "Wular", "Chilika",
  "Pireneler", "Alpler", "Sierra Nevada", "Karpatlar",
  "Monte Perdido", "Teide", "Mulhacén", "Pico Aneto",
  "İzlanda", "Grönland", "Yeni Gine", "Svalbard",
  "Java", "Sumatra", "Borneo", "Celebes",
  "Üstün", "Baikal", "Büyük Ayı Gölü", "Hazar",
  "Durban", "Johannesburg", "Cape Town", "Pretoria",
  "Denali", "K2", "Kangchenjunga", "Makalu",
  "Tuna", "Ren", "Loire", "Tamiz",
  "Korsika", "Sardinya", "Girit", "Sicilya",
  "Fuji", "Hakusan", "Ontake", "Aso",
  "Vembanad", "Wular", "Chilika", "Dal",
  "Mulhacén", "Pico Aneto", "Monte Perdido", "Teide",
  "Grönland", "İzlanda", "Yeni Gine", "Svalbard",
  "Java", "Sumatra", "Celebes", "Borneo",
  "Lake Superior", "Lake Huron", "Lake Michigan", "Lake Ontario",
  "Johannesburg", "Cape Town", "Pretoria", "Durban",
  "Cebelitarık", "Şam", "Umm ad-Dami", "Cebel-i Lawz",
  "Elbe", "Tuna", "Ren", "Main",
  "Kıbrıs", "Girit", "Rodos", "Sicilya",
  "Bogotá", "Medellín", "Cali", "Barranquilla",
  "Baikal", "Issyk-Kul", "Sarez", "Ysyk-Ata",
  "Borneo", "Sumatra", "Java", "Sulawesi",
  "Grönland", "İzlanda", "Yeni Gine", "Svalbard",
  "Johannesburg", "Cape Town", "Pretoria", "Durban",
  "Mýrdalsjökull", "Hofsjökull", "Langjökull", "Vatnajökull",
  "Lake Chapala", "Lake Nicaragua", "Lake Titicaca", "Lake Maracaibo",
  "Tiflis", "Batımi", "Kutaisi", "Rustavi",
  "Mumbai", "Delhi", "Kolkata", "Chennai",
  "Suudi Arabistan", "Yemen", "Umman", "Kuveyt",
  "Dufourspitze", "Lyskamm", "Nordend", "Zumsteinspitze",
  "Shannon", "Liffey", "Lee", "Boyne",
  "Puncak Jaya", "Carstensz Pyramid", "Rinjani", "Kerinci"
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
grckcvpdgr =siklar.splice(sorukonumu, 1);
dogrucvp.innerHTML=grckcvpdgr;
yzlnsk = dogrucvpsikki.indexOf(dogrucvp);
yzlnskkldr = dogrucvpsikki.splice(yzlnsk, 1);
var cvpdgr;
var suk;
var sukdgr;
var dgrcvppl;
var ynlscvp;
cvpdgr = siklar.splice(sorukonumu, 1);
  sorukonumu = sorukonumu * 4;
console.log(sorukonumu);
dogrucvp.innerHTML=cvpdgr;
dogrucvpsikki.forEach((dogrucvpsikki) => {
  sukdgr = sahtesiklar.splice(sorukonumu, 1);
  dogrucvpsikki.innerHTML = sukdgr;
  yzlnsk = sahtesiklar.indexOf(sorukonumu);
  yzlnskkldr = sahtesiklar.splice(yzlnsk, 1);
  sorukonumu = sorukonumu+1;
  console.log(sorukonumu);
  console.log(dogrucvpsikki);
});
}
