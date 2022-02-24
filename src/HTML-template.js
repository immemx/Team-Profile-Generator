const generateManager = function(manager) {
    return `
    <section class="container my-4">
        <div class="row d-flex justify-content-around">
            <div class="col-3 p-0 shadow-lg bg-body rounded">
                <header class="bg-primary px-2 py-1 text-white mw-100">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4>
                </header>
                <div class="bg-light px-3 py-4 ">
                    <p class="bg-white border m-0 py-1 px-1">ID: ${manager.id}</p>
                    <p class="bg-white border m-0 py-1 px-1">Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
                    <p class="bg-white border m-0 py-1 px-1">Office Number: ${manager.office}</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <section class="container my-4">
        <div class="row d-flex justify-content-around">
            <div class="col-3 p-0 shadow-lg bg-body rounded">
                <header class="bg-primary px-2 py-1 text-white mw-100">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4>
                </header>
                <div class="bg-light px-3 py-4 ">
                    <p class="bg-white border m-0 py-1 px-1">ID: ${engineer.id}</p>
                    <p class="bg-white border m-0 py-1 px-1">Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
                    <p class="bg-white border m-0 py-1 px-1">Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
                </div>
            </div>
        </div>
    </section>
    `
}

const generateIntern = function (intern) {
    return `
    <section class="container my-4">
        <div class="row d-flex justify-content-around">
            <div class="col-3 p-0 shadow-lg bg-body rounded">
                <header class="bg-primary px-2 py-1 text-white mw-100">
                    <h3>${intern.name}</h3>
                    <h4>Title</h4>
                </header>
                <div class="bg-light px-3 py-4 ">
                    <p class="bg-white border m-0 py-1 px-1">ID: ${intern.id}</p>
                    <p class="bg-white border m-0 py-1 px-1">Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
                    <p class="bg-white border m-0 py-1 px-1">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    </section>
    `
};

const HTMLTemplate = (personel) => {

    const personelArr = []

    for (let i = 0; i < personel.length; i++) {
        const teamMember = personel[i]
        const role = teamMember.getRole();

        if (role === "Manager") {
            const manager = generateManager(teamMember)

            personelArr.push(manager)
        } else if (role === "Engineer") {
            const engineer = generateEngineer(teamMember)

            personelArr.push(engineer)
        } else if (role === "Intern") {
            const intern = generateIntern(teamMember)

            personelArr.push(intern)
        }

        
    }

    const teamMemberCard = personelArr.join('')

    const generateTeam = generateTeamPage(teamMemberCard);
    return generateTeam;

}

const generateTeamPage = function(teamMemberCard) {
    return `  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <header class="container py-3 bg-primary mw-100">
        <div class="row">
            <h1 class="col text-center text-white">My Team</h1>
        </div>
    </header>
    
    ${teamMemberCard}
</body>
</html>
`
}

module.exports = HTMLTemplate;