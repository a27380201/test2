function refresh_token(token)
{
    const axios = require('axios');
    let data = JSON.stringify({
    "grant_type": "refresh_token",
    //   "code": "string",
    "refresh_token": token,
    //   "username": "string",
    //   "password": "string",
    //   "scope": "string",
    //   "nonce": "string",
    //   "code_verifier": "string",
    //   "device_code": "string"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://lowcode-3g98479t4c54633d.api.tcloudbasegateway.com/auth/v1/token',
    headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });

}

function login() {
    const axios = require('axios');
    let data = JSON.stringify({
    "username": "test",
    "password": "Test12345",
    // "verification_token": "string"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://lowcode-3g98479t4c54633d.tcloudbasegateway.com/auth/v1/signin',
    headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
        // console.log("response")
    console.log(JSON.stringify(response.data));
    return JSON.stringify(response.data)
    })
    .catch((error) => {
    console.log(error);
    });
}

// login()
async function testModel(params) {
    const cloudbase = require("@cloudbase/node-sdk");

    console.log(cloudbase.version)

    // 指定云开发环境 ID
    const app = cloudbase.init({
    env: "lowcode-3g98479t4c54633d",
    });

    const models = app.models;
    // 接下来就可以调用 models 上的数据模型增删改查等方法了
    // models.post.create({
    //  data: {
    //    body: "你好，世界👋\n\nfrom china",
    //    title: "你好，世界👋",
    //    slug: "hello-world-cn",
    //  },
    // }).then(({ data } => { console.log(data)}))
    const { data } = await models.test_pic.get({
        filter: {
          where: {
            $and: [
              {
                _id: {
                  $eq: _id, // 推荐传入_id数据标识进行操作
                },
              },
            ]
          }
        },
        // envType: pre 体验环境， prod 正式环境
        envType: "pre",
      });
      
      // 返回查询到的数据
      console.log(data);
}

testModel()

// testModel()
// testModel()
// testModel()
// testModel()
// testModel()

