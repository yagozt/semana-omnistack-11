const connection = require('../database/connection');

module.exports = {
    async Login(request, response) {
        const { id } = request.body;

        const ong = await connection('Ongs').where('id', id).select('nome').first();

        if (!ong) {
            return response.status(400).json({ error: 'No Ong Found with this ID' });
        }

        return response.json(ong);
    }
}