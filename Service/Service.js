class Service {
    constructor(repo) {
        console.log('in Service');
        this.repo = repo;
    }

    async getAll(query) {
        try {
            return await this.repo.getAll(query);
        } catch (err) {
            console.log(err);
            throw Error('error in getAll::Service',);
        }
    }
    async getId(id) {
        try {
            const item = await this.repo.getId(id);
            if (!item) {
                const error = new Error('item not found');
                error.statusCode = 404;
                throw error;
            }
            return item;
            // {
            //     error:false,
            //     statusCode:200,
            //     data:item
            // };
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async insert(date) {
        try {
            const item = await this.repo.insert(date);
            if (item)
                return item;
            // {
            //         error:false,
            //         statusCode:200,
            //         data:item
            //     };
            throw new Error('error in insert')
        } catch (err) {
            throw err;
        }
    }
    async update(id, data) {
        try {
            const item = await this.repo.update(id, data, { new: true });
            if (!item) {
                const error = new Error('item not found in update');
                error.statusCode = 404;
                throw error;
            }
            return item;
        } catch (err) {
            throw err;
        }
    }
    async delete(id) {
        try {
            const item = await this.repo.delete(id);
            if (!item) {
                const error = new Error('item not found in delete');
                error.statusCode = 404;
                throw error;
            }
            return item;
            // {
            //     error:false,
            //     statusCode:200,
            //     data: item,
            //     deleted:true
            // };
        } catch (err) {
            throw err;
        }

    }
}
module.exports = Service;