<template>
  <!-- App.vue -->

        
    <!-- Probides the application the proper gutter -->
    <b-container fluid class="py-8 px-6">
      <template>
 
</template>
      <b-row>
           <b-col v-for="(item, i) in items" :key="i" cols="12">
            <b-card flat :color="item.color" class="mx-auto" max-width="400">

                <b-card-title>
                  <b-avatar color="white" class="mr-4"><img :src="item.avatar"/></b-avatar>
                  <span class="title font-weight-light" v-text="item.pseudo"></span>
                </b-card-title>
                <b-card-text> 
                  <div class="text--primary" v-text="item.post">
                  </div>
                </b-card-text>

                <div>
                  <span class="material-icons">
favorite
</span>
                  <i class="bi bi-heart"></i>
          

                    <b-btn variant="outline-success"><HeartIcon size="1.5x" /></b-btn>
                    <span class="subheading mr-2" v-text="item.like"></span>
                    <span class="mr-1">·</span>
                    <b-btn variant="outline-success"><AnnotationIcon size="1.5x" /></b-btn>
                    <span class="subheading" v-text="item.commentaires"></span>
                </div>
                
            </b-card>
        </b-col>
      </b-row>
      <!-- If using vue-router -->
      <router-view></router-view>
    </b-container>
 
</template>

<script>

import { AnnotationIcon} from '@vue-hero-icons/outline'
import { HeartIcon } from "@vue-hero-icons/outline"
  export default {
    components: {
    AnnotationIcon,
    HeartIcon,
  },
   data: () => ({
    items: [
      {
        color: 'grey',
        avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609931021-discord-mq42fprq3e.png',
        pseudo: 'Justin ^^',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam :) ',
        like: '1',
        commentaires: '1',
      },
      {
        color: 'grey',
        avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609930995-opera-zjhdex3yyo.png',
        pseudo: 'Martin XD',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        like: '9859',
        commentaires: '250',
      },
    ],
  }),
  }
</script>


