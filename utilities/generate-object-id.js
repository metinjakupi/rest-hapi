module.exports = function joiObjectId(Joi, message) {
    if (!message || !(typeof message === 'string')) {
        message = 'valid mongo id';
    }
    return function objectId() {
        return Joi.alternatives(
            Joi.string().regex(/^[0-9a-fA-F]{24}$/, message),
            Joi.object().keys({
                id: Joi.any(),
                _bsontype: Joi.allow('ObjectId')
            })
        );
    };
}
