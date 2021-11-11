console.trace("test");
runlatex.editorlines=25;
runlatex.adddefaultpreamble=true;
runlatex.adddefaultengine=true;
runlatex.overleafURI=null; runlatex.texts ={
"Open in Overleaf": "",
"TeXLive.net": "Cliquer pour afficher le PDF correspondant",
"Delete Output": "Effacer l'output",
"Compiling PDF": "Compilation...",
"Added Code": "",
"End Added Code": "",
"Top Caption": ""
}
var enonce="";
my_xml=new XMLHttpRequest();
/////////////////////////////
my_xml.open("GET",'http://physiquetex.e-monsite.com/medias/files/'+ xmlfile,false);
my_xml.send();
xml_str=my_xml.responseXML;

//Generation de la table
  var EX_tab = [];
  function tabex(a) {
  if(a.checked){
  	EX_tab.push(a.value)
  }else { 
		for(var i = 0;i<EX_tab.length;i++){
			if (EX_tab[i] ==a.value){EX_tab.splice(i, 1);}
		}
  }
    //Generation file

//DEBUT ==========================================================
enonce = xml_str.getElementsByTagName("debut")[S].childNodes[0].nodeValue;
enonce += "\n";
//INFO ===========================================================
var txt = "http://physiquetex.e-monsite.com";//document.getElementById("annee").value;
txt += "}\n\\lhead{الفيزياء والكيمياء";
txt += "}\n\\rhead{";
txt += Niv;
//var nom_cours = xml_str.getElementsByTagName("Niveau")[N].getElementsByTagName("Cours")[C].getElementsByTagName("name")[0].childNodes[0].nodeValue;
//var nom_cours = document.getElementById("list_cours")[C].text;
txt += "}\n\\rfoot{";
txt += "\\thepage";
txt += "}\n";
txt += "\\chead{\\centering ";
txt += nom_cours; 
txt += "}\n\\begin{document}";
txt += "\n";
enonce += txt;
//EX  ============================================================
  for (var i = 0; i< EX_tab.length; i++) {
    enonce += xml_str.getElementsByTagName("Niveau")[N].getElementsByTagName("Cours")[C].getElementsByTagName("Exercices")[0].getElementsByTagName("Enonce")[EX_tab[i]].childNodes[0].nodeValue;
	enonce += "\n";
  }
  enonce += "\n \\end{document}";

  //enonce = atob(enonce);
 editors["pre0"].setValue("%!TEX xelatex" + enonce);
 editors["pre0"].insert(editors["pre0"].getValue());
  }
