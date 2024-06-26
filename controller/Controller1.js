const autoBind = require('auto-bind');
const { query } = require('express');

class Controller {
    constructor(service) {
        this.service = service;
        autoBind(this);
        console.log('in Controller');
    }
    async getAll(req, res,next) {
        try {
            const result = await this.service.getAll(req.query);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async getId(req, res,next) {
        try {
            const id = req.params.id
            const result = await this.service.getId(id);
            return res.status(result.statusCode).json(result);
        } catch (error) {
            // res.status(500).json({ message: 'Internal Server Error in getid' });
            next(error);
        }
    }
    async insert(req, res, next) {
        try {
            const data = req.body;
            const result = await this.service.insert(data);
            return res.status(result.statusCode).json(result);
        } catch (error) {
            // console.error(error);
            // res.status(500).json({ message: 'Internal Server Error in insert' });
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;
            const result = await this.service.update(id, data);
            return res.status(result.statusCode).json(result);
        } catch (error) {
            // console.error(error);
            // res.status(500).json({ message: 'Internal Server Error in update' });
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const response = await this.service.delete(id);
            return res.status(response.statusCode).json(response);
        } catch (err) {
            // console.error(error);
            // res.status(500).json({ message: 'Internal Server Error in delete' });
            next(err)
        }
    }
}

module.exports = Controller;