<template>
  <!-- App.vue -->

    <!-- Probides the application the proper gutter -->
    <b-container fluid class="py-8 px-6">
      <b-row >
        <b-col cols="12">
          <div flat color="" class="mx-auto mt-5 mb-3" max-width="400">
            <b-card-text >
              <b-avatar color="white" class="mr-4"><img :src="profil.avatar"/></b-avatar>
              <span class="title" v-text="account.pseudo"></span>
            </b-card-text>
            <b-card-text>
              <span v-text="profil.mail"></span>
            </b-card-text>
             <b-card-text> 
                  <div class="text--primary" v-text="profil.description">
                  </div>
                </b-card-text>
          </div>
        </b-col>
        <b-col v-for="(item, i) in items" :key="i" cols="12">
          <b-card flat color="grey" class="mx-auto" max-width="400">
           <b-card-text>
                  <span class="font-weight-light" v-text="item.date"></span>
                </b-card-text>
                <b-card-text> 
                  <div class="text--primary" v-text="item.post">
                  </div>
                </b-card-text>
                <div>
                    <b-btn icon><i class="bi bi-heart-fill"></i></b-btn>
                    <span class="subheading mr-2" v-text="item.like"></span>
                    <span class="mr-1">·</span>
                    <b-btn icon><b-icon class="mr-1" color="#0C7ABF"> mdi-comment-text</b-icon></b-btn>
                    <span class="subheading" v-text="item.commentaires"></span>
                </div>
          </b-card>
        </b-col>
        
      </b-row>
    </b-container>


</template>

<script>


  export default {

   data: () => ({
    items: [
      {
        post: 'Lorem ipsum dolor sit amet ! ',
        date: '12/10/2020',
        like: '1',
        commentaires: '1',
      },
      {
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor XD',
        date: '15/11/2020',
        like: '9859',
        commentaires: '250',
      },
    ],
    profil: {
      pseudo: 'Martin',
      mail: 'martin.epsi@epsi.frrr',
      description: 'salut à tous les amis comment ça va ahahahahaha',
      avatar: 'https://image.noelshack.com/fichiers/2021/01/3/1609931021-discord-mq42fprq3e.png',
    }
  }),
  computed: {
    account () {
      return this.$store.state.keycloack
    }
  }
  }
</script>

