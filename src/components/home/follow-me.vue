<template>
    <div class="container">
        <h1 class="title has-text-centered">Pour me suivre...</h1>
        <h2 class="subtitle has-text-centered">Découvrez des astuces pour prendre soin de vous, vos équipes et votre entreprise.</h2>
        <div class="columns">

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <!-- <g-image src="../../../uploads/young-smiling-man.jpg" height="410" width="650"></g-image> -->
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title ">Lire</h2>
                        <g-link to="/blogue" class="button">Sur mon blogue</g-link>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <!-- <g-image src="../../../uploads/woman-coworkers.jpg" height="410" width="650"></g-image> -->
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title">Regarder</h2>
                        <a class="button" href="https://www.youtube.com/channel/UCel4Y254TeW2NpNyw37RTcA" target="_blank" rel="noopener noreferrer">Sur ma chaine Youtube</a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <!-- <g-image src="../../../uploads/happy-young.jpg" height="410" width="650"></g-image> -->
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title">Écouter</h2>
                        <g-link to="/" class="button">Mon podcast</g-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Follow-Me"
};
</script>