var express = require("express");
var app = express.Router();
var AuthorModel = require("../models/Author");

app.get("/aggregate", (req, res) => {
  AuthorModel.aggregate(
    [
      /*{
        $match: { isDelete: false },
      },
      {
        $group:{
          _id:"$category",totalCount:{$sum:1}
        }
      },*/
      {
        $project:{
          _id:0,
          name:1,//True
          category:true,//1
          score:1
        }
      },
      {
        $sort:{score:-1/**descending:-1:desc ||| ascending:1:asc */}
      },
      {
        $limit:3
      },
      {
        $skip:1
      }
    ],
    (err, data) => {
      if (err) res.json(err);
      res.json(data);
    }
  );
});

app.get("/aggregate-lookup", (req, res) => {
  AuthorModel.aggregate([
    {
      $lookup:{
        from:'books',//Book.collection.name
        localField:'_id',
        foreignField:'authorId',
        as:"books"
      }
    },
    {
      $project:{
        _id:0,name:true,'books.title':1
      }
    }
  ], (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});


app.get("/", (req, res) => {
  AuthorModel.find({surname:{$exists:false}}, "name surname score views", (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

app.post("/", function (req, res) {
  const newAuthor = new AuthorModel(req.body);
  newAuthor.save((err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

module.exports = app;