<script>
    import "../app.css";
    import Fa from "svelte-fa/src/fa.svelte";
    import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
</script>

<section class="w-full text-center p-14 lg:px-36">
    <h1 class="my-14 text-7xl font-extrabold xl:text-8xl">
        Apprendre les bases du <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
            >développement web</span
        >
    </h1>
    <div class="w-2/3 m-auto">
        <h2 class="text-3xl lg:mt-28 xl:text-3xl">
            <span class="font-bold">Une formation</span> de plus de 200 pages,
            10 chapitres et plus de 40 exercices corrigés pour apprendre
            <span class="font-bold">les bases du développement web.</span>
        </h2>
        <p class="text-2xl mt-14">
            Tout est en cours d'écriture pour le moment. Si tu veux être prévenu
            quand ça sera disponible, clique ici :
        </p>

        <div class="flex items-center justify-center">
            <button
                class="bg-indigo-500 px-7 py-4 text-white text-xl rounded-xl mt-20 flex items-center hover:bg-indigo-400 transition-all"
            >
                <Fa icon={faBoltLightning} class="text-yellow-400" />
                <span class="ml-4">Ca m'intéresse !</span>
            </button>
        </div>
    </div>
</section>

<section class="w-full text-center p-14 lg:px-36">
    <h1 class="my-7 text-5xl font-extrabold">
        Ce qui sera détaillé et expliqué
    </h1>
</section>
