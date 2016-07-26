console.log("Test Start!");
var answer;
document.getElementById("Question").addEventListener("click", function(){
    // document.getElementById("dropdown").innerHTML = "Hello World";
    console.log("^______^");
    var city={
    	'南京市(恭喜您捕獲彩蛋^__^)':'Nanjing' ,
    	'Epinephrine':'擬交感神經藥物:過敏性休克、延長局麻',
    	'Norepinephrine':'擬交感神經藥物:因不作用於β2，臨床少用於急救',
    	'Dopamine':'擬交感神經藥物:急性休克首選，保持心腎功能',
    	'Isoproterenol':'擬交感神經藥物:強心、支氣管擴張',
    	'Dobutamine':'擬交感神經藥物:強心(心肌耗氧量影響小→HR↑少)',
    	'Phenylephrine':'擬交感神經藥物:散瞳、治鼻塞',
    	'Metaproterenol':'擬交感神經藥物:支氣管擴張',
    	'Abuterol (Salbutamol)':'擬交感神經藥物',
    	'Terbutaline':'擬交感神經藥物',
    	'Fenoterol':'擬交感神經藥物',
    	'Ritodrine':'擬交感神經藥物:安胎',
    	'Salmeterol':'擬交感神經藥物:慢、長',
    	'Formoterol':'擬交感神經藥物:快、長',
    	'Ephedrine':'擬交感神經藥物:氣喘、鼻塞',
    	'Pseudo-ephedrine':'擬交感神經藥物:OTC decongestant、應力性尿失禁',
    	'Amphetamine':'擬交感神經藥物:降低食慾',
    	'Cocaine':'擬交感神經藥物:局部表面麻醉',
    	'Tyramine':'擬交感神經藥物:由腸道中MAOA代謝與MAOI合用，會使Tyramine經DA hydroxylase代謝成Octopamine→↑NE釋放→HTN危機',
    	'Methylphenidate':'擬交感神經藥物:過動兒、Narcolepsy (麻醉樣昏睡)',
    	'Trimethaphen':'交感神經阻斷劑˙主要降血壓:已不用',
    	'Hexamethonium':'交感神經阻斷劑˙主要降血壓:已不用',
    	'Methyl tyrosine':'交感神經阻斷劑˙主要降血壓:臨床無此藥',
    	'Clonidine':'交感神經阻斷劑˙主要降血壓:減輕opioid戒斷症狀',
    	'Methyldopa':'交感神經阻斷劑˙主要降血壓:孕婦高血壓',
    	'Reserpine':'交感神經阻斷劑˙主要降血壓:鎮靜、憂鬱、帕金森氏症',
    	'Guanethidine':'交感神經阻斷劑˙主要降血壓:使NE無法釋出',
    	'Phenoxybenzamine':'交感神經阻斷劑˙主要降血壓:HTN (單用反使HF機率↑)、BPH、Pheochromocytoma',
  		'Phentolamine':'交感神經阻斷劑˙主要降血壓:HTN (單用反使HF機率↑)、BPH、Pheochromocytoma競爭性，診斷',
  		'Tamsulosin':'交感神經阻斷劑˙主要降血壓:BPH + HTN',
  		'Propranolol(脂溶性)':'交感神經阻斷劑˙主要降血壓:甲亢、SVT、↓MI後的心率不整、預防偏頭痛',
  		'Timolol':'交感神經阻斷劑˙主要降血壓:青光眼',
  		'Atenolol':'交感神經阻斷劑˙主要降血壓:無',
  		'Metoprolol (脂溶性)':'交感神經阻斷劑˙主要降血壓:CHF、post-MI',
    	'Acebutolol':'交感神經阻斷劑˙主要降血壓:ISA (不用於MI)',
    	'Esmolol':'交感神經阻斷劑˙主要降血壓:β-blocker唯一針劑、SVT',
    	'Labetalol':'交感神經阻斷劑˙主要降血壓:口服、針劑',
    	'Carvedilol':'交感神經阻斷劑˙主要降血壓:CHF',
    	'Pilocarpine':'擬膽鹼素性致效劑:青光眼',
    	'Bethanechol':'擬膽鹼素性致效劑:腸麻痺、尿滯留(專一性佳)',
    	'Carbachol':'擬膽鹼素性致效劑:同時作用於M、N (專一性差：骨骼肌收縮)',
    	'Physostigmine':'擬膽鹼素性致效劑:青光眼、腸麻痺、尿滯留、解Atropine及TCA中毒',
    	'Neostigmine':'擬膽鹼素性致效劑:間接+直接N->治MG、刺激膀胱及腸胃道、解Tubocurarin (骨骼肌鬆弛劑)中毒',
    	'Pyridostigmine':'擬膽鹼素性致效劑:長效治MG',
    	'Edrophonium':'擬膽鹼素性致效劑:短效治MG',
    	'有機磷':'擬膽鹼素性致效劑:Soman > Parathion > Malathion、解毒劑：Atropine(抗M，解除症狀)+PAM (Pralidoxime；救AchE)',
    	'Atropine':'擬膽鹼素拮抗劑:術前減少外分泌、睫狀肌麻痺→治假性近視、解毒劑：Physostigmine',
    	'Scopolamine':'擬膽鹼素拮抗劑:小量使用止暈止吐',
    	'Tropicamide':'擬膽鹼素拮抗劑:散瞳→眼底鏡檢查',
    	'Ipratropium(Atrovent)':'擬膽鹼素拮抗劑:氣喘、COPD (首選藥)',
    	'Propantheline':'擬膽鹼素拮抗劑:降低胃酸分泌及腸胃蠕動(被Pirenzepine取代)',
    	'Pirenzepine':'擬膽鹼素拮抗劑:降低胃酸分泌',
    	'Trihexyphenidyl':'擬膽鹼素拮抗劑:帕金森氏症、EPS',
    	'Benztropine':'擬膽鹼素拮抗劑:帕金森氏症、EPS',
    	'Biperiden':'擬膽鹼素拮抗劑:帕金森氏症、EPS',
    	'd-Tubocurarine(d-Tc)':'擬膽鹼素拮抗劑:鬆弛由小肌肉(臉、眼)→四肢→…(最後恢復亦為小肌肉)、麻醉前給藥、協助呼吸器使用、解毒劑：Neostigmine',
    	'Vecuronium':'擬膽鹼素拮抗劑:不釋放Histamine→不影響心血管',
    	'Pancuronium':'擬膽鹼素拮抗劑:阻斷M2→降低心跳(似Atropine)',
    	'Atracurium':'擬膽鹼素拮抗劑:不經肝臟代謝→適合ICU插管、肝腎功能不佳者首選、低溫、低pH下穩定、與d-Tc同為Denzylisoquinolines',
    	'Mivacurium':'擬膽鹼素拮抗劑:腎功能缺損時會延長作用時間',
    	'Succinylcholine(Ach-Ach)':'擬膽鹼素拮抗劑:肌肉先收縮後放鬆、經肝臟製造的pseudo-AchE、水解代謝、協助插管、解毒：人工呼吸(禁用抗AchE藥)',
    	'Baclofen':'擬膽鹼素拮抗劑:GABAB (Gi)',
    	'Diazepam (Valium)':'擬膽鹼素拮抗劑:GABAA(Cl-)',
    	'Botulium toxin':'擬膽鹼素拮抗劑:抑制N-M junction處的Ach釋放',
    	'Aminoglycoside':'擬膽鹼素拮抗劑:抑制突觸前Ca2+流入→Ach釋放減少、Ex. Gentamicin',
    	'Amylnitrite':'心絞痛用藥:急救用，最速效',
    	'Nitroglycerin(NTG)':'心絞痛用藥:各種劑型(口服具首渡效應)、第3顆無效、避光',
    	'dinitrate':'心絞痛用藥:中長效、口服',
    	'mononitrate':'心絞痛用藥:長效、口服',
    	'tetranitrate':'心絞痛用藥:中長效、口服',
    	'Dihydropyridine(DHP)-主作用於血管,Nifedipine(Adalate)(短效)':'心絞痛用藥:抑制血管平滑肌強(短效易↑angina死亡)',
    	'Dihydropyridine(DHP)-主作用於血管,Amlodipine(Norvasc)(長效)':'心絞痛用藥:最不會反射性HR↑',
    	'Nimodipine':'心絞痛用藥:脂溶性治SAH引起的血管收縮',
    	'Non-DHP-SVT (class IV)-HF禁用(Verapamil尤其),Verapamil':'心絞痛用藥:抑制心臟強、β阻斷劑合用易導致HR↓↓、易使Digoxin濃度↑、預防偏頭痛',
    	'Non-DHP-SVT (class IV)-HF禁用(Verapamil尤其),Diltiazem':'心絞痛用藥:同時抑制心臟、血管',
    	'Mannitol':'利尿劑:降腦壓、眼壓(治急性青光眼)',
    	'Urea':'利尿劑:皮膚保水',
    	'Acetazolamide':'利尿劑:降眼壓→急性青光眼、利用代酸減少癲癇發生→生理期seizure',
    	'(-thiazide)':'利尿劑:高血壓：適合第一線使用(因亦可間接擴張周邊血管)、Mild HF、水腫、腎性尿崩症(+限鹽)',
    	'Furosemide (Lasix),Ethacrynic acid,Bumetanide(效果比Lasix強)':'利尿劑:高血壓、急性肺水腫(+Nitrate佳)、嚴重CHF、嚴重水腫、急性高血鈣(+大量N/S)',
    	'Spironolactone,Amiloride,Triamterene':'利尿劑:高血壓、水腫(肝硬化)、增加CHF患者存活率、Spironolactone治女性多毛症、(與Androgen-R競爭性拮抗)',
    	'(-zosin)':'降血壓:BPH+高血壓',
    	'Hydralazine':'降血壓:擴張小動脈',
    	'Minoxidil':'降血壓:打開K+通道→擴張小動脈',
    	'Diazoxide':'降血壓:打開K+通道→擴張小動脈',
    	'Nitroprusside':'降血壓:NO同時擴張V、A效強、高血壓急症首選、須避光',
    	'Trimethaphan':'降血壓:已不用',
    	'Methyldopa':'降血壓:孕婦高血壓',
    	'Loop diuretics':'CHF:急性肺水腫+嚴重CHF',
    	'Thiazide':'CHF:Mild CHF',
    	'Spironolactone':'CHF:↑存活率',
    	'Digitalis glycosides':'CHF:SV↑、HR↓(↓耗氧)：減輕CHF、↓AV node (↑PR interval)：治心率不整、改善症狀CHF最明顯、不影響存活率',
    	'Digitoxin(臨床不用)':'CHF:脂溶性高、長效、口服吸收最佳、肝代謝、膽汁排泄',
    	'Digoxin':'CHF:脂溶性、中效、口服吸收佳、腎排泄(過濾、分泌、再吸收)',
    	'β1 agonist(Dobutamine、DA)':'CHF:↑心肌cAMP (SV↑、HR↑) (但↑死亡率)',
    	'Metoprolol、Bisoprolol、Carvedilol':'CHF:↓交感代償性促心臟作功的惡性循環、↓renin (↑存活率)、小劑量開始使用',
    	'':'CHF:',
    	'':'CHF:',



    	






    };
    var keyArray = Object.keys(city);
  function shuffle(o){ //v1.0
  	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  		return o;
  };
  keyArray = shuffle(keyArray); // shuffle it!
  var topic = $(".question");
  answer=keyArray[0];
  console.log("i am key"+keyArray[0]);
  console.log("i am Value"+city[keyArray[0]]);
  topic.text(city[keyArray[0]]);

// var lebron =Object.keys(city);

// console.log(lebron);
var Q1 = $("#q1a");
var Q2 = $("#q1b");
var Q3 = $("#q1c");
var Q4 = $("#q1d");
var Q5 = $("#q1e");

var answerbank = [] ;
//start of seed
keyArray = shuffle(keyArray);
var wrong1 =keyArray[0];
keyArray = shuffle(keyArray);
var wrong2 =keyArray[0];
keyArray = shuffle(keyArray);
var wrong3 =keyArray[0];
console.log("wrong123:"+wrong1+"_"+wrong2+"_"+wrong3);
console.log("right answer"+answer);

//
function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
	var rdmArray = [n];		//儲存產生的陣列
	for(var i=0; i<n; i++) {
		var rdm = 0;		//暫存的亂數
		do {
			var exist = false;			//此亂數是否已存在
			rdm = getRandom(minNum, maxNum);	//取得亂數
			//檢查亂數是否存在於陣列中，若存在則繼續回圈
			if(rdmArray.indexOf(rdm) != -1) exist = true;
		} while (exist);	//產生沒出現過的亂數時離開迴圈
		rdmArray[i] = rdm;
	}
	return rdmArray;
}
var B = getRandomArray(0,3,4);
console.log(B);
//selection 1
if (B[0]==0){
console.log("BINGO");
answerbank[0]=answer;
console.log(answerbank);
}
else if (B[0]==1){
answerbank[0]=wrong1;
console.log(answerbank);
}
else if (B[0]==2){
answerbank[0]=wrong2;
console.log(answerbank);
}
else if (B[0]==3){
answerbank[0]=wrong3;
console.log(answerbank);
}
//end of selection 1

//selection 2
if (B[1]==0){
console.log("BINGO");
answerbank[1]=answer;
console.log(answerbank);
}
else if (B[1]==1){
answerbank[1]=wrong1;
console.log(answerbank);
}
else if (B[1]==2){
answerbank[1]=wrong2;
console.log(answerbank);
}
else if (B[1]==3){
answerbank[1]=wrong3;
console.log(answerbank);
}
//end of selection 2

//selection 3
if (B[2]==0){
console.log("BINGO");
answerbank[2]=answer;
console.log(answerbank);
}
else if (B[2]==1){
answerbank[2]=wrong1;
console.log(answerbank);
}
else if (B[2]==2){
answerbank[2]=wrong2;
console.log(answerbank);
}
else if (B[2]==3){
answerbank[2]=wrong3;
console.log(answerbank);
}
//end of selection 3
//selection 4
if (B[3]==0){
console.log("BINGO");
answerbank[3]=answer;
console.log(answerbank);
}
else if (B[3]==1){
answerbank[3]=wrong1;
console.log(answerbank);
}
else if (B[3]==2){
answerbank[3]=wrong2;
console.log(answerbank);
}
else if (B[3]==3){
answerbank[3]=wrong3;
console.log(answerbank);
}
//end of selection 4



//end of seed
keyArray = shuffle(keyArray); // shuffle it!

Q1.text(answerbank[0]);

keyArray = shuffle(keyArray); // shuffle it!
Q2.text(answerbank[1]);

keyArray = shuffle(keyArray);
Q3.text(answerbank[2]);

keyArray = shuffle(keyArray);
Q4.text(answerbank[3]);

// Q5.text("Others");
$("input:radio").attr("checked", false);
// var Q5 = $("#finalanswer");
// Q5.text(answer);


});

//start of answer

document.getElementById("results").addEventListener("click", function(){
  
var Q5 = $("#finalanswer");
Q5.text(answer);


});


//end of answer