module.export = function (req, res, next) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        } catch (ex) {
            next(ex);
        }
    };
};