const getObjectById = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const object = await collection.findById(id);
        if (!object) throw Error(`Object ID Not Found`);
        res.json(object);
    } catch (e) {
        console.log(e);
        res.send("Oops. Nothing seems to be here ¯\_(ツ)_/¯ ");
    }
};

const createObject = async (req, res, collection) => {
    try {
        const newObject = await new collection(req.body);
        await newObject.save();
        return res.json({ newObject });
    } catch (e) {
        console.log(e);
        res.send("Oops.  Nothing seems to be here ¯\_(ツ)_/¯ ");
    } 
};

const updateObjectByID = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const updatedObject = await collection.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedObject) {
            return res.json({ updatedObject });
        }
        return res.send("Oops. Nothing seems to be here ¯\_(ツ)_/¯");
    } catch (e) {
        console.log(e);
        res.send("Oops. Oops. Nothing seems to be here ¯\_(ツ)_/¯");
    }
};

const deleteObjectByID = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const deletedObject = await collection.findByIdAndDelete(id);
        if (deletedObject) {
            return res.json({ deletedObject });
        }
        return res.send("Oops. Nothing seems to be here ¯\_(ツ)_/¯");
    } catch (e) {
        console.log(e);
        res.send("Oops. Oops. Nothing seems to be here ¯\_(ツ)_/¯");
    }
};

module.exports = {
    getObjectById,
    createObject,
    updateObjectByID,
    deleteObjectByID 

}