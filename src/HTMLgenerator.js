function HTMLgenerator(team) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body>
  <div class="title-container">
      <h1>My Team</h1>
    </div>
    <div class="card-container">
      ${team.map(e => {
          return employeeCard(e);
      })
      .join("\n\n")
    }
  </div>
</body>
</html>
  `;
}

function employeeCard(e) {
    let prompts = "";
    let icon = "";
    if (e.getRole() === "Manager") {
        prompts = `Office number: ${e.getOfficeNumber()}`;
        icon = `<i class="fas fa-mug-hot mr-2"></i>`
    } else if (e.getRole() === "Engineer") {
        prompts = `GitHub: <a href="https://github.com/${e.getGithub()}" target="_blank">${e.getGithub()}</a>`;
        icon = `<i class="fas fa-glasses mr-2"></i>`
    } else if (e.getRole() === "Intern") {
        prompts = `School: ${e.getSchool()}`;
        icon = `<i class="fas fa-user-graduate"></i>`
    }
    return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${e.getName()}</h5>
        <p class="card-text">${icon} ${e.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${e.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></li>
        <li class="list-group-item">${prompts}</li>
      </ul>
    </div>
    `;
}

module.exports = HTMLgenerator;
