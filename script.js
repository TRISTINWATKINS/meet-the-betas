/* ==========================================
   BROTHER DATA
========================================== */

const brothers = [

    {
        id: "tristin-watkins",

        name: "Tristin Watkins",

        year: "Senior",

        major: "Computer Science",

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
            "Computer Science student with interests in skiing, DJing, gaming, technology, and creating new experiences with friends.",

        photo:
            "images/brothers/tristin watkins/profile.jpeg",

        photos: [

            {
                src:
                    "images/brothers/tristin watkins/skiing.jpeg",

                title:
                    "Skiing",

                description:
                    "Skiing is one of my favorite ways to get outside, spend time with friends, and enjoy the winter."
            },

            {
                src:
                    "images/brothers/tristin watkins/dj.jpeg",

                title:
                    "DJ",

                description:
                    "Music and DJing are a big part of what I enjoy doing both inside and outside of Beta."
            }

        ]
    },


    {
        id: "brother-two",

        name: "Brother Two",

        year: "Junior",

        major: "Business",

        interests: [
            "Golf",
            "Fitness"
        ],

        categories: [
            "Golf",
            "Fitness",
            "Sports"
        ],

        instagram: "",

        bio: "",

        photo: "",

        photos: []
    },


    {
        id: "brother-three",

        name: "Brother Three",

        year: "Sophomore",

        major: "Engineering",

        interests: [
            "Skiing",
            "Fitness"
        ],

        categories: [
            "Outdoors",
            "Fitness",
            "Sports"
        ],

        instagram: "",

        bio: "",

        photo: "",

        photos: []
    },


    {
        id: "brother-four",

        name: "Brother Four",

        year: "Senior",

        major: "Marketing",

        interests: [
            "Music",
            "Golf"
        ],

        categories: [
            "Music",
            "Golf"
        ],

        instagram: "",

        bio: "",

        photo: "",

        photos: []
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
                    ?
                    `<img
                        src="${brother.photo}"
                        alt="${brother.name}"
                    >`

                    :

                    `<div class="photo-placeholder">
                        PHOTO
                    </div>`
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
                createBrotherCard(brother)
            );

        }
    );

}



/* ==========================================
   HOMEPAGE
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
        parameters.get("interest");


    function filterBrothers(filter) {

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
                    brother.categories.includes(filter) ||
                    brother.interests.includes(filter)
            );


        displayBrothers(
            directoryGrid,
            filteredBrothers
        );


        directoryTitle.textContent =
            `Brothers Into ${filter}`;

    }


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


    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    filterButtons.forEach(
        (button) => {

            if (
                selectedInterest &&
                button.dataset.filter === selectedInterest
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
   PROFILE PAGE
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
        parameters.get("member");


    const brother =
        brothers.find(
            (person) =>
                person.id === memberID
        );


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
                        ${brother.year}
                        ·
                        ${brother.major}
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