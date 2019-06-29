<template>
  <ins class="adsbygoogle"
    :style="adStyle"
    :data-ad-layout="adLayout"
    :data-ad-format="adFormat"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"></ins>
</template>

<script>
export default {
  props: {
    adClient: {
      type: String,
      required: true
    },
    adSlot: {
      type: String,
      required: true
    },
    adLayout: {
      type: String,
      required: false,
      default: 'in-article'
    },
    adFormat: {
      type: String,
      required: false,
      default: 'fluid'
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display:block; text-align:center;'
    }
  },
  mounted() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>