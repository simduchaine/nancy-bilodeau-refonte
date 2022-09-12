<template>
    <div class="container">
        <div v-html="$static.motivation.content"></div>
    </div>
    
</template>

<static-query>
query Motivation {
  motivation(id: "bloc6") {
    id
    content
  }
}
</static-query>

<script>
export default {
    name: "contentBlock6",
    props: ["content", "id"]
}
</script>