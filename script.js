/* ==========================================
   BROTHER DATA
========================================== */

const brothers = [

    /* ======================================
       TRISTIN WATKINS
    ====================================== */

    {
        id: "tristin-watkins",

        name: "Tristin Watkins",

        year: "Senior (2027)",

        major: "Computer Science and Cyber Security",

        interests: [
            "Skiing",
            "DJ",
            "Gaming"
        ],

        categories: [
            "Outdoors",
            "Music",
            "Gaming"
        ],

        instagram: "",

        bio:
            "Whats Good, Im Tristin, You can catch me on the slopes or behind the decks. I Skied my whole life so if you need someone to go to Bogus with, I got you. Im always down to talk about life in the PNW as I grew up in the Seattle area of Washington.",

        photo:
            "images/brothers/tristin-watkins/profile.jpeg",

        photos: [

            {
                src:
                    "images/brothers/tristin-watkins/skiing.jpeg",

                title:
                    "Skiing",

                description:
                    "Skiing is one of my favorite ways to get outside, I Skied competitive for 12 years through grade school in the PNW for White Pass WA."
            },

            {
                src:
                    "images/brothers/tristin-watkins/dj.jpeg",

                title:
                    "DJ",

                description:
                    "Music and DJing are a big part of what I enjoy doing both inside and outside of Beta. I remix and produce music in my free time and love to play music for others."
            }

        ]
    },

     /* ======================================
       ASHER PALICKI
    ====================================== */

    {
        id: "asher-palicki",

        name: "Asher Palicki",

        year: "Senior (2027)",

        major: "Mechanical Engineering",

        interests: [
            "Gaming",
            "Traveling"
        ],

        categories: [
            "Gaming",
            "Traveling"
        ],

        instagram: "",

        bio:
            "I became a member of Beta in 2023, I like spending time with the brothers, building, and traveling. Homework is the bain of my existence so I'll mostly be doing that.",

        photo:
            "images/brothers/asher-palicki/profile.jpg",

        photos: [

            {
                src:
                    "images/brothers/asher-palicki/travel.jpeg",

                title:
                    "Traveling",

                description:
                    "I love traveling and exploring new places with the brothers. It's a great way to unwind and make memories."
            },

            {
                src:
                    "images/brothers/asher-palicki/brotherhood.jpeg",

                title:
                    "Brotherhood",

                description:
                    "I love being part of the brotherhood and building strong relationships with the guys here in this fraternity."
            }

        ]
    },


    /* ======================================
       DYLAN SCHUFF
    ====================================== */

    {
        id: "dylan-schuff",

        name: "Dylan Schuff",

        year: "Junior (2028)",

        major: "Sports Media and Communications",

        interests: [
            "Mountain Biking",
            "Snowboarding",
            "Baseball"
        ],

        categories: [
            "Sports",
            "Outdoors"
        ],

        instagram: "",

        bio:
            "I love spending my weekends racing downhill mountain bikes and snowboarding in the winter. I'm always down to talk about baseball and how rough it is being a San Diego fan!",

        photo:
            "images/brothers/dylan-schuff/profile.jpg",

        photos: [

            {
                src:
                    "images/brothers/dylan-schuff/biking.jpg",

                title:
                    "Mountain Biking",

                description:
                    "I love spending my weekends racing downhill mountain bikes and getting outside whenever I can."
            },

            {
                src:
                    "images/brothers/dylan-schuff/baseball.jpg",

                title:
                    "Baseball",

                description:
                    "I'm always down to talk about baseball, even when being a San Diego fan makes it rough."
            }

        ]
    },

     /* ======================================
       AIDAN BROUGHTON
    ====================================== */

    {
        id: "aidan-broughton",

        name: "Aidan Broughton",

        year: "Junior (2028)",

        major: "Finance with Minor in Information Technology Business Analytics",

        interests: [
            "Golf",
            "Fishing"
        ],

        categories: [
            "Sports",
            "Outdoors"
        ],

        instagram: "",

        bio:
            "My name is Aidan Broughton and I'm a Junior from Oregon. I have a passion for helping people and the outdoors. You can catch me on the weekends watching football or golfing.",

        photo:
            "images/brothers/aidan-broughton/profile.jpeg",

        photos: [

            {
                src:
                    "images/brothers/aidan-broughton/golf.jpeg",

                title:
                    "Golf",

                description:
                    "I love spending my weekends on the golf course and enjoying the outdoors."
            },

            {
                src:
                    "images/brothers/aidan-broughton/fishing.jpeg",

                title:
                    "Fishing",

                description:
                    "I love spending my weekends fishing and enjoying the outdoors."
            }

        ]
    }

];



/* ==========================================
   CREATE BROTHER CARD
========================================== */

function createBrotherCard(brother) {

    const card =
        document.createElement("a");


    card.href =
        `profile.html?member=${brother.id}`;


    card.classList.add(
        "brother-card"
    );


    const tags =
        brother.interests
            .map(
                (interest) =>
                    `<span>${interest}</span>`
            )
            .join("");


    card.innerHTML = `

        <div class="brother-image">

            ${
                brother.photo

                    ? `
                        <img
                            src="${brother.photo}"
                            alt="${brother.name}"
                        >
                    `

                    : `
                        <div class="photo-placeholder">
                            PHOTO
                        </div>
                    `
            }

        </div>


        <div class="brother-info">

            <h3>
                ${brother.name}
            </h3>


            <p class="brother-details">
                ${brother.year} · ${brother.major}
            </p>


            <div class="brother-tags">
                ${tags}
            </div>

        </div>

    `;


    return card;
}



/* ==========================================
   DISPLAY BROTHERS
========================================== */

function displayBrothers(
    grid,
    brotherList
) {

    grid.innerHTML = "";


    brotherList.forEach(
        (brother) => {

            grid.appendChild(
                createBrotherCard(
                    brother
                )
            );

        }
    );

}



/* ==========================================
   OPTIONAL FEATURED BROTHERS GRID
========================================== */

const featuredGrid =
    document.querySelector(
        "#featured-brothers-grid"
    );


if (featuredGrid) {

    displayBrothers(
        featuredGrid,
        brothers.slice(0, 4)
    );

}



/* ==========================================
   BROTHERS DIRECTORY
========================================== */

const directoryGrid =
    document.querySelector(
        "#all-brothers-grid"
    );


const directoryTitle =
    document.querySelector(
        "#directory-title"
    );


if (directoryGrid) {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    const selectedInterest =
        parameters.get(
            "interest"
        );



    /* ======================================
       FILTER BROTHERS
    ====================================== */

    function filterBrothers(
        filter
    ) {

        if (filter === "All") {

            displayBrothers(
                directoryGrid,
                brothers
            );


            directoryTitle.textContent =
                "Meet the Brothers";


            return;
        }


        const filteredBrothers =
            brothers.filter(

                (brother) =>

                    brother.categories.includes(
                        filter
                    )

                    ||

                    brother.interests.includes(
                        filter
                    )

            );


        displayBrothers(
            directoryGrid,
            filteredBrothers
        );


        directoryTitle.textContent =
            `Brothers Into ${filter}`;

    }



    /* ======================================
       LOAD FILTER FROM URL
    ====================================== */

    if (selectedInterest) {

        filterBrothers(
            selectedInterest
        );

    }

    else {

        filterBrothers(
            "All"
        );

    }



    /* ======================================
       FILTER BUTTONS
    ====================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    filterButtons.forEach(
        (button) => {


            if (
                selectedInterest

                &&

                button.dataset.filter
                ===
                selectedInterest
            ) {

                filterButtons.forEach(
                    (btn) =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );

            }



            button.addEventListener(
                "click",
                () => {


                    const filter =
                        button.dataset.filter;


                    filterButtons.forEach(
                        (btn) =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    filterBrothers(
                        filter
                    );



                    if (
                        filter === "All"
                    ) {

                        window.history.replaceState(
                            {},
                            "",
                            "brothers.html"
                        );

                    }

                    else {

                        window.history.replaceState(

                            {},

                            "",

                            `brothers.html?interest=${filter}`

                        );

                    }

                }
            );

        }
    );

}



/* ==========================================
   BROTHER PROFILE
========================================== */

const profileContainer =
    document.querySelector(
        "#profile-container"
    );


if (profileContainer) {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    const memberID =
        parameters.get(
            "member"
        );


    const brother =
        brothers.find(

            (person) =>
                person.id === memberID

        );



    /* ======================================
       BROTHER NOT FOUND
    ====================================== */

    if (!brother) {

        profileContainer.innerHTML = `

            <section class="profile-error">

                <h1>
                    Brother Not Found
                </h1>


                <a
                    href="brothers.html"
                    class="text-link"
                >
                    Back to Brothers →
                </a>

            </section>

        `;

    }



    /* ======================================
       DISPLAY PROFILE
    ====================================== */

    else {

        document.title =
            `${brother.name} | Beta Theta Pi`;



        const interestTags =
            brother.interests
                .map(
                    (interest) =>
                        `<span>${interest}</span>`
                )
                .join("");



        const gallery =
            brother.photos
                .map(

                    (photo) => `

                        <article class="profile-gallery-card">

                            <img
                                src="${photo.src}"
                                alt="${brother.name} - ${photo.title}"
                            >


                            <div class="profile-gallery-info">

                                <h3>
                                    ${photo.title}
                                </h3>


                                <p>
                                    ${photo.description}
                                </p>

                            </div>

                        </article>

                    `

                )
                .join("");



        profileContainer.innerHTML = `

            <!-- ==================================
                 PROFILE HERO
            =================================== -->

            <section class="profile-hero">


                <div class="profile-main-photo">

                    <img
                        src="${brother.photo}"
                        alt="${brother.name}"
                    >

                </div>



                <div class="profile-intro">

                    <p class="section-label">
                        MEET A BETA
                    </p>


                    <h1>
                        ${brother.name}
                    </h1>


                    <p class="profile-degree">
                        ${brother.year} · ${brother.major}
                    </p>


                    <div class="profile-tags">

                        ${interestTags}

                    </div>


                    <a
                        href="brothers.html"
                        class="profile-back"
                    >
                        ← Back to All Brothers
                    </a>

                </div>


            </section>



            <!-- ==================================
                 ABOUT
            =================================== -->

            <section class="profile-about">


                <div class="profile-about-label">

                    <p class="section-label">
                        ABOUT
                    </p>


                    <h2>
                        More Than a Major.
                    </h2>

                </div>



                <div class="profile-about-copy">

                    <p>
                        ${brother.bio}
                    </p>

                </div>


            </section>



            <!-- ==================================
                 INTERESTS
            =================================== -->

            <section class="profile-interests">


                <div class="section-heading">

                    <p class="section-label">
                        INTERESTS
                    </p>


                    <h2>
                        Outside the Classroom
                    </h2>


                    <p class="section-description">
                        The things that make each brother
                        who they are.
                    </p>

                </div>



                <div class="profile-gallery">

                    ${gallery}

                </div>


            </section>

        `;

    }

}