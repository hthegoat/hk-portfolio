<template>

  <div class="md-card" :class="{ 'show-border': !hideBorder}">
    <div v-if="image" class="card-image">
      <img :src="$withBase(image)" alt="">
    </div>
    <div class="card-content">
        
      <slot>
      </slot>
      
      <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button  class="button" type="submit">Contact Me 😁</button>
  </p>
</form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'hideBorder']
};
</script>

<style lang="stylus">
@import './styles/config.styl';



.md-card
  background-color $frontColor
  margin-top 1em
  min-height 100px
  display flex
  flex-direction row
  .card-image
    display flex
    align-items center
    padding 0.5rem
    img 
      max-width 150px
      max-height 150px
      height 150px
      border: 1px solid #eee;
      border-radius 0.2rem
      object-fit cover
  .card-content  
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote 
      font-size 1rem
  .form
    display block
    align-items left
  .button
    width 150px
    height 40px
    padding 2px
    


.md-card.show-border
  border 3px solid #eee
  border-radius 0.5rem
  box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
  padding 0.5rem

@media (max-width: $MQMobileNarrow)
  .md-card
    display flex
    flex-direction column
    margin 1rem -0.5rem
    padding 0.5rem
    box-sizing border-box
    .card-image
      flex-grow 1
      align-items: stretch
      img 
        width 100%
        max-width 400px
    .card-content
      pre
        margin 0
        border-radius 6px

</style>