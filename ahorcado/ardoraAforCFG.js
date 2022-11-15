//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=6;
var score=0; scoreMax=20; scoreInc=2; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FDD9F7"; colorButton="#7986F7"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="¡Felicidades, lo has logrado!"; messageTime=""; messageError="Has cometido un error, pero sugue adelante "; messageErrorG="Has cometido un error, pero sugue adelante "; messageAttempts="Se agotaron tus movimientos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWhvcmNhZG8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QVpVQ0FS","QUdVQQ==","TUVSTUVMQURB","TUlFTCBERSBNQVBMRQ==","SkFSQUJFIERFIE1Bw41a","RVhDRVNP","Q0FSSUVTIERFTlRBTEVT","T0JFU0lEQUQ=","RElBQkVURVM=","SElQRVJURU5TScOTTg=="];imaW=["","","","","","","","","",""];queW=["Producto utilizado tradicionalmente para endulzar comidas y bebidas, más que todo en la reposteria","Es una bebida que ayuda a regular la temperatura de tu cuerpo, ayuda a perder peso, ayuda a los dolores de cabeza. Entre otros beneficios","Alimento que ayuda a reducir los niveles de colesterol en la sangre y ayuda al deseo de consumir azucar ¡PERO ES SANO!","Tipo de miel que ayuda a reducir la diabetes, el cancer, el alzheimer. Entre otros beneficios","Endulcolorante líquido que se obtiene a prtir del almidón y fecula de maíz","Consumir el azúcaren _____________ puede traer graves problemas de salúd","Es una de las consecuencias del consumo excesivo del aúcar que acompañado de una mala higiene afecta a tus dientes  ","Consecuencia del consumo excesivo del azúcar que afecta al  peso","Consecuencia que aparece cuando el páncreas no puede producir suficiente insulina y azúcar en exceso puede ser una de sus príncipales causas","Consecuencia en donde se afecta directamente al corazón "];var wordsL=[6,4,9,13,14,6,15,8,8,12];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado_resources/media/"; textBNext="Siguiente";
