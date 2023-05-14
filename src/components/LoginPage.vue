<template>
  <form 
    @submit.prevent="onsubmit"
  >
    Email: <input type="text" class="fom" v-model="userId" autofocus>
    Name: <input type="text" class="fom" v-model="userNm" style="margin-right: 20px">
    <button class="btn" @click="btnPush">Login</button>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import request from 'axios';
import router from '../router';
import VueCookies from 'vue-cookies'

  let userNm = '';
  let userId = '';

  const resData = {
    // "email" : "eve.holt@reqres.in",
    // "password" : "pistol", 
    "email" : userId,
    "password" : userNm,
  }
  
  let tokenData = '';
  
  const btnPush = async () => {
    const url = 'https://reqres.in/api';
    // post 방식
    // const {data: response} = await request.post(`${url}/register`, resData);
    const {data: response} = await request.post(`${url}/register`, {
      "email" : userId,
      "password" : userNm,
    });

    if (response) {
      VueCookies.set("tokenData", response.token);
      router.push('/main');
    }

    // get 방식
    // get에서 url로 보내는 방식이다.
    // const {data: response} = await request.get('https://reqres.in/api/users?page=2')
    // get에서 url과 params로 보내는 방식이다.
    // const {data: response} = await request.get('https://reqres.in/api/users', {
    //   params: {
    //     page: '2'
    //   }
    // });
    // const {data: response} = await request.get(`${url}/users`, {
    //   params: {
    //     page: '2'
    //   }
    // });

  // axios.get(`${url}/users?page=2`)
  //   .then(function (response) {
  //     console.log(response.data, 'response.data 값');
  //     console.log(response.status, 'response.status 값');
  //     console.log(response.headers, 'response.headers 값');
  //     console.log(response.config, 'response.config 값');
  // });

  // axios.post(`${url}/register`, {
  //     "email" : userId,
  //     "password" : userNm,
  // })
  //   .then(function (response) {
  //     console.log(response.data, 'response.data 값');
  //     console.log(response.status, 'response.status 값');
  //     console.log(response.headers, 'response.headers 값');
  //     console.log(response.config, 'response.config 값');
  // });

    console.log(response);
    console.log(tokenData);

  }
</script>

<style scoped>
  .btn {
    width: 130px;
    height: 45px;
  }
</style>
