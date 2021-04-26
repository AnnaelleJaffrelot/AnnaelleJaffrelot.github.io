<template>
  <!-- App.vue -->
  <b-app>
     <!-- Sizes your content based upon application components -->
    <b-main>
    <!-- Probides the application the proper gutter -->
    <b-container fluid class="py-8 px-6">
      <b-row >
        <b-col cols="12">
            <span class="title">Ecrire un tweet</span>
            <b-card flat color="#EEEEEE" >
            <b-textarea color="teal" outlined label="Tweet">
              </b-textarea>
              </b-card>
            <b-btn icon>Ajouter une image</b-btn>
        </b-col>
      </b-row>
      <b-btn>Poster le tweet</b-btn>
    </b-container>
    </b-main>
</b-app>
</template>