<script lang="ts">
    import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons/faArrowTurnDown";
    import { faBoltLightning } from "@fortawesome/free-solid-svg-icons/faBoltLightning";
    import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
    import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons/faCircleQuestion";
    import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons/faEnvelopeSquare";
    import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

    import Fa from "svelte-fa";
    import "../app.css";
    import { addUser } from "../firebase";

    import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
    import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
    import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";

    let email = "";

    let saveStatus: string = "";

    /**
     * Ajoute un email en DB si ce n'est pas un spambot
     */
    async function addEmail() {
        saveStatus = "saving";
        // Check si le champ ct_phone est rempli correctement
        const hpelement = document.getElementById(
            "ct_phone"
        ) as HTMLInputElement;
        if (hpelement?.value !== "1") {
            saveStatus = "registered";
        } else {
            await addUser(email);
            saveStatus = "saved";
            setTimeout(() => {
                saveStatus = "registered";
            }, 1500);
        }
    }

    /**
     * Scroll jusqu'à l'enregistrement de l'email
     */
    function scrollToBottom() {
        const element = document.getElementById("register");
        element?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<section class="w-full px-8 text-center lg:p-14 lg:px-36 pb-12">
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
                on:click={scrollToBottom}
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
<section class="w-full px-8 text-center lg:p-14 lg:px-36 py-12">
    <h1 class=" text-5xl font-extrabold">Ce qui sera détaillé et expliqué</h1>
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
<section class="w-full px-8 text-center lg:p-14 lg:px-36 py-12">
    <h1 class="text-5xl font-extrabold">Questions fréquentes</h1>
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
<section class="w-full text-center px-8 lg:p-14 lg:px-36 py-12" id="register">
    <h1 class="text-5xl font-extrabold">Ca t'intéresse ? Inscris-toi ici !</h1>
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
                        class="outline-none focus:ring-4 ring-blue-500 px-3 py-2 rounded-md w-full text-black"
                    />
                    <input
                        type="text"
                        autocomplete="off"
                        name="phone"
                        value="1"
                        id="ct_phone"
                        class="!hidden"
                        tabindex="-1"
                    />
                </div>
                <div class="h-full">
                    <button
                        disabled={!email || saveStatus === "registered"}
                        type="submit"
                        class="disabled:bg-gray-400 disabled:cursor-not-allowed w-40 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
                    >
                        {#if saveStatus === "saving"}
                            <Fa
                                icon={faSpinner}
                                class="text-2xl animate-spin"
                            />
                        {:else if saveStatus === "saved"}
                            <Fa icon={faCheckCircle} class="text-2xl" />
                        {:else if saveStatus === "registered"}
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

<!-- Separateur -->
<div
    class="h-1 bg-red-300 w-5/6 m-auto bg-gradient-to-r from-blue-500 to-pink-500 "
/>

<!-- Footer -->
<section class="w-full px-8 lg:p-14 lg:px-36 bg-gray-800 py-12">
    <div class="flex">
        <!-- A propos -->
        <div class="w-3/5 pr-8">
            <h1 class="text-2xl font-extrabold text-left">A propos</h1>

            <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nibh est, interdum non augue id, vestibulum mattis
                libero. eleifend sodales.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Praesent nibh est, interdum non augue id,
                vestibulum mattis libero. eleifend sodales.
            </p>
        </div>
        <!-- Mes réseaux -->
        <div class="w-2/5 pl-8 pr-4">
            <h1 class="text-2xl font-extrabold text-left">Mes réseaux</h1>
            <ul class="text-left">
                <li>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/julian-chenard/"
                        class="flex items-center hover:text-blue-500"
                    >
                        <Fa icon={faLinkedin} class="text-3xl mr-4" /> Linkedin
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/Temechon"
                        class="flex items-center hover:text-pink-500"
                    >
                        <Fa icon={faGithubSquare} class="text-3xl mr-4" /> Github
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://twitter.com/Temechon"
                        class="flex items-center hover:text-blue-500"
                    >
                        <Fa icon={faTwitterSquare} class="text-3xl mr-4" /> Twitter
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:temechon@gmail.com"
                        class="flex items-center hover:text-pink-500"
                    >
                        <Fa icon={faEnvelopeSquare} class="text-3xl mr-4" /> Linkedin
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
