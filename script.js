// Script prêt pour les futures fonctionnalités
console.log("Page chargée avec succès !");

function addToContact() {

    // Informations du contact — tu peux les rendre dynériques
    const contact = {
        nom: "Noé MOTO Nbekombo",
        phone: "06 81 94 07 05",
        email: "nbekombo@yahoo.com",
        address: "Boulevard de Stalingrad, Nantes, Region  Pays de la Loire, France"
    };

    // Contenu du fichier VCF
    const vcf = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.nom}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
ADR;TYPE=HOME:;;${contact.address};;;;
END:VCARD
`;

    // Création d'un fichier Blob
    const blob = new Blob([vcf], { type: "text/vcard" });

    // Génération d’un download automatique
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${contact.nom.replace(" ", "_")}.vcf`;
    document.body.appendChild(link);
    link.click();

    // Nettoyage
    document.body.removeChild(link);
}

    function openMap() {
    const latitude = 47.217639;
    const longitude = -1.542654;

    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapUrl, "_blank");
}