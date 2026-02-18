const complaints = [];


export const getComplaints= async (req, res) => {
  res.json(complaints);

  
};



export const CreatComplaint = async (req, res) => {
    try {
        const { category, message } = req.body;
        if (!category || !message) {
            return res.status(400).json({ error: "category  and  message blabala" });
        }
    const newComplaint = { category, message, createdAt: new Date() };
    complaints.push(newComplaint);
    res.status(201).json(newComplaint);
    console.log(complaints)
  } catch (err) {
    console.log(err);
  }
};
