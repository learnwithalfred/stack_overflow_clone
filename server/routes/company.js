const { Company } = require("../models/company");
const express = require("express");
const router = express.Router();

//get all companys in the system
router.get(`/`, async (req, res) => {
  const companyList = await Company.find();

  if (!companyList) {
    res.status(500).json({ success: false });
  }
  res.send(companyList);
});

//get one company by id
router.get("/:id", async (req, res) => {
  const company = await Company.findById(req.params.id);

  if (!company) {
    res
      .status(500)
      .json({ message: "The company with the given ID was not found." });
  }
  res.status(200).send(company);
});

//create a company
router.post(`/`, async (req, res) => {
  let company = new Company({
    companyName: req.body.companyName,
    briefIntro: req.body.briefIntro,
    companyPicture: req.body.companyPicture,
    aboutCompany: req.body.aboutCompany,
  });

  company = await company.save();
  if (!company) return res.status(404).send("company Cannot Be Created!");

  res.send(company);
});

//update a company
router.put("/:id", async (req, res) => {
  const company = await Company.findByIdAndUpdate(
    req.params.id,
    {
      companyName: req.body.companyName,
      briefIntro: req.body.briefIntro,
      companyPicture: req.body.companyPicture,
      aboutCompany: req.body.aboutCompany,
    },
    { new: true }
  );

  if (!company) return res.status(400).send("the company cannot be created!");

  res.send(company);
});

//delete a company
router.delete("/:id", (req, res) => {
  Company.findByIdAndRemove(req.params.id)
    .then((company) => {
      if (company) {
        return res
          .status(200)
          .json({ success: true, message: "the company is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "company not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
