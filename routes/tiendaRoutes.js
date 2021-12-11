const express=require('express');
const routes=express.Router();
const {renderPrincipal,renderRemeras,renderPantalones}=require('../controllers/tiendaControllers');

routes.get('/',renderPrincipal);
routes.get('/Remeras',renderRemeras);
routes.get('/Pantalones',renderPantalones);

module.exports = routes;