
const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const models = require("./models");
const Role = models.Role;
const router = express.Router();
const authJwt = require("./middleware/authJwt");
const app = express();
const brand_controller = require('./controllers/brand.controller');
const category_controller = require('./controllers/category.controller');

const userController = require('./controllers/user.controller');

app.use(cors());

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//app.use('/home', authJwt.verifyToken, router);
/*
app.get('/home', authJwt.verifyToken, (req, res) => {
  res.send('Доступ разрешен!');
});
*/
app.get("", (req,res)=>{
  res.send("Hell, its working...");
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/brand.routes')(app);
require('./routes/category.routes')(app);

//маршрут для обработки запросов профиля пользователя
app.get('api/user/profile',authJwt.verifyToken, userController.getUserProfile);

app.post('api/brand/create', brand_controller.createBrand);
app.post('api/category/create', category_controller.createCategory);
app.get('api/getbrandID');
app.get('api/getcategoryID');



/*
Role.bulkCreate([
  {name:"user"},
  {name:"admin"},
  {name:"moderator"}
]);
*/
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});