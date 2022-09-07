<script>
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");
    let wave4 = document.getElementById("wave4");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        wave1.style.backgroundPositionX = 400 + value * 4 + "px";
        wave2.style.backgroundPositionX = 300 + value * -4 + "px";
        wave3.style.backgroundPositionX = 200 + value * 2 + "px";
        wave4.style.backgroundPositionX = 100 + value * -2 + "px";
    });
</script>

<section>
    <div class="wave" id="wave1" style="--i:1;" />
    <div class="wave" id="wave2" style="--i:2;" />
    <div class="wave" id="wave3" style="--i:3;" />
    <div class="wave" id="wave4" style="--i:4;" />
</section>

<style>
    @import url("http://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins" sans-serif;
    }
    section {
        top: -300px;
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 130vh;
        background: #ffec9f;
    }
    .wave {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: url(/images/waveblanca.png);
        background-size: 1000px 100px;
        animation: animate 4s ease-in-out infinite;
        animation-delay: calc(var(--i) * 0.25s);
    }
    .wave#wave1 {
        z-index: 1000;
        opacity: 1;
        background-position-x: 400px;
    }
    .wave#wave2 {
        z-index: 999;
        opacity: 0.5;
        background-position-x: 300px;
    }
    .wave#wave3 {
        z-index: 998;
        opacity: 0.2;
        background-position-x: 200px;
    }
    .wave#wave4 {
        z-index: 999;
        opacity: 0.7;
        background-position-x: 100px;
    }
    @keyframes animate {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(10px);
        }
    }
</style>
