const projects = [
    {
        id: 11,
        name: 'Topline',
        link: 'https://toplinedumpsters.com',
        imageName: 'topline.jpeg',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
        client: true,
        for: 'mwd'
    },
    {
        id: 5,
        name: 'Update With Cait',
        link: 'updatewithcait.com',
        imageName: 'update_with_cait.png',
        techStack: ['React.Js', 'JavaScript', 'MongoDB', 'Bootstrap', 'CSS3', 'Node.Js', 'React-Quill'],
        client: true,
        for: 'me'
    },
    {
        id: 1,
        name: 'Jays Iron Works',
        link: 'https://jays-ironworks.com',
        imageName: 'logo.png',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
        client: true,
        for: 'me'
    },
    {
        id: 2,
        name: 'React Graph',
        link: 'https://jmichael96.github.io/Graphs/',
        imageName: 'graph.jpg',
        techStack: ['React.Js', 'GraphQL', 'Apollo', 'MaterialUI', 'Plotly.Js', 'CSS3'],
        client: false,
        for: 'me'
    },
    {
        id: 3,
        name: 'Google Books',
        link: 'https://google-books96.herokuapp.com/',
        imageName: 'bookbg.jpg',
        techStack: ['React.Js', 'MongoDB', 'Bootstrap', 'Node.Js', 'CSS3'],
        client: false,
        for: 'me'
    },
    {
        id: 4,
        name: 'Snake Game',
        link: 'https://slithery-snake96.herokuapp.com/',
        imageName: 'snake.gif',
        techStack: ['HTML5', 'JavaScript', 'MongoDB', 'Bootstrap', 'CSS3', 'Node.Js'],
        client: false,
        for: 'me'
    },
    {
        id: 6,
        name: 'Rock Paper Scissors',
        link: 'https://jmichael96.github.io/RPS-MULTIPLAYER/',
        imageName: 'rock.jpg',
        techStack: ['HTML5', 'JavaScript', 'Firebase', 'Bootstrap', 'CSS3'],
        client: false,
        for: 'me'
    },
    {
        id: 7,
        name: 'Clicky Game',
        link: 'https://lit-wildwood-52008.herokuapp.com/',
        imageName: 'clickygame.gif',
        techStack: ['React.Js', 'Materialize', 'CSS3', 'JavaScript'],
        client: false,
        for: 'me'
    },
    {
        id: 8,
        name: 'Sequelize Burger',
        link: 'https://sequelized-burger-jvh.herokuapp.com/',
        imageName: 'sequelizeBurger.gif',
        techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Node.Js', 'MySQL', 'Handlebars'],
        client: false,
        for: 'me'
    },
    {
        id: 9,
        name: 'Star Wars RPG',
        link: 'https://jmichael96.github.io/Unit4-StarWarsRPG/',
        imageName: 'starwars.png',
        techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        client: false,
        for: 'me'
    },
    {
        id: 10,
        name: 'Supercross Trivia',
        link: 'https://jmichael96.github.io/TriviaGame/',
        imageName: 'supercross.png',
        techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        client: false,
        for: 'me'
    }
];
// for default projects to show first... may change later!
const renderReactOnly = [
    {
        id: 5,
        name: 'Update With Cait',
        link: 'https://updatewithcait.com',
        imageName: 'update_with_cait.png',
        techStack: ['React.Js', 'JavaScript', 'MongoDB', 'Bootstrap', 'CSS3', 'Node.Js', 'React-Quill'],
        client: true,
        for: 'me'
    },
    {
        id: 2,
        name: 'React Graph',
        link: 'https://jmichael96.github.io/Graphs/',
        imageName: 'graph.jpg',
        techStack: ['React.Js', 'GraphQL', 'Apollo', 'MaterialUI', 'Plotly.Js', 'CSS3'],
        client: false,
        for: 'me'
    },
    {
        id: 3,
        name: 'Google Books',
        link: 'https://google-books96.herokuapp.com/',
        imageName: 'bookbg.jpg',
        techStack: ['React.Js', 'MongoDB', 'Bootstrap', 'Node.Js', 'CSS3'],
        client: false,
        for: 'me'
    },
    {
        id: 7,
        name: 'Clicky Game',
        link: 'https://lit-wildwood-52008.herokuapp.com/',
        imageName: 'clickygame.gif',
        techStack: ['React.Js', 'Materialize', 'CSS3', 'JavaScript'],
        client: false,
        for: 'me'
    },
]
const projectLocation = document.getElementById('renderProject');

// used to render projects for switch case in searchProjects();
function renderProject(item) {
    projectLocation.innerHTML = item.map(item => {
        return `
                <div key="${item.id}" class="outer-card">
                  <div class="projectCard">
                    <div class="card__image-container">
                      <img class="card__image img" src="./assets/images/projects/${item.imageName}" alt="${item.name}" />
                    </div>
        
                    <svg class="card__svg" viewBox="0 0 800 800">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent" fill="#000" />
                      <path class="card__line"
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#00B3E6" strokeWidth="3" fill="transparent" />
                    </svg>
        
                    <div class="card__content">
                      <h3 class="card__title">${item.name}</h3>
                      <div class="buttons">
                        <a target="_blank" rel="noreferrer" href="${item.link}">
                          <button class="btn-1"><span class="btn-span">Link</span></button>
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
            `
    }).join('')
}

// for rendering the number of projects
function renderText(number, text) {
    let renderLength = document.getElementById('renderProjectNumber');

    if (number > 1) {
        renderLength.innerHTML = `Showing ${number} projects for ${text}`;
    }
    else if (number === 1) {
        renderLength.innerHTML = `Showing ${number} project for ${text}`;
    }
    else {
        renderLength.innerHTML = `Showing ${number} projects for ${text}`;
    }
}

// for removing all classes that are selected
function removeSelectedClass() {
    document.getElementById('htmlBtn').classList.remove('selectedBtn');
    document.getElementById('reactBtn').classList.remove('selectedBtn');
    document.getElementById('jsBtn').classList.remove('selectedBtn');
    document.getElementById('phpBtn').classList.remove('selectedBtn');
    document.getElementById('nodeBtn').classList.remove('selectedBtn');
    document.getElementById('cssBtn').classList.remove('selectedBtn');
    document.getElementById('bootstrapBtn').classList.remove('selectedBtn');
    document.getElementById('allProjectsBtn').classList.remove('selectedBtn');
    document.getElementById('materializeBtn').classList.remove('selectedBtn');
    document.getElementById('materialUIBtn').classList.remove('selectedBtn');
    document.getElementById('mongoBtn').classList.remove('selectedBtn');
    document.getElementById('mysqlBtn').classList.remove('selectedBtn');
    document.getElementById('proWork').classList.remove('selectedBtn');
    document.getElementById('funProjects').classList.remove('selectedBtn');
    document.getElementById('mezaWD').classList.remove('selectedBtn');
}

function searchProjects(searchName) {
    let filteredProjects = [];
    let renderLength = document.getElementById('renderProjectNumber');
    // for searching though projects with the given parameter
    for (let obj in projects) {
        let str = JSON.stringify(projects[obj]);

        if (str.indexOf(searchName) > 0) {
            filteredProjects.push(projects[obj]);
        }
    }

    removeSelectedClass();

    switch (searchName) {
        case 'AllProjects':
            renderLength.innerHTML = '';
            document.getElementById('allProjectsBtn').className += ' selectedBtn'
            renderProject(projects);
            renderText(projects.length, 'all projects');
            break;
        case 'HTML5':
            renderLength.innerHTML = '';
            document.getElementById('htmlBtn').className += ' selectedBtn'
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'HTML5');
            break;
        case 'React.Js':
            renderLength.innerHTML = '';
            document.getElementById('reactBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'React.Js');
            break;
        case 'JavaScript':
            renderLength.innerHTML = '';
            document.getElementById('jsBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'JavaScript');
            break;
        case 'PHP':
            renderLength.innerHTML = '';
            document.getElementById('phpBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'PHP');
            break;
        case 'Node.Js':
            renderLength.innerHTML = '';
            document.getElementById('nodeBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Node.Js');
            break;
        case 'MongoDB':
            renderLength.innerHTML = '';
            document.getElementById('mongoBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'MongoDB');
            break;
        case 'Firebase':
            renderLength.innerHTML = '';
            document.getElementById('firebaseBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Firebase');
            break;
        case 'MySQL':
            renderLength.innerHTML = '';
            document.getElementById('mysqlBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'MySQL');
            break;
        case 'Bootstrap':
            renderLength.innerHTML = '';
            document.getElementById('bootstrapBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Bootstrap');
            break;
        case 'Materialize':
            renderLength.innerHTML = '';
            document.getElementById('materializeBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Materialize');
            break;
        case 'MaterialUI':
            renderLength.innerHTML = '';
            document.getElementById('materialUIBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'MaterialUI');
            break;
        case 'CSS3':
            renderLength.innerHTML = '';
            document.getElementById('cssBtn').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'CSS3');
            break;
        // true if there are professional work projects to return
        case true:
            renderLength.innerHTML = '';
            document.getElementById('proWork').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'my Professional Work');
            break;
        // false to render all side projects
        case false:
            renderLength.innerHTML = '';
            document.getElementById('funProjects').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Side Projects');
            break;
        case 'mwd':
            renderLength.innerHTML = '';
            document.getElementById('mezaWD').className += ' selectedBtn';
            renderProject(filteredProjects);
            renderText(filteredProjects.length, 'Meza Web Design');
            break;
        default:
            searchProjects('React.Js')
            renderProject(renderReactOnly)
    }
}
searchProjects();