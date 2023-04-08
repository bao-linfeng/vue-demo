import axios from 'axios';
// import { createMsg } from './ADS';
import { useRoute, useRouter } from 'vue-router';

// const router = useRouter();

let baseURL = 'https://skcyfoxx.qingtime.cn';

axios.interceptors.response.use(
  (response) => {
    switch (response.data.statusCode || response.data.status) {
      case '701':
        localStorage.clear();
        // createMsg('登录失效');
        break;
      case '201':
        // createMsg(response.data.msg)
        break;
      default:
    }

    return response;
  },
  (err) => {
    console.log(err);
  }
);

const request = {
  get: (url, params, base = '') => {
    return new Promise((resolve, reject) => {
      axios
        .get((base ? base : baseURL) + url, { params })
        .then((response) => {
          resolve(response.data);
          if (response.data.status == 301) {
            // 验证码失效 => 跳转 验证码校验UI 2022.07.02 -> baolf
            // createMsg(response.data.msg);
            // router.push('/authentication');
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  post: (url, params, base) => {
    return new Promise((resolve, reject) => {
      axios
        .post((base ? base : baseURL) + url, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  patch: (url, params) => {
    return new Promise(function (resolve, reject) {
      axios
        .patch(baseURL + url, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  delete: (url, params) => {
    return new Promise(function (resolve, reject) {
      axios
        .delete(baseURL + url, {
          data: params,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
};

const background = {
  getBackgroundRandom(siteKey) {
    // 随机背景
    let param = {
      siteKey: siteKey,
    };
    return request.get('/background/random', param);
  },
};

export { background };
