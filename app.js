
const rowEl = document.querySelector('.row');

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
    console.log(userTeam);

    const {img, name, profession, email} = userTeam;
    const sowMarkup = 
    `
        <div class="col-4 my-4 bg">
            <div class="card d-flex flex-row">
                <div><img src="${img}"></div>
                <div class="align-items-center">
                    <h3>${name}</h3>
                    <p>${profession}</p>
                    <p class="text-primary">${email}</p>
                </div>
            </div>
        </div>
    
    `
    console.log(sowMarkup);
    rowEl.insertAdjacentHTML('afterbegin', sowMarkup)
}

