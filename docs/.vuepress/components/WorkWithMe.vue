<template>
  <div class="md-card" :class="{ 'show-border': !hideBorder}">
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

        
<style lang="stylus" scoped>
.vuepress-plugin-contact-us-wrapper{
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 20rem;
    width: 50px;
    height : 50px;
    z-index: 1;
    #the-floating-button{
        width: 50px;
        height: 50px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #the-floating-button:hover{
        .fa-envelope{
            color : #333333 !important;
        }
    }
    .contact-us-form-wrap{
        background-color: white;
        width : 400px;
        position :absolute;
        bottom: 4.4rem;
        left : 0rem;
        border: solid 1px #ededed;
        -webkit-box-shadow: 3px 3px 7px 1px rgba(204,200,204,0.59);
        -moz-box-shadow: 3px 3px 7px 1px rgba(204,200,204,0.59);
        box-shadow: 3px 3px 7px 1px rgba(204,200,204,0.59);
        padding: 10px;
        .line-row{
            padding: 5px 0;
            display: flex;
            justify-content : center;
            h2{
                text-align: center;
                padding: 0;
                border : none;
                margin: 12px;
            }
            .v-c-input{
                width :80%;
                padding: 6px;
                border: solid 1px #ededed;
                font-size: 12px;
            }
            .btn{
                width : 40%;
                margin: 6px;
                border-radius: 0;
                padding: 6px;
                font-size: 14px;
                cursor: pointer;
            }
            .btn-send{
                background-color: #007bff;
                border-color: #007bff;
                color: white;
            }
            .btn-cancel{
                background-color : #f8f9fa;
                border-color: #f8f9fa;
                color : #333;
            }
            .btn-cancel:hover{
                background-color : #e2e6ea;
                border-color: #e2e6ea;
            }
            .btn-send:hover{
                background-color : #0069d9;
                border-color: #0069d9;
            }
        }
        .error-box{
            .error-msg{
                margin: 5px;
                color: red;
                font-size : 12px;
                margin-left: 28px;
            }
        }
    }
}
@media screen and (max-width: 480px)
    .vuepress-plugin-contact-us-wrapper
        left: 0;
</style>

</style>