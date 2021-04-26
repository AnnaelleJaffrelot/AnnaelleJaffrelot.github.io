<template>
  <b-card
    max-width="450"
    class="mx-auto"
  >
  
      <b-input-group class="mt-3 mb-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-primary">Rechercher</b-button>
    </b-input-group-append>
  </b-input-group>

    

    <b-list-group>
      <template v-for="(item, index) in items">
        <b-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></b-subheader>

        <div
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></div>

        <b-list-group-item
        button
        @click="$router.push('profil')"
          v-else
          :key="item.name"
        >
        <div class="flex">
          <div>
            <b-avatar :src="item.avatar" size="6rem"></b-avatar>
          </div>

          <div>
            <b-card-title class="font-weight-bold" v-html="item.name"></b-card-title>
            <br>
            <b-card-text v-html="item.subtitle"></b-card-text>
            <br>
             <!-- <b-button @click="$router.push('profil')" variant="outline-dark">Voir le profil</b-button> -->
          </div>
          </div>
        </b-list-group-item>
      </template>
    </b-list-group>
  </b-card>
</template>

<style>
  .flex{
    display: flex;
  }
</style>

<script>
  export default {
    data: () => ({
      items: [
       
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          name: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          name: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>

