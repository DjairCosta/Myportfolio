
const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

//Create
router.get('/', async (req, res) => {
    try {
        const portfolio = await Portfolio.find();

        res.json({
            success: true,
            data: portfolio

        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

});

//Read
router.get('/:slug', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            data: portfolio
        })

    } catch (err) {
        res.json({
            success: false,
            message: err

        })
    }
})

router.post('/', async (req, res) => {
    const portifolio = new Portfolio({
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,
        technologies: req.body.technologies
    });

    try {
        const savedPortfolio = await portifolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

})

//Update

router.patch('/:slug', async (req, res) => {
    try {
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    longDescription: req.body.longDescription,
                    image: req.body.image,
                    technologies: req.body.technologies

                }
            })

        res.json({
            success: true,
            updates: updatedPortfolio.nModified

        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

//Delete

router.delete('/:slug', async (req, res) => {
    try {
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })

    } catch {
        res.json({
            success: false,
            message: err
        })
    }

})

module.exports = router