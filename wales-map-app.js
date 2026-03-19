
(function(){
function initWalesMap(){
  if(typeof L==='undefined'){setTimeout(initWalesMap,100);return}
  var VIA='https://www.viator.com/en-GB/Wales/d5157-ttd?pid=P00047633&mcid=42383&medium=link&campaign=InteractiveMap';
  var COT='https://www.awin1.com/cread.php?awinmid=5796&awinaffid=868127&ued=https%3A%2F%2Fwww.holidaycottages.co.uk%2F';
  var CC={castle:'#8b6914',beach:'#2e86ab',hiking:'#3a7d44',cycling:'#d97706',water:'#0891b2',wildlife:'#5b8c5a',food:'#be3144',museum:'#7c3aed',stay:'#b8860b',garden:'#16a34a',festival:'#db2777',family:'#ec4899',town:'#475569',railway:'#78716c',adventure:'#ea580c',restaurant:'#d94f30',pub:'#b45309',cafe:'#c2410c'};
  var CL={castle:'Castle',beach:'Beach',hiking:'Hiking',cycling:'Cycling',water:'Water Sports',wildlife:'Wildlife',food:'Food & Drink',museum:'Museum',stay:'Accommodation',garden:'Garden',festival:'Festival',family:'Family',town:'Town',railway:'Railway',adventure:'Adventure',restaurant:'Restaurant',pub:'Pub',cafe:'Cafe'};
  var P=[
  //  CASTLES (22) 
  {n:"Caernarfon Castle",lat:53.1393,lng:-4.2773,cat:"castle",desc:"Iconic UNESCO World Heritage castle  seat of the investiture of the Prince of Wales.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  {n:"Conwy Castle",lat:53.2801,lng:-3.8252,cat:"castle",desc:"Edward I's masterpiece  perfectly preserved medieval fortress with town walls.",url:"https://wales.org/a-complete-guide-to-conwy-castle-in-wales/"},
  {n:"Caerphilly Castle",lat:51.5760,lng:-3.2204,cat:"castle",desc:"The largest castle in Wales with its famous leaning tower.",url:"https://wales.org/caerphilly-castle-exploring-wales-timeless-fortress/"},
  {n:"Cardiff Castle",lat:51.4816,lng:-3.1819,cat:"castle",desc:"2,000 years of history  Roman fort to Victorian Gothic fantasy.",url:"https://wales.org/destinations-in-wales/south-wales/cardiff/"},
  {n:"Harlech Castle",lat:52.8598,lng:-4.1092,cat:"castle",desc:"Dramatic clifftop fortress with views across Snowdonia to the sea.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  {n:"Beaumaris Castle",lat:53.2632,lng:-4.0910,cat:"castle",desc:"Technically perfect concentric castle on the Menai Strait.",url:"https://wales.org/beaumaris-castle-medieval-festival/"},
  {n:"Pembroke Castle",lat:51.6748,lng:-4.9424,cat:"castle",desc:"Birthplace of Henry VII  massive circular keep dominates the town.",url:"https://wales.org/guide-to-days-out-in-pembrokeshire/"},
  {n:"Chepstow Castle",lat:51.6433,lng:-2.6746,cat:"castle",desc:"Britain's oldest surviving stone castle, perched above the River Wye.",url:"https://wales.org/10-reasons-to-visit-historic-chepstow/"},
  {n:"Castell Coch",lat:51.5321,lng:-3.2554,cat:"castle",desc:"Fairy-tale Victorian Gothic castle in beech woods above Cardiff.",url:"https://wales.org/castle-scavenger-hunt-castell-coch/"},
  {n:"Raglan Castle",lat:51.7684,lng:-2.8514,cat:"castle",desc:"Late-medieval castle with its Great Tower and grand gatehouse.",url:"https://wales.org/may-half-term-activities-in-wales/"},
  {n:"Kidwelly Castle",lat:51.7374,lng:-4.3071,cat:"castle",desc:"Norman stronghold overlooking the River Gwendraeth.",url:"https://wales.org/summer-cadw-events-and-activities/"},
  {n:"Carreg Cennen Castle",lat:51.8564,lng:-3.9374,cat:"castle",desc:"Dramatically perched on a limestone cliff  one of Wales's most photogenic ruins.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  {n:"Laugharne Castle",lat:51.7710,lng:-4.4618,cat:"castle",desc:"Romantic ruin in Dylan Thomas country overlooking the Taf estuary.",url:"https://wales.org/summer-cadw-events-and-activities/"},
  {n:"Penrhyn Castle",lat:53.2269,lng:-4.1070,cat:"castle",desc:"Victorian neo-Norman fantasy filled with art and a railway museum.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  {n:"Rhuddlan Castle",lat:53.2900,lng:-3.4637,cat:"castle",desc:"Edward I's concentric castle on the River Clwyd.",url:"https://wales.org/rhuddlan-castles-childrens-archaeology-taster-day/"},
  {n:"Tretower Castle & Court",lat:51.8583,lng:-3.2009,cat:"castle",desc:"Combined medieval castle and manor house in the Usk Valley.",url:"https://wales.org/tretowers-summer-quest/"},
  {n:"Powis Castle",lat:52.6576,lng:-3.1656,cat:"castle",desc:"Grand country mansion with world-famous terraced gardens.",url:"https://wales.org/10-must-see-welshpool-tourist-attractions/"},
  {n:"Oystermouth Castle",lat:51.5728,lng:-3.9813,cat:"castle",desc:"Castle ruins overlooking Swansea Bay in the heart of Mumbles.",url:"https://wales.org/popular-swansea-tourist-attractions-for-families/"},
  {n:"Newcastle Emlyn Castle",lat:52.0395,lng:-4.4680,cat:"castle",desc:"Picturesque ruins above the River Teifi.",url:"https://wales.org/11-most-impressive-castles-in-carmarthenshire/"},
  {n:"Hay Castle",lat:52.0746,lng:-3.1244,cat:"castle",desc:"Restored Jacobean mansion and medieval fortress  arts and events.",url:"https://wales.org/destinations-in-wales/mid-wales/hay-on-wye/"},
  {n:"Criccieth Castle",lat:52.9178,lng:-4.2341,cat:"castle",desc:"Twin-towered stronghold on a headland above Cardigan Bay.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  {n:"Dolwyddelan Castle",lat:53.0494,lng:-3.8844,cat:"castle",desc:"Remote mountain fortress  reputedly the birthplace of Llywelyn the Great.",url:"https://wales.org/things-to-do-in-wales/attractions/castles/"},
  //  BEACHES (15) 
  {n:"Barafundle Bay",lat:51.6299,lng:-4.9909,cat:"beach",desc:"Regularly voted one of Britain's best beaches  golden sand framed by dunes.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/beaches/"},
  {n:"Three Cliffs Bay",lat:51.5673,lng:-4.1108,cat:"beach",desc:"Iconic Gower beach with dramatic limestone cliffs and caves.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/beaches/"},
  {n:"Rhossili Bay",lat:51.5663,lng:-4.2920,cat:"beach",desc:"Three miles of sweeping golden sand  one of the world's best beaches.",url:"https://wales.org/destinations-in-wales/west-wales/gower-peninsula/"},
  {n:"Whitesands Bay",lat:51.8918,lng:-5.2972,cat:"beach",desc:"Pembrokeshire's premier surfing beach near St Davids.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/beaches/"},
  {n:"Tenby North Beach",lat:51.6756,lng:-4.6955,cat:"beach",desc:"Stunning beach below Tenby's pastel-painted harbour houses.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/tenby/"},
  {n:"Newgale Beach",lat:51.8501,lng:-5.1180,cat:"beach",desc:"Two-mile beach  great for surfing and families.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/"},
  {n:"Llandudno Beach",lat:53.3256,lng:-3.8316,cat:"beach",desc:"Classic Victorian promenade between the Great and Little Ormes.",url:"https://wales.org/destinations-in-wales/north-wales/llandudno-and-colwyn-bay/"},
  {n:"Broad Haven Beach",lat:51.7814,lng:-5.1870,cat:"beach",desc:"Family-friendly Blue Flag beach on the Pembrokeshire coast.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/"},
  {n:"Penbryn Beach",lat:52.1448,lng:-4.5157,cat:"beach",desc:"Hidden Cardigan Bay gem with a cave and woodland walk.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/beaches/"},
  {n:"Caswell Bay",lat:51.5714,lng:-3.9816,cat:"beach",desc:"Sheltered Gower bay popular with surfers and families.",url:"https://wales.org/seaside-holiday-cottages-wales/"},
  {n:"Abereiddy Blue Lagoon",lat:51.9307,lng:-5.2104,cat:"beach",desc:"Dramatic flooded slate quarry  turquoise water for coasteering.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/"},
  {n:"Llangrannog Beach",lat:52.1532,lng:-4.4714,cat:"beach",desc:"Charming sheltered cove backed by the Ceredigion cliffs.",url:"https://wales.org/destinations-in-wales/west-wales/"},
  {n:"Porthcawl / Rest Bay",lat:51.4912,lng:-3.7252,cat:"beach",desc:"South Wales surfing hotspot with consistent year-round waves.",url:"https://wales.org/where-are-the-best-surfing-beaches-in-wales/"},
  {n:"Shell Island",lat:52.7936,lng:-4.1437,cat:"beach",desc:"200+ species of shells on a tidal island  huge campsite.",url:"https://wales.org/beach-life-6-stunning-coastal-campsites-in-wales/"},
  {n:"Marloes Sands",lat:51.7328,lng:-5.2186,cat:"beach",desc:"Remote Pembrokeshire beach with red sandstone cliffs and rock pools.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/beaches/"},
  //  HIKING (14) 
  {n:"Snowdon (Yr Wyddfa)",lat:53.0685,lng:-4.0763,cat:"hiking",desc:"Wales's highest peak at 1,085m  six routes to the summit.",url:"https://wales.org/from-the-top-5-of-the-best-mountain-walks-in-snowdonia/"},
  {n:"Pen y Fan",lat:51.8841,lng:-3.4366,cat:"hiking",desc:"Highest point in the Brecon Beacons  iconic table-top summit.",url:"https://wales.org/destinations-in-wales/mid-wales/brecon-beacons-national-park/"},
  {n:"Cadair Idris",lat:52.6969,lng:-3.9119,cat:"hiking",desc:"Legendary mountain  sleep on the summit and wake a poet or a madman.",url:"https://wales.org/9-north-wales-hikes-you-should-absolutely-experience/"},
  {n:"Tryfan",lat:53.1199,lng:-4.0199,cat:"hiking",desc:"Dramatic scramble to the Adam and Eve summit stones.",url:"https://wales.org/9-north-wales-hikes-you-should-absolutely-experience/"},
  {n:"Four Waterfalls Walk",lat:51.7862,lng:-3.5580,cat:"hiking",desc:"Spectacular circular walk past four waterfalls in the Brecon Beacons.",url:"https://wales.org/venture-on-the-four-waterfalls-walk-in-the-brecon-beacons/"},
  {n:"Pembrokeshire Coast Path",lat:51.7014,lng:-5.0512,cat:"hiking",desc:"186-mile National Trail hugging the dramatic coastline.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/walking/"},
  {n:"Glyndwr's Way",lat:52.4316,lng:-3.3973,cat:"hiking",desc:"135-mile National Trail through the remote heart of mid Wales.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/walking/"},
  {n:"Glamorgan Heritage Coast",lat:51.4218,lng:-3.5028,cat:"hiking",desc:"14 miles of dramatic limestone cliffs in South Wales.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/walking/"},
  {n:"Skirrid Mountain",lat:51.8436,lng:-3.0361,cat:"hiking",desc:"Sacred mountain near Abergavenny with a dramatic landslip ridge.",url:"https://wales.org/destinations-in-wales/south-wales/south-wales-valleys/"},
  {n:"Anglesey Coastal Path",lat:53.3044,lng:-4.3236,cat:"hiking",desc:"125-mile trail circling the entire Isle of Anglesey.",url:"https://wales.org/destinations-in-wales/north-wales/the-isle-of-anglesey/"},
  {n:"Rhinogydd Range",lat:52.8336,lng:-3.9720,cat:"hiking",desc:"Remote and rugged mountain walking in wild Snowdonia.",url:"https://wales.org/9-north-wales-hikes-you-should-absolutely-experience/"},
  {n:"Moel Siabod",lat:53.0757,lng:-3.8750,cat:"hiking",desc:"Classic Snowdonia summit near Betws-y-Coed with panoramic views.",url:"https://wales.org/best-self-catering-accommodation-in-betws-y-coed/"},
  {n:"Clwydian Range",lat:53.1479,lng:-3.3382,cat:"hiking",desc:"AONB hills with heather and Iron Age hillforts.",url:"https://wales.org/destinations-in-wales/north-wales/north-east-wales/"},
  {n:"Sugar Loaf Mountain",lat:51.8559,lng:-3.0598,cat:"hiking",desc:"Prominent peak near Abergavenny with sweeping views across four counties.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/hiking/"},
  //  CYCLING (5) 
  {n:"Coed y Brenin",lat:52.8091,lng:-3.8802,cat:"cycling",desc:"UK's first purpose-built mountain bike trail centre.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/cycling-mountain-biking/"},
  {n:"BikePark Wales",lat:51.7469,lng:-3.3540,cat:"cycling",desc:"Purpose-built uplift bike park in the South Wales valleys.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/cycling-mountain-biking/"},
  {n:"Antur Stiniog",lat:52.9805,lng:-3.9376,cat:"cycling",desc:"Gravity mountain biking in Snowdonia's slate valleys.",url:"https://wales.org/snowdonia-mountain-bike-routes-for-beginners/"},
  {n:"Llantysilio Trails",lat:52.9781,lng:-3.2483,cat:"cycling",desc:"Technical riding above the Dee Valley near Llangollen.",url:"https://wales.org/best-mountain-bike-trails-in-north-wales-for-thrill-seekers/"},
  {n:"Marin Trail",lat:53.0914,lng:-3.8035,cat:"cycling",desc:"Classic cross-country route through Gwydir Forest.",url:"https://wales.org/snowdonia-mountain-bike-routes-for-beginners/"},
  //  WATER SPORTS (8) 
  {n:"Surf Snowdonia",lat:53.1887,lng:-3.8267,cat:"water",desc:"Inland surf lagoon and adventure park in the Conwy Valley.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/water-sports/"},
  {n:"Llangorse Lake",lat:51.9306,lng:-3.2628,cat:"water",desc:"Brecon Beacons lake  kayaking, paddleboarding and wild swimming.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/water-sports/"},
  {n:"Porthclais Harbour",lat:51.8766,lng:-5.2720,cat:"water",desc:"Tiny harbour for coasteering and sea kayaking near St Davids.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/water-sports/"},
  {n:"Freshwater West",lat:51.6446,lng:-5.0680,cat:"water",desc:"Dramatic Pembrokeshire surf beach featured in Harry Potter.",url:"https://wales.org/where-are-the-best-surfing-beaches-in-wales/"},
  {n:"Llyn Padarn",lat:53.1215,lng:-4.1275,cat:"water",desc:"Crystal-clear mountain lake at the foot of Snowdon  paddleboard paradise.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/water-sports/"},
  {n:"Llyn Gwynant",lat:53.0354,lng:-4.0175,cat:"water",desc:"Stunning wild swimming lake in the heart of Snowdonia.",url:"https://wales.org/destinations-in-wales/north-wales/snowdonia/"},
  {n:"Mumbles / Langland",lat:51.5694,lng:-3.9951,cat:"water",desc:"Gower's surfing and kayaking hub just outside Swansea.",url:"https://wales.org/splash-tastic-watersports-to-try-on-the-south-wales-coast/"},
  {n:"Llangollen Rapids",lat:52.9694,lng:-3.1726,cat:"water",desc:"White-water kayaking and rafting on the River Dee.",url:"https://wales.org/what-to-do-in-llangollen-7-top-rated-outdoor-activities/"},
  //  WILDLIFE (8) 
  {n:"Skomer Island",lat:51.7370,lng:-5.2753,cat:"wildlife",desc:"World-famous puffin colony and top European wildlife island.",url:"https://wales.org/11-places-to-see-wildlife-in-wales/"},
  {n:"Cardigan Bay Dolphins",lat:52.0812,lng:-4.5613,cat:"wildlife",desc:"UK's largest resident pod of bottlenose dolphins.",url:"https://wales.org/destinations-in-wales/mid-wales/ceredigion-cardigan-bay/"},
  {n:"Gigrin Farm Red Kites",lat:52.2984,lng:-3.5177,cat:"wildlife",desc:"Daily red kite feeding  hundreds of birds in spectacular flight.",url:"https://wales.org/where-can-i-see-birds-of-prey-in-wales/"},
  {n:"Tywi Valley",lat:52.0180,lng:-3.9456,cat:"wildlife",desc:"Heartland of the red kite recovery  scenic valley teeming with wildlife.",url:"https://wales.org/wildlife-to-look-out-for-in-the-tywi-valley/"},
  {n:"Ramsey Island",lat:51.8657,lng:-5.3346,cat:"wildlife",desc:"RSPB reserve with grey seals, choughs and porpoises.",url:"https://wales.org/11-places-to-see-wildlife-in-wales/"},
  {n:"South Stack Cliffs",lat:53.3069,lng:-4.6923,cat:"wildlife",desc:"Anglesey sea cliffs  puffins, razorbills and choughs.",url:"https://wales.org/5-wonderful-wildlife-walks-in-anglesey/"},
  {n:"Cors Dyfi Ospreys",lat:52.5669,lng:-3.8682,cat:"wildlife",desc:"Watch nesting ospreys via live cameras at Dyfi Valley.",url:"https://wales.org/11-places-to-see-wildlife-in-wales/"},
  {n:"Bardsey Island",lat:52.7550,lng:-4.7970,cat:"wildlife",desc:"Island of 20,000 saints  Manx shearwaters and grey seals.",url:"https://wales.org/things-to-do-in-wales/nature-landscapes/wildlife/"},
  //  FOOD & DRINK (10) 
  {n:"Cardiff Restaurants",lat:51.4792,lng:-3.1756,cat:"food",desc:"Michelin-quality dining to street food  Cardiff's vibrant food scene.",url:"https://wales.org/the-ultimate-guide-to-the-best-restaurants-in-cardiff/"},
  {n:"Swansea Marina Dining",lat:51.6161,lng:-3.9418,cat:"food",desc:"Waterfront dining with views across Swansea Bay.",url:"https://wales.org/where-to-eat-in-swansea-waterfront-restaurants/"},
  {n:"Colwyn Bay Eateries",lat:53.2937,lng:-3.7229,cat:"food",desc:"Hidden gem restaurants on the North Wales coast.",url:"https://wales.org/5-best-places-to-eat-in-colwyn-bay/"},
  {n:"Anglesey Restaurants",lat:53.2603,lng:-4.2960,cat:"food",desc:"Island dining from seafood shacks to fine restaurants.",url:"https://wales.org/best-places-to-eat-in-anglesey/"},
  {n:"Snowdonia Restaurants",lat:53.0630,lng:-4.0217,cat:"food",desc:"Mountain fuel  from Pete's Eats to Castell Deudraeth.",url:"https://wales.org/best-restaurants-in-snowdonia/"},
  {n:"Llanelli Dining",lat:51.6842,lng:-4.1633,cat:"food",desc:"Carmarthenshire's best-kept dining secrets.",url:"https://wales.org/7-of-the-most-recommended-places-to-eat-in-llanelli/"},
  {n:"Welsh Distilleries",lat:52.5850,lng:-3.8352,cat:"food",desc:"Eight craft distilleries to visit across Wales.",url:"https://wales.org/8-distilleries-in-wales-that-you-need-to-visit/"},
  {n:"Historic Pubs",lat:51.8777,lng:-3.0259,cat:"food",desc:"Historic inns and craft beer pubs across Wales.",url:"https://wales.org/essential-guide-to-the-best-pubs-in-wales/"},
  {n:"Craft Beer Trail",lat:51.4706,lng:-3.1723,cat:"food",desc:"South Wales's thriving craft beer scene.",url:"https://wales.org/best-craft-beer-to-sample-in-south-wales/"},
  {n:"Botanic Garden Cafe",lat:51.8530,lng:-4.1550,cat:"food",desc:"Seasonal Welsh produce in a stunning garden setting.",url:"https://wales.org/top-reasons-to-visit-the-national-botanic-garden-of-wales/"},
  //  MUSEUMS (13) 
  {n:"St Fagans Museum",lat:51.4862,lng:-3.2728,cat:"museum",desc:"National Museum of History  40+ historic buildings. Free entry.",url:"https://wales.org/things-to-do-in-wales/attractions/museums-and-galleries/"},
  {n:"Big Pit Mining Museum",lat:51.7707,lng:-3.1059,cat:"museum",desc:"Descend 90m underground in a real coal mine  free entry.",url:"https://wales.org/things-to-do-in-wales/attractions/museums-and-galleries/"},
  {n:"National Slate Museum",lat:53.1252,lng:-4.1540,cat:"museum",desc:"The story of Welsh slate in old Dinorwig quarry workshops.",url:"https://wales.org/things-to-do-in-wales/attractions/museums-and-galleries/"},
  {n:"National Museum Cardiff",lat:51.4862,lng:-3.1764,cat:"museum",desc:"World-class Impressionist art to contemporary Welsh artists. Free.",url:"https://wales.org/free-days-out-in-south-wales/"},
  {n:"National Waterfront Museum",lat:51.6172,lng:-3.9388,cat:"museum",desc:"Industry and innovation in Swansea's maritime quarter.",url:"https://wales.org/popular-swansea-tourist-attractions-for-families/"},
  {n:"Portmeirion",lat:52.9130,lng:-4.0878,cat:"museum",desc:"Italianate fantasy village on the Dwyryd Estuary.",url:"https://wales.org/destinations-in-wales/north-wales/"},
  {n:"Theatr Clwyd",lat:53.1692,lng:-3.1419,cat:"museum",desc:"Award-winning theatre in Mold.",url:"https://wales.org/experience-the-drama-an-epic-guide-to-theatres-in-wales/"},
  {n:"Dylan Thomas Boathouse",lat:51.7730,lng:-4.4539,cat:"museum",desc:"The writing shed where Under Milk Wood was penned.",url:"https://wales.org/destinations-in-wales/west-wales/carmarthenshire/"},
  {n:"Tintern Abbey",lat:51.6964,lng:-2.6767,cat:"museum",desc:"Romantic Gothic ruins in the Wye Valley  inspired Wordsworth.",url:"https://wales.org/destinations-in-wales/south-wales/wye-valley-vale-of-usk/"},
  {n:"Llanthony Priory",lat:51.9441,lng:-3.0313,cat:"museum",desc:"Augustinian priory ruins in the remote Black Mountains.",url:"https://wales.org/destinations-in-wales/mid-wales/hay-on-wye/"},
  {n:"Tredegar House",lat:51.5657,lng:-3.0350,cat:"museum",desc:"One of Britain's finest late 17th-century mansions.",url:"https://wales.org/historic-wales-open-doors-festival/"},
  {n:"St Winefride's Well",lat:53.1831,lng:-3.2176,cat:"museum",desc:"Britain's longest-running pilgrimage site in Holywell.",url:"https://wales.org/destinations-in-wales/north-wales/"},
  {n:"Cardigan Castle",lat:52.0834,lng:-4.6601,cat:"museum",desc:"Restored 12th-century castle with heritage centre and gardens.",url:"https://wales.org/destinations-in-wales/mid-wales/ceredigion-cardigan-bay/"},
  //  PLACES TO STAY (14) 
  {n:"Snowdonia Cottages",lat:53.0450,lng:-3.9300,cat:"stay",desc:"Log cabins and self-catering surrounded by mountain scenery.",url:"https://wales.org/self-catering-log-cabins-in-snowdonia/"},
  {n:"Anglesey Glamping",lat:53.2730,lng:-4.3200,cat:"stay",desc:"Luxury glamping pods, yurts and safari tents on the island.",url:"https://wales.org/get-closer-to-nature-with-a-glamping-holiday-in-anglesey/"},
  {n:"Betws-y-Coed Stays",lat:53.0950,lng:-3.8050,cat:"stay",desc:"Gateway to Snowdonia  charming cottages and B&Bs.",url:"https://wales.org/best-self-catering-accommodation-in-betws-y-coed/"},
  {n:"Tenby Cottages",lat:51.6760,lng:-4.7080,cat:"stay",desc:"Pet-friendly seaside cottages in colourful Tenby.",url:"https://wales.org/dont-ruff-it-find-pet-friendly-holiday-cottages-in-tenby/"},
  {n:"Brecon Beacons Cottages",lat:51.8700,lng:-3.3300,cat:"stay",desc:"Dog-friendly holiday cottages in the national park.",url:"https://wales.org/paw-some-dog-friendly-holiday-cottages-in-the-brecon-beacons/"},
  {n:"Aberystwyth Hotels",lat:52.4180,lng:-4.0890,cat:"stay",desc:"Seaside hotels for couples in this university town.",url:"https://wales.org/where-to-stay-in-aberystwyth-top-rated-hotels-for-couples/"},
  {n:"Llandudno Hotels",lat:53.3320,lng:-3.8300,cat:"stay",desc:"Top-rated Victorian hotels on the North Wales coast.",url:"https://wales.org/the-5-best-rated-hotels-in-llandudno-according-to-tripadvisor/"},
  {n:"Swansea Bay Hotels",lat:51.6220,lng:-3.9450,cat:"stay",desc:"Beachfront and city hotels around Swansea Bay.",url:"https://wales.org/11-of-the-best-hotels-for-a-weekend-in-swansea-bay/"},
  {n:"Castle Hotels",lat:52.5700,lng:-3.7000,cat:"stay",desc:"Sleep in a real Welsh castle  unique heritage stays.",url:"https://wales.org/why-visit-castles-in-wales-when-you-can-stay-in-one/"},
  {n:"Hot Tub Glamping",lat:53.1100,lng:-3.8500,cat:"stay",desc:"Luxury glamping with hot tubs in Snowdonia and beyond.",url:"https://wales.org/10-glamping-stays-with-hot-tubs-in-north-wales/"},
  {n:"Farm Stays",lat:52.3500,lng:-3.5000,cat:"stay",desc:"Working farm holidays  lambing, horse riding and fresh eggs.",url:"https://wales.org/5-top-rated-farm-holiday-cottages-in-wales/"},
  {n:"Beach Hotels",lat:51.6500,lng:-4.7500,cat:"stay",desc:"Wake up to waves at Wales's finest coastal hotels.",url:"https://wales.org/6-best-beach-hotels-in-wales/"},
  {n:"Campervan Sites",lat:53.0200,lng:-3.9800,cat:"stay",desc:"Scenic campervan pitches with mountain views.",url:"https://wales.org/best-campervan-sites-in-snowdonia/"},
  {n:"Bodysgallen Hall",lat:53.2882,lng:-3.8174,cat:"stay",desc:"Five-star National Trust hotel with spa and stunning gardens.",url:"https://wales.org/places-to-stay-in-wales/hotels/"},
  //  GARDENS (7) 
  {n:"National Botanic Garden",lat:51.8469,lng:-4.1496,cat:"garden",desc:"World's largest single-span glasshouse  568 acres of gardens.",url:"https://wales.org/top-reasons-to-visit-the-national-botanic-garden-of-wales/"},
  {n:"Bodnant Garden",lat:53.2273,lng:-3.8009,cat:"garden",desc:"National Trust showpiece  world-famous laburnum arch.",url:"https://wales.org/things-to-do-in-wales/attractions/gardens-country-parks/"},
  {n:"Coed y Brenin Forest",lat:52.8200,lng:-3.8700,cat:"garden",desc:"Ancient oakwoods, waterfalls and trails in the Snowdonia foothills.",url:"https://wales.org/top-10-country-parks-in-north-wales-for-nature-lovers/"},
  {n:"Gwydir Forest",lat:53.0700,lng:-3.8300,cat:"garden",desc:"Beautiful forest parkland around Betws-y-Coed.",url:"https://wales.org/top-10-country-parks-in-north-wales-for-nature-lovers/"},
  {n:"Wepre Park",lat:53.2093,lng:-3.0734,cat:"garden",desc:"Ancient woodland and castle ruins near Connah's Quay.",url:"https://wales.org/top-10-country-parks-in-north-wales-for-nature-lovers/"},
  {n:"Margam Country Park",lat:51.5556,lng:-3.7310,cat:"garden",desc:"1,000 acres with deer park, orangery and sculpture trail.",url:"https://wales.org/must-see-country-parks-gardens-in-south-wales/"},
  {n:"Plas Cadnant Gardens",lat:53.2350,lng:-4.1350,cat:"garden",desc:"Hidden Anglesey gardens with waterfalls and woodland walks.",url:"https://wales.org/things-to-do-in-wales/attractions/gardens-country-parks/"},
  //  FESTIVALS (11) 
  {n:"Hay Festival",lat:52.0736,lng:-3.1270,cat:"festival",desc:"World-famous literary festival in the town of books.",url:"https://wales.org/destinations-in-wales/mid-wales/hay-on-wye/"},
  {n:"Llangollen Eisteddfod",lat:52.9706,lng:-3.1696,cat:"festival",desc:"International music and dance festival in the Dee Valley.",url:"https://wales.org/llangollen-international-musical-eisteddfod-complete-guide/"},
  {n:"Green Man Festival",lat:51.8773,lng:-3.2306,cat:"festival",desc:"Beloved indie music festival in the Brecon Beacons.",url:"https://wales.org/events-in-wales/music/"},
  {n:"Gottwood Festival",lat:53.2450,lng:-4.2900,cat:"festival",desc:"Boutique electronic music in the Anglesey woods.",url:"https://wales.org/gottwood-festival-everything-you-need-to-know/"},
  {n:"Focus Wales",lat:53.0474,lng:-3.0281,cat:"festival",desc:"Multi-venue new music showcase in Wrexham.",url:"https://wales.org/what-to-know-about-focus-wales/"},
  {n:"How The Light Gets In",lat:52.0770,lng:-3.1280,cat:"festival",desc:"Philosophy and music festival at Hay-on-Wye.",url:"https://wales.org/how-the-light-gets-in-everything-you-need-to-know/"},
  {n:"Machynlleth Comedy Fest",lat:52.5940,lng:-3.8570,cat:"festival",desc:"Stand-up comedy in the green capital of Wales.",url:"https://wales.org/machynlleth-comedy-festival-everything-you-need-to-know/"},
  {n:"Fire In The Mountain",lat:52.5960,lng:-3.8600,cat:"festival",desc:"Intimate multi-arts festival near Machynlleth.",url:"https://wales.org/fire-in-the-mountain-festival-everything-you-need-to-know/"},
  {n:"Swansea Street Food",lat:51.6200,lng:-3.9430,cat:"festival",desc:"Street food traders from across Wales and beyond.",url:"https://wales.org/swansea-street-food-festival-2024-flavours-unleashed/"},
  {n:"Pride Cymru",lat:51.4650,lng:-3.1640,cat:"festival",desc:"Wales's biggest LGBTQ+ celebration in Cardiff.",url:"https://wales.org/pride-cymru-2023-everything-you-need-to-know/"},
  {n:"Newport Marathon",lat:51.5880,lng:-2.9974,cat:"festival",desc:"Fast flat marathon through the city of Newport.",url:"https://wales.org/newport-wales-marathon-everything-you-need-to-know/"},
  //  FAMILY (9) 
  {n:"Folly Farm",lat:51.7227,lng:-4.7931,cat:"family",desc:"Award-winning zoo, farm, funfair and adventure play.",url:"https://wales.org/is-there-a-zoo-in-wales/"},
  {n:"Welsh Mountain Zoo",lat:53.2652,lng:-3.7932,cat:"family",desc:"Conservation zoo  snow leopards, red pandas and sea lions.",url:"https://wales.org/4-aquariums-in-wales-that-your-kids-are-shore-to-love/"},
  {n:"Zip World",lat:53.1954,lng:-4.0632,cat:"family",desc:"World's fastest zip line  100mph over the slate quarry.",url:"https://wales.org/destinations-in-wales/north-wales/snowdonia/"},
  {n:"Dinorwic Quarry",lat:53.1215,lng:-4.1122,cat:"family",desc:"Dramatic abandoned slate quarry  spectacular walking.",url:"https://wales.org/destinations-in-wales/north-wales/snowdonia/"},
  {n:"Plantasia",lat:51.6200,lng:-3.9350,cat:"family",desc:"Tropical zoo in Swansea  crocodiles, monkeys and butterflies.",url:"https://wales.org/4-aquariums-in-wales-that-your-kids-are-shore-to-love/"},
  {n:"Rhyl SC2",lat:53.3191,lng:-3.4893,cat:"family",desc:"Waterpark and attractions on the North Wales coast.",url:"https://wales.org/top-5-things-to-do-in-rhyl-for-families/"},
  {n:"Caldey Island",lat:51.6345,lng:-4.6857,cat:"family",desc:"Monastery island with beaches and a chocolate factory.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/tenby/"},
  {n:"National Showcaves",lat:51.8299,lng:-3.6884,cat:"family",desc:"Spectacular caves and dinosaur park in the Brecon Beacons.",url:"https://wales.org/10-fun-things-to-do-in-the-brecon-beacons-for-families/"},
  {n:"GreenWood Family Park",lat:53.1635,lng:-4.1783,cat:"family",desc:"Eco-friendly adventure park near Bangor  rides, mazes and barefoot trail.",url:"https://wales.org/events-in-wales/friends-family-activities-in-wales/"},
  //  TOWNS (18) 
  {n:"Cardiff",lat:51.4816,lng:-3.1791,cat:"town",desc:"Wales's vibrant capital  castle, stadium, arcades and bay.",url:"https://wales.org/destinations-in-wales/south-wales/cardiff/"},
  {n:"Swansea",lat:51.6214,lng:-3.9436,cat:"town",desc:"Maritime city  gateway to the Gower Peninsula.",url:"https://wales.org/destinations-in-wales/west-wales/swansea-bay/"},
  {n:"Tenby",lat:51.6740,lng:-4.7010,cat:"town",desc:"Pastel-painted harbour town  Wales's most photographed spot.",url:"https://wales.org/destinations-in-wales/west-wales/pembrokeshire/tenby/"},
  {n:"Hay-on-Wye",lat:52.0760,lng:-3.1300,cat:"town",desc:"World-famous town of books on the Wales-England border.",url:"https://wales.org/destinations-in-wales/mid-wales/hay-on-wye/"},
  {n:"Llandudno",lat:53.3238,lng:-3.8244,cat:"town",desc:"Victorian seaside resort between the Great and Little Ormes.",url:"https://wales.org/destinations-in-wales/north-wales/llandudno-and-colwyn-bay/"},
  {n:"Aberystwyth",lat:52.4143,lng:-4.0854,cat:"town",desc:"University town with cliff railway and pier on Cardigan Bay.",url:"https://wales.org/destinations-in-wales/mid-wales/ceredigion-cardigan-bay/"},
  {n:"Wrexham",lat:53.0469,lng:-2.9928,cat:"town",desc:"North Wales's largest town  home to the famous football club.",url:"https://wales.org/72-hours-in-wrexham-things-to-do-in-and-around-town/"},
  {n:"Chepstow",lat:51.6410,lng:-2.6780,cat:"town",desc:"Historic gateway to Wales with Britain's oldest stone castle.",url:"https://wales.org/10-reasons-to-visit-historic-chepstow/"},
  {n:"Welshpool",lat:52.6605,lng:-3.1490,cat:"town",desc:"Market town with Powis Castle and narrow-gauge railway.",url:"https://wales.org/10-must-see-welshpool-tourist-attractions/"},
  {n:"Conwy",lat:53.2810,lng:-3.8337,cat:"town",desc:"Walled medieval town  castle, quay and Britain's smallest house.",url:"https://wales.org/a-complete-guide-to-conwy-castle-in-wales/"},
  {n:"Betws-y-Coed",lat:53.0930,lng:-3.8020,cat:"town",desc:"Alpine-style village and gateway to Snowdonia.",url:"https://wales.org/best-self-catering-accommodation-in-betws-y-coed/"},
  {n:"St Davids",lat:51.8812,lng:-5.2660,cat:"town",desc:"Britain's smallest city  stunning medieval cathedral.",url:"https://wales.org/6-idyllic-camping-sites-by-the-sea-in-st-davids/"},
  {n:"Brecon",lat:51.9460,lng:-3.3960,cat:"town",desc:"Gateway to the Brecon Beacons  charming market town.",url:"https://wales.org/destinations-in-wales/mid-wales/brecon-beacons-national-park/"},
  {n:"Newport",lat:51.5900,lng:-2.9950,cat:"town",desc:"Riverside city  Transporter Bridge and Celtic Manor.",url:"https://wales.org/newport-wales-marathon-everything-you-need-to-know/"},
  {n:"Cardigan",lat:52.0837,lng:-4.6569,cat:"town",desc:"Historic town at the mouth of the Teifi.",url:"https://wales.org/destinations-in-wales/mid-wales/ceredigion-cardigan-bay/"},
  {n:"Machynlleth",lat:52.5913,lng:-3.8536,cat:"town",desc:"Green capital of Wales  Owain Glyndwr's parliament town.",url:"https://wales.org/machynlleth-comedy-festival-everything-you-need-to-know/"},
  {n:"Menai Bridge",lat:53.2219,lng:-4.1630,cat:"town",desc:"Telford's iconic suspension bridge connecting Anglesey.",url:"https://wales.org/destinations-in-wales/north-wales/the-isle-of-anglesey/"},
  {n:"Porthmadog",lat:52.9281,lng:-4.1304,cat:"town",desc:"Gateway to the Llyn Peninsula  harbour, railways and Portmeirion.",url:"https://wales.org/destinations-in-wales/north-wales/snowdonia/"},
  //  RAILWAYS (6) 
  {n:"Ffestiniog Railway",lat:52.9274,lng:-4.1326,cat:"railway",desc:"Longest heritage railway in Wales  Porthmadog to Caernarfon.",url:"https://wales.org/the-most-picturesque-steam-railways-in-wales/"},
  {n:"Snowdon Mountain Railway",lat:53.0790,lng:-4.0990,cat:"railway",desc:"Rack-and-pinion railway to the summit of Yr Wyddfa.",url:"https://wales.org/the-most-picturesque-steam-railways-in-wales/"},
  {n:"Vale of Rheidol Railway",lat:52.4115,lng:-4.0821,cat:"railway",desc:"Narrow-gauge steam from Aberystwyth to Devil's Bridge.",url:"https://wales.org/the-most-picturesque-steam-railways-in-wales/"},
  {n:"Welshpool & Llanfair",lat:52.6547,lng:-3.1560,cat:"railway",desc:"Charming narrow-gauge through the Powys countryside.",url:"https://wales.org/10-must-see-welshpool-tourist-attractions/"},
  {n:"Gwili Railway",lat:51.8686,lng:-4.2488,cat:"railway",desc:"Heritage railway in the Carmarthenshire countryside.",url:"https://wales.org/the-most-picturesque-steam-railways-in-wales/"},
  {n:"Talyllyn Railway",lat:52.5960,lng:-4.0890,cat:"railway",desc:"World's first preserved railway  running since 1865.",url:"https://wales.org/the-most-picturesque-steam-railways-in-wales/"},
  //  ADVENTURE (10) 
  {n:"Zip World Velocity",lat:53.1960,lng:-4.0580,cat:"adventure",desc:"World's fastest zip line  100mph over Penrhyn Quarry.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/adventure-sports/"},
  {n:"Bounce Below",lat:52.9962,lng:-3.9455,cat:"adventure",desc:"Giant trampolines in a spectacular underground cavern.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/adventure-sports/"},
  {n:"Pontcysyllte Aqueduct",lat:52.9699,lng:-3.0882,cat:"adventure",desc:"UNESCO World Heritage canal crossing  38m above the Dee Valley.",url:"https://wales.org/destinations-in-wales/north-wales/north-east-wales/"},
  {n:"Coasteering (St Davids)",lat:51.8800,lng:-5.2600,cat:"adventure",desc:"Jump, swim and scramble along the Pembrokeshire coast.",url:"https://wales.org/things-to-do-in-wales/adventures-and-activities/water-sports/"},
  {n:"Horse Riding (Brecon)",lat:51.9200,lng:-3.4300,cat:"adventure",desc:"Trek through the Brecon Beacons on horseback.",url:"https://wales.org/how-to-see-the-brecon-beacons-on-horseback/"},
  {n:"Horse Riding (Snowdonia)",lat:53.0500,lng:-4.0300,cat:"adventure",desc:"Pony trekking with mountain views in Snowdonia.",url:"https://wales.org/lets-get-trekking-horse-riding-holidays-in-snowdonia/"},
  {n:"Celtic Manor Golf",lat:51.6111,lng:-2.9811,cat:"adventure",desc:"Ryder Cup venue  three championship courses.",url:"https://wales.org/top-10-golf-courses-in-south-wales/"},
  {n:"Royal Porthcawl Golf",lat:51.4881,lng:-3.7099,cat:"adventure",desc:"Championship links  one of Britain's finest courses.",url:"https://wales.org/top-10-golf-courses-in-south-wales/"},
  {n:"Sea Fishing (Pembrokeshire)",lat:51.7000,lng:-5.0100,cat:"adventure",desc:"Charter boat fishing from Pembrokeshire harbours.",url:"https://wales.org/aye-aye-skipper-4-of-the-best-sea-fishing-trips-in-wales/"},
  {n:"Aberdyfi Sea Fishing",lat:52.5441,lng:-4.0538,cat:"adventure",desc:"Charter trips from the picturesque Dyfi estuary harbour.",url:"https://wales.org/aye-aye-skipper-4-of-the-best-sea-fishing-trips-in-wales/"}
  ];

  // Merge venue data if loaded
  if(typeof WALES_VENUES!=='undefined'){for(var v=0;v<WALES_VENUES.length;v++){P.push(WALES_VENUES[v])}}
  // Merge extra handcrafted pins if loaded
  if(typeof WALES_EXTRA_PINS!=='undefined'){for(var e=0;e<WALES_EXTRA_PINS.length;e++){P.push(WALES_EXTRA_PINS[e])}}

  var map=L.map('walesmap',{zoomControl:false,scrollWheelZoom:true}).setView([52.2,-3.8],7);
  L.control.zoom({position:'topleft'}).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:18}).addTo(map);

  var markers=[];
  function makeIcon(cat){var c=CC[cat]||'#475569';return L.divIcon({className:'',html:'<div style="width:24px;height:24px;border-radius:50% 50% 50% 0;background:'+c+';transform:rotate(-45deg);border:2.5px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);"></div>',iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-24]})}

  // Haversine distance in miles
  function distMi(lat1,lng1,lat2,lng2){
    var R=3958.8;var dLat=(lat2-lat1)*Math.PI/180;var dLng=(lng2-lng1)*Math.PI/180;
    var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)*Math.sin(dLng/2);
    return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  }

  function getNearby(pin,pinIdx){
    var results=[];
    var seenNames={};seenNames[pin.n.toLowerCase()]=true;
    var seenCats={};
    for(var j=0;j<P.length;j++){
      if(j===pinIdx)continue;
      var p=P[j];
      var nLow=p.n.toLowerCase();
      // Skip duplicates by name
      if(seenNames[nLow])continue;
      // Prefer variety — skip if we already have one from this category
      if(seenCats[p.cat]&&results.length>=2)continue;
      var d=distMi(pin.lat,pin.lng,p.lat,p.lng);
      if(d>20)continue; // 20 mile radius max
      results.push({p:p,i:j,d:d});
      seenNames[nLow]=true;
    }
    results.sort(function(a,b){return a.d-b.d});
    // Pick top results favouring category variety
    var final=[];var finalCats={};
    for(var k=0;k<results.length&&final.length<4;k++){
      var r=results[k];
      // Allow max 2 from same category in final results
      if(finalCats[r.p.cat]&&finalCats[r.p.cat]>=2)continue;
      final.push(r);
      finalCats[r.p.cat]=(finalCats[r.p.cat]||0)+1;
    }
    return final;
  }

  function popup(p,pIdx){
    var col=CC[p.cat]||'#475569';var label=CL[p.cat]||p.cat;
    var lk=p.url?'<a href="'+p.url+'" target="_blank" rel="noopener">Read More</a>':'<a href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.n+' Wales')+'" target="_blank" rel="noopener">View on Google</a>';
    lk+='<a href="'+VIA+'" target="_blank" rel="noopener sponsored">Experiences</a>';
    if(['stay','town','beach','hiking','castle'].indexOf(p.cat)>-1)lk+='<a href="'+COT+'" target="_blank" rel="noopener sponsored" class="wm-lc">Cottages</a>';
    // Build nearby section
    var nearby=getNearby(p,pIdx);
    var nb='';
    if(nearby.length>0){
      nb='<div class="wm-pop-nearby"><div class="wm-pop-nb-title">Nearby</div>';
      for(var i=0;i<nearby.length;i++){
        var nr=nearby[i];var nc=CC[nr.p.cat]||'#475569';
        var dTxt=nr.d<0.1?'<0.1 mi':nr.d<10?nr.d.toFixed(1)+' mi':Math.round(nr.d)+' mi';
        nb+='<div class="wm-pop-nb-item" data-nbidx="'+nr.i+'"><div class="wm-pop-nb-dot" style="background:'+nc+';"></div><div class="wm-pop-nb-name">'+nr.p.n+'</div><span class="wm-pop-nb-dist">'+dTxt+'</span></div>';
      }
      nb+='</div>';
    }
    return '<div class="wm-pop"><div class="wm-pop-border" style="background:'+col+'"></div><div class="wm-pop-body"><div class="wm-pop-cat" style="color:'+col+'">'+label+'</div><div class="wm-pop-title">'+p.n+'</div><div class="wm-pop-desc">'+p.desc+'</div><div class="wm-pop-links">'+lk+'</div>'+nb+'</div></div>';
  }

  function addPin(p,idx){var m=L.marker([p.lat,p.lng],{icon:makeIcon(p.cat)});m._pd=p;m._pidx=idx;m.bindPopup('',{maxWidth:300,closeButton:true});markers.push(m);return m}
  var group;
  try{group=L.markerClusterGroup({maxClusterRadius:45,spiderfyOnMaxZoom:true,showCoverageOnHover:false,zoomToBoundsOnClick:true,disableClusteringAtZoom:14,chunkedLoading:true})}catch(e){group=L.layerGroup()}
  P.forEach(function(p,idx){var m=addPin(p,idx);group.addLayer(m)});
  map.addLayer(group);

  // Lazy popup: generate content when opened so nearby is always calculated against full pin set
  var popupUpdating=false;
  map.on('popupopen',function(e){
    if(popupUpdating)return;
    var m=e.popup._source;if(!m||!m._pd)return;
    var idx=m._pidx;if(typeof idx==='undefined'){for(var j=0;j<markers.length;j++){if(markers[j]===m){idx=j;break}}}
    popupUpdating=true;
    e.popup.setContent(popup(m._pd,idx));
    e.popup.update();
    popupUpdating=false;
    // Bind nearby click handlers
    var container=e.popup.getElement();if(!container)return;
    container.querySelectorAll('.wm-pop-nb-item[data-nbidx]').forEach(function(el){
      el.addEventListener('click',function(){
        var ni=parseInt(el.getAttribute('data-nbidx'));if(isNaN(ni)||!markers[ni])return;
        map.closePopup();
        var target=markers[ni];
        map.setView([target._pd.lat,target._pd.lng],14);
        setTimeout(function(){try{group.zoomToShowLayer(target,function(){target.openPopup()})}catch(ex){try{target.openPopup()}catch(ex2){}}},400);
      });
    });
  });

  // Late-load check: if extra pins weren't available at init, retry
  var extraLoaded=typeof WALES_EXTRA_PINS!=='undefined';
  if(!extraLoaded){
    var retryCount=0;
    var retryTimer=setInterval(function(){
      retryCount++;
      if(typeof WALES_EXTRA_PINS!=='undefined'){
        clearInterval(retryTimer);
        for(var e=0;e<WALES_EXTRA_PINS.length;e++){var p=WALES_EXTRA_PINS[e];P.push(p);var m=addPin(p,P.length-1);group.addLayer(m)}
        filterPins();
        console.log('Wales Map: late-loaded '+WALES_EXTRA_PINS.length+' extra pins');
      }else if(retryCount>50){clearInterval(retryTimer);console.log('Wales Map: extra pins not found after retries')}
    },200);
  }
  var activeCats=new Set();
  function filterPins(resetView){
    group.clearLayers();var c=0;
    var showAll=activeCats.size===0;
    markers.forEach(function(m){if(showAll||activeCats.has(m._pd.cat)){group.addLayer(m);c++}});
    document.getElementById('wmCount').textContent='Showing '+c+' pins';
    // Only move the map when explicitly requested (e.g. "All" button click)
    if(resetView){map.setView([52.2,-3.8],7)}
  }
  document.querySelectorAll('.wm-fb').forEach(function(btn){btn.addEventListener('click',function(){
    var cat=btn.getAttribute('data-cat');
    var shouldReset=false;
    if(cat==='all'){
      // All button: clear all selections and reset view
      activeCats.clear();
      document.querySelectorAll('.wm-fb').forEach(function(b){b.classList.remove('active')});
      btn.classList.add('active');
      shouldReset=true;
    }else{
      // Toggle this category — stay on current map view
      document.querySelector('[data-cat="all"]').classList.remove('active');
      if(activeCats.has(cat)){activeCats.delete(cat);btn.classList.remove('active')}
      else{activeCats.add(cat);btn.classList.add('active')}
      // If nothing selected, reactivate All and reset view
      if(activeCats.size===0){document.querySelector('[data-cat="all"]').classList.add('active');shouldReset=true}
    }
    filterPins(shouldReset);
  })});

  // Search — robust init with DOM polling + fixed-position dropdown
  var si,sr,sc,searchReady=false,lastResults=[];

  // Region definitions for area-level search (name -> bounding box [south, west, north, east])
  var REGIONS={
    'anglesey':{name:'Isle of Anglesey',bounds:[[53.12,-4.72,53.43,-4.03]]},
    'isle of anglesey':{name:'Isle of Anglesey',bounds:[[53.12,-4.72,53.43,-4.03]]},
    'ynys mon':{name:'Isle of Anglesey',bounds:[[53.12,-4.72,53.43,-4.03]]},
    'pembrokeshire':{name:'Pembrokeshire',bounds:[[51.58,-5.33,52.10,-4.55]]},
    'sir benfro':{name:'Pembrokeshire',bounds:[[51.58,-5.33,52.10,-4.55]]},
    'snowdonia':{name:'Snowdonia (Eryri)',bounds:[[52.60,-4.25,53.22,-3.65]]},
    'eryri':{name:'Snowdonia (Eryri)',bounds:[[52.60,-4.25,53.22,-3.65]]},
    'gower':{name:'Gower Peninsula',bounds:[[51.53,-4.32,51.64,-3.85]]},
    'brecon beacons':{name:'Brecon Beacons (Bannau Brycheiniog)',bounds:[[51.72,-3.80,52.00,-3.05]]},
    'bannau brycheiniog':{name:'Brecon Beacons (Bannau Brycheiniog)',bounds:[[51.72,-3.80,52.00,-3.05]]},
    'ceredigion':{name:'Ceredigion',bounds:[[52.03,-4.70,52.47,-3.68]]},
    'cardigan bay':{name:'Cardigan Bay',bounds:[[52.03,-4.70,52.47,-3.68]]},
    'carmarthenshire':{name:'Carmarthenshire',bounds:[[51.65,-4.55,52.10,-3.62]]},
    'conwy':{name:'Conwy',bounds:[[53.05,-3.92,53.35,-3.55]]},
    'vale of glamorgan':{name:'Vale of Glamorgan',bounds:[[51.38,-3.62,51.50,-3.18]]},
    'north wales':{name:'North Wales',bounds:[[52.65,-4.72,53.43,-2.98]]},
    'south wales':{name:'South Wales',bounds:[[51.38,-4.35,51.70,-2.65]]},
    'mid wales':{name:'Mid Wales',bounds:[[52.00,-4.20,52.75,-3.10]]},
    'west wales':{name:'West Wales',bounds:[[51.55,-5.33,52.25,-4.00]]},
    'north east wales':{name:'North East Wales',bounds:[[52.85,-3.50,53.30,-2.90]]},
    'llyn peninsula':{name:'Llŷn Peninsula',bounds:[[52.75,-4.80,53.00,-4.10]]},
    'llyn':{name:'Llŷn Peninsula',bounds:[[52.75,-4.80,53.00,-4.10]]},
    'dee valley':{name:'Dee Valley',bounds:[[52.90,-3.45,53.10,-3.00]]},
    'wye valley':{name:'Wye Valley',bounds:[[51.60,-3.05,51.90,-2.60]]},
    'swansea bay':{name:'Swansea Bay',bounds:[[51.56,-4.05,51.65,-3.80]]},
    'monmouthshire':{name:'Monmouthshire',bounds:[[51.60,-3.15,51.90,-2.65]]}
  };

  function initSearch(attempts){
    si=document.getElementById('wmSI');
    sr=document.getElementById('wmSR');
    sc=document.getElementById('wmSC');
    if(!si||!sr){
      if(attempts<30){setTimeout(function(){initSearch(attempts+1)},200)}
      else{console.log('Wales Map: search elements not found after retries')}
      return;
    }
    // Update placeholder
    si.setAttribute('placeholder','Search');
    // Move results dropdown to body so it escapes all overflow:hidden ancestors
    document.body.appendChild(sr);
    searchReady=true;
    si.addEventListener('input',doSearch);
    si.addEventListener('focus',function(){if(si.value.trim().length>=2)doSearch()});
    si.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();onEnterSearch()}});
    if(sc)sc.addEventListener('click',function(){si.value='';hideResults();if(sc)sc.style.display='none';si.focus()});
    document.addEventListener('click',function(e){if(!e.target.closest('#wmSearchBox')&&!e.target.closest('#wmSR'))hideResults()});
    window.addEventListener('scroll',function(){if(sr.style.display==='block')positionResults()},true);
    window.addEventListener('resize',function(){if(sr.style.display==='block')positionResults()});
  }
  function onEnterSearch(){
    if(!lastResults.length)return;
    var top=lastResults[0];
    // Clear filters to show all pins
    if(activeCats.size>0){activeCats.clear();document.querySelectorAll('.wm-fb').forEach(function(b){b.classList.remove('active')});var allBtn=document.querySelector('[data-cat="all"]');if(allBtn)allBtn.classList.add('active');filterPins()}
    if(top.type==='region'){
      // Zoom to region bounds
      var b=top.bounds;
      map.fitBounds([[b[0],b[1]],[b[2],b[3]]],{padding:[30,30]});
      hideResults();si.value=top.name;if(sc)sc.style.display='block';si.blur();
    }else{
      // Zoom to specific pin
      var pin=P[top.i];
      map.setView([pin.lat,pin.lng],13);
      setTimeout(function(){try{group.zoomToShowLayer(markers[top.i],function(){markers[top.i].openPopup()})}catch(e){try{markers[top.i].openPopup()}catch(e2){}}},400);
      hideResults();si.value=pin.n;if(sc)sc.style.display='block';si.blur();
    }
  }
  function positionResults(){
    var box=si.closest('#wmSearchBox');if(!box)return;
    var r=box.getBoundingClientRect();
    sr.style.cssText='display:block;position:fixed;top:'+Math.round(r.bottom)+'px;left:'+Math.round(r.left)+'px;width:'+Math.round(Math.max(r.width,220))+'px;background:#fff;border-radius:0 0 10px 10px;box-shadow:0 6px 20px rgba(0,0,0,.14);max-height:300px;overflow-y:auto;border:1.5px solid #e2e0db;border-top:1px solid #eee;z-index:999999;font-family:DM Sans,system-ui,sans-serif;';
  }
  function hideResults(){sr.style.cssText='display:none;';sr.innerHTML=''}
  function doSearch(){
    if(!searchReady)return;
    var q=si.value.toLowerCase().trim();
    if(sc)sc.style.display=q.length>0?'block':'none';
    if(q.length<2){hideResults();lastResults=[];return}
    var res=[];
    // 1. Match regions first
    var regionKeys=Object.keys(REGIONS);
    var matchedRegions={};
    for(var r=0;r<regionKeys.length;r++){
      var rk=regionKeys[r];
      if(rk.indexOf(q)>-1){
        var rg=REGIONS[rk];
        if(!matchedRegions[rg.name]){
          matchedRegions[rg.name]=true;
          var rScore=rk.indexOf(q)===0?-2:-1;
          res.push({type:'region',name:rg.name,bounds:rg.bounds[0],s:rScore});
        }
      }
    }
    // 2. Search ALL pins (all categories)
    for(var j=0;j<P.length;j++){
      var p=P[j];
      var nLow=p.n.toLowerCase();
      var dLow=p.desc.toLowerCase();
      var nMatch=nLow.indexOf(q);
      var dMatch=dLow.indexOf(q);
      if(nMatch>-1||dMatch>-1){
        // Score: exact name start = 0, name contains = 1, desc only = 2
        var score=nMatch===0?0:nMatch>-1?1:2;
        res.push({type:'pin',p:p,i:j,s:score});
      }
    }
    res.sort(function(a,b){return a.s!==b.s?a.s-b.s:(a.name||a.p.n).localeCompare(b.name||b.p.n)});
    lastResults=res;
    var show=res.slice(0,8);
    if(!show.length){sr.innerHTML='<div style="padding:14px;text-align:center;color:#999;font-size:.82rem;">No results found</div>';positionResults();return}
    var h='';
    for(var k=0;k<show.length;k++){
      var item=show[k];
      if(item.type==='region'){
        h+='<div class="wm-sr wm-sr-region" data-ridx="'+k+'"><div class="wm-sr-ricon">&#9906;</div><div style="flex:1;min-width:0;"><div style="font-weight:600;color:#1e2328;font-size:.82rem;">'+item.name+'</div><div style="font-size:.7rem;color:#999;margin-top:1px;">Zoom to region</div></div></div>';
      }else{
        var m=item;
        var col=CC[m.p.cat]||'#475569';
        var label=CL[m.p.cat]||m.p.cat;
        var sd=m.p.desc;if(sd.length>40)sd=sd.substring(0,40)+'…';
        h+='<div class="wm-sr" data-idx="'+m.i+'" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid #f4f3f0;font-size:.82rem;display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:'+col+';"></div><div style="flex:1;min-width:0;"><div style="font-weight:600;color:#1e2328;font-size:.82rem;">'+m.p.n+'</div><div style="font-size:.7rem;color:#999;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+sd+'</div></div><span class="wm-sr-cat" style="background:'+col+'22;color:'+col+';">'+label+'</span></div>';
      }
    }
    sr.innerHTML=h;positionResults();
    // Bind click handlers for pin results
    sr.querySelectorAll('.wm-sr[data-idx]').forEach(function(el){
      el.onmouseenter=function(){el.style.background='#f9f8f6'};
      el.onmouseleave=function(){el.style.background='transparent'};
      el.onclick=function(){
        var idx=parseInt(el.getAttribute('data-idx'));if(isNaN(idx)||!P[idx])return;
        var pin=P[idx];
        if(activeCats.size>0){activeCats.clear();document.querySelectorAll('.wm-fb').forEach(function(b){b.classList.remove('active')});var allBtn=document.querySelector('[data-cat="all"]');if(allBtn)allBtn.classList.add('active');filterPins()}
        map.setView([pin.lat,pin.lng],13);
        setTimeout(function(){try{group.zoomToShowLayer(markers[idx],function(){markers[idx].openPopup()})}catch(e){try{markers[idx].openPopup()}catch(e2){}}},400);
        hideResults();si.value=pin.n;if(sc)sc.style.display='block';
      };
    });
    // Bind click handlers for region results
    sr.querySelectorAll('.wm-sr[data-ridx]').forEach(function(el){
      el.onmouseenter=function(){el.style.background='#f0efec'};
      el.onmouseleave=function(){el.style.background='#fafaf8'};
      el.onclick=function(){
        var ridx=parseInt(el.getAttribute('data-ridx'));
        var region=show[ridx];if(!region||region.type!=='region')return;
        var b=region.bounds;
        if(activeCats.size>0){activeCats.clear();document.querySelectorAll('.wm-fb').forEach(function(btn){btn.classList.remove('active')});var allBtn=document.querySelector('[data-cat="all"]');if(allBtn)allBtn.classList.add('active');filterPins()}
        map.fitBounds([[b[0],b[1]],[b[2],b[3]]],{padding:[30,30]});
        hideResults();si.value=region.name;if(sc)sc.style.display='block';
      };
    });
  }
  initSearch(0);

  filterPins();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initWalesMap);else initWalesMap();
})();
