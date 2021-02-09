<template>
 <div class="vuepress-plugin-contact-us-wrapper">
        <div id="the-floating-button" @click="formVisible = !formVisible">
            <font-awesome-icon :icon="appIcon" :size="size" :style="attachStyles()" />
        </div>
        <div class="contact-us-form-wrap" v-show="formVisible">
            <div class="line-row">
                <h2>{{ language.LB_FORM_TITLE }}</h2>
            </div>
            <ul class="error-box" v-if="errors.length > 0">
                <li v-for="msg in errors" class="error-msg">{{ msg }}</li>
            </ul>
            <div class="line-row">
                <input id="v-c-name" class="v-c-input" v-model="userFullName" :placeholder="language.LB_YOUR_NAME">
            </div>
            <div class="line-row">
                <input id="v-c-email" class="v-c-input" v-model="emailFrom" :placeholder="language.LB_YOUR_EMAIL">
            </div>
            <div class="line-row">
                <textarea rows="5" id="v-c-message" class="v-c-input" :placeholder="language.LB_YOUR_MESSAGE" v-model="message"></textarea>
            </div>
            <div class="line-row">
                <button class="btn btn-send" @click.prevent="submitForm()">
                    <font-awesome-icon :icon="spinnerIcon" v-show="sendingData" spin/>
                    <font-awesome-icon :icon="sendIcon" v-show="!sendingData" />
                    {{ language.LB_YOUR_BUTTON_SEND }}
                </button>
                <button class="btn btn-cancel" @click.prevent="formVisible = false">
                    <font-awesome-icon :icon="closeIcon" />
                    {{ language.LB_YOUR_BUTTON_CANCAL }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import VuepressContactUsLang from './utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faEnvelope, faShareSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'


export default {
  props: ['image', 'hideBorder']
};
  data() {
    return {
      formVisible: false,
            emailFrom: null,    // User's email
            userFullName: null, // User's full name
            message: null,      // User's message
            emailTo: null,      // Receiver's email
            lang: 'en',         // Language to use
            sendgridApi: null,  // Sendgrid api key
            errors: [],         // Validation
            // UI
            sendingData: false,     // Send message to API
            size: '2x',         // Envolope Icon size
            color: '#3eaf7c'        // Envolope Icon color
    }
  }
</script>

<style lang="stylus">
@import './styles/config.styl';

.md-card
  background-color $frontColor
  margin-top 1em
  min-height 150px
  display flex
  flex-direction row
  align-items: stretch
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
    padding 0.5rem
    flex-grow 1
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote 
      font-size 1rem

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