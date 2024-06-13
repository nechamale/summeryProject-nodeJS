const autoBind = require( 'auto-bind' );
const db = require('./db');
const { parse } = require('dotenv');

class Repository {
    constructor(model) {
        console.log('in repository', model);
        this.model = model;
        autoBind( this );
        db;
        // db();
    }

    async getAll(query) {
        try {
            return await this.model.find(query);
        } catch (err) {
            console.log(err);
            throw Error('error in getAll');
        }
    }
    async getId(id1) {
        try {
            const item = await this.model.findOne({id:id1});
            if (!item) {
                const error = new Error('item not found');
                error.statusCode = 404;
                throw error;
            }
            return {
                error:false,
                statusCode:200,
                data:item
            };
        } catch (err) {
            throw err;
        }
    }
    async insert(date) {
        try {
            const item1 = new this.model(date);
            // const item = await this.model.create(date);
            const changeStream = this.model.watch().on('change', change => console.log(change));
            
            await item1.save();
            if (item1)
                return {
            error:false,
            statusCode:200,
            data:item1
        };
        throw new Error('error in insert')
        } catch (err) {
            throw err;
        }
    }
    async update(id, data) {
        try {
            // const item = await this.model.findByIdAndUpdate(id, data, { new: true });
            const item = await this.model.updateOne({ id: id }, data);
            const changeStream = this.model.watch().on('change', change => console.log(change));
            
            if (!item) {
                const error = new Error('item not found in update');
                error.statusCode = 404;
                throw error;
            }
            return {
                error:false,
                statusCode:200,
                data:item
            };
        } catch (err) {
            throw err;
        }
    }
    async delete(id) {
        try {
            const item = await this.model.deleteMany({ id: id });
            if (!item) {
                const error = new Error('item not found in delete');
                error.statusCode = 404;
                throw error;
            }
            return {
                error:false,
                statusCode:200,
                data:item
            };
        } catch (err) {
            throw err;
        }

    }
}
module.exports = Repository;