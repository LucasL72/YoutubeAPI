exports.home = async (req, res) => {
    console.log("Je suis la page home")
    const articles = await db.query(`SELECT * FROM article`)
    console.log(articles)
    res.render("home", {
        dbarticle: articles
    })
};

exports.youtube = (req, res) => {
  console.log("je suis la page youtube")
        res.render("yt")
}
exports.youtubesearch = (req, res) => {
    var search = require('youtube-search');

    var opts = {
        maxResults: 16,
        key: 'Your youtube key'
    };

    search(`"${req.body.recherche}"`, opts, function (err, results) {
        if (err) return console.log(err);

        console.log(results);

        results.forEach(item => console.log('loop', item.thumbnails))

        res.render("yt", {
            data: results
        })
    });
}