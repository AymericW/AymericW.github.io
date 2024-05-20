// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const medocStart = document.getElementById('MedicStart')
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const medocQuiz = document.getElementById('quizMedoc');

let BiggestArrayEver = [
    [
      "Sous-Classe",
      "Dci",
      "Nom(S) Déposé(S)"
    ],
    [
      "β-bloquant",
      "Aténolol",
      "Tenormin"
    ],
    [
      "β-bloquant",
      "Bisoprolol",
      "Bisoprolol"
    ],
    [
      "β-bloquant",
      "Carvédilol",
      "Kredex"
    ],
    [
      "β-bloquant",
      "Labétalol",
      "Trandate"
    ],
    [
      "β-bloquant",
      "Métoprolol",
      "Seloken\n\n"
    ],
    [
      "β-bloquant",
      "Métoprolol",
      "Selozok"
    ],
    [
      "β-bloquant",
      "Nebivolol",
      "Nobiten"
    ],
    [
      "β-bloquant",
      "Propranolol",
      "Inderal "
    ],
    [
      "β-bloquant",
      "Propranolol",
      "Hemangiol"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Amlodipine",
      "Amlor"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Amlodipine",
      "Amlogal"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Félodipine",
      "Félodipine"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Lercanidipine",
      "Zanidip"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Nifédipine",
      "Nifédipine"
    ],
    [
      "Antagoniste Calcique des vaisseaux ",
      "Nimodipine",
      "Nimotop"
    ],
    [
      "Antagoniste calcique cardiaque",
      "Vérapamil",
      "Isoptine"
    ],
    [
      "Antagoniste calcique cardiaque",
      "Vérapamil",
      "Lodixal "
    ],
    [
      "Antagoniste calcique cardiaque",
      "Diltiazem",
      "Progor"
    ],
    [
      "Antagoniste calcique cardiaque",
      "Diltiazem",
      "Tildiem"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Captopril",
      "Captopril"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Cilazapril",
      "Inhibace"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Enalapril",
      "Renitec"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Fosinopril",
      "Fosinil"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Lisinopril",
      "Zestril"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Périndopril",
      "Coversyl"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Quinapril",
      "Quinapril"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Ramipril",
      "Tritace"
    ],
    [
      "Médicaments agissant sur le système rénine-angiotensine IECA",
      "Zofénopril",
      "Zopranol"
    ],
    [
      "Sartan ARA ",
      "Candésartan",
      "Atacand"
    ],
    [
      "Sartan ARA ",
      "Eprosartan",
      "Teveten"
    ],
    [
      "Sartan ARA ",
      "Irbésartan",
      "Aprovel"
    ],
    [
      "Sartan ARA ",
      "Losartan",
      "Cozaar"
    ],
    [
      "Sartan ARA ",
      "Losartan",
      "Loortan"
    ],
    [
      "Sartan ARA ",
      "Olmésartan",
      "Belsar"
    ],
    [
      "Sartan ARA ",
      "Olmésartan",
      "Olmetec"
    ],
    [
      "Sartan ARA ",
      "Telmisartan",
      "Micardis"
    ],
    [
      "Sartan ARA ",
      "Valsartan",
      "Diovane"
    ],
    [
      "Alpha – bloquants",
      "Térazosine",
      "Hytrin"
    ],
    [
      "Alpha – bloquants",
      "Térazosine",
      "Terazosab"
    ],
    [
      "Antihypertenseurs centraux\n",
      "Clonidine",
      "Catapressan"
    ],
    [
      "Antihypertenseurs centraux\n",
      "Méthyldopa",
      "Aldomet"
    ],
    [
      "Antihypertenseurs centraux\n",
      "Moxonidine",
      "Moxonidine"
    ],
    [
      "Hypotenseur traitement hypotension",
      "Etilefrine",
      "Effortil"
    ],
    [
      "Adrénaline",
      "Adrénaline",
      "Epipen "
    ],
    [
      "Adrénaline",
      "Adrénaline",
      "Jext"
    ],
    [
      "Statines",
      "Atorvastatine",
      "Lipitor"
    ],
    [
      "Statines",
      "Atorvastatine",
      "Totalip"
    ],
    [
      "Statines",
      "Pravastatine",
      "Prareduct"
    ],
    [
      "Statines",
      "Pravastatine",
      "Pravasor"
    ],
    [
      "Statines",
      "Pravastatine",
      "pravastatine"
    ],
    [
      "Statines",
      "Rosuvastatine",
      "Crestor"
    ],
    [
      "Statines",
      "Rosuvastatine",
      "Rosuvastatine"
    ],
    [
      "Statines",
      "Simvastatine",
      "Zocor"
    ],
    [
      "Statines",
      "Simvastatine",
      "Simvastatine"
    ],
    [
      "Fibrates",
      "bézafibrate",
      "Cedur"
    ],
    [
      "Fibrates",
      "bézafibrate",
      "Eulitop"
    ],
    [
      "Fibrates",
      "Ciprofibrate",
      "Hyperlipen"
    ],
    [
      "Fibrates",
      "Fénofibrate",
      "Fenogal"
    ],
    [
      "Fibrates",
      "Fénofibrate",
      "Fenosup"
    ],
    [
      "Fibrates",
      "Fénofibrate",
      "Lipanthyl"
    ],
    [
      "Fibrates",
      "Fénofibrate",
      "Lipanthylnano"
    ],
    [
      "résines échangeuses d’anions",
      "colestyramine",
      "Questran"
    ],
    [
      "Ezétimibe",
      "Ezétimibe",
      "Ezetrol"
    ],
    [
      "Ezétimibe",
      "Ezétimibe",
      "Ezgal "
    ],
    [
      "acides gras omega 3",
      "acides gras omega 3",
      "Omacor"
    ],
    [
      "Acide bempédoïque",
      "Acide bempédoïque",
      "Nilemdo"
    ],
    [
      "Associations",
      "Ezétimide + atrovastatine",
      "Atozet"
    ],
    [
      "Associations",
      "Ezétimibe + rosuvastatine",
      "Cholecomb"
    ],
    [
      "Associations",
      "Ezétimibe + rosuvastatine",
      "Myrosor"
    ],
    [
      "Associations",
      "Ezétimibe + rosuvastatine",
      "Suvezen"
    ],
    [
      "Associations",
      "Ezétimide + simvastatine",
      "Inegy "
    ],
    [
      "Associations",
      "Ezétimide + acide bempédoïque",
      "Nustendi"
    ],
    [
      "Associations",
      "Fénobibrate + pravastatine",
      "Pravafenix"
    ],
    [
      "Inhibiteurs de la PCSK 9",
      "Alirocumab",
      "Praluent"
    ],
    [
      "Inhibiteurs de la PCSK 9",
      "Evolocumab",
      "Repatha"
    ],
    [
      "Diurétique augmentant la perte de potassium Thiazides ",
      "Chlorthalidone ",
      "Hygroton"
    ],
    [
      "Diurétique augmentant la perte de potassium Thiazides ",
      "Indapamide",
      "Fludex"
    ],
    [
      "Diurétique de l’anse",
      "Bumétanide",
      "Burinex"
    ],
    [
      "Diurétique de l’anse",
      "Furosémide",
      "Lasix"
    ],
    [
      "Diurétique de l’anse",
      "Torasémide",
      "Torrem"
    ],
    [
      "Diurétique d’épargne potassique",
      "Éplérénone",
      "Inspra"
    ],
    [
      "Diurétique d’épargne potassique",
      "Finérénone",
      "Kerendia"
    ],
    [
      "Diurétique d’épargne potassique",
      "Spironolactone",
      "Aldactone"
    ],
    [
      "Inhibiteurs de l’anhydrase carbonique",
      "Acétazolamide",
      "Diamox"
    ],
    [
      "Association de diurétique",
      "Furosémide + amiloride",
      "Frusamil"
    ],
    [
      "associations d’hypotenseurs\nDiurétiques + β-Bloquants",
      "Atenolol + chlortalidone",
      "Tenoretic "
    ],
    [
      "associations d’hypotenseurs\nDiurétiques + β-Bloquants",
      "Bisoprolol + hydrochlorthiazide",
      "Emcoretic"
    ],
    [
      "associations d’hypotenseurs\nDiurétiques + β-Bloquants",
      "Nébivolol + hydrochlorthiazide",
      "Nobiretic "
    ],
    [
      "b-bloquants et antagoniste calcique",
      "Métoprolol + félodipine",
      "Logimat"
    ],
    [
      "Beta-bloquant + IECA",
      "Bisoprolol + périndopril",
      "Bipressil"
    ],
    [
      "Diurétiques + IECA",
      "Quinapril + HCT",
      "Quinapril + HCT"
    ],
    [
      "Diurétiques + IECA",
      "Périndopril + indapamide",
      "Coversyl Plus"
    ],
    [
      "Diurétiques + IECA",
      "Périndopril + indapamide",
      "Preterax"
    ],
    [
      "Diurétiques + IECA",
      "Périndopril + indapamide",
      "Coperindo"
    ],
    [
      "Diurétiques + IECA",
      "Énalapril + HCT",
      "Co-Renitec"
    ],
    [
      "Diurétiques + IECA",
      "Énalapril + HCT",
      "Co-Enalapril "
    ],
    [
      "Diurétiques + IECA",
      "Cilazapril + HCT",
      "Co-Inhibace "
    ],
    [
      "Diurétiques + IECA",
      "Lisinopril + HCT",
      "Co-Lisinopril "
    ],
    [
      "Diurétiques + IECA",
      "Lisinopril + HCT",
      "Zestoretic "
    ],
    [
      "Diurétiques + IECA",
      "Ramipril + HCT",
      "Tritazide"
    ],
    [
      "Diurétiques + IECA",
      "Ramipril + HCT",
      "Co-Ramipril "
    ],
    [
      "Diurétiques + IECA",
      "zofénopril + HCT",
      "Zopranol Plus"
    ],
    [
      "IECA + antagoniste calcique",
      "Périndopril +amlodipine",
      "Coveram"
    ],
    [
      "IECA + antagoniste calcique",
      "Énalapril + lercanidipine",
      "Zanicombo"
    ],
    [
      "IECA + antagoniste calcique",
      "Félodipine + ramipril",
      "Tazko"
    ],
    [
      "Diurétiques + sartan",
      "Candésartan + HCT",
      "Atacand Plus"
    ],
    [
      "Diurétiques + sartan",
      "Candésartan + HCT",
      "Candesartan Plus"
    ],
    [
      "Diurétiques + sartan",
      "Candésartan + HCT",
      "Co-Candesartan"
    ],
    [
      "Diurétiques + sartan",
      "valsartan + HCT",
      "Co-Diovane"
    ],
    [
      "Diurétiques + sartan",
      "valsartan + HCT",
      "Co-Valsartan"
    ],
    [
      "Diurétiques + sartan",
      "Losartan + HCT",
      "Cozaar Plus"
    ],
    [
      "Diurétiques + sartan",
      "Losartan + HCT",
      "Loortan Plus"
    ],
    [
      "Diurétiques + sartan",
      "Losartan + HCT",
      "Co-Losartan"
    ],
    [
      "Diurétiques + sartan",
      "Telmisartan + HCT",
      "MicardisPlus"
    ],
    [
      "Diurétiques + sartan",
      "Telmisartan + HCT",
      "Telmisartan Plus HCT"
    ],
    [
      "Diurétiques + sartan",
      "Olmésartan + HCT",
      "Olmetec Plus"
    ],
    [
      "Diurétiques + sartan",
      "Olmésartan + HCT",
      "Belsar Plus "
    ],
    [
      "Diurétiques + sartan",
      "irbésartan + HCT",
      "CoAprovel"
    ],
    [
      "Diurétiques + sartan",
      "irbésartan + HCT",
      "Irbesartan / HCT"
    ],
    [
      "Diurétiques + sartan",
      "irbésartan + HCT",
      "Irbesartan / Hydrochlorothiazide "
    ],
    [
      "Sartan + antagoniste calcique",
      "Valsartan + amlodipine",
      "Exforge"
    ],
    [
      "Sartan + antagoniste calcique",
      "Olmésartan + amlodipine",
      "Forzaten"
    ],
    [
      "Sartan + antagoniste calcique",
      "Olmésartan + amlodipine",
      "Sevikar"
    ],
    [
      "Sartan + antagoniste calcique",
      "Telmisartan + amlodipine",
      "Twynsta"
    ],
    [
      "IECA + antagoniste calcique + diurétique",
      "Périndopril + amlodipine + indapamide",
      "Triplixam"
    ],
    [
      "Sartan + antagoniste calcique + diurétique",
      "Valsartan + amlodipine + HCT",
      "Exforge HCT"
    ],
    [
      "Sartan + antagoniste calcique + diurétique",
      "Olmésartan + amlodipine + HCT",
      "Forzaten / HCT"
    ],
    [
      "Sartan + antagoniste calcique + diurétique",
      "Olmésartan + amlodipine + HCT",
      "Sevikar / HCT"
    ],
    [
      "Dérivés nitrés \nLes nitrates \nvoie sublinguales et ou orale",
      "Dinitrate d’isosorbide",
      "Cedocard"
    ],
    [
      "Voie transdermique",
      "Nitroglycérine",
      "Minitran"
    ],
    [
      "Voie transdermique",
      "Nitroglycérine",
      "Trinipatch"
    ],
    [
      "Dérivé nitré - prodrogue",
      "Molsidomine\n",
      "Coruno"
    ],
    [
      "Dérivé nitré - prodrogue",
      "Molsidomine\n",
      "Corvaton"
    ],
    [
      "ivabradine",
      "Ivabradine",
      "Procoralan"
    ],
    [
      "ivabradine",
      "Ivabradine",
      "Ivabradine"
    ],
    [
      "Ranolazine",
      "Ranolazine",
      "Ranexa"
    ],
    [
      "Antiarythmiques des arythmies ventriculaires",
      "Lidocaïne",
      "Xylocard"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "amiodarone",
      "Cordarone"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "disopyramide",
      "Rythmodan"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "flécaïnide",
      "Apocard"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "flécaïnide",
      "Flecateva"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "flécaïnide",
      "Tambocor"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "propafénone",
      "Rytmonorm"
    ],
    [
      "Antiarytmiques des arythmies supraventriculaires et ventriculaires",
      "Sotalol",
      "Sotalex"
    ],
    [
      "antiagrégant ",
      "acide acétylsalicylique",
      "aspirine"
    ],
    [
      "antiagrégant ",
      "acide acétylsalicylique",
      "Asa"
    ],
    [
      "antiagrégant ",
      "acide acétylsalicylique",
      "Asaflow"
    ],
    [
      "antiagrégant ",
      "acide acétylsalicylique",
      "Cardioaspirine"
    ],
    [
      "thiénopyridines",
      "Clopidogrel",
      "Clopidogrel"
    ],
    [
      "thiénopyridines",
      "Prasurel",
      "Efient"
    ],
    [
      "thiénopyridines",
      "Ticlopidine",
      "Ticlid"
    ],
    [
      "inhibiteur réversible du récepteur P2Y12",
      "Cangrélor",
      "Kengrexal"
    ],
    [
      "inhibiteur réversible du récepteur P2Y12",
      "Ticagrélor",
      "Brilique"
    ],
    [
      "anti coagulants oraux coumarines",
      "Acénocoumarol",
      "Sintrom"
    ],
    [
      "anti coagulants oraux coumarines",
      "Warfarine",
      "Marevan"
    ],
    [
      "anti coagulants oraux coumarines",
      "Phenprocoumone",
      "Marcoumar"
    ],
    [
      "Les anticoagulants oraux directs : AOD",
      "Apixaban",
      "Eliquis"
    ],
    [
      "Les anticoagulants oraux directs : AOD",
      "Dabigatran",
      "Pradaxa"
    ],
    [
      "Les anticoagulants oraux directs : AOD",
      "Edoxaban",
      "Lixiana"
    ],
    [
      "Les anticoagulants oraux directs : AOD",
      "Rivaroxaban",
      "Xarelto"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "énoxaparine",
      "Clexane"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "énoxaparine",
      "Enoxaparine Becat"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "énoxaparine",
      "Ghemaxan"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "nadroparine",
      "Fraxiparine"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "nadroparine",
      "Fraxodi"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "tinzaparine",
      "Innohep"
    ],
    [
      "Les anticoagulants par voie parentérale : héparinoïdes ",
      "fondaparinux",
      "Arixtra"
    ],
    [
      "anti-fibrinolytiques",
      "acide tranexamique",
      "Exacyl"
    ],
    [
      "veinotropes per os",
      "vigne rouge",
      "Antistax"
    ],
    [
      "veinotropes per os",
      "diosmine",
      "Diosmin EG"
    ],
    [
      "veinotropes per os",
      "diosmine 450 mg + hespéridine 50mg",
      "Daflon"
    ],
    [
      "veinotropes per os",
      "naftazone",
      "Mediaven"
    ],
    [
      "veinotropes per os",
      "diosmine + flavonoïdes",
      "Neoflavon"
    ],
    [
      "veinotropes per os",
      "aescine",
      "Reparil"
    ],
    [
      "veinotropes per os",
      "aescine",
      "Veinofytol "
    ],
    [
      "veinotropes per os",
      "hydroxyéthyl rutoside",
      "Venoruton"
    ],
    [
      "traitement local de la stase veineuse",
      "Arnica montana teinture",
      "ArnicaforceMed"
    ],
    [
      "traitement local de la stase veineuse",
      "mucopolysaccharide polysulfate crème cutané 3 mg / 1 g",
      "Hirudoid"
    ],
    [
      "traitement local de la stase veineuse",
      "acide salicylique + mucopolysaccharide polysulfate gel cutané 20 mg + 2 mg / 1 g",
      "Mobilat"
    ],
    [
      "traitement local de la stase veineuse",
      "aescine + salicylate diéthylamine gel cutané 10 mg + 50 mg / 1 g",
      "Reparil Gel"
    ],
    [
      "Médicaments du trouble vasculaire artériel",
      "cinnarizine",
      "Stugeron"
    ],
    [
      "Médicaments du trouble vasculaire artériel",
      "pentoxifylline",
      "Torental "
    ],
    [
      "Médicaments du trouble vasculaire artériel",
      "piracétam",
      "Nootropil"
    ],
    [
      "Médicaments du trouble vasculaire artériel",
      "piracétam",
      "Piracetam EG"
    ],
    [
      "Ipp",
      "Esomeprazole",
      "Nexiam"
    ],
    [
      "Ipp",
      "Lansoprazole",
      "Lansoprazole"
    ],
    [
      "Ipp",
      "Oméprazole",
      "Acidcare\n\n\n\n"
    ],
    [
      "Ipp",
      "Oméprazole",
      "Losec"
    ],
    [
      "Ipp",
      "Oméprazole",
      "Sedacid"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Ippracid\n"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Maalox Control"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Pantogastrix"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Pantomed"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Pantoprazol"
    ],
    [
      "Ipp",
      "Pantoprazole",
      "Pantozol"
    ],
    [
      "Ipp",
      "Rabéprazole",
      "Pariet"
    ],
    [
      "Ipp",
      "Misoprostol",
      "Cytotec"
    ],
    [
      "Antiacides",
      "Magaldrate",
      "Gastricalm\n\n"
    ],
    [
      "Antiacides",
      "Magaldrate",
      "Riopan"
    ],
    [
      "Antiacides",
      "Alginate\nHydrogénocarbonate\nCarbonate Calcium",
      "Gaviscon"
    ],
    [
      "Antiacides",
      "Aluminium Oxyde\nMagnésium Hydroxyde",
      "Maalox"
    ],
    [
      "Antiacides",
      "Carbonate Calcium\nCarbonate Magnésium",
      "Rennie"
    ],
    [
      "Antiacides",
      "Carbonate Calcium\nKaolin\nMagnésium Hydroxyde",
      "Restofit"
    ],
    [
      "Spécialité",
      "Bismuth + Métronidazole + Tétracycline",
      "Tryplera"
    ],
    [
      "Spasmolytiques",
      "Alvérine",
      "Spasmine"
    ],
    [
      "Spasmolytiques",
      "Alvérine +Siméticone",
      "Simalviane"
    ],
    [
      "Spasmolytiques",
      "Butylhyoscine",
      "Buscopan"
    ],
    [
      "Spasmolytiques",
      "Mébévérine",
      "Duspatalin"
    ],
    [
      "Spasmolytiques",
      "Menthe Poivrée \n( Mentha X Piperita)",
      "Tempocol"
    ],
    [
      "Spasmolytiques",
      "( Mentha X Piperita)\nCarum Carvi ( Huile)",
      "Carmenthin"
    ],
    [
      "Spasmolytiques",
      "Otilonium",
      "Spasmomen"
    ],
    [
      "Spasmolytiques",
      "Siméticone",
      "Imonogas"
    ],
    [
      "Pathologie Du Foie, De La Vésicule Biliaire Et Du Pancréas\nSpécialité",
      "Acide Ursodéoxycholique",
      "Dozurso \n"
    ],
    [
      "Pathologie Du Foie, De La Vésicule Biliaire Et Du Pancréas\nSpécialité",
      "Acide Ursodéoxycholique",
      "Ursochol"
    ],
    [
      "Pathologie Du Foie, De La Vésicule Biliaire Et Du Pancréas\nSpécialité",
      "Acide Ursodéoxycholique",
      "Ursodéoxycholique"
    ],
    [
      "Pathologie Du Foie, De La Vésicule Biliaire Et Du Pancréas\nSpécialité",
      "Acide Ursodéoxycholique",
      "Ursofalk"
    ],
    [
      "Ferments Digestifs",
      "Pancréatine",
      "Créon"
    ],
    [
      "Antiémétique\nGastroprocinétique",
      "Alizapride",
      "Litican"
    ],
    [
      "Antiémétique\nGastroprocinétique",
      "Dompéridone",
      "Motilium\n\n"
    ],
    [
      "Antiémétique\nGastroprocinétique",
      "Dompéridone",
      "Zilium"
    ],
    [
      "Antiémétique\nGastroprocinétique",
      "Itopride",
      "Itoprom"
    ],
    [
      "Antiémétique\nGastroprocinétique",
      "Métoclopramide",
      "Primperan"
    ],
    [
      "Antagonistes 5HT3",
      "Granisétron",
      "Kytril"
    ],
    [
      "Antagonistes 5HT3",
      "Ondansétron",
      "Zofran\n\n"
    ],
    [
      "Antagonistes 5HT3",
      "Tropisétron",
      "Novaban"
    ],
    [
      "Laxatifs de lest",
      "Plantago Ovata",
      "Colofiber"
    ],
    [
      "Laxatifs de lest",
      "Plantago Ovata",
      "Spagulax"
    ],
    [
      "Paraffine Liquide",
      "Paraffine",
      "Lansoyl"
    ],
    [
      "Laxatif Osmotique",
      "Lactulose",
      "Bifiteral\n"
    ],
    [
      "Laxatif Osmotique",
      "Lactulose",
      "Duphalac"
    ],
    [
      "Laxatif Osmotique",
      "Lactulose",
      "Lactulose"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Lavage Intestinal)",
      "Colofort"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Lavage Intestinal)",
      "Moviprep"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Forlax \n"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Macrogol Ab"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Transisoft"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Curapeg\n"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Laxido"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Macrogol + Electrolytes"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Molaxole"
    ],
    [
      "Laxatif Osmotique",
      "Macrogol \n( Sans Électrolytes)",
      "Movicol"
    ],
    [
      "Laxatifs À Base De Sels Minéraux",
      "À Base De Phosphate",
      "Cleen Phospho-Soda"
    ],
    [
      null,
      "À Base De Sulfates",
      "Eziclen"
    ],
    [
      "Laxatifs De Contact ",
      "Bisacodyl",
      "Dulcolax Bisacodyl "
    ],
    [
      "Laxatifs De Contact ",
      "Bisacodyl",
      "Purgo-Pil"
    ],
    [
      "Laxatifs De Contact ",
      "Picosulfate",
      "Dulcolax "
    ],
    [
      "Laxatifs De Contact ",
      "Picosulfate",
      "Fructines"
    ],
    [
      "Laxatifs De Contact ",
      "Picosulfate",
      "Laxoberon"
    ],
    [
      "Laxatifs De Contact ",
      "Picosulfate",
      "Picolaxine"
    ],
    [
      "Prucalopride",
      "Prucalopride",
      "Resolor"
    ],
    [
      "Prucalopride",
      "Linaclotide",
      "Constella"
    ],
    [
      "Laxatif À Usage Rectal",
      "Phosphate",
      "Cleen Enema\n\n"
    ],
    [
      "Laxatif À Usage Rectal",
      "Phosphate",
      "Lavement Au Phosphate"
    ],
    [
      "Laxatif À Usage Rectal",
      "Glycérol",
      "Glycérine"
    ],
    [
      "Laxatif À Usage Rectal",
      "Docusate",
      "Norgalax"
    ],
    [
      "Laxatif À Usage Rectal",
      "Docusate \nGlycérol",
      "Laxavit"
    ],
    [
      "Laxatif À Usage Rectal",
      "Sorbitol\nCitrate Sodium\nLaurylsulfoacétate",
      "Microlax"
    ],
    [
      "Associations de laxatifs pour vidange intestinale",
      "Acide Citrique\nOxyde De Magnésium\nPicosulphate",
      "Citrafleet"
    ],
    [
      "Associations de laxatifs pour vidange intestinale",
      "Acide Citrique\nOxyde De Magnésium\nPicosulphate",
      "Picoprep"
    ],
    [
      "Associations de laxatifs pour vidange intestinale",
      "Macrogol\nSulfate\nChlorure de Sodium\nPotassium",
      "Plenvu"
    ],
    [
      "Association Pour Constipation",
      "Plantago Ovata\nCassia Senna",
      "Agiolax"
    ],
    [
      "Antidiarrhéiques",
      "Charbon Activé",
      "Carbobel Mono\n"
    ],
    [
      "Antidiarrhéiques",
      "Charbon Activé",
      "Norit"
    ],
    [
      "Antidiarrhéiques",
      "Charbon Activé",
      "Norit Carbomix"
    ],
    [
      "Probiotiques Et Postbiotique",
      "Saccharomyces Boulardii",
      "Enterol"
    ],
    [
      "Probiotiques Et Postbiotique",
      "Saccharomyces Boulardii",
      "Sacchiflora"
    ],
    [
      "Probiotiques Et Postbiotique",
      "Lactobacillus Acidophilus",
      "Lactéol"
    ],
    [
      "Freinateurs Du Transit Intestinal",
      "Lopéramide",
      "Imodium"
    ],
    [
      "Freinateurs Du Transit Intestinal",
      "Lopéramide",
      "Lopéramide"
    ],
    [
      "Freinateurs Du Transit Intestinal",
      "Lopéramide + Siméticone",
      "Imodium Duo"
    ],
    [
      "Antisécrétoire",
      "Racécadotril",
      "Tiorfix"
    ],
    [
      "Spécialité",
      "Papaver Somniférum",
      "Dropizole"
    ],
    [
      "Affections Inflammatoires Du Tube Digestif \nCorticostéroïde",
      "Béclométasone",
      "Clipper"
    ],
    [
      "Corticostéroïde (suite) ",
      "Budésonide",
      "Budenofalk\n"
    ],
    [
      "Corticostéroïde (suite)",
      "Budésonide",
      "Entocort"
    ],
    [
      "Corticostéroïde (suite)",
      "Sulfasalazine",
      "Salazopyrine"
    ],
    [
      "Corticostéroïde (suite)",
      "Mésalazine",
      "Asamovon\n\n\n"
    ],
    [
      "Corticostéroïde (suite)",
      "Mésalazine",
      "Claversal"
    ],
    [
      "Corticostéroïde (suite)",
      "Mésalazine",
      "Colitofalk"
    ],
    [
      "Corticostéroïde (suite)",
      "Mésalazine",
      "Pentasa"
    ],
    [
      "Bêta2-mimétique à courte durée (SABA)",
      "Salbutamol",
      "Airomir\n\n"
    ],
    [
      "Bêta2-mimétique à courte durée (SABA)",
      "Salbutamol",
      "novolizer Salbutamol"
    ],
    [
      "Bêta2-mimétique à courte durée (SABA)",
      "Salbutamol",
      "ventolin"
    ],
    [
      "Bêta2-mimétique à longue durée  (LABA)",
      "Formotérol",
      "Foradil\n\n"
    ],
    [
      "Bêta2-mimétique à longue durée  (LABA)",
      "Formotérol",
      "novolizer formoterol"
    ],
    [
      "Bêta2-mimétique à longue durée  (LABA)",
      "indacatérol",
      "Onbrez"
    ],
    [
      "Bêta2-mimétique à longue durée  (LABA)",
      "olodaterol",
      "Striverdi"
    ],
    [
      "Bêta2-mimétique à longue durée  (LABA)",
      "salmétérol",
      "Serevent"
    ],
    [
      "Anticholinergique (SAMA)",
      "Ipratropium",
      "Atrovent"
    ],
    [
      "Anticholinergique (LAMA)",
      "Aclidinium",
      "Bretaris"
    ],
    [
      "Anticholinergique (LAMA)",
      "Glycopyrronium",
      "Seebri"
    ],
    [
      "Anticholinergique (LAMA)",
      "Tiotropium",
      "Spiriva\n\n"
    ],
    [
      "Anticholinergique (LAMA)",
      "Tiotropium",
      "Srivasso"
    ],
    [
      "Anticholinergique (LAMA)",
      "Uméclidinium",
      "Incruse"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( SABA + SAMA)",
      "Ipratropium + Salbutamol",
      "Combivent \n\n"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( SABA + SAMA)",
      "Ipratropium + Salbutamol",
      "Duovent"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( LABA + LAMA)",
      "Uméclidinium +Vilanterol",
      "Anoro"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( LABA + LAMA)",
      "Aclidinium + Formotérol",
      "Duaklir"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( LABA + LAMA)",
      "Tiotropium + Olodaterol",
      "Spiolto"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( LABA + LAMA)",
      "Tiotropium + Olodaterol",
      "Yanimo"
    ],
    [
      "Bêta2-mimétique + Anticholinergique  ( LABA + LAMA)",
      "Indacatérol + Glycopyrronium",
      "Ultibro"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nAérosol ou poudre",
      "Béclométasone",
      "Qvar"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nAérosol ou poudre",
      "Budésonide",
      "Budesonide\n\n\n\n"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nAérosol ou poudre",
      "Budésonide",
      "Miflonide"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nAérosol ou poudre",
      "Budésonide",
      "Novolizer Budesonide"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nAérosol ou poudre",
      "fluticasone",
      "Flixotide"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nNébulisation",
      "Budésonide",
      "Budesonide ampoule\n\n"
    ],
    [
      "corticoÏdes inhalés  (CSI)\nNébulisation",
      "Budésonide",
      "Pulmicort ampoule"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Budésonide + Formétérol",
      "Airbufo\n\n\n\n"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Budésonide + Formétérol",
      "Bufomix"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Budésonide + Formétérol",
      "Symbicort"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Salmétérol + Fluticasone",
      "Airflusal\n\n"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Salmétérol + Fluticasone",
      "flutisacombo"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Salmétérol + Fluticasone",
      "flutisamix"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Salmétérol + Fluticasone",
      "Sérétide"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Indacatérol + Mométasone",
      "Atectura"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Indacatérol + Mométasone",
      "flutiform"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Béclométasone + Formotérol",
      "Inuvair"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Fluticasone + vilantérol",
      "Relvar"
    ],
    [
      "Bêta2-mimétiques à longue durée + corticoïde inhalé  (LABA + CSI )",
      "Budésonide + Salmétérol ",
      "Zephirus"
    ],
    [
      "Bêta2-mimétiques à longue durée + anticholinergique à longue durée + corticoÏde inhalé",
      "indacatérol + glycopyrronium + mométasone",
      "Enerzair"
    ],
    [
      "Bêta2-mimétiques à longue durée + anticholinergique à longue durée + corticoÏde inhalé",
      "fluticasone + uméclidinium + vilantérol ",
      "Trelegy"
    ],
    [
      "Bêta2-mimétiques à longue durée + anticholinergique à longue durée + corticoÏde inhalé",
      "béclométasone + formotérol + glycopyrronium ",
      "Trimbow"
    ],
    [
      "Bêta2-mimétiques à longue durée + anticholinergique à longue durée + corticoÏde inhalé",
      "formotérol + glycopyrronium + budésonide",
      "Trixeo"
    ],
    [
      "Antagonistes des récepteurs des leucotriènes Anti RLK",
      "Montélukast",
      "Singulair"
    ],
    [
      "Théophylline",
      "Théophylline",
      "Xanthium"
    ],
    [
      "Antitussif",
      "Codéine",
      "bronchodine\n\n"
    ],
    [
      "Antitussif",
      "Codéine",
      "toularynx codéine"
    ],
    [
      "Antitussif",
      "Dextrométhorphane",
      "Acatar\n"
    ],
    [
      "Antitussif",
      "Dextrométhorphane",
      "Bisolvon toux sèche"
    ],
    [
      "Antitussif",
      "Dextrométhorphane",
      "Bronchosedal Dextromethorphan"
    ],
    [
      "Antitussif",
      "Dextrométhorphane",
      "Vicks toux sèche"
    ],
    [
      "Antitussif",
      "Dextrométhorphane",
      "Zirorphan"
    ],
    [
      "Antitussif",
      "Dihydrocodéine",
      "paracodine"
    ],
    [
      "Antitussif",
      "Ethylmorphine",
      "Codéthyline"
    ],
    [
      "Antitussif",
      "Noscapine",
      "Nosca-Mereprine"
    ],
    [
      "Autres antitussif",
      "Sisymbrium Officinale",
      "Euphon"
    ],
    [
      "Autres antitussif",
      "Lévodropropizine",
      "Levotuss"
    ],
    [
      "Autres antitussif",
      "Clopérastine",
      "Lysotossil"
    ],
    [
      "Autres antitussif",
      "Butamirate",
      "Therafix-Tusso"
    ],
    [
      "Mucolytique et expectorant",
      "Acetylcysteine",
      "Lysomucil"
    ],
    [
      "Mucolytique et expectorant",
      "Carbocistéine",
      "Muco Rhinathiol"
    ],
    [
      "Mucolytique et expectorant",
      "Carbocistéine",
      "Siroxyl"
    ],
    [
      "Mucolytique et expectorant",
      "Erdostéine",
      "Mucodox"
    ],
    [
      "Mucolytique et expectorant",
      "Bromhexine",
      "Bisolvon\n"
    ],
    [
      "Mucolytique et expectorant",
      "Bromhexine",
      "Bromhexine"
    ],
    [
      "Mucolytique et expectorant",
      "Bromhexine",
      "Toularynx bromhexine"
    ],
    [
      "Mucolytique et expectorant",
      "Dornase Alfa",
      "Pulmozyme"
    ],
    [
      "Mucolytique et expectorant",
      "Guaïfénésine",
      "Bronchosedal\n"
    ],
    [
      "Mucolytique et expectorant",
      "Guaïfénésine",
      "Toularynx Guaifenesin"
    ],
    [
      "Mucolytique et expectorant",
      "Guaïfénésine",
      "Vicks toux Grasse"
    ],
    [
      "Mucolytique et expectorant",
      "Hedera helix",
      "Pulmocap Hedera"
    ],
    [
      "Préparation à base de plante",
      "Thymi herba",
      "Pulmocap thymus"
    ],
    [
      "Préparation à base de plante",
      "Thymus vulgaris",
      "Thymoseptine "
    ],
    [
      "Préparation à base de plante",
      "Thymus vulgaris",
      "Toularynx thym"
    ],
    [
      "Préparation à base de plante",
      "Thymi herba + Althaea radix",
      "Bronchostop duo"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Bilastine",
      "Bellozal"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Cétirizine",
      "Zyrtec"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Desloratadine",
      "Aerius"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Ebastine",
      "Estivan"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Fexofénadine",
      "Allegra Tab \n\n"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Fexofénadine",
      "Telfast"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Lévocétirizine",
      "Xyzall"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Loratadine",
      "Loratadine"
    ],
    [
      "Antihistaminique\nPeu sédatif",
      "Rupatadine",
      "Rupatall"
    ],
    [
      "Antihistaminiques Sédatif",
      "Diphenhydramine",
      "Nustasium"
    ],
    [
      "Antihistaminiques Sédatif",
      "Dimenhydrinate",
      "R-Calm"
    ],
    [
      "Antihistaminiques Sédatif",
      "Dimétindène",
      "Fenistil"
    ],
    [
      "Antihistaminiques Sédatif",
      "Hydroxyzine",
      "Atarax"
    ],
    [
      "Antihistaminiques",
      "Kétotifène",
      "Zaditen"
    ],
    [
      "Antihistaminiques",
      "Méclozine",
      "Agyrax"
    ],
    [
      "Association",
      "doxylamine + pyridoxine",
      "Navalit"
    ],
    [
      "Insuline ultrarapide",
      "Insuline Glulisine",
      "Apidra"
    ],
    [
      "Insuline ultrarapide",
      "Insuline Aspart",
      "Fiasp\n\n"
    ],
    [
      "Insuline ultrarapide",
      "Insuline Aspart",
      "NovoRapid"
    ],
    [
      "Insuline ultrarapide",
      "Insuline Lispro",
      "Humalog\n\n"
    ],
    [
      "Insuline ultrarapide",
      "Insuline Lispro",
      "Lyumjev"
    ],
    [
      "Insuline rapide",
      "Insuline",
      "Actrapid\n\n"
    ],
    [
      "Insuline rapide",
      "Insuline",
      "Humuline Regular"
    ],
    [
      "Insuline intermédiaire",
      "Insuline Isophane",
      "Humuline NPH"
    ],
    [
      "Insuline intermédiaire",
      "Insuline Isophane",
      "Insulatard"
    ],
    [
      "Insuline Longue durée",
      "Insuline Glargine",
      "Abasaglar"
    ],
    [
      "Insuline Longue durée",
      "Insuline Glargine",
      "Lantus"
    ],
    [
      "Insuline Longue durée",
      "Insuline Glargine",
      "Toujeo"
    ],
    [
      "Insuline Longue durée",
      "Insuline Détémir",
      "Levemir"
    ],
    [
      "Insuline Longue durée",
      "Insuline Degludec",
      "Tresiba"
    ],
    [
      "Metformine",
      "Metformine",
      "Metformax"
    ],
    [
      "Metformine",
      "Metformine",
      "Metformine"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Glibenclamide",
      "Daonil"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Gliclazide",
      "Gliclazide Sandoz\n"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Gliclazide",
      "Uni Diamicron"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Gliclazide",
      "Uni Gliclazide"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Glimépiride",
      "Glimepiride"
    ],
    [
      "Les sulfamidés hypoglycémiants",
      "Gliquidone",
      "Glurenorm"
    ],
    [
      "Les analogues du GLP-I (incrétinomimétiques)",
      "Dulaglutide",
      "Trulicity"
    ],
    [
      "Les analogues du GLP-I (incrétinomimétiques)",
      "Exénatide",
      "Bydureon"
    ],
    [
      "Les analogues du GLP-I (incrétinomimétiques)",
      "Liraglutide",
      "Victoza"
    ],
    [
      "Les analogues du GLP-I (incrétinomimétiques)",
      "Sémaglutide",
      "Ozempic"
    ],
    [
      "Les analogues du GLP-I (incrétinomimétiques)",
      "Sémaglutide",
      "Rybelsus"
    ],
    [
      "Corticoïdes",
      "Bétaméthasone",
      "Celestone"
    ],
    [
      "Corticoïdes",
      "Bétaméthasone",
      "Diprophos"
    ],
    [
      "Corticoïdes",
      "Budésonide",
      "Budénofalk"
    ],
    [
      "Corticoïdes",
      "Budésonide",
      "Entocort"
    ],
    [
      "Corticoïdes",
      "Dexaméthasone",
      "Aacidexam"
    ],
    [
      "Corticoïdes",
      "Hydrocortisone",
      "Hydrocortisone"
    ],
    [
      "Corticoïdes",
      "Hydrocortisone",
      "Solu-Cortef"
    ],
    [
      "Corticoïdes",
      "Méthylprednisolone",
      "Medrol"
    ],
    [
      "Corticoïdes",
      "Méthylprednisolone",
      "Depo-Medrol"
    ],
    [
      "Corticoïdes",
      "Méthylprednisolone",
      "Solu-Médrol"
    ],
    [
      "Corticoïdes",
      "Triamcinolone",
      "Kenacort"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Algostase Mono"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Croix Blanche Mono"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Dafalgan"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Lemsip"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Panadol"
    ],
    [
      "analgésique non opioïde",
      "paracétamol",
      "Perdolan"
    ],
    [
      "analgésique non opioïde",
      "acide acétyl salicylique",
      "Aspegic"
    ],
    [
      "analgésique non opioïde",
      "acide acétyl salicylique",
      "Aspirine"
    ],
    [
      "analgésique non opioïde",
      "acide acétyl salicylique",
      "Sedergine"
    ],
    [
      "analgésique non opioïde",
      "métamizole",
      "Novalgine"
    ],
    [
      "Associations d’analgésiques",
      "acide acétylsalicylique \nacide ascorbique",
      "Aspirine-C"
    ],
    [
      "Associations d’analgésiques",
      "paracétamol \nacide acétylsalicylique \ncaféine ",
      "Excedryn"
    ],
    [
      "Associations d’analgésiques",
      "paracétamol \nacide acétylsalicylique \ncaféine ",
      "Perdolan Compositum "
    ],
    [
      "Associations d’analgésiques",
      "paracétamol \nacide acétylsalicylique \ncaféine ",
      "Troc"
    ],
    [
      "Associations d’analgésiques",
      "paracétamol \nacide acétylsalicylique \nacide ascorbique ",
      "Afebryl"
    ],
    [
      "Paracétamol + AINS",
      "paracétamol \nibuprofène ",
      "Combophen"
    ],
    [
      "Paracétamol + AINS",
      "paracétamol \nibuprofène ",
      "Nuralgan"
    ],
    [
      "analgésiques opioïdes",
      "tramadol",
      "Contramal "
    ],
    [
      "analgésiques opioïdes",
      "tramadol",
      "Tradonal "
    ],
    [
      "analgésiques opioïdes",
      "tramadol",
      "Tramium"
    ],
    [
      "Stupéfiant",
      "Buprénorphine",
      "Temgesic"
    ],
    [
      "Stupéfiant",
      "Buprénorphine",
      "Transtec"
    ],
    [
      "Stupéfiant",
      "Fentanyl",
      "Durogesic"
    ],
    [
      "Stupéfiant",
      "Fentanyl",
      "Matrifen"
    ],
    [
      "Stupéfiant",
      "Fentanyl",
      "Fentanyl"
    ],
    [
      "Stupéfiant",
      "Hydromorphone",
      "Palladone"
    ],
    [
      "Stupéfiant",
      "Méthadone",
      "Mephenon"
    ],
    [
      "Stupéfiant",
      "Morphine per os lib normal",
      "MS Direct"
    ],
    [
      "Stupéfiant",
      "Morphine per os lib prolongée",
      "MS Contin "
    ],
    [
      "Stupéfiant",
      "Morphine per os lib prolongée",
      "Morphine Teva"
    ],
    [
      "Stupéfiant",
      "Morphine IV",
      "Morphine HCl Sterop "
    ],
    [
      "Stupéfiant",
      "Oxycodone",
      "Oxycodone"
    ],
    [
      "Stupéfiant",
      "Oxycodone",
      "Oxycodon"
    ],
    [
      "Stupéfiant",
      "Oxycodone",
      "OxyContin "
    ],
    [
      "Stupéfiant",
      "Oxycodone",
      "OxyNorm"
    ],
    [
      "Stupéfiant",
      "Tapentadol",
      "Palexia"
    ],
    [
      "Associations",
      "Paracétamol + tramadol",
      "Algotra"
    ],
    [
      "Associations",
      "Paracétamol + tramadol",
      "Zaldiar"
    ],
    [
      "Associations",
      "Paracétamol + codéine",
      "Algocod "
    ],
    [
      "Associations",
      "Paracétamol + codéine",
      "Dafalgan Codeine"
    ],
    [
      "Associations",
      "Paracétamol + codéine",
      "Paracetamol / Codeine Teva "
    ],
    [
      "Associations",
      "Ibuprofène et codéine",
      "Brufen Codeine "
    ],
    [
      "Associations",
      "Tramadol + dexkétoprophène",
      "Skudexa "
    ],
    [
      "Associations",
      "Oxycodone + naloxone",
      "Targinact"
    ],
    [
      "Dérivés arylacétiques",
      "Aceclofenac",
      "Air-Tal"
    ],
    [
      "Dérivés arylacétiques",
      "Aceclofenac",
      "Biofenac"
    ],
    [
      "Dérivés arylacétiques",
      "Diclofenac",
      "Cataflam\n\n\n\n"
    ],
    [
      "Dérivés arylacétiques",
      "Diclofenac",
      "Motifene"
    ],
    [
      "Dérivés arylacétiques",
      "Diclofenac",
      "Voltaren"
    ],
    [
      "AINS non opioïde ",
      "Ibuprofène",
      "Algidrin"
    ],
    [
      "AINS non opioïde ",
      "Ibuprofène",
      "Brufen"
    ],
    [
      "AINS non opioïde ",
      "Ibuprofène",
      "Nurofen"
    ],
    [
      "AINS non opioïde ",
      "Ibuprofène",
      "Perdofemina"
    ],
    [
      "AINS non opioïde ",
      "Ibuprofène",
      "Spidifen"
    ],
    [
      "AINS non opioïde ",
      "Kétoprofène",
      "Rofenid"
    ],
    [
      "AINS non opioïde ",
      "Naproxène",
      "Aleve\n"
    ],
    [
      "AINS non opioïde ",
      "Naproxène",
      "Apranax"
    ],
    [
      "AINS non opioïde ",
      "Naproxène",
      "naproxène"
    ],
    [
      "AINS non opioïde ",
      "Naproxène",
      "Naprosyne"
    ],
    [
      "Oxicam",
      "Méloxicam",
      "Mobic\n\n"
    ],
    [
      "Oxicam",
      "Méloxicam",
      "Meloxicam"
    ],
    [
      "Oxicam",
      "Piroxicam",
      "Brexine\n\n"
    ],
    [
      "Oxicam",
      "Tenoxicam",
      "Tilcotil"
    ],
    [
      "AINS COX-2 sélectifs",
      "Célécoxib",
      "Celebrex\n\n"
    ],
    [
      "AINS COX-2 sélectifs",
      "Célécoxib",
      "Celecoxib"
    ],
    [
      "AINS COX-2 sélectifs",
      "Etoricoxib",
      "Arcoxia"
    ],
    [
      "AINS COX-2 sélectifs",
      "Etoricoxib",
      "Etoricoxib"
    ],
    [
      "Spécialité",
      "Nabumétone",
      "Gambaran"
    ],
    [
      "anti-inflammatoires cutanés",
      "diclofénac",
      "Diclofenac gel "
    ],
    [
      "anti-inflammatoires cutanés",
      "diclofénac",
      "Diclotopic "
    ],
    [
      "anti-inflammatoires cutanés",
      "diclofénac",
      "Kinespir Patch"
    ],
    [
      "anti-inflammatoires cutanés",
      "diclofénac",
      "Voltaren Emulgel"
    ],
    [
      "anti-inflammatoires cutanés",
      "diclofénac",
      "Voltaren Patch"
    ],
    [
      "anti-inflammatoires cutanés",
      "Ibuprofène",
      "Extrapan"
    ],
    [
      "anti-inflammatoires cutanés",
      "Ibuprofène",
      "Nurofen Patch"
    ],
    [
      "anti-inflammatoires cutanés",
      "kétoprofène",
      "Fastum "
    ],
    [
      "anti-inflammatoires cutanés",
      "étofénamate",
      "Flexium"
    ],
    [
      "anti-inflammatoires cutanés",
      "indométacine",
      "Sportflex"
    ],
    [
      "Plusieurs principes actifs",
      "salicylate, glycol 50 mg / 1 g\nméphénésine 100 mg / 1 g\nnicotinate, méthyle 15 mg / 1 g",
      "ALGIPAN"
    ],
    [
      "Plusieurs principes actifs",
      "Symphytum officinale [extrait liquide éthanolique]",
      "Flexagile"
    ],
    [
      "Plusieurs principes actifs",
      "acide flufénamique 30 mg / 1 g\nsalicylate, glycol 26,4 mg / 1 g\nmucopolysaccharide, polysulfate 2 mg / 1 g",
      "Mobilisin"
    ],
    [
      "Plusieurs principes actifs",
      "camphre 40 mg / 1 ml\nmenthol 40 mg / 1 ml\nsalicylate, méthyle 27 mg / 1 ml\ntérébenthine [huile essentielle] 67 mg / 1 ml",
      "Reflexspray "
    ],
    [
      "Traitement de crise de goutte ",
      "Colchicine",
      "Colchicine Opocalcium"
    ],
    [
      "Traitement de fond de la goutte ",
      "allopurinol",
      "Zyloric "
    ],
    [
      "Traitement de fond de la goutte ",
      "allopurinol",
      "Allopurinol "
    ],
    [
      "Traitement de fond de la goutte ",
      "Fébuxostat",
      "Adénuric"
    ],
    [
      "Traitement de fond de la goutte ",
      "Fébuxostat",
      "Féburik "
    ],
    [
      "Traitement de fond de la goutte ",
      "Fébuxostat",
      "Fébuxostat"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Alprazolam",
      "Xanax"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Alprazolam",
      "Alpraz"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Alprazolam",
      "Alprazolam"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Bromazépam",
      "Lexotan"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Brotizolam",
      "Lendormin"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Clobazam",
      "Frisium"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Clonazépam",
      "Rivotril"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Clorazépate",
      "Tranxene"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Clotiazépam",
      "Clozan"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Diazépam",
      "Valium"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Diazépam",
      "Diazetop"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Flurazepam",
      "Staurodorm"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Loflazépate d’éthyle",
      "Victan"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Loprazolam",
      "Dormonoct"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Lorazépam",
      "Sérénase"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Lorazépam",
      "Temesta"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Lormétazépam",
      "Loramet"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Lormétazépam",
      "Metatop"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Midazolam",
      "Buccolam"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Nitrazepam",
      "Mogadon"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Nordazépam",
      "Calmday"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Oxazépam",
      "Oxazépam"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Prazépam",
      "Lysanxia"
    ],
    [
      "Benzodiazépine\nHypnotique, sédatif, anxiolytique",
      "Triazolam",
      "Halcion"
    ],
    [
      "Z-drugs",
      "Zolpidem",
      "Stilnoct"
    ],
    [
      "Z-drugs",
      "Zolpidem",
      "Zolpeduar"
    ],
    [
      "Z-drugs",
      "Zolpidem",
      "Zolpitop"
    ],
    [
      "Z-drugs",
      "Zopiclone",
      "Imovane"
    ],
    [
      "Inhibiteurs de recapture non sélectifs\nAntidépresseurs tricycliques \nATC",
      "Amitriptyline",
      "Redomex"
    ],
    [
      "Inhibiteurs de recapture non sélectifs\nAntidépresseurs tricycliques \nATC",
      "Clomipramine",
      "Anafranil"
    ],
    [
      "Inhibiteurs de recapture non sélectifs\nAntidépresseurs tricycliques \nATC",
      "Dosulépine",
      "Prothiaden"
    ],
    [
      "Inhibiteurs de recapture non sélectifs\nAntidépresseurs tricycliques \nATC",
      "Imipramine",
      "Tofranil"
    ],
    [
      "Inhibiteurs de recapture non sélectifs\nAntidépresseurs tricycliques \nATC",
      "Nortriptyline",
      "Nortrilen"
    ],
    [
      "Inhibiteurs de la recapture de la sérotonine et de la noradrénaline\nIRSN",
      "Duloxétine",
      "Cymbalta"
    ],
    [
      "Inhibiteurs de la recapture de la sérotonine et de la noradrénaline\nIRSN",
      "Venlafaxine",
      "Efexor"
    ],
    [
      "Inhibiteurs de la recapture de la noradrénaline et de la dopamine",
      "Bupropione",
      "Bupropion"
    ],
    [
      "Inhibiteurs de la recapture de la noradrénaline et de la dopamine",
      "Bupropione",
      "Wellbutrin"
    ],
    [
      "Antidépresseurs agissant directement sur les neurorécepteurs",
      "Miansérine",
      "Lerivon"
    ],
    [
      "Antidépresseurs agissant directement sur les neurorécepteurs",
      "Mirtazapine",
      "Remergon"
    ],
    [
      "Antidépresseurs agissant directement sur les neurorécepteurs",
      "Trazodone",
      "Nestrolan"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Citalopram",
      "Cipramil"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Escitalopram",
      "Escidivule"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Escitalopram",
      "Sipralexa"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Fluoxétine",
      "Prozac"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Fluvoxamine",
      "Floxyfral"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Paroxétine",
      "Seroxat"
    ],
    [
      "Inhibiteur de recapture sélectifs\nInhibiteurs sélectifs de la recapture de la sérotonine \nISRS",
      "Sertraline",
      "Serlain"
    ],
    [
      "Béta lactames Pénicilline\n",
      "flucloxacilline",
      "Floxapen"
    ],
    [
      "Béta lactames Pénicilline\n",
      "flucloxacilline",
      "Staphycid "
    ],
    [
      "Béta lactames Pénicillines\naminopénicillines ",
      "amoxicilline",
      "Clamoxyl"
    ],
    [
      "Béta lactame Pénicillines\namoxicilline + acide clavulanique",
      " amoxicilline / acide clavulanique",
      "Amoclane"
    ],
    [
      "Béta lactame Pénicillines\namoxicilline + acide clavulanique",
      " amoxicilline / acide clavulanique",
      "Augmentin"
    ],
    [
      "Béta lactame Pénicillines\namoxicilline + acide clavulanique",
      " amoxicilline / acide clavulanique",
      "Amoxiclav"
    ],
    [
      "Béta-lactames Pénicillines\ncéphalosporines",
      "céfadroxil",
      "Cefadroxil Sandoz"
    ],
    [
      "Béta-lactames Pénicillines\ncéphalosporines",
      "céfalexine",
      "Keforal"
    ],
    [
      "Béta-lactames Pénicillines\ncéphalosporines",
      "céfuroxime",
      "Zinnat"
    ],
    [
      "Béta-lactames Pénicillines\ncéphalosporines",
      "céfuroxime",
      "Zinacef"
    ],
    [
      "Macrolides Erythromycine",
      "érythromycine",
      "erythrocine"
    ],
    [
      "Macrolides : Néomacrolides",
      "azithromycine",
      "Zitromax"
    ],
    [
      "Macrolides : Néomacrolides",
      "clarithromycine",
      "Biclar"
    ],
    [
      "Macrolides : Néomacrolides",
      "clarithromycine",
      "Heliclar "
    ],
    [
      "Macrolides : Néomacrolides",
      "clarithromycine",
      "Maclar"
    ],
    [
      "Macrolides : Néomacrolides",
      "roxithromycine",
      "roxithromycine"
    ],
    [
      "Macrolide Spiramycine",
      "spiramycine",
      "Rovamycine"
    ],
    [
      " Tétracyclines",
      "doxycycline",
      "Efracea"
    ],
    [
      " Tétracyclines",
      "doxycycline",
      "Vibratab"
    ],
    [
      " Tétracyclines",
      "Lymécycline",
      "Tetralysal"
    ],
    [
      " Tétracyclines",
      "Minocycline",
      "Klinotab"
    ],
    [
      " Tétracyclines",
      "Minocycline",
      "Mino-50 "
    ],
    [
      " Tétracyclines",
      "Minocycline",
      "Minotab"
    ],
    [
      "Aminoglycoside",
      "paromomycine",
      "Gabbroral"
    ],
    [
      "Quinolones",
      "ciprofloxacine",
      "Ciproxine"
    ],
    [
      "Quinolones",
      "moxifloxacine",
      "Avelox"
    ],
    [
      " co-trimoxazole",
      "sulfamide",
      "Bactrim"
    ],
    [
      " co-trimoxazole",
      "sulfamide",
      "Eusaprim"
    ],
    [
      "Antibactérien urinaire ",
      "Nitrofurantoïne",
      "Furadantine MC"
    ],
    [
      "Antibactérien urinaire ",
      "fosfomycine",
      "Monuril"
    ],
    [
      "Antibiotiques divers ",
      "acide fusidique",
      "Fucidin"
    ],
    [
      "Antibiotiques divers  Clindamycine",
      "Clindamycine",
      "Dalacin C "
    ],
    [
      "Antibiotiques divers lincomycine",
      "lincomycine",
      "Lincocin"
    ],
    [
      "antituberculeux",
      "isoniazide",
      "Nicotibine"
    ],
    [
      "antituberculeux",
      "rifampicine",
      "Rifadine"
    ],
    [
      "antimycosiques polyènes",
      "nystatine",
      "Nilstat "
    ],
    [
      "antimycosiques dérivés azoliques",
      "fluconazole",
      "Diflucan "
    ],
    [
      "antimycosiques dérivés azoliques",
      "itraconazole",
      "Sporanox"
    ],
    [
      "antimycosiques dérivés azoliques",
      "miconazole",
      "Daktarin"
    ],
    [
      "Spécialités",
      "Terbinafine",
      "Lamisil"
    ]
]

// create our questions
let questions = [
    {
        question : "Madame X, 71 ans, est venue via les urgences pour une embolie pulmonaire, On lui a prescrit de la FRAXODI 0.6ml 2x/J pendant un mois et ensuite, le médecin prévoit un relais per os. Ce dernier lui mets de l'ASAFLOW 80 mg. Qu'elle est la classe de ces médicaments ? ",
        imgSrc : "img/html.png",
        choiceA : "A) Diurétique",
        choiceB : "B) Anticoagulant",
        choiceC : "C) Antihypertenseur",
        choiceD : "D) Bêta Bloquant ",
        correct : "B"

    },{
        question : "Monsieur X, 37 ans est venu chez son médecin traitant pour une prise de sang, ce dernier lui prescrit du KALIUM Retard. Pourquoi ? ",
        imgSrc : "img/css.png",
        choiceA : "A)Il n'a pas assez de calcium dans le sang",
        choiceB : "B)Il n'a pas assez de potassium dans le sang ",
        choiceC : "C)Il a trop de sodium dans le sang",
        choiceD : "D)Il a trop de Magnesium dans le sang",
        correct : "B"
    },{
        question : "Madame X, 89 ans va chez le cardiologue et ce dernier lui dit qu'elle risque d'avoir des plaques d'athéromatoses dans les vaissaux, ce qui pourrait lui causé un Infarctus ou un AVC. Qu'elle est le médicaments parmis ceux ci pourrait prescrire le médecin pour limiter celà ?",
        imgSrc : "img/css.png",
        choiceA : "A)CRESTOR 20 mg",
        choiceB : "B)BISOPROLOL 2.5 mg ",
        choiceC : "C)LASIX 40 mg ",
        choiceD : "D)AMLODIPINE 5 mg",
        correct : "A"
      },{
        question : "Monsieur X, 55 ans souffre d'éthylisme chronique qui lui a causé une cirhose. Les toxines s'accumulent dans son cerveau, ce qui lui donne une confusion. que pouvons nous lui donner pour les éliminer ? ",
        imgSrc : "img/css.png",
        choiceA : "A)LIPITOR 20 mg ",
        choiceB : "B)CORDARONE 200mg",
        choiceC : "C)BIFITERAL",
        choiceD : "D)BUSCOPAN 20 mg",
        correct : "C"
      },{
        question : "Madame X, 67 ans, a fait une Rupture d'anévrisme. Le médecin lui prescrit un médicament qui permet de préserver ses vaisseaux ainsi que la tension qui ne doit pas dépasser 14/8. L'infirmier lui prends la tension 6x/J et ne le lui donne que si la tension dépasse donc cette norme. Qu'elle pourrait être ce médicament ? ",
        imgSrc : "img/css.png",
        choiceA : "A)SIMTROM",
        choiceB : "B)BURIXEX",
        choiceC : "C)LOORTAN",
        choiceD : "D)NIMOTOP",
        correct : "D"
      },{
        question:  "Monsieur X, 80 ans, a des oedèmes des membres inférieurs suite à une insuffisance cardique. Le docteur lui presrit ...",
        imgSrc : "img/css.png",
        choiceA : "A)SPIRONOLACTONE",
        choiceB : "B)CORUNO",
        choiceC : "C)HYDROCORTIONE",
        choiceD : "D) ATACAND",
        correct : "A"
      },{ 
        question:  "Madame X, 64 ans est atteinte un cancer du colon. Elle a désormais une colostomie mais a du mal a évacuer les déchets. Le médecin lui a presrit : ",
        imgSrc : "img/css.png",
        choiceA : "A)LYSOMUCIL",
        choiceB : "B)PANTOMED",
        choiceC : "C)LITICAN",
        choiceD : "D)LAXOBERON",
        correct : "D"
      },{
        question:  "Monsieur X, 28 ans arrive aux Urgences pour une péritonite. Il fait beaucoup de température post chirurgie et les hémocultures montrent des bactéries. Le médecin le mets sous ?",
        imgSrc : "img/css.png",
        choiceA : "A)CEFUROXIM",
        choiceB : "B)EMCORETIC",
        choiceC : "C)DUOVENT",
        choiceD : "D)ZYLORIC",
        correct : "A"
      },{
        question:  "?which of the following expressions has two terms and a coefficient of 6?",
        imgSrc : "img/css.png",
        choiceA : "A)6y^2-2x+10",
        choiceB : "B)6y^2-18",
        choiceC : "C)-y^2+6",
        choiceD : "D)6-12y",
        correct : "B"
      },{
        question:  "What is the product of 75.0 feet and 2.05 feet written with the correct number of significant digets?",
        imgSrc : "img/css.png",
        choiceA : "A)153.75 ft^2",
        choiceB : "B)153.8 ft^2",
        choiceC : "C)154 ft^2",
        choiceD : "D)150 ft^2",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 300; // 5min
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let firstArrCount = 1;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);
document.getElementById('MedicStart').addEventListener('click', renderQuestionMedication)

document.getElementById('response').addEventListener('click', checkmedocAnswer)

function renderQuestionMedication() {
    start.style.display = "none";
    medocStart.style.display = "none";
    medocQuiz.style.display = "block";   
    justRenderbitch(1)    
}

function checkmedocAnswer(){
    console.log(document.getElementById('TextInput').value)
    console.log(BiggestArrayEver[firstArrCount][2])
    if(document.getElementById('TextInput').value == BiggestArrayEver[firstArrCount][2]){
        justRenderbitch(firstArrCount = firstArrCount + 1)
    }else{
        alert("Ce n'est pas la bonne réponse")
    }
}

function justRenderbitch(firstArry){
    document.getElementById('MedocChoice').innerHTML = BiggestArrayEver[firstArry][0]
    document.getElementById('SecondChoice').innerHTML = BiggestArrayEver[firstArry][1]
}

// start quiz
function startQuiz(){
    medocQuiz.style.display = "none";
    start.style.display = "none";
    medocStart.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    sleep(2000).then(() => { window.location.reload(); });
    
}
