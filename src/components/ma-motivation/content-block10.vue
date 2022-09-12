<template>
    <div class="container">
        <div v-html="$static.motivation.content"></div>
    </div>
    
</template>

<static-query>
query Motivation {
  motivation(id: "bloc10") {
    id
    content
  }
}
</static-query>

<script>
export default {
    name: "contentBlock10",
    props: ["content", "id"]
}
</script>