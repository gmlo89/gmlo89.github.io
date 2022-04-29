<template>
  <div class="tools">
      <h2>Some Technologies</h2>
      <div class="d-flex justify-content-between align-items-baseline flex-wrap">
        <div class="tool" v-for="(technology, Index) in technologies" :key="Index">
            <img :src="technology.img" :alt="technology.text">
            <h5>
                {{ technology.title }}
            </h5>
            <p>{{ technology.text }}</p>
        </div>
      </div>
      <h4>
          And others... <br> <small>I'am in continuous learning </small>
          <br>
          <i class="bi bi-emoji-sunglasses"></i>
        </h4>
  </div>
</template>

<script>
export default {
    data(){
        return {
            technologies: [
                {
                    img: '/img/laravel.png',
                    title: 'Laravel',
                    text: 'PHP framework Laravel'
                },
                {
                    img: '/img/bootstrap.png',
                    title: 'Bootstrap',
                    text: 'HTML, CSS, and JS library'
                },
                {
                    img: '/img/digitalocean.png',
                    title: 'Digital Ocean',
                    text: 'Cloud Computing'
                },
                {
                    img: '/img/composer.png',
                    title: 'Composer',
                    text: 'Dependency Manager for PHP'
                },
                {
                    img: '/img/git.svg',
                    title: 'GIT',
                    text: 'Version control system'
                },
                {
                    img: '/img/elasticsearch.png',
                    title: 'Elasticsearch',
                    text: 'Full-text search and analytics engine'
                },
                {
                    img: '/img/html5.png',
                    title: 'HTML 5',
                    text: 'Hypertext Markup Language'
                },
                {
                    img: '/img/sass.svg',
                    title: 'Saas',
                    text: 'Syntactically Awesome Stylesheets'
                },
                {
                    img: '/img/wordpress.png',
                    title: 'Wordpress',
                    text: 'Content Management System'
                },
                {
                    img: '/img/vuejs.png',
                    title: 'Vue.js',
                    text: 'The Progressive JavaScript Framework'
                },
                {
                    img: '/img/npm.png',
                    title: 'NPM',
                    text: 'Node Package Manager'
                },
                {
                    img: '/img/linux.png',
                    title: 'Linux',
                    text: 'Operating System'
                },
                {
                    img: '/img/mysql.svg',
                    title: 'MySQL',
                    text: 'Database Management System'
                },
                {
                    img: '/img/nginx.svg',
                    title: 'NGINX',
                    text: 'Web server, reverse proxy server, and web accelerator'
                },
                {
                    img: '/img/slack.png',
                    title: 'Slack',
                    text: 'Workplace communication tool'
                },
            ]
        }
    }
}
</script>

<style>

</style>