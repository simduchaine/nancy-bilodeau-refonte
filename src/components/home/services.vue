<template>
    <div class="container">
        <h1 class="title has-text-centered">Plus d’énergie… plus de joie… plus de possibilités !</h1>
        <div class="columns">

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image src="../../../uploads/young-smiling-man.jpg" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title ">Pour toi</h2>
                        <g-link to="/ameliorer-ma-sante" class="button">En apprendre davantage</g-link>
                        <!-- modifier le lien pour page perso coaching -->
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image src="../../../uploads/woman-coworkers.jpg" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title">Pour ton entreprise</h2>
                        <g-link to="/transformation-organisationnelle" class="button">En apprendre davantage</g-link>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image src="../../../uploads/happy-young.jpg" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <h2 class="title">Pour ton équipe</h2>
                        <g-link to="/accompagnement-holistique-coaching" class="button">En apprendre davantage</g-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Services"
};
</script>