const Task = require("../models/Task");

const getTasksStats = async (req, res) => {
  try {
    const completedTasks = await Task.countDocuments({
      userId: req.user.userId,
      isCompleted: true,
    });
    const pendingTasks = await Task.countDocuments({
      userId: req.user.userId,
      isCompleted: false,
    });
    const totalTasks = await Task.countDocuments({
      userId: req.user.userId,
    });

    res.status(200).json({
      data: { completedTasks, pendingTasks, totalTasks },
      success: true,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to get tasks stats!" });
  }
};

module.exports = { getTasksStats };
