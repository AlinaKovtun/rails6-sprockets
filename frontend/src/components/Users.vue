<template>
  <div id="users">
    <div v-for="(user) in users" :key="user.id">
      <p>{{user.first_name}} {{user.last_name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: [],
      first_name: [],
      last_name: [],
      errors: []
    }
  },
  created () {
    axios.get('http://localhost:3000/list')
      .then(response => {
        this.users = response.data
      })
      .catch(e => {
        this.error.push(e)
      })
  }
}
</script>
