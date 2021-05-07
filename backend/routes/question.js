const { Question } = require("../models/question");
const express = require("express");
const router = express.Router();

//get all questions in the system
router.get(`/`, async (req, res) => {
  const questionList = await Question.find();

  if (!questionList) {
    res.status(500).json({ success: false });
  }
  res.send(questionList);
});

//get one question by id
router.get("/:id", async (req, res) => {
  const question = await Question.findById(req.params.id);

  if (!question) {
    res
      .status(500)
      .json({ message: "The question with the given ID was not found." });
  }
  res.status(200).send(question);
});

//create a question
router.post(`/`, async (req, res) => {
  let question = new Question({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  question = await question.save();
  if (!question) return res.status(404).send("question Cannot Be Created!");

  res.send(question);
});

//update a question
router.put("/:id", async (req, res) => {
  const question = await Question.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    },
    { new: true }
  );

  if (!question) return res.status(400).send("the question cannot be created!");

  res.send(question);
});

//delete a question
router.delete("/:id", (req, res) => {
  Question.findByIdAndRemove(req.params.id)
    .then((question) => {
      if (question) {
        return res
          .status(200)
          .json({ success: true, message: "the question is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "question not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
