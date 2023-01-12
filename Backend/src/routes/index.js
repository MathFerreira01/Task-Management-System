import express  from "express";
import hotel from "./hotelRoutes.js";
import cors from 'cors';

const routes = (App) => {
    App.route('/').get((req, res) => {
        res.status(200).send({titulo: "sistema hoteleira"})
    })

    App.use(
        cors(),
        express.json(),
        hotel,
    )
}
export default routes