document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you for your enquiry. We will get back to you soon."
        );

        contactForm.reset();

    });


    /* =========================
       PROJECT CAROUSEL
    ========================= */

    const projectSlider = document.querySelector(".project-slider");
    const projectCards = document.querySelectorAll(".project-card");

    const previousButton = document.querySelector(".project-prev");
    const nextButton = document.querySelector(".project-next");


    /* Next project */

    nextButton.addEventListener("click", () => {

        const cardWidth = projectCards[0].offsetWidth + 24;

        projectSlider.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });

    });


    /* Previous project */

    previousButton.addEventListener("click", () => {

        const cardWidth = projectCards[0].offsetWidth + 24;

        projectSlider.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });

    });

const svg = document.querySelector(".engineering-network");

if (svg) {

    const nodes = [
        document.querySelector("#node-1"),
        document.querySelector("#node-2"),
        document.querySelector("#node-3"),
        document.querySelector("#node-4"),
        document.querySelector("#node-5")
    ];

    const arms = [
        document.querySelector("#arm-1"),
        document.querySelector("#arm-2"),
        document.querySelector("#arm-3"),
        document.querySelector("#arm-4")
    ];

    /*
     * Each node behaves like a pendulum joint.
     *
     * x/y = position of its general center
     * length = distance of its swing
     * speed = swing speed
     * phase = starting position
     * depth = amount of forward/back movement
     */

const motion = [
    {
        x: 250,
        y: 190,
        length: 145,
        speed: 0.65,
        phase: 0.0,
        depth: 50
    },
    {
        x: 310,
        y: 200,
        length: 125,
        speed: 0.85,
        phase: 1.8,
        depth: 60
    },
    {
        x: 300,
        y: 220,
        length: 150,
        speed: 0.55,
        phase: 3.4,
        depth: 45
    },
    {
        x: 335,
        y: 195,
        length: 135,
        speed: 0.72,
        phase: 4.8,
        depth: 65
    },
    {
        x: 330,
        y: 215,
        length: 110,
        speed: 0.95,
        phase: 2.5,
        depth: 55
    }
];
    let time = 0;

    function animateNetwork() {

        time += 0.012;

        const points = [];

        motion.forEach((m, index) => {

            /*
             * TWO swinging angles create the pendulum motion.
             *
             * Instead of a simple circle, the node swings
             * back and forth while also rotating through 360°.
             */

            const horizontalAngle =
                Math.sin(time * m.speed + m.phase) * Math.PI;

            const verticalAngle =
                Math.sin(
                    time * m.speed * 0.73 +
                    m.phase +
                    1.4
                ) * 0.8;

            /*
             * Horizontal movement.
             */

            const x =
                m.x +
                Math.cos(horizontalAngle) *
                m.length;

            /*
             * Vertical movement.
             */

            const y =
                m.y +
                Math.sin(horizontalAngle) *
                m.length *
                0.55 +
                Math.sin(verticalAngle) * 25;

            /*
             * DEPTH.
             *
             * This represents the node moving toward
             * and away from the viewer.
             */

            const z =
                Math.sin(
                    time * m.speed +
                    m.phase +
                    1
                ) * m.depth;

            /*
             * Perspective projection.
             *
             * When z is positive the object comes closer:
             * - slightly larger
             * - slightly brighter
             *
             * When z is negative it moves away:
             * - slightly smaller
             * - slightly dimmer
             */

            const scale =
                1 + z / 500;

            const projectedX =
                m.x + (x - m.x) * scale;

            const projectedY =
                m.y + (y - m.y) * scale;

            points.push({
                x: projectedX,
                y: projectedY,
                z: z,
                scale: scale
            });

            /*
             * Move the actual SVG node.
             */

            nodes[index].setAttribute(
                "cx",
                projectedX
            );

            nodes[index].setAttribute(
                "cy",
                projectedY
            );

            /*
             * Fake 3D perspective using node size.
             */

            nodes[index].setAttribute(
                "r",
                10 * scale
            );

            nodes[index].style.opacity =
                0.55 + ((z + m.depth) / (m.depth * 2)) * 0.45;
        });

        /*
         * Reconnect the moving nodes.
         */

        setLine(arms[0], points[0], points[1]);
        setLine(arms[1], points[1], points[2]);
        setLine(arms[2], points[1], points[3]);
        setLine(arms[3], points[3], points[4]);

        /*
         * Give the lines a slight depth effect.
         */

        arms.forEach((line, index) => {

            const p1 = points[index === 0 ? 0 : index === 1 ? 1 : index === 2 ? 1 : 3];
            const p2 = points[index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 3 : 4];

            const averageDepth =
                (p1.z + p2.z) / 2;

            line.style.opacity =
                0.25 +
                ((averageDepth + 50) / 100) * 0.45;

            line.setAttribute(
                "stroke-width",
                1.4 + ((averageDepth + 50) / 100) * 1
            );
        });

        requestAnimationFrame(animateNetwork);
    }

    function setLine(line, start, end) {

        line.setAttribute("x1", start.x);
        line.setAttribute("y1", start.y);

        line.setAttribute("x2", end.x);
        line.setAttribute("y2", end.y);
    }

    animateNetwork();
}

});
/* ========================================
   WHATSAPP CONTACT FORM
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // WhatsApp number
        const whatsappNumber = "919150387179";


        // Collect form data
        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const company = contactForm.querySelectorAll(
            'input[type="text"]'
        )[1].value.trim();

        const projectType = contactForm.querySelector(
            "select"
        ).value;

        const message = contactForm.querySelector(
            "textarea"
        ).value.trim();


        // Create WhatsApp message
        const whatsappMessage =
`NEW PROJECT ENQUIRY

Name: ${name}
Email: ${email}
Company / Organization: ${company || "Not provided"}

Project Type: ${projectType || "Not specified"}

Project Details:
${message || "Not provided"}`;


        // Encode the message
        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // Open WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

    });

}