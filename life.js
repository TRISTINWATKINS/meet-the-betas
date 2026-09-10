/* ==========================================
   LIFE IN BETA DATA
========================================== */

const lifeCategories = {

    brotherhood: {

        number: "01",

        title: "Brotherhood",

        subtitle:
            "More than membership. The people who make Beta feel like home.",

        intro:
            "Brotherhood is at the center of the Beta experience. From chapter events to everyday moments, the relationships built here extend far beyond organized fraternity activities.",

        sections: [

            {
                title: "The Everyday Moments",

                text:
                    "Some of the best parts of brotherhood are not scheduled events. Studying together, grabbing food, watching games, hanging out, and simply having people around you are what turn a chapter into a community."
            },

            {
                title: "Experiences Together",

                text:
                    "Whether it is a fraternity event, a weekend trip, an intramural game, or something completely spontaneous, shared experiences give brothers opportunities to build friendships that last beyond college."
            }

        ]

    },


    social: {

        number: "02",

        title: "Social Life",

        subtitle:
            "Formals, date nights, exchanges, and experiences worth remembering.",

        intro:
            "Social events are one part of the Beta experience and give brothers opportunities to spend time together, meet new people, and create memories outside of the classroom.",

        sections: [

            {
                title: "Formals & Date Nights",

                text:
                    "Formals and date nights give brothers a chance to step away from school for a night and enjoy an experience together with friends and guests."
            },

            {
                title: "Exchanges & Events",

                text:
                    "Throughout the year, brothers participate in social events and exchanges that provide opportunities to connect with other students and organizations across campus."
            }

        ]

    },


    intramurals: {

        number: "03",

        title: "Intramurals",

        subtitle:
            "Compete together. Represent Beta. Have some fun doing it.",

        intro:
            "Intramural sports give brothers another way to spend time together while competing across campus. You do not have to be a varsity athlete to get involved.",

        sections: [

            {
                title: "Competition",

                text:
                    "Brothers can compete together in different sports throughout the year while representing Beta and building a little friendly competition."
            },

            {
                title: "More Than Winning",

                text:
                    "Winning is fun, but intramurals are just as much about getting people together, staying active, and giving everyone another way to be involved."
            }

        ]

    },


    philanthropy: {

        number: "04",

        title: "Philanthropy",

        subtitle:
            "Using our brotherhood to make an impact beyond ourselves.",

        intro:
            "Being part of Beta also means contributing to something larger than ourselves. Philanthropy and service provide opportunities for brothers to support causes and communities that matter.",

        sections: [

            {
                title: "Giving Back",

                text:
                    "Our chapter participates in opportunities that allow brothers to contribute their time, energy, and resources to help others."
            },

            {
                title: "Making an Impact",

                text:
                    "Service is an opportunity to work together outside of traditional fraternity events and make a positive impact within the community."
            }

        ]

    },


    adventures: {

        number: "05",

        title: "Adventures",

        subtitle:
            "College is bigger than the classroom. Idaho gives us plenty to explore.",

        intro:
            "Being in Boise gives our brothers access to skiing, hiking, camping, lakes, mountains, and countless opportunities to get outside together.",

        sections: [

            {
                title: "The Mountains",

                text:
                    "For brothers who ski or snowboard, winter provides plenty of opportunities to get up to the mountains together."
            },

            {
                title: "Beyond Campus",

                text:
                    "Trips and outdoor experiences give brothers a chance to get away from their regular routines and experience more of what Idaho has to offer."
            }

        ]

    },


    gamedays: {

        number: "06",

        title: "Game Days",

        subtitle:
            "Boise State game days are better when you have a group to experience them with.",

        intro:
            "Game days are a major part of the Boise State experience, and Beta gives brothers a group of people to enjoy that atmosphere with.",

        sections: [

            {
                title: "Bronco Football",

                text:
                    "From getting ready before the game to heading into the stadium together, football Saturdays create some of the most recognizable college memories."
            },

            {
                title: "Showing Up Together",

                text:
                    "Whether it is football, basketball, or another Boise State event, brothers regularly have people to attend games and support the Broncos with."
            }

        ]

    },


    everyday: {

        number: "07",

        title: "Everyday Beta",

        subtitle:
            "Not every great memory needs to be a planned event.",

        intro:
            "The fraternity experience is not only about what appears on a chapter calendar. A lot of what makes Beta meaningful happens during completely normal days.",

        sections: [

            {
                title: "Just Hanging Out",

                text:
                    "Food runs, gaming, watching sports, working on homework, and random late-night conversations can become some of the most memorable parts of college."
            },

            {
                title: "Always Something Going On",

                text:
                    "With brothers studying different subjects and having different hobbies, there is usually someone around who wants to do something."
            }

        ]

    }

};



/* ==========================================
   BUILD PAGE
========================================== */

const lifePageContainer =
    document.querySelector(
        "#life-page-container"
    );


if (lifePageContainer) {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    const categoryID =
        parameters.get("category");


    const category =
        lifeCategories[categoryID];


    if (!category) {

        lifePageContainer.innerHTML = `

            <section class="life-error">

                <p class="section-label">
                    LIFE IN BETA
                </p>

                <h1>
                    Experience Not Found
                </h1>

                <a
                    href="index.html#life"
                    class="life-page-button"
                >
                    Back to Life in Beta
                </a>

            </section>

        `;

    }

    else {

        document.title =
            `${category.title} | Life in Beta`;


        const detailSections =
            category.sections
                .map(
                    (section, index) => `

                        <article class="life-detail-block">

                            <div class="life-detail-photo">

                                <span>
                                    PHOTO ${index + 1}
                                </span>

                            </div>


                            <div class="life-detail-copy">

                                <p class="section-label">
                                    ${category.title}
                                </p>

                                <h2>
                                    ${section.title}
                                </h2>

                                <p>
                                    ${section.text}
                                </p>

                            </div>

                        </article>

                    `
                )
                .join("");


        const categoryLinks =
            Object.entries(lifeCategories)
                .filter(
                    ([id]) =>
                        id !== categoryID
                )
                .map(
                    ([id, item]) => `

                        <a
                            href="life.html?category=${id}"
                            class="life-explore-card"
                        >

                            <span>
                                ${item.number}
                            </span>

                            <h3>
                                ${item.title}
                            </h3>

                            <p>
                                Explore →
                            </p>

                        </a>

                    `
                )
                .join("");


        lifePageContainer.innerHTML = `

            <!-- ==================================
                 HERO
            =================================== -->

            <header class="life-page-hero">

                <div class="life-page-hero-content">

                    <p class="life-page-number">
                        ${category.number}
                    </p>


                    <p class="section-label">
                        LIFE IN BETA
                    </p>


                    <h1>
                        ${category.title}
                    </h1>


                    <p class="life-page-subtitle">
                        ${category.subtitle}
                    </p>


                    <a
                        href="index.html#life"
                        class="life-page-back"
                    >
                        ← Back to Life in Beta
                    </a>

                </div>

            </header>



            <!-- ==================================
                 INTRO
            =================================== -->

            <section class="life-page-intro">

                <div>

                    <p class="section-label">
                        THE EXPERIENCE
                    </p>

                    <h2>
                        What It's Like
                    </h2>

                </div>


                <div class="life-page-intro-copy">

                    <p>
                        ${category.intro}
                    </p>

                </div>

            </section>



            <!-- ==================================
                 DETAILS
            =================================== -->

            <section class="life-details">

                ${detailSections}

            </section>



            <!-- ==================================
                 PHOTO GALLERY
            =================================== -->

            <section class="life-page-gallery-section">

                <div class="section-heading">

                    <p class="section-label">
                        MOMENTS
                    </p>

                    <h2>
                        See It for Yourself
                    </h2>

                    <p class="section-description">
                        Real moments from life
                        inside our chapter.
                    </p>

                </div>


                <div class="life-page-gallery">

                    <div class="life-gallery-placeholder">
                        PHOTO
                    </div>

                    <div class="life-gallery-placeholder">
                        PHOTO
                    </div>

                    <div class="life-gallery-placeholder">
                        PHOTO
                    </div>

                </div>

            </section>



            <!-- ==================================
                 EXPLORE MORE
            =================================== -->

            <section class="life-explore">

                <div class="section-heading">

                    <p class="section-label">
                        KEEP EXPLORING
                    </p>

                    <h2>
                        More of Life in Beta
                    </h2>

                </div>


                <div class="life-explore-grid">

                    ${categoryLinks}

                </div>

            </section>

        `;

    }

}