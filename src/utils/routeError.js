const routeError = async (req, res) => {
    res.status(404).json({
        error: -1,
        description: "The route specified doesn't exist( " + req.url + " ). Cannot " + req.method
    })
}

module.exports = routeError