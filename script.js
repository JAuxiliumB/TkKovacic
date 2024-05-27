function showHomepage() {
    document.getElementById('zacetna').style.display = 'block';
    document.getElementById('ponudba').style.display = 'none';
    document.getElementById('kontakt').style.display = 'none';
    document.getElementById('backButton').style.display = 'none'; //ni gumba za nazaj na začetni strani
    hideAllSubsections(); hidePonudbaFooter(); hideKontaktFooter();
}


function showPonudba() {
    document.getElementById('ponudba').style.display = 'block';
    document.getElementById('zacetna').style.display = 'none';
    document.getElementById('kontakt').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
    hideAllSubsections(); showPonudbaFooter(); hideKontaktFooter();
}

function showPonudbaFooter() {
    var ponudbaFooter = document.querySelector('.ponudba-footer');
    if (ponudbaFooter) {
        ponudbaFooter.style.display = 'block';
    }
}
function hidePonudbaFooter() {
    var ponudbaFooter = document.querySelector('.ponudba-footer');
    if (ponudbaFooter) {
        ponudbaFooter.style.display = 'none';
    }
}
function showKontaktFooter() {
    var kontaktFooter = document.querySelector('.kontakt-footer');
    if (kontaktFooter) {
        kontaktFooter.style.display = 'block';
    }
}
function hideKontaktFooter() {
    var kontaktFooter = document.querySelector('.kontakt-footer');
    if (kontaktFooter) {
        kontaktFooter.style.display = 'none';
    }
}

function showKontakt() {
    document.getElementById('ponudba').style.display = 'none';
    document.getElementById('zacetna').style.display = 'none';
    document.getElementById('kontakt').style.display = 'block';
    document.getElementById('backButton').style.display =
        'block';
    hideAllSubsections(); hidePonudbaFooter(); showKontaktFooter();
}
function showSection(sectionId) {
    if (sectionId === 'zacetna') {
        showHomepage();
    } else if (sectionId === 'ponudba') {
        showPonudba();
    } else if (sectionId === 'kontakt') {
        showKontakt();
    } else {
        hideAllSubsections();
    }
}

function showSubsection(subsectionId) {
    if (subsectionId === 'vode') {
        showVode();
    } else if (subsectionId === 'piva') {
        showPiva();
    } else if (subsectionId === 'vina') {
        showVina();
    } else if (subsectionId === 'penina') {
        showPenina();
    } else if (subsectionId === 'zganice') {
        showŽganice();
    } else if (subsectionId === 'hrana') {
        showHrana();
    } else if (subsectionId === 'brezalkoholne-pijace') {
        showBrezalkoholnePijace();
    } else if (subsectionId === 'topli-napitki') {
        showTopliNapitki();
    }
}

function hideAllSubsections() {
    document.getElementById('vsaHrana-subsections').style.display = 'none';
    document.getElementById('topli-napitki-subsections').style.display = 'none';
    document.getElementById('brezalkoholne-pijace-subsections').style.display = 'none';
    document.getElementById('vode-subsections').style.display = 'none';
    document.getElementById('piva-subsections').style.display = 'none';
    document.getElementById('vina-subsections').style.display = 'none';
    document.getElementById('penina-subsections').style.display = 'none';
    document.getElementById('žganice-subsections').style.display = 'none';
}

function showHrana() {
    hideAllSubsections();
    document.getElementById('vsaHrana-subsections').style.display = 'block';
}

function showBrezalkoholnePijace() {
    hideAllSubsections();
    document.getElementById('brezalkoholne-pijace-subsections').style.display = 'block';
}

function showTopliNapitki() {
    hideAllSubsections();
    document.getElementById('topli-napitki-subsections').style.display =
        'block';
}

function showVode() {
    hideAllSubsections();
    document.getElementById('vode-subsections').style.display = 'block';
}

function showPiva() {
    hideAllSubsections();
    document.getElementById('piva-subsections').style.display = 'block';
}

function showVina() {
    hideAllSubsections();
    document.getElementById('vina-subsections').style.display = 'block';
}

function showPenina() {
    hideAllSubsections();
    document.getElementById('penina-subsections').style.display = 'block';
}

function showŽganice() {
    hideAllSubsections();
    document.getElementById('žganice-subsections').style.display = 'block';
}

function toggleSubsection(subsectionId) {
    var subsection = document.getElementById(subsectionId);
    var allSubsections = document.querySelectorAll('.pijaca-subsection, .hrana-subsection');
    allSubsections.forEach(function (subsection) {
        if (subsection.id !== subsectionId) {
            subsection.style.display = 'none';
        }
    });
    if (subsection.style.display === 'block') {
        subsection.style.display = 'none';
    } else {
        subsection.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    showHomepage(); 
});