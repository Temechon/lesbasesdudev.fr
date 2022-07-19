<script lang="typescript">
    import "../app.css";
    import Fa from "svelte-fa/src/fa.svelte";
    import {
        faBoltLightning,
        faArrowTurnDown,
        faCircleQuestion,
        faSpinner,
        faCheckCircle,
    } from "@fortawesome/free-solid-svg-icons";
    import { addUser } from "../firebase";

    let email = "";
    let disabled = true;
    let saveStatus: string = "";

    async function addEmail() {
        saveStatus = "saving";
        await addUser(email);
        saveStatus = "saved";
    }
</script>

<section class="w-full text-center lg:p-14 lg:px-36">
    <!-- Titre -->
    <h1 class="my-14 text-5xl font-extrabold xl:text-8xl">
        Apprendre les bases du <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
            >développement web</span
        >
    </h1>
    <!-- Texte -->
    <!-- sous-titre -->
    <h2 class="text-3xl lg:mt-28 xl:text-3xl">
        <span class="font-bold">Une formation</span> complète, qui part de
        <span class="font-bold text-pink-400">zéro</span>
        et qui explique en détails
        <span class="font-bold text-blue-400"
            >les bases du développement web.</span
        >
    </h2>

    <div class="lg:w-2/3 m-auto p-8 pt-0">
        <p class="text-xl mt-6">
            Tu es en reconversion et le monde du web t'intéresse ? Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Praesent nibh est,
            interdum non augue id, vestibulum mattis libero. eleifend sodales.
        </p>

        <p class="text-xl mt-6">
            Tout est en cours d'écriture pour le moment. Si tu veux être prévenu
            quand ça sera disponible, clique ici <Fa
                icon={faArrowTurnDown}
                class="ml-3 relative top-2.5 text-pink-500 inline-block"
            />
        </p>

        <div class="flex items-center justify-center">
            <button
                class="bg-indigo-500 px-7 py-4 text-white text-xl rounded-xl mt-20 flex items-center hover:bg-indigo-400 transition-all"
            >
                <Fa icon={faBoltLightning} class="text-yellow-400 mr-4" />
                Ca m'intéresse !
            </button>
        </div>
    </div>
</section>

<!-- Separateur -->
<div
    class="h-1 bg-red-300 w-5/6 m-auto bg-gradient-to-r from-blue-500 to-pink-500 my-4"
/>

<!-- 2e section -->
<section class="w-full text-center lg:p-14 lg:px-36">
    <h1 class="mt-7 text-5xl font-extrabold">
        Ce qui sera détaillé et expliqué
    </h1>
    <h2 class="text-2xl mt-6">
        Et ce que vous saurez à l'issue de la formation
    </h2>

    <!-- Liste des points vus dans la formation -->
    <div class="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-2 md:w-5/6 m-auto">
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="flex flex-col items-center justify-center ">
            <Fa icon={faBoltLightning} class="text-3xl my-4" />
            <div class="text-xl font-bold">L'histoire de l'internet</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
    </div>
</section>

<!-- Separateur -->
<div
    class="h-1 bg-red-300 w-5/6 m-auto bg-gradient-to-r from-blue-500 to-pink-500 my-4"
/>

<!-- FAQ -->
<section class="w-full text-center lg:p-14 lg:px-36">
    <h1 class="mt-7 text-5xl font-extrabold">Questions fréquentes</h1>
    <h2 class="text-2xl mt-6">
        Et si tu en as d'autres, n'hésites pas à m'envoyer un email :)
    </h2>

    <!-- Liste des questions -->
    <div class="px-4 mt-12 md:w-4/6 m-auto">
        <!-- Question -->
        <div class="mt-6 mb-12">
            <!-- Question titre -->
            <div class="flex items-center text-left">
                <Fa
                    icon={faCircleQuestion}
                    class="text-blue-400 mr-4 text-4xl"
                />
                <h3 class="text-xl font-semibold">
                    Est-ce que cette formation est faite pour moi ?
                </h3>
            </div>
            <!-- Réponse -->
            <div class="text-justify pl-12 pr-4 mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nibh est, interdum non augue id, vestibulum mattis
                libero. eleifend sodales.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent nibh est, interdum non augue id,
                vestibulum mattis libero. eleifend sodales.
            </div>
        </div>
        <!-- Question -->
        <div class="mt-6 mb-12">
            <!-- Question titre -->
            <div class="flex items-center text-left">
                <Fa
                    icon={faCircleQuestion}
                    class="text-blue-400 mr-4 text-4xl"
                />
                <h3 class="text-xl font-semibold">
                    Est-ce que cette formation est faite pour moi ?
                </h3>
            </div>
            <!-- Réponse -->
            <div class="text-justify pl-12 pr-4 mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nibh est, interdum non augue id, vestibulum mattis
                libero. eleifend sodales.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent nibh est, interdum non augue id,
                vestibulum mattis libero. eleifend sodales.
            </div>
        </div>
    </div>
</section>

<!-- Separateur -->
<div
    class="h-1 bg-red-300 w-5/6 m-auto bg-gradient-to-r from-blue-500 to-pink-500 my-4"
/>

<!-- Inscription par email -->
<section class="w-full text-center lg:p-14 lg:px-36">
    <h1 class="mt-7 text-5xl font-extrabold">
        Ca t'intéresse ? Inscris-toi ici !
    </h1>
    <h2 class="text-xl mt-6">
        Renseigne ton adresse email ici, et tu recevras un message dès que la
        formation sera disponible.
    </h2>

    <div class="px-4 mt-12 md:w-4/6 m-auto">
        <form on:submit|preventDefault|stopPropagation|once={addEmail}>
            <div
                id="mc_embed_signup_scroll"
                class="flex flex-col md:flex-row items-stretch justify-start"
            >
                <div class="mc-field-group w-full md:w-3/4 mr-4">
                    <input
                        bind:value={email}
                        type="email"
                        autocomplete="email"
                        placeholder="Ton email ici"
                        class="px-3 py-2 rounded-md w-full text-black"
                    />
                </div>
                <div class="h-full">
                    <button
                        disabled={!email}
                        type="submit"
                        class="disabled:bg-gray-400 w-40 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
                    >
                        {#if saveStatus === "saving"}
                            <Fa
                                icon={faSpinner}
                                class="text-2xl animate-spin"
                            />
                        {:else if saveStatus === "saved"}
                            <Fa icon={faCheckCircle} class="text-2xl" />
                        {:else}
                            Je m'enregistre !
                        {/if}
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>

<!-- Footer -->
<section class="w-full text-center lg:p-14 lg:px-36 bg-gray-700 h-72">
    footer
</section>
