const Cycle = require('../models/Cycle');

exports.bookCycle = async (req, res) => {
  const { name, email, roll, hostel, mobile, date } = req.body; // Added mobile field
  try {
    const cycle = new Cycle({ name, email, roll, hostel, mobile, date }); // Added mobile field
    await cycle.save();
    res.status(201).json({ message: 'Cycle booked successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error booking cycle' });
  }
};

exports.getCycles = async (req, res) => {
  try {
    const cycles = await Cycle.find().sort({ date: -1 }); // Sort by date
    res.status(200).json(cycles);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching cycles' });
  }
};
