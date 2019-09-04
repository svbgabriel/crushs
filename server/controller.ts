import model from "./model";

class Controller {
    constructor() {}

    getCrushs() {
        return model.find({});
    }

    select(req, res) {
        this.getCrushs()
            .then(crushs => res.status(200).json({ result: crushs }))
            .catch(err => res.status(400).json({ result: err }));
    }

    getCrushByID(id) {
        return model.find(id);
    }

    selectOne(req, res) {
        const id = { _id: req.params.id };
        this.getCrushByID(id)
            .then(crushs => res.status(200).json({ result: crushs }))
            .catch(err => res.status(400).json({ result: err }));
    }

    deleteCrushByID(id) {
        return model.deleteOne(id);
    }

    delete(req, res) {
        const id = { _id: req.params.id };

        this.deleteCrushByID(id)
            .then(crush => res.status(200).json({ result: crush }))
            .catch(err => res.status(400).json({ result: err }));
    }

    updateCrushByID(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    update(req, res) {
        const id = { _id: req.params.id };
        const crush = req.body;

        this.updateCrushByID(id, crush)
            .then(crush => res.status(200).json({ result: crush }))
            .catch(err => res.status(400).json({ result: err }));
    }

    createCrush(data) {
        return model.create(data);
    }

    insert(req, res) {
        const crush = req.body;

        this.createCrush(crush)
            .then(crush => res.status(200).json({ result: crush }))
            .catch(err => res.status(400).json({ result: err }));
    }
}

export default Controller;
