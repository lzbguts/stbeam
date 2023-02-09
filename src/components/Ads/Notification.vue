<template>
    <div>
        <div id="container-bc3f4c902de1f7ee493f6c1de827a3e2" class="ads"></div>
    </div>
</template>

<script>
export default {
    name: "SideAd",
    methods: {
        loadAds() {
            console.log('loadAds')
            let adScript = document.createElement('script')
            adScript.async = 'async'
            adScript.defer = 'defer'
            adScript.charset = 'utf-8'
            adScript.setAttribute('src', './Notification.vue')
            document.head.appendChild(adScript)
        }
    },
    mounted () {
      console.log('mounted')
      this.loadAds()
    },
}
</script>

<style scoped>

</style>