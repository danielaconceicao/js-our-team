
const rowEl = document.querySelector('.row');
const formEl = document.querySelector('form');
const cardsEl = document.querySelector('.cards');

const team = [
    {
        img: 'assets/img/female1.png',
        userName: 'LAURA ROSSI',
        profession: 'Front-end Developer',
        email: 'laurarossi@team.com',
    },
    {
        img: 'assets/img/female2.png',
        userName: 'DANIELA AMET',
        profession: 'Analyst',
        email: 'danielaamet@team.com',
    },
    {
        img: 'assets/img/female3.png',
        userName: 'MARTA IPSON',
        profession: 'SEO Specialist',
        email: 'martarossi@team.com',
    },
    {
        img: 'assets/img/male1.png',
        userName: 'MARCO BIANCHI',
        profession: 'Designer',
        email: 'marcobianchi@team.com',
    },
    {
        img: 'assets/img/male2.png',
        userName: 'ROBERTO LOREM',
        profession: 'Seo Specialist',
        email: 'robertolorem@team.com',
    },
    {
        img: 'assets/img/male3.png',
        userName: 'GIORGIO VERDI',
        profession: 'Back-end Developer',
        email: 'giorgioverdi@team.com',
    },
];

for (let i = 0; i < team.length; i++) {
    const userTeam = team[i];
    //console.log(userTeam);

    const showMarkup = markup(userTeam);
    //console.log(sowMarkup);

    rowEl.innerHTML += showMarkup
}

formEl.addEventListener('submit', function(e){
    e.preventDefault();

    const userName = document.querySelector('.name').value;
    const profession = document.querySelector('.ruolo').value;
    const email = document.querySelector('.email').value;
    const img = document.querySelector('.img').value;

    const member = {
        userName,
        profession,
        email,
        img,
    }

    const showMarkup =  markup(member);
    console.log(showMarkup);
  
    cardsEl.insertAdjacentHTML('beforeend', showMarkup);

});

function markup(member){
    const {img, userName, profession, email} = member;
    return `
        <div class="card mb-3 padding" style="width: 440px;">
            <div class="row g-0 bg-dark text-white">
                <div class="col-md-4 col-sm-12">
                    <img src="${img}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">${userName}</h5>
                        <p class="card-text">${profession}.</p>
                        <p class="card-text"><small class="text-body-secondary text-primary">${email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

