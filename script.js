//definizione nomi, ruoli e foto----------------------------------------------------------
let membri = [
    {
        nome: "WalterGordon",
        ruolo: "OfficeManager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "WayneBarnett",
        ruolo: "Founder&CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "AngelaCaroll",
        ruolo: "ChiefEditor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "AngelaLopez",
        ruolo: "SocialMediaManager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "ScottEstrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg2",
    },
    {
        nome: "BarbaraRamos",
        ruolo: "GraphicDesigner",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]

//-------------------------------------------------------------------------------------------















//----------------------------------------funzione---------------------------------------------

function stampaMembriTeam(membri){
    console.log(
        `
        ------INFORMAZIONI MEMBRI------
        nome: ${membri.nome}
        ruolo: ${membri.ruolo}
        foto: ${membri.foto}
        -------------------------------
        `
        )

}
//----------------------------------------------------------------------------------------------