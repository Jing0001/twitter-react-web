const tuits = [
    {
        title: 'Web Development',
        topic: 'ReactJS',
        tuit: 'React.js is a Single Page Application framework'
    },
    {
        title: 'SpaceX Lands on Mars',
        topic: 'Space',
        tuit: 'Starship lands on Mars and picks up curiosity rover'
    },
    {
        title: 'Teslabot stole my job',
        topic: 'Economy',
        tuit: 'Teslabot is stealing all our jobs'
    }
]
function mainContent() {
    return(`
        <ul class="list-group">
            ${
        tuits.map(tuit => (`
                     <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">${tuit.title}Web Development</div>
                                <div class="fw-bolder">${tuit.topic}ReactJS <i class="fas fa-check-circle"></i> <span class="fw-normal text-secondary">- 2h</span></div>
                                <div class="fw-bolder">${tuit.tuit}React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs</div>
                            </div>
                            <div class="col-2">
                                <img class="float-end img-fluid mb-2" src="../../images/react.jpg" width="100%"/>
                            </div>
                        </div>
                    </li>
                `))
    }
                   
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="fw-bolder">JavaScript <i class="fas fa-check-circle"></i> <span class="fw-normal text-secondary">- 2h</span></div>
                                <div class="fw-bolder">JavaScript is programming language that can run on browsers as well as desktops</div>
                                <div class="text-secondary">123K Tuits</div>
                            </div>
                            <div class="col-2">
                                <img class="float-end img-fluid mb-2 rounded" src="../../images/JS.jpg" width="100%"/>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">Web Development</div>
                                <div class="fw-bolder">jQuery</div>
                                <div class="text-secondary">123K Tuits</div>
                            </div>
                            <div class="col-2">
                                <img class="float-end img-fluid mb-2 rounded" src="../../images/jquery.jpg" width="100%"/>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">Web Development</div>
                                <div class="fw-bolder">NodeJS <i class="fas fa-check-circle"></i> <span class="fw-normal text-secondary">- 2h</span></div>
                                <div class="text-secondary">123K Tuits</div>
                            </div>
                            <div class="col-2">
                                <img class="float-end img-fluid mb-2 rounded" src="../../images/nodejs.jpg" width="100%"/>
                            </div>
                        </div>
                    </li>
                </ul>
    `)

}