<template>
    <div class="container">
        <div v-html="$static.motivation.content"></div>
    </div>
    
</template>

<static-query>
query Motivation {
  motivation: purpose(id: "bloc8") {
    id
    content
  }
}
</static-query>

<script>
export default {
    name: "contentBlock8",
    props: ["content", "id"]
}
</script>